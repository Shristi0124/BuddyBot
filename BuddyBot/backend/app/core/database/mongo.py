from motor.motor_asyncio import AsyncIOMotorClient
from typing import Optional

mongo_client: Optional[AsyncIOMotorClient] = None
DATABASE_URL = "mongodb://localhost:27017"
DB_NAME = "buddybot"

async def connect_to_mongo():
    global mongo_client
    mongo_client = AsyncIOMotorClient(DATABASE_URL)
    print("✅ Connected to MongoDB")

async def close_mongo_connection():
    global mongo_client
    if mongo_client:
        mongo_client.close()
        print("🔒 MongoDB connection closed")

def get_database():
    return mongo_client[DB_NAME]
