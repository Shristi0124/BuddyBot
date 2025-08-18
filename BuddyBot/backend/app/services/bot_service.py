def process_chat(chat_id: str, question: str, files):
    # 1. Save message to DB
    # 2. Run AI model / logic to generate answer
    bot_response = f"Bot says: {question[::-1]}"  # Example logic
    return bot_response
