import sqlite3, json, time, os

from models import *


def _dict_factory(cursor, row):
    _ = {}
    for i, column in enumerate(cursor.description):
        _[column[0]] = row[i]
    return _

class SQLiteDatabase:
    def __init__(self, is_json=True, db_file='db.db'):
        self.db_file = db_file
        self.is_json = is_json
        self.con, self.cur = self._connect_to_database()

    def _get_connection(self):
        return (self.con, self.cur)


    def _connect_to_database(self):
        con = sqlite3.connect(self.db_file, check_same_thread=False)
        if self.is_json:
            con.row_factory = _dict_factory
        cur = con.cursor()
        return con, cur

    def close(self):
        if self.con:
            self.con.close()

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        self.close()

    def __del__(self):
        self.close()


def DB_CreateTables():
    _db = SQLiteDatabase()
    con, cur = _db._get_connection()

    cur.execute('''CREATE TABLE IF NOT EXISTS users (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        email TEXT NOT NULL UNIQUE,
                        bio TEXT,
                        first_name TEXT,
                        second_name TEXT,
                        last_name TEXT,
                        hashed_password TEXT NOT NULL,
                        registration_date INTEGER,
                        profile_picture TEXT
                    )''')

    cur.execute('''CREATE TABLE IF NOT EXISTS roles (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        user_id INTEGER,
                        role_name TEXT,
                        access_type TEXT,
                        FOREIGN KEY (user_id) REFERENCES users (id)
                    )''')

    cur.execute('''CREATE TABLE IF NOT EXISTS groups (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        user_id INTEGER,
                        group_id INTEGER,
                        FOREIGN KEY (user_id) REFERENCES users (id)
                    )''')

    cur.execute('''CREATE TABLE IF NOT EXISTS news (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        header TEXT,
                        group_name TEXT,
                        content TEXT,
                        creation_date INTEGER
                    )''')
 
    cur.execute('''CREATE TABLE IF NOT EXISTS news_emotions (
                        emotion_type INTEGER,
                        news_id INTEGER,
                        user_id INTEGER,
                        creation_date INTEGER,
                        FOREIGN KEY (news_id) REFERENCES news (id),
                        FOREIGN KEY (user_id) REFERENCES users (id)
                    )''')

    cur.execute('''CREATE TABLE IF NOT EXISTS news_photos (
                        news_id INTEGER,
                        picture_name TEXT,
                        creation_date INTEGER,
                        FOREIGN KEY (news_id) REFERENCES news (id)
                    )''')

    cur.execute('''CREATE TABLE IF NOT EXISTS votes (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        header TEXT,
                        group_name TEXT,
                        creation_date INTEGER,
                        ending_date INTEGER,
                        extended BOOL DEFAULT (False)
        )''')
    cur.execute('''CREATE TABLE IF NOT EXISTS votes_vars (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        election_name TEXT,
                        vote_id INTEGER,
                        creation_date INTEGER,
                        FOREIGN KEY (vote_id) REFERENCES votes (id)
                    )''')

    cur.execute('''CREATE TABLE IF NOT EXISTS votes_elects (
                        elected_id INTEGER,
                        vote_id INTEGER,
                        user_id INTEGER,
                        creation_date INTEGER,
                        FOREIGN KEY (elected_id) REFERENCES votes_vars (id),
                        FOREIGN KEY (vote_id) REFERENCES votes (id),
                        FOREIGN KEY (user_id) REFERENCES users (id)
                    )''')
    con.commit()


def db_format_sql(q):
    sql_query = ""
    update_pairs = []
    for key, value in q.items():
        if value is not None:
            update_pairs.append(f"{key} = '{value}'")
    
    # Объединение всех пар поле=значение с запятыми
    sql_query += ', '.join(update_pairs)

    return sql_query



def db_create_user(email, first_name = None, last_name = None, hashed_password = None, access_type = 1):
    _db = SQLiteDatabase()
    con, cur = _db._get_connection()
    creation_date = int(time.time())

    cur.execute("INSERT INTO users(email, first_name, last_name, hashed_password, registration_date, last_online, access_type) VALUES (?, ?, ?, ?, ?, ?, ?)", [email, first_name, last_name, hashed_password, creation_date, creation_date, access_type])
    user_id = cur.lastrowid

    con.commit()


    return user_id

def db_update_user(user_id, bio, picture):
    _db = SQLiteDatabase()
    con, cur = _db._get_connection()

    cur.execute('UPDATE users SET bio = ? WHERE id = ?', [bio, user_id])

    if picture:
        picture_name = f"user_{user_id}.{picture.filename.split('.')[-1]}"
        pictures = cur.execute('SELECT profile_picture FROM users WHERE id = ?', [user_id]).fetchone()
        try: os.remove(f'./files/profile_pictures/{pictures["profile_picture"]}')
        except: pass


        with open(f"./files/profile_pictures/{picture_name}", 'wb') as f:
            f.write(picture.file.read())
        cur.execute('UPDATE users SET profile_picture = ? WHERE id = ?', [picture_name, user_id])

    con.commit()

