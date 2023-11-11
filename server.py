import uvicorn, random, time, sqlite3, json, uuid

from datetime import datetime, timedelta
from typing import Annotated, Dict

from fastapi import Depends, FastAPI, HTTPException, Response, Request, Cookie, Query, status, WebSocket, WebSocketDisconnect, Form, File, UploadFile
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi.responses import HTMLResponse, JSONResponse, RedirectResponse, FileResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.exception_handlers import (
    http_exception_handler,
    request_validation_exception_handler,
)

from starlette.exceptions import HTTPException as StarletteHTTPException
from jose import JWTError, jwt



from auth import * #ACCESS_TOKEN_EXPIRE_MINUTES, create_jwt_token, authenticate_user, get_current_active_user, get_user, reg_user
from models import * #UserRegister, Token, User

from dbApi import *

app = FastAPI()

class WebSocketManager:
    def __init__(self):
        self.websocket_connections: Dict[WebSocket, int] = {}

    async def connect(self, websocket: WebSocket, user_id: int):
        await websocket.accept()
        self.websocket_connections[websocket] = user_id

    async def disconnect(self, websocket: WebSocket):
        user_id = self.websocket_connections.get(websocket)
        if user_id:
            del self.websocket_connections[websocket]

    async def on_disconnect(self, websocket: WebSocket):
        try:
            await websocket.close()
        except: pass

        await self.disconnect(websocket)


    async def send_message(self, websocket: WebSocket, message):
        if type(message) == str:
            await websocket.send_text(message)
        elif type(message) == dict:
            await websocket.send_json(message)


    def get_connection(self, user_id):
        connection = [x for x, z in self.websocket_connections.items() if z == user_id]
        if connection: return connection[0]
        else: return False

manager = WebSocketManager()




########################################## ROUTES => PAGES #################################################
@app.get('/assets/{filename}')
async def files_assets(filename):
    return FileResponse(f'./assets/{filename}')

@app.get('/files/{filetype}/{filename}')
async def files_(filetype, filename):
    match filetype:
        case 'getNewsPicture': return FileResponse(f'./files/news_pictures/{filename}')
        case 'getProfilePicture': return FileResponse(f'./files/profile_pictures/{filename}')


@app.get("/")
async def index_(): #Authorization: Annotated[str | None, Cookie()] = None
    return HTMLResponse(open('pages/index.html', encoding='utf-8').read())

@app.get("/logout")
async def logout(response: Response):
    response.delete_cookie('Authorization')
########################################## ROUTES => dialogs #################################################
@app.get('/test/{user_id}')
async def tests(user_id: int):
    connection = manager.get_connection(user_id)
    if connection: await manager.send_message(connection, 'hello my nigga')
    else: return False
    return 'hello my nigga'


@app.get('/test')
async def tests():
    return HTMLResponse(open('pages/index.html', encoding='utf-8').read())
########################################## ROUTES => user #################################################
@app.get("/api/me")
async def get_me(Authorization: Annotated[str | None, Cookie()] = None):
    user = await get_current_user(Authorization)

    return {
        "id": user.id,
        "firstName": user.first_name,
        "secondName": user.second_name,
        "thirdName": user.last_name,
        "email": user.email,
        "bio": user.bio,
        "grup": [user.grup],
        "roles": user.roles,
        "profile_picture": user.profile_picture,
        "iat": user.registration_date,
        "exp": user.registration_date
    }


@app.put("/users/setProfilePicture")
async def update_news(bio: Annotated[str, Form()], picture: UploadFile | None = None, Authorization: Annotated[str | None, Cookie()] = None):
    user = await get_current_user(Authorization)


    user = db_update_user(user.id, bio, picture)
    return {'status': True}


@app.get("/users/getNameByEmail/{email}")
async def get_name_by_email(email: str, Authorization: Annotated[str | None, Cookie()] = None):
    user = await get_current_user(Authorization)


    user = db_get_user(email=email)
    if user is None: return email
    else: user['email']

@app.get("/users/getPhotoByEmail/{email}")
async def get_photo_by_email(email: str, Authorization: Annotated[str | None, Cookie()] = None):
    user = await get_current_user(Authorization)


    user = db_get_user(email=email)

    if user is None: filename = 'stockPicture.png'
    elif not user['profile_picture']: filename = 'stockPicture.png'
    else: filename = user['profile_picture']
    return FileResponse(f'./files/profile_pictures/{filename}')

@app.get("/users/emailWithoutPass/{email}")
async def get_photo_by_email(email: str, Authorization: Annotated[str | None, Cookie()] = None):
    user = await get_current_user(Authorization)

    user = db_get_user(email=email)
    if not user: return None
    user = User(**user)

    if user is None: return email
    else: return {
        "id": user.id,
        "firstName": user.first_name,
        "secondName": user.second_name,
        "thirdName": user.last_name,
        "email": user.email,
        "bio": user.bio,
        "grup": [user.grup],
        "roles": user.roles,
        "profile_picture": user.profile_picture,
        "iat": user.registration_date,
        "exp": user.registration_date
    }





@app.get("/api/news")
async def get_news(Authorization: Annotated[str | None, Cookie()] = None):
    user = await get_current_user_None(Authorization)
    news = db_get_news(user.id if user else None)

    return news

