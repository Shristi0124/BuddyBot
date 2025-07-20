from fastapi import APIRouter, HTTPException
from datetime import datetime
from typing import List
from ..models.task import Note, Reminder

router = APIRouter()

notes_db: List[Note] = []
reminders_db: List[Reminder] = []

@router.post("/notes")
def create_note(note: Note):
    notes_db.append(note)
    return {"message": "Note added", "note": note}

@router.get("/notes")
def get_notes():
    return notes_db

@router.post("/reminders")
def create_reminder(reminder: Reminder):
    if reminder.remind_at <= datetime.now():
        raise HTTPException(status_code=400, detail="Reminder time must be in the future")
    reminders_db.append(reminder)
    return {"message": "Reminder set", "reminder": reminder}

@router.get("/reminders")
def get_reminders():
    return reminders_db
