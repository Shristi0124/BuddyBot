
import re

# Basic intent patterns
INTENT_PATTERNS = {
    "greet": r"\b(hi|hello|hey)\b",
    "bye": r"\b(bye|goodbye|see you)\b",
    "thanks": r"\b(thank you|thanks|thx)\b",
    "weather": r"\b(weather|temperature|forecast)\b",
    "reminder": r"\b(remind me|set a reminder|remember)\b",
    # Add more as needed
}

# Intent-based replies
INTENT_RESPONSES = {
    "greet": "Hello! How can I assist you today?",
    "bye": "Goodbye! Have a great day.",
    "thanks": "You're welcome!",
    "weather": "Sure, I can provide the weather. Which location?",
    "reminder": "Got it. What should I remind you about and when?",
    "unknown": "Sorry, I didn't quite understand that. Could you rephrase?",
}

def identify_intent(message: str) -> str:
    """Identify the user's intent based on regex patterns."""
    message = message.lower()
    for intent, pattern in INTENT_PATTERNS.items():
        if re.search(pattern, message):
            return intent
    return "unknown"

def process_message(message: str) -> dict:
    """Process the message to extract intent and return a response."""
    intent = identify_intent(message)
    reply = INTENT_RESPONSES.get(intent, INTENT_RESPONSES["unknown"])
    return {"intent": intent, "reply": reply}
