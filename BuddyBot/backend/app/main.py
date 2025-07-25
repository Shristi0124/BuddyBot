from fastapi import FastAPI
from app.api.v1.endpoints import chat

app = FastAPI()

app.include_router(chat.router, prefix="/api/v1", tags=["Chat"])

@app.get("/")
def root():
    return {"message": "BuddyBot backend running!"}
