from pydantic import BaseModel
from datetime import datetime

class Note(BaseModel):
    id: int
    title: str
    content: str
    created_at: datetime

class Reminder(BaseModel):
    id: int
    message: str
    remind_at: datetime
