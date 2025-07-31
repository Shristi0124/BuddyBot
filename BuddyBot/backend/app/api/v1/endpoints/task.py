# app/api/v1/endpoints/task.py
from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def task_root():
    return {"message": "Task endpoint"}
