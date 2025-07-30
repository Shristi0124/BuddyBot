
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://shristi:<db_password>@buddybot.tugmdyw.mongodb.net/?retryWrites=true&w=majority&appName=Buddybot"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

