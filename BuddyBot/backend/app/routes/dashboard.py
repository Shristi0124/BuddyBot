from fastapi import APIRouter

router = APIRouter()

@router.get("/dashboard/user")
async def get_user():
    return {
        "username": "Prince",
        "theme": "dark",
        "voice_enabled": True
    }

@router.get("/dashboard/chats")
async def get_chats():
    return [
        {"id": 1, "message": "Hello BuddyBot!", "timestamp": "2025-07-23 18:00"},
        {"id": 2, "message": "Play music", "timestamp": "2025-07-23 18:05"},
    ]

@router.get("/dashboard/stats")
async def get_stats():
    return {
        "message_count": 34,
        "tools_used": 3,
        "time_spent": "28 min"
    }
