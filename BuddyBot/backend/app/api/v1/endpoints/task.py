from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List
from uuid import uuid4

router = APIRouter()

# In-memory task storage (can be replaced with DB later)
tasks_db = []

# Request model
class TaskCreate(BaseModel):
    user_id: str
    title: str
    description: str

# Response model
class TaskOut(BaseModel):
    task_id: str
    user_id: str
    title: str
    description: str
    completed: bool

# Create a task
@router.post("/create", response_model=TaskOut)
async def create_task(task: TaskCreate):
    new_task = {
        "task_id": str(uuid4()),
        "user_id": task.user_id,
        "title": task.title,
        "description": task.description,
        "completed": False
    }
    tasks_db.append(new_task)
    return new_task

# Get tasks for a specific user
@router.get("/{user_id}", response_model=List[TaskOut])
async def get_tasks(user_id: str):
    user_tasks = [task for task in tasks_db if task["user_id"] == user_id]
    return user_tasks

# Mark a task as complete
@router.post("/{task_id}/complete", response_model=TaskOut)
async def complete_task(task_id: str):
    for task in tasks_db:
        if task["task_id"] == task_id:
            task["completed"] = True
            return task
    raise HTTPException(status_code=404, detail="Task not found")
