"use client";

import { useEffect, useRef, useState } from "react";
import { Mic, MicOff } from "lucide-react";

const SpeechToText = ({ onTranscript }) => {
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "en-US";

      recognition.onresult = (event) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          transcript += event.results[i][0].transcript;
        }
        setText(transcript);
        onTranscript && onTranscript(transcript);
      };

      recognitionRef.current = recognition;
    } else {
      alert("Web Speech API not supported in this browser.");
    }
  }, []);

  const startListening = () => {
    recognitionRef.current?.start();
    setListening(true);
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setListening(false);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-xl">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        🎙️ Speak to BuddyBot
      </h2>
      <div className="flex gap-4 mb-4">
        <button
          onClick={startListening}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <Mic size={20} /> Start
        </button>
        <button
          onClick={stopListening}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <MicOff size={20} /> Stop
        </button>
      </div>
      <textarea
        className="w-full h-40 p-4 border rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
        value={text}
        readOnly
        placeholder="Your transcription will appear here..."
      />
    </div>
  );
};

export default SpeechToText;
