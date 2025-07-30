import openai
from app.config import settings

openai.api_key = settings.OPENAI_API_KEY

async def generate_response(message: str, user_id: str) -> str:
    try:
        completion = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are BuddyBot, a helpful and personalized assistant."},
                {"role": "user", "content": message}
            ]
        )
        return completion.choices[0].message["content"].strip()
    except Exception as e:
        print(f"[OpenAI Error]: {e}")
        return "Sorry, I'm having trouble responding right now."
