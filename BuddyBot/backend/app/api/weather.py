import requests
from fastapi import APIRouter, Query
from pydantic import BaseModel

router = APIRouter()

API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"

class WeatherResponse(BaseModel):
    location: str
    temperature: float
    description: str

@router.get("/weather", response_model=WeatherResponse)
def get_weather(city: str = Query(..., description="City name")):
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"
    response = requests.get(url).json()

    if response.get("cod") != 200:
        raise Exception("City not found")

    weather = WeatherResponse(
        location=response["name"],
        temperature=response["main"]["temp"],
        description=response["weather"][0]["description"]
    )
    return weather

