from pydantic import BaseModel

class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    id: int | None = None
    email: str | None = None


class User(BaseModel):
    id: int
    email: str
    bio: str | None = None
    grup: int | None = None
    roles: list | None = None
    first_name: str | None = None
    second_name: str | None = None
    last_name: str | None = None
    registration_date: int
    profile_picture: str | None = None



class UserInDB(User):
    id: int
    email: str
    bio: str | None = None
    first_name: str | None = None
    second_name: str | None = None
    last_name: str | None = None
    hashed_password: str
    registration_date: int
    profile_picture: str | None = None

class UserRegister(BaseModel):
    email: str
    first_name: str | None = None
    last_name: str | None = None
    password: str

class UserLogin(BaseModel):
    email: str
    password: str

class voteCreate(BaseModel):
    header: str | None = None
    grup: str | None = None
    elected: list | None = None
    endedAt: int | None = None

class voteUpdate(BaseModel):
    header: str | None = None
    grup: str | None = None
    elected: list | None = None
    endedAt: int | None = None