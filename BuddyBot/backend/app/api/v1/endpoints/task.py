from fastapi import APIRouter

router = APIRouter()

@router.post("/create")
async def create_task():
    return {"message": "Create Task"}

@router.get("/all")
async def list_tasks():
    return {"message": "List Tasks"}