def db_get_user(user_id = None, email = None):
    _db = SQLiteDatabase()
    con, cur = _db._get_connection()

    user = cur.execute('''SELECT u.id, u.email, u.bio, u.first_name, u.second_name, u.last_name, u.hashed_password, u.registration_date, u.profile_picture,
                        g.group_id AS grup, GROUP_CONCAT(r.role_name) AS roles
                    FROM users AS u
                    LEFT JOIN groups AS g ON g.user_id = u.id
                    LEFT JOIN roles AS r ON r.user_id = u.id
                    WHERE u.id = ? OR u.email = ?
                    GROUP BY u.id''',
                    [user_id, email]).fetchone()

    if user:
        user['roles'] = user['roles'].split(',') if user['roles'] else []

    return user


def db_get_news(user_id = None, news_id = None):
    _db = SQLiteDatabase()
    con, cur = _db._get_connection()

    if news_id:
        news = cur.execute('''SELECT
                n.id,
                n.header,
                n.group_name AS grup,
                COALESCE(neu.emotion_type, False) AS cur_mark,
                n.creation_date AS createdAt
            FROM news AS n
            LEFT JOIN
                (SELECT news_id, emotion_type FROM news_emotions WHERE user_id = ?) AS neu ON neu.news_id = n.id
            WHERE n.id = ?''', [user_id, news_id]).fetchone()

        news_id = news['id']
        news['photos'] = []
        news['likes'] = 0
        news['dislikes'] = 0
        news['likedPersonsId'] = []
        news['dislikedPersonsId'] = []

        for c in cur.execute('SELECT user_id, emotion_type FROM news_emotions WHERE news_id = ? ORDER BY user_id ASC', [news_id]).fetchall():
            if c['emotion_type'] == 'liked':
                news['likes'] += 1
                news['likedPersonsId'].append(c['user_id'])
            elif c['emotion_type'] == 'disliked':
                news['dislikes'] += 1
                news['dislikedPersonsId'].append(c['user_id'])

        for c in cur.execute('SELECT picture_name FROM news_photos WHERE news_id = ? ORDER BY creation_date ASC', [news_id]).fetchall():
            news['photos'].append(c['picture_name'])

    else:
        news = cur.execute('''SELECT
                n.id,
                n.header,
                n.group_name AS grup,
                COALESCE(neu.emotion_type, False) AS cur_mark,
                n.creation_date AS createdAt
            FROM news AS n
            LEFT JOIN
                (SELECT news_id, emotion_type FROM news_emotions WHERE user_id = ?) AS neu ON neu.news_id = n.id
            GROUP BY
                n.id''', [user_id]).fetchall()
        for i,x in enumerate(news):
            news_id = x['id']
            news[i]['photos'] = []
            news[i]['likes'] = 0
            news[i]['dislikes'] = 0
            news[i]['likedPersonsId'] = []
            news[i]['dislikedPersonsId'] = []

            for c in cur.execute('SELECT user_id, emotion_type FROM news_emotions WHERE news_id = ? ORDER BY user_id ASC', [news_id]).fetchall():
                if c['emotion_type'] == 'liked':
                    news[i]['likes'] += 1
                    news[i]['likedPersonsId'].append(c['user_id'])
                elif c['emotion_type'] == 'disliked':
                    news[i]['dislikes'] += 1
                    news[i]['dislikedPersonsId'].append(c['user_id'])

            for c in cur.execute('SELECT picture_name FROM news_photos WHERE news_id = ? ORDER BY creation_date ASC', [news_id]).fetchall():
                news[i]['photos'].append(c['picture_name'])


    return news


def db_get_emotions(news_id):
    _db = SQLiteDatabase()
    con, cur = _db._get_connection()    

    news_info = cur.execute('SELECT (COUNT(CASE WHEN emotion_type = "liked" THEN 1 ELSE NULL END) - COUNT(CASE WHEN emotion_type = "disliked" THEN 1 ELSE NULL END)) AS like_dislike_difference FROM news_emotions WHERE news_id = ?', [news_id]).fetchone()

    return news_info['like_dislike_difference'] if news_info else 0

def db_get_news_mark(user_id, news_id):
    _db = SQLiteDatabase()
    con, cur = _db._get_connection()    

    mark_info = cur.execute('SELECT COALESCE(emotion_type, False) AS cur_mark FROM news_emotions WHERE user_id = ? AND news_id = ?', [user_id, news_id]).fetchone()

    return mark_info


