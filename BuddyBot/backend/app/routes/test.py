from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

@router.get("/ping")
async def ping():
    return {"message": "pong"}

class EchoRequest(BaseModel):
    text: str

@router.post("/echo")
async def echo_message(payload: EchoRequest):
    return {"echo": payload.text}
