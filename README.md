# 🤖 BuddyBot – AI-Powered Personalized Assistant

BuddyBot is a smart, interactive personal assistant that understands natural language, learns your preferences, and performs tasks like setting reminders and fetching weather updates using AI and APIs.

---

## 🌟 Features

### 1. Natural Language Understanding (NLU)
- Intent recognition (e.g., set reminder, get weather)
- Entity extraction (e.g., time, location)
- Context-aware conversation tracking

### 2. Personalized Task Execution
- Weather queries via OpenWeatherMap API
- Task automation (reminders, notes)
- Integration-ready with external APIs

### 3. User-Centric Memory (Planned)
- Short-term and long-term memory
- Learns habits, preferences, and user profiles

---

## 🧰 Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS  
- **Backend**: FastAPI, Uvicorn  
- **NLP/AI**: spaCy, Transformers (BERT/GPT), OpenAI API  
- **APIs**: OpenWeatherMap, Custom Task APIs  
- **Database (optional)**: MongoDB, Firebase, or SQLite  
- **Tools**: Python 3.11, Node.js, Git, GitHub

---

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/BuddyBot.git
cd BuddyBot
````

---

### 2. 🔧 Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate         # On Windows
# OR
source venv/bin/activate     # On macOS/Linux

pip install -r requirements.txt
uvicorn app.main:app --reload
```

Runs at: [http://localhost:8000](http://localhost:8000)

---

### 3. 🌐 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Runs at: [http://localhost:3000](http://localhost:3000)

---

### 4. 🔑 OpenWeatherMap API Setup

1. Go to [https://openweathermap.org/api](https://openweathermap.org/api)
2. Sign up and get your API key
3. Create `.env` inside `backend/` and add:

   ```env
   OPENWEATHER_API_KEY=your_api_key_here
   ```

---

## 💬 Example Prompts

```text
"Remind me to submit the report at 9 PM"
"What's the weather in Dehradun?"
```

---

## 📁 Project Structure

```
BuddyBot/
│
├── backend/                            # Backend logic (FastAPI + AI)
│   ├── app/                            # Main FastAPI app
│   │   ├── api/                        # API routes
│   │   │   ├── routes.py
│   │   │   └── __init__.py
│   │   ├── core/                       # Core utilities (configs, logger)
│   │   │   ├── config.py
│   │   │   └── __init__.py
│   │   ├── models/                     # Pydantic models
│   │   ├── services/                   # AI logic (intent, memory, agents)
│   │   └── main.py                     # Entry point
│   ├── requirements.txt
│   └── .env                            # Backend environment variables
│
├── frontend/                           # Frontend (Next.js)
│   ├── app/                            # Next.js App directory
│   │   ├── layout.js
│   │   ├── page.jsx
│   │   └── globals.css
│   ├── components/                     # Reusable components (mic, history)
│   │   ├── MicButton.jsx
│   │   └── TranscriptionCard.jsx
│   ├── styles/                         # Tailwind and custom styles
│   ├── public/                         # Static files (icons, etc.)
│   ├── node_modules/
│   ├── package.json
│   ├── next.config.js
│   ├── postcss.config.mjs
│   ├── tailwind.config.js             # Required for Tailwind CSS
│   ├── jsconfig.json
│   └── .gitignore
│
├── database/                           # DB config or ORM models
│   ├── mongo_config.py
│   └── models.py
│
├── README.md                           # Project overview
└── .gitignore

```

---

## 👥 Contributors

* **[@Shristi0124](https://github.com/Shristi0124)** – Created the main GitHub repo

* **[@rajpurohitpushpendra](https://github.com/rajpurohitpushpendra)** – Working on setup, code structure, and UI

---

## ✅ To Do

* [x] Chat route with intent & entity extraction
* [x] Weather response with real API
* [x] Frontend ↔ Backend integration
* [ ] Long-term memory module
* [ ] Add more task automation (emails, alarms, etc.)

---

## 📜 License

MIT License – free for personal & educational use.
