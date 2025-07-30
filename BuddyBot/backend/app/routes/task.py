from fastapi import APIRouter, HTTPException
from app.models.task import Task
from core.database.mongo import client
from bson import ObjectId

router = APIRouter()

@router.post("/tasks/create", response_model=Task)
async def create_task(task: Task):
    task_collection = client.buddybot.tasks
    task_dict = task.dict()
    task_dict['id'] = str(ObjectId())
    await task_collection.insert_one(task_dict)
    return task_dict

@router.get("/tasks/{user_id}", response_model=list[Task])
async def get_tasks(user_id: str):
    task_collection = client.buddybot.tasks
    tasks = await task_collection.find({"user_id": user_id}).to_list(length=None)
    return tasks

@router.post("/tasks/{task_id}/complete", response_model=Task)
async def complete_task(task_id: str):
    task_collection = client.buddybot.tasks
    task = await task_collection.find_one({"id": task_id})
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    
    task['completed'] = True
    await task_collection.update_one({"id": task_id}, {"$set": task})
    return task
