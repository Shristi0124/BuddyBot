from pydantic import BaseModel
from bson import ObjectId

class Task(BaseModel):
    id: str = None
    user_id: str
    title: str
    description: str
    completed: bool = False

    class Config:
        orm_mode = True
