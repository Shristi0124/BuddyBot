from fastapi import FastAPI
from app.api.v1.endpoints import chat  # Correct relative import
from app.api.v1.endpoints import chat, tasks

app = FastAPI(
    title="BuddyBot Backend",
    version="1.0.0",
    description="FastAPI backend for the personalized AI assistant BuddyBot"
)

# # Include chat routes
# app.include_router(chat.router, prefix="/api/v1/chat", tags=["Chat"])
# app.include_router(tasks.router, prefix="/api/v1/tasks", tags=["Tasks"])

# Root endpoint for testing server
@app.get("/", tags=["Root"])
async def root():
    return {"message": "🚀 BuddyBot backend is running!"}