@app.get("/api/news/marked/{news_id}")
async def get_mark_info(news_id: int, Authorization: Annotated[str | None, Cookie()] = None):
    user = await get_current_user(Authorization)
    mark_info = db_get_news_mark(user.id if user else None, news_id)

    return mark_info['cur_mark'] if mark_info else False

@app.get("/api/news/emotion/{news_id}/{emotion_type}")
async def get_mark_info(news_id: int, emotion_type: str, Authorization: Annotated[str | None, Cookie()] = None):
    user = await get_current_user(Authorization)
    trns = {'like': 'liked', 'liked': 'liked', 'dislike': 'disliked', 'disliked': 'disliked'}
    if emotion_type not in trns:
        return 400
    emotion_type = trns[emotion_type]

    db_set_emotion(emotion_type, user.id, news_id)
    news = db_get_news(user.id, news_id)

    return news

@app.get("/api/news/statistics/{news_id}")
async def get_news_statistics(news_id: int, Authorization: Annotated[str| None, Cookie()] = None):
    user = await get_current_user(Authorization)

    news_info = db_get_emotions(news_id)
    return news_info

@app.post("/api/news")
async def update_news(grup: Annotated[str, Form()], header: Annotated[str, Form()], content: Annotated[str, Form()], image: UploadFile | None = None, Authorization: Annotated[str | None, Cookie()] = None):
    user = await get_current_user(Authorization)


    news_info = db_create_news(grup, header, content, image)
    return {'status': True}

@app.put("/api/news/{news_id}")
async def update_news(news_id: int, grup: Annotated[str, Form()], header: Annotated[str, Form()], content: Annotated[str, Form()], image: UploadFile | None = None, Authorization: Annotated[str | None, Cookie()] = None):
    user = await get_current_user(Authorization)

    news_info = db_update_news(news_id, grup, header, content, image)
    return {'status': True}

@app.delete("/api/news/{component}/{news_id}")
async def delete_news_image(component: str, news_id: int, Authorization: Annotated[str | None, Cookie()] = None):
    user = await get_current_user(Authorization)

    match component:
        case 'main': db_delete_news(news_id)
        case 'image': db_delete_news_image(news_id)

    return {'status': 'success'}



@app.get("/vote")
async def get_votes(Authorization: Annotated[str | None, Cookie()] = None):
    return HTMLResponse(open('pages/index.html', encoding='utf-8').read())

@app.get("/api/vote")
async def get_votes(Authorization: Annotated[str | None, Cookie()] = None):
    user = await get_current_user_None(Authorization)
    news = db_get_votes(user.id if user else None)

    return news

@app.post("/api/vote")
async def get_votes(payload: voteCreate, Authorization: Annotated[str | None, Cookie()] = None):
    user = await get_current_user(Authorization)

    db_create_vote(payload)

    return {'status': True}

@app.put("/api/vote/{vote_id}")
async def get_votes(vote_id: int, payload: voteUpdate, Authorization: Annotated[str | None, Cookie()] = None):
    user = await get_current_user(Authorization)

    db_update_vote(vote_id, payload)

    return {'status': True}

@app.get('/api/vote/toVote/{vote_id}/{elected_name}')
async def get_vote_winner(vote_id: int, elected_name: str, Authorization: Annotated[str| None, Cookie()] = None):
    user = await get_current_user(Authorization)

    vote = db_add_vote(vote_id, user.id, elected_name)
    return {'status': True}

@app.get('/api/vote/getWinner/{vote_id}')
async def get_vote_winner(vote_id: int, Authorization: Annotated[str| None, Cookie()] = None):
    vote = db_get_vote_winner(vote_id)
    return vote

@app.get('/api/vote/getVotesCountByEmail/{vote_id}/{e_name}')
async def get_vote_counts_winner(vote_id: int, e_name: str, Authorization: Annotated[str| None, Cookie()] = None):
    vote = db_get_vote_counts(vote_id, e_name)

    return vote

@app.delete('/api/vote/{vote_id}')
async def delete_vote(vote_id: int, Authorization: Annotated[str | None, Cookie()] = None):
    user = await get_current_user(Authorization)
    db_delete_vote(vote_id)

    return {'status': True}

@app.delete('/api/vote/delForHour/{vote_id}')
async def delete_vote_by_day(vote_id: int, Authorization: Annotated[str | None, Cookie()] = None):
    user = await get_current_user(Authorization)

    return {'status': True}
########################################## ROUTES => auth #################################################


@app.post("/auth")
async def api_login(response: Response, request_data: UserLogin):
    user = authenticate_user(request_data.email, request_data.password)
    if not user:
        raise HTTPException(
            status_code=400,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"}
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_jwt_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )

    return {"token": access_token}


############################################# OTHER #################################################


@app.exception_handler(StarletteHTTPException)
async def custom_http_exception_handler(request, exc):
    if exc.status_code == 401:
        return RedirectResponse(url="/login")
    elif exc.detail == 'Already logged in':
        return RedirectResponse(url="/dialogs")

    return await http_exception_handler(request, exc)




if __name__ == '__main__':
    uvicorn.run(app)