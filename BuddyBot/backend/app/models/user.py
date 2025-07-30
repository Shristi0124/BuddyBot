from pydantic import BaseModel, EmailStr
from bson import ObjectId

class User(BaseModel):
    id: str = None
    username: str
    email: EmailStr
    password: str

    class Config:
        orm_mode = True