def db_set_emotion(emotion_type, user_id, news_id):
    _db = SQLiteDatabase()
    con, cur = _db._get_connection()
    ts = int(time.time())

    last_emotion = cur.execute('SELECT emotion_type FROM news_emotions WHERE user_id = ? AND news_id = ?', [user_id, news_id]).fetchone()

    cur.execute('DELETE FROM news_emotions WHERE user_id = ? AND news_id = ?', [user_id, news_id])
    if last_emotion is None or ('emotion_type' in last_emotion and last_emotion['emotion_type'] != emotion_type):
        cur.execute('INSERT INTO news_emotions VALUES (?, ?, ?, ?)', [emotion_type, news_id, user_id, ts])


    con.commit()

def db_create_news(group_name, header, content, image):
    _db = SQLiteDatabase()
    con, cur = _db._get_connection()
    ts = int(time.time())

    cur.execute('INSERT INTO news (header, group_name, content, creation_date) VALUES (?, ?, ?, ?)', [header, group_name, content, ts])
    news_id = cur.lastrowid

    if image:
        picture_name = f"news_{news_id}.{image.filename.split('.')[-1]}"

        with open(f"./files/news_pictures/{picture_name}", 'wb') as f:
            f.write(image.file.read())
        cur.execute('INSERT INTO news_photos VALUES (?, ?, ?)', [news_id, picture_name, ts])

    con.commit()

def db_update_news(news_id, group_name, header, content, image):
    _db = SQLiteDatabase()
    con, cur = _db._get_connection()
    ts = int(time.time())

    cur.execute('UPDATE news SET (header, group_name, content) = (?, ?, ?) WHERE id = ?', [header, group_name, content, news_id])

    if image:
        picture_name = f"news_{news_id}.{image.filename.split('.')[-1]}"
        pictures = cur.execute('SELECT * FROM news_photos WHERE news_id = ?', [news_id]).fetchall()
        for x in pictures:
            try: os.remove(f'./files/news_pictures/{x["picture_name"]}')
            except: pass
        if len(pictures) > 0:
            cur.execute('DELETE FROM news_photos WHERE news_id = ?', [news_id])
        
        with open(f"./files/news_pictures/{picture_name}", 'wb') as f:
            f.write(image.file.read())
        cur.execute('INSERT INTO news_photos VALUES (?, ?, ?)', [news_id, picture_name, ts])

    con.commit()

def db_delete_news(news_id):
    _db = SQLiteDatabase()
    con, cur = _db._get_connection()

    db_delete_news_image(news_id)

    cur.execute('DELETE FROM news WHERE id = ?', [news_id])
    cur.execute('DELETE FROM news_emotions WHERE news_id = ?', [news_id])

    con.commit()

def db_delete_news_image(news_id):
    _db = SQLiteDatabase()
    con, cur = _db._get_connection()

    pictures = cur.execute('SELECT * FROM news_photos WHERE news_id = ?', [news_id]).fetchall()
    for x in pictures:
        try: os.remove(f'./files/news_pictures/{x["picture_name"]}')
        except: pass
    if len(pictures) > 0:
        cur.execute('DELETE FROM news_photos WHERE news_id = ?', [news_id])
   
    con.commit()



def db_get_votes(user_id = None, votes_id = None):
    _db = SQLiteDatabase()
    con, cur = _db._get_connection()    
    votes = cur.execute('''SELECT
                    v.id,
                    v.header,
                    v.group_name AS grup,
                    v.creation_date AS createdAt,
                    v.ending_date AS endedAt,
                    v.extended,
                    GROUP_CONCAT(vv.election_name) AS elected                
                FROM votes AS v
                LEFT JOIN
                    votes_vars AS vv ON vv.vote_id = v.id
                GROUP BY v.id
                ''').fetchall()
    for i,x in enumerate(votes):
        temp = cur.execute('''SELECT * FROM votes_elects WHERE vote_id = ?''', [x['id']]).fetchall()
        votes_ids = cur.execute('''SELECT
                        id,
                        election_name
                    FROM votes_vars
                    WHERE vote_id = ?''', [x['id']]).fetchall()
        srjtwipsue_ids = cur.execute('SELECT GROUP_CONCAT(user_id) AS user_ids FROM votes_elects WHERE vote_id = ?', [x['id']]).fetchone()

        v = {c['id']:0 for c in votes_ids}
        for c in temp:
            v[c['elected_id']]+=1


        votes[i]['votes'] = [n[1] for n in v.items()]
        votes[i]['elected'] = x['elected'].split(',') if x['elected'] else []
        votes[i]['votedPersonsId'] = srjtwipsue_ids['user_ids'].split(',') if 'user_ids' in srjtwipsue_ids and srjtwipsue_ids['user_ids'] else []
        votes[i]['getCounter'] = len(votes[i]['votedPersonsId'])
        votes[i]['counter'] = len(votes[i]['votedPersonsId'])


    return votes

