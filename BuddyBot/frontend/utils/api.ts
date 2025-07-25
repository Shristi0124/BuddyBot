// frontend/utils/api.ts

export const sendChatToBackend = async (userInput: string): Promise<string> => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/v1/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_input: userInput }),
    });

    const data = await response.json();
    return data.response || "⚠️ No response from server";
  } catch (error) {
    console.error("API call failed:", error);
    return "❌ Error contacting backend";
  }
};
