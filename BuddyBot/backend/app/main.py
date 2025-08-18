from fastapi import FastAPI, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from router import data , chat, File, Form 
from pydantic import BaseModel
from typing import List, Dict
import uuid

# app = FastAPI()

# # Allow frontend (Next.js) to access backend
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Models
# class ContactForm(BaseModel):
#     name: str
#     email: str
#     message: str

# # Temporary in-memory DB for chats
# fake_chats: Dict[str, List[Dict]] = {}

# # ----------- STATIC ROUTES -----------
# @app.get("/home")
# def get_homepage():
#     return {
#         "notification": {
#             "title": "Buddybot",
#             "message": "Welcome to the Buddybot. We are here to help you.",
#             "type": "Success"
#         },
#         "about": {
#             "title": "Personalized AI Assistant",
#             "description": (
#                 "A dedicated AI-powered app tailored exclusively for "
#                 "individual users, designed to enhance everyday life "
#                 "through intelligent, adaptive support."
#             )
#         }
#     }

# @app.post("/contact")
# def submit_contact(form: ContactForm):
#     print(f"📩 New contact: {form.name} ({form.email}) - {form.message}")
#     return {"status": "success", "message": "We will get back to you soon!"}

# # ----------- CHAT ROUTES -----------

# @app.post("/chat/new")
# def create_new_chat():
#     """Create and return a new chat ID."""
#     chat_id = str(uuid.uuid4())
#     fake_chats[chat_id] = []
#     return {"status": "success", "chat_id": chat_id}

# @app.get("/chat/{chat_id}")
# def get_chat(chat_id: str):
#     """Get chat messages by ID."""
#     if chat_id not in fake_chats:
#         raise HTTPException(status_code=404, detail="Chat not found")
#     return fake_chats[chat_id]

# @app.post("/chat/{chat_id}")
# async def update_chat(
#     chat_id: str,
#     question: str = Form(...),
#     files: List[UploadFile] = File(None)
# ):
#     """Add a user message, process files, and return bot response."""
#     if chat_id not in fake_chats:
#         fake_chats[chat_id] = []

#     # Add user message
#     fake_chats[chat_id].append({"role": "user", "parts": [{"text": question}]})

#     # Process uploaded files (if any)
#     file_names = []
#     if files:
#         for file in files:
#             content = await file.read()  # In production, save to storage
#             file_names.append(file.filename)
#         print(f"📂 Uploaded files for chat {chat_id}: {file_names}")

#     # Fake bot logic
#     bot_response = f"🤖 You said: {question}"
#     if file_names:
#         bot_response += f" | Files: {', '.join(file_names)}"

#     # Add bot message
#     fake_chats[chat_id].append({"role": "model", "parts": [{"text": bot_response}]})

#     return {"status": "success", "reply": bot_response}

# # ----------- ROOT -----------
# @app.get("/")
# def root():
#     return {"message": "Backend is running"}

# # Include other routes from app/routes/data.py
# app.include_router(data.router)




# app.include_router(chat.router, prefix="/api")




from rest_framework.response import Response
from rest_framework.decorators import api_view
from .utils import get_response, post_response, post_chat, get_all_chat, new__chat, get__chat, get_prediction_percentage_asthma, get_prediction_percentage_cancer, get_prediction_percentage_diabetes, get_prediction_percentage_stroke, get_prescription

from .utils.auth import insert_signup, user_signin


@api_view(['GET'])
def getRoutes(request):
    routes = [
        {'Endpoint': '/', 'method': 'GET', 'body': None,
            'description': 'Returns an array of routes'},
        {'Endpoint': '/genaimech/', 'method': 'GET',
         'body': None, 'description': 'Returns an array of genaimech'},
        {'Endpoint': '/genaimech/', 'method': 'POST',
            'body': {'name': 'string', 'age': 'integer'}, 'description': 'Creates a new genaimech'},
        {'Endpoint': '/chat/<str:pk>/', 'method': 'POST',
            'body': {'message': 'string'}, 'description': 'Creates a new message in a chat'},
        {'Endpoint': '/chat/', 'method': 'GET',
            'body': None, 'description': 'Returns an array of chat'},
        {'Endpoint': '/chat/', 'method': 'POST',
            'body': {'chatName': 'string'}, 'description': 'Creates a new chat'},
        {'Endpoint': '/chat/<str:pk>/', 'method': 'GET',
            'body': None, 'description': 'Returns a chat with the given id'},
        {'Endpoint': '/form/<str:diagnosis>/', 'method': 'POST',
            'body': {'data': 'string'}, 'description': 'Returns the percentage of the diagnosis'},
        {'Endpoint': '/signup/', 'method': 'POST',
            'body': {'username': 'string', 'email': 'string', 'password': 'string'}, 'description': 'Creates a new user'},
        {'Endpoint': '/signin/', 'method': 'POST',
            'body': {'username': 'string', 'password': 'string'}, 'description': 'Signin a user'},
        {'Endpoint': '/prescription/', 'method': 'GET',
            'body': {'diseases': 'string'}, 'description': 'Returns a prescription for the diseases'}
    ]
    return Response(routes)


@api_view(['GET', 'POST'])
def getGenaimech(request):
    if request.method == 'GET':
        return get_response('Get all genaimech')
    elif request.method == 'POST':
        return post_response('Create new genaimech')
    return get_response('Hello World')


@api_view(['POST'])
def chat(request, pk):
    print(pk)
    message = request.data['message']
    return post_chat(message)


@api_view(['GET'])
def getallchats(request):
    return get_all_chat()


@api_view(['POST'])
def newchat(request):
    chatName = request.data['chatName']
    return new__chat(chatName)


@api_view(['GET'])
def getchat(request, pk):
    return get__chat(pk)


@api_view(['POST'])
def postForm(request, diagnosis):
    data = request.data['data']
    print("data", data)
    if diagnosis == 'asthma':
        return get_response(get_prediction_percentage_asthma(data))
    elif diagnosis == 'cancer':
        return get_response(get_prediction_percentage_cancer(data))
    elif diagnosis == 'diabetes':
        return get_response(get_prediction_percentage_diabetes(data))
    elif diagnosis == 'stroke':
        return get_response(get_prediction_percentage_stroke(data))
    else:
        return get_response('Invalid diagnosis')


@api_view(['POST'])
def signup(request):
    return insert_signup(request)


@api_view(['POST'])
def signin(request):
    return user_signin(request)


@api_view(['POST'])
def getPrescription(request):
    diseases = request.data['diseases']
    return get_prescription(diseases)
