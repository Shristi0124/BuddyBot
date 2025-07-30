from fastapi import APIRouter

router = APIRouter()

@router.post("/ask")
async def chat():
    return {"message": "Chat endpoint"}
