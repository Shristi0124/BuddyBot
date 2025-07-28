import openai
from BuddyBot.backend.app.config import settings

openai.api_key = settings.OPENAI_API_KEY

def get_chat_response(user_id: str, message: str):
    # This can be enhanced with memory logic
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": message}]
    )
    return response['choices'][0]['message']['content']
