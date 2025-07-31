# app/api/v1/endpoints/auth.py
from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def auth_root():
    return {"message": "Auth endpoint"}
