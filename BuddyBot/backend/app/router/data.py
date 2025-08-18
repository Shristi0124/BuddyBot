from fastapi import APIRouter
import time

router = APIRouter()

@router.get("/get-data")
def get_data():
    time.sleep(2)  # Simulate loading
    return {"message": "Data loaded successfully!"}
