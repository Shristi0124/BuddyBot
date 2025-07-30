"use client";

import { useEffect, useRef, useState } from "react";
import { Mic, MicOff } from "lucide-react";

export default function SpeechToText() {
  const [transcript, setTranscript] = useState("");
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert("Speech Recognition not supported in this browser.");
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const lastResult = event.results[event.results.length - 1][0].transcript;
      setTranscript((prev) => prev + " " + lastResult);
    };

    recognitionRef.current = recognition;
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
    <div className="p-4 border rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-2">Speech to Text</h2>
      <div className="flex items-center space-x-4 mb-4">
        {listening ? (
          <button onClick={stopListening} className="text-red-500">
            <MicOff size={28} />
          </button>
        ) : (
          <button onClick={startListening} className="text-green-500">
            <Mic size={28} />
          </button>
        )}
        <span className="text-gray-600">{listening ? "Listening..." : "Click to Speak"}</span>
      </div>
      <textarea
        value={transcript}
        readOnly
        rows={6}
        className="w-full p-2 border rounded"
        placeholder="Transcript will appear here..."
      />
    </div>
  );
}
