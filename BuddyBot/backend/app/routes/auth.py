from fastapi import APIRouter, HTTPException
from app.models.user import User
from core.database.mongo import client
from passlib.context import CryptContext

router = APIRouter()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

@router.post("/register", response_model=User )
async def register_user(user: User):
    user_collection = client.buddybot.users
    existing_user = await user_collection.find_one({"username": user.username})
    if existing_user:
        raise HTTPException(status_code=400, detail="User  already exists")
    
    user.password = pwd_context.hash(user.password)  # Hash the password
    await user_collection.insert_one(user.dict())
    return user

@router.post("/login")
async def login_user(user: User):
    user_collection = client.buddybot.users
    db_user = await user_collection.find_one({"username": user.username})
    if not db_user or not pwd_context.verify(user.password, db_user['password']):
        raise HTTPException(status_code=400, detail="Invalid credentials")
    
    return {"message": "Login successful!"}
