from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services.nlp_engine import generate_response

router = APIRouter()

class ChatRequest(BaseModel):
    user_id: str
    message: str

class ChatResponse(BaseModel):
    response: str

@router.post("/respond", response_model=ChatResponse)
async def chat_with_bot(payload: ChatRequest):
    try:
        response = await generate_response(payload.message, payload.user_id)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
