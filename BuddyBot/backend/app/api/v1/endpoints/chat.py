from fastapi import APIRouter

router = APIRouter()
# app/api/v1/endpoints/chat.py
from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def chat_root():
    return {"message": "Chat endpoint"}