def db_get_vote_winner(vote_id):
    _db = SQLiteDatabase()
    con, cur = _db._get_connection()

    winner = cur.execute('''SELECT elected_id, COUNT(*) AS count
            FROM votes_elects
            GROUP BY elected_id
            ORDER BY count DESC
            LIMIT 1;
            ''').fetchone()

    if winner:
        return cur.execute('SELECT election_name FROM votes_vars WHERE id = ?', [winner['elected_id']]).fetchone()['election_name']
    else:
        return None


def db_get_vote_counts(vote_id, e_name):
    _db = SQLiteDatabase()
    con, cur = _db._get_connection()

    e_id = cur.execute('SELECT id FROM votes_vars WHERE vote_id = ? AND election_name = ?', [vote_id, e_name]).fetchone()
    ids = len(cur.execute('SELECT elected_id FROM votes_elects WHERE vote_id = ?', [vote_id]).fetchall())
    if not e_id: return 0
    e_id = e_id['id']

    count = cur.execute('''SELECT COUNT(*) AS count
                FROM votes_elects
                WHERE elected_id = ?
            ''', [e_id]).fetchone()
    if count:
        try:
            return int((100/ids)*count['count'])
        except: return 0
    else:
        return 0

def db_create_vote(payload):
    _db = SQLiteDatabase()
    con, cur = _db._get_connection()
    ts = int(time.time())
    cur.execute('INSERT INTO votes(header, group_name, creation_date, ending_date) VALUES (?, ?, ?, ?)', [payload.header, payload.grup, ts, payload.endedAt])
    vote_id = cur.lastrowid
    args = []
    z = json.loads(payload.model_dump_json())

    xczx = []
    for x in z:
        if x == 'elected':
            for c in z[x]:
                if c not in xczx:
                    cur.execute('INSERT INTO votes_vars (election_name, vote_id, creation_date) VALUES (?, ?, ?)', [c, vote_id, ts])
                    xczx.append(c)


    con.commit()


def db_update_vote(vote_id, payload):
    _db = SQLiteDatabase()
    con, cur = _db._get_connection()
    ts = int(time.time())


    args = []
    z = json.loads(payload.model_dump_json())
    if 'elected' in z:
        xczx = [x['election_name'] for x in cur.execute('SELECT election_name FROM votes_vars WHERE vote_id = ?', [vote_id]).fetchall()]
    print(xczx)
    for x in z:
        if x == 'header':
            args.append(f'header = "{z[x]}"')
        elif x == 'grup':
            args.append(f'group_name = "{z[x]}"')
        elif x == 'endedAt':
            args.append(f'ending_date = {int(z[x])}')
        elif x == 'elected':
            for c in z[x]:
                print('check [%s]: %s'%(c, cur.execute('SELECT id FROM votes_vars WHERE election_name = ?', [c]).fetchone()))
                if not cur.execute('SELECT id FROM votes_vars WHERE election_name = ?', [c]).fetchone():
                    cur.execute('INSERT INTO votes_vars (election_name, vote_id, creation_date) VALUES (?, ?, ?)', [c, vote_id, ts])
                else: xczx.pop(xczx.index(c))

            for c in xczx:
                cur.execute('DELETE FROM votes_vars WHERE election_name = ?', [c])



    if len(args) > 0:
        args = ', '.join(args)
        cur.execute(f'UPDATE votes SET {args} WHERE id = ?', [vote_id])

    con.commit()


def db_add_vote(vote_id, user_id, elected_name):
    _db = SQLiteDatabase()
    con, cur = _db._get_connection()
    ts = int(time.time())

    e_id = cur.execute('SELECT id FROM votes_vars WHERE vote_id = ? AND election_name = ?', [vote_id, elected_name]).fetchone()
    if e_id:
        e_id = e_id['id']
        cur.execute('INSERT INTO votes_elects VALUES (?, ?, ?, ?)', [e_id, vote_id, user_id, ts])

    con.commit()

def db_delete_vote(vote_id):
    _db = SQLiteDatabase()
    con, cur = _db._get_connection()

    cur.execute('DELETE FROM votes_elects WHERE vote_id = ?', [vote_id])
    cur.execute('DELETE FROM votes_vars WHERE vote_id = ?', [vote_id])
    cur.execute('DELETE FROM votes WHERE id = ?', [vote_id])
    con.commit()



DB_CreateTables()