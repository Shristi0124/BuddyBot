from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import openai
import spacy
from transformers import pipeline
import requests
import json
import datetime

app = FastAPI()
openai.api_key = "your-openai-key"

nlp = spacy.load("en_core_web_sm")
zero_shot_classifier = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def analyze_input(text):
    doc = nlp(text)
    entities = [(ent.text, ent.label_) for ent in doc.ents]
    candidate_labels = ["set reminder", "get weather", "play music", "search info", "greet"]
    intent_result = zero_shot_classifier(text, candidate_labels)
    intent = intent_result["labels"][0]
    return {"intent": intent, "entities": entities}

def perform_action(intent, entities):
    if intent == "get weather":
        # Simple city extraction from entities
        city = None
        for ent, label in entities:
            if label == "GPE":  # GPE = geopolitical entity (like cities)
                city = ent
                break
        if not city:
            return "Please provide a city name for weather info."
        
        api_key = "8a8b1234567890cde1234567890abcdef"  # <-- Your actual key

        url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"
        res = requests.get(url).json()

        if res.get("cod") != 200:
            return f"Couldn't fetch weather for {city}."
        
        desc = res["weather"][0]["description"]
        temp = res["main"]["temp"]
        return f"🌤️ Weather in {city}: {desc}, Temperature: {temp}°C"

    elif intent == "set reminder":
        # Save reminder locally (mock behavior)
        now = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        reminder_text = f"{now} - Reminder set with: {entities}"
        with open("reminders.txt", "a") as f:
            f.write(reminder_text + "\n")
        return "✅ Reminder saved successfully."

    return None  # Fallback if no matching intent


@app.post("/chat")
async def chat(request: Request):
    data = await request.json()
    prompt = data.get("prompt")

    analysis = analyze_input(prompt)
    intent = analysis["intent"]
    entities = analysis["entities"]

    # 🧠 Try to perform action based on intent
    action_response = perform_action(intent, entities)

    if action_response:
        return {
            "response": action_response,
            "nlu": analysis
        }

    # Default: GPT response fallback
    full_prompt = f"User intent: {intent}\nEntities: {entities}\nMessage: {prompt}"

    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are an assistant that understands intent and entities."},
            {"role": "user", "content": full_prompt}
        ]
    )

    reply = response["choices"][0]["message"]["content"]
    return {
        "response": reply,
        "nlu": analysis
    }
