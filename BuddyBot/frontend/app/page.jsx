"use client";

import { useEffect, useState } from "react";
import { Mic, MicOff, Moon, Sun } from "lucide-react";
import SpeechToText from "../components/SpeechToText.client";



export default function Home() {
  const [theme, setTheme] = useState("light");
  const [isMicOn, setIsMicOn] = useState(false);
  const [transcripts, setTranscripts] = useState([]);
  const [tasks, setTasks] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("buddybot-tasks");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });
  const [newTask, setNewTask] = useState("");
  const [recommendation, setRecommendation] = useState(null);

  const defaultSuggestions = [
    "🧘 Meditate for 10 minutes",
    "📓 Plan today's tasks",
    "💻 Focus work block (2 hrs)",
    "🧹 Clean up desktop / files",
    "📚 Read for 20 minutes",
    "🍎 Eat a healthy snack",
    "📶 Disconnect for 30 mins",
    "🚶 Take a short walk",
    "💡 Review your goals",
    "🌙 Reflect on today before bed",
  ];

  const getDynamicSuggestions = () => {
    const hour = new Date().getHours();
    if (hour < 10) {
      return ["🛏️ Make your bed", "🥣 Eat a good breakfast"];
    } else if (hour < 14) {
      return ["🧑‍💻 Work on your most important task", "📤 Check and reply to emails"];
    } else if (hour < 18) {
      return ["🧘 Take a break and stretch", "🍵 Hydrate well"];
    } else {
      return ["🌙 Plan tomorrow", "📖 Read or journal"];
    }
  };

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleTranscript = (text) => {
    if (text?.trim()) {
      setTranscripts((prev) => [
        ...prev,
        { id: Date.now(), text, time: new Date().toLocaleTimeString() },
      ]);
    }
  };

  useEffect(() => {
    document.documentElement.classList.add(theme === "dark" ? "dark" : "light");
  }, []);

  useEffect(() => {
    localStorage.setItem("buddybot-tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    if (tasks.length > 0) {
      const now = new Date();
      const today = now.getDay();
      const frequentTasks = tasks.filter((t) => {
        const createdDay = new Date(parseInt(t.id)).getDay();
        return t.title && createdDay === today;
      });
      if (frequentTasks.length >= 2) {
        setRecommendation(
          `You usually work on "${frequentTasks[0].title}" on this day. Want to schedule it again?`
        );
      } else {
        setRecommendation(null);
      }
    }
  }, [tasks]);

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    setTasks((prev) => [...prev, { id: Date.now(), title: newTask, done: false }]);
    setNewTask("");
  };

  const handleToggleDone = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white transition-all">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-300">BuddyBot</div>
            <nav className="hidden md:flex space-x-6 font-medium">
              <a href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</a>
              <a href="/profile" className="hover:text-indigo-600 dark:hover:text-indigo-400">Profile</a>
              <a href="/history" className="hover:text-indigo-600 dark:hover:text-indigo-400">History</a>
              <a href="/settings" className="hover:text-indigo-600 dark:hover:text-indigo-400">Settings</a>
              <a href="/help" className="hover:text-indigo-600 dark:hover:text-indigo-400">Help</a>
            </nav>
            <button
              onClick={toggleTheme}
              className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:scale-110 transition"
              title="Toggle Theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="w-full bg-indigo-50 dark:bg-indigo-950 py-6 px-4 shadow-inner text-center mb-6">
        <h2 className="text-3xl font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Welcome back 👋</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          I’m your personal assistant. Speak to me and I’ll help you get things done.
        </p>
      </section>

      {/* Main Content */}
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-32">
        {/* Sidebar Left */}
        <aside className="space-y-4 md:col-span-1">
          {/* Daily Suggestions */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h3 className="text-lg font-semibold mb-3">🧠 Daily Routine Suggestions</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700 dark:text-gray-300">
              {defaultSuggestions.map((item, idx) => (
                <li key={`default-${idx}`}>{item}</li>
              ))}
              {getDynamicSuggestions().map((item, idx) => (
                <li key={`dynamic-${idx}`} className="text-indigo-500 dark:text-indigo-300">{item}</li>
              ))}
            </ul>
          </div>

          {/* Task Manager */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h3 className="text-lg font-semibold mb-3">✅ Task Manager</h3>
            {recommendation && (
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => {
                    setTasks((prev) => [
                      ...prev,
                      {
                        id: Date.now(),
                        title: recommendation.match(/\"(.*?)\"/)?.[1] || "Recommended Task",
                        done: false,
                      },
                    ]);
                    setRecommendation(null);
                  }}
                  className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-xs"
                >
                  Yes, Add It
                </button>
                <button
                  onClick={() => setRecommendation(null)}
                  className="px-3 py-1 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white rounded text-xs"
                >
                  Dismiss
                </button>
              </div>
            )}

            <div className="flex gap-2 mb-4 mt-4">
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
                placeholder="Add new task..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button
                onClick={handleAddTask}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm"
              >
                Add
              </button>
            </div>
            <ul className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar text-sm">
              {tasks.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400 italic">No tasks added.</p>
              ) : (
                tasks.map((task) => (
                  <li
                    key={task.id}
                    className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-md"
                  >
                    <span
                      onClick={() => handleToggleDone(task.id)}
                      className={`cursor-pointer flex-1 ${task.done ? "line-through text-gray-400" : ""}`}
                    >
                      {task.title}
                    </span>
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="ml-2 text-red-500 hover:text-red-600"
                      title="Delete task"
                    >
                      ❌
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* Weather Info */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h3 className="text-lg font-semibold mb-2">🌦️ Weather</h3>
            <p>📍 Dehradun</p>
            <p>☀️ 31°C | Sunny</p>
          </div>
        </aside>

        {/* Right Section - Talk & History */}
        <section className="md:col-span-2 flex flex-col gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-center">🎙️ Talk to BuddyBot</h3>
            <SpeechToText onTranscript={handleTranscript} />
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h3 className="text-lg font-semibold mb-3">📝 Conversation History</h3>
            <div className="space-y-3 max-h-64 overflow-y-auto custom-scrollbar">
              {transcripts.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400 italic">Say something to get started...</p>
              ) : (
                transcripts.slice().reverse().map((entry) => (
                  <div
                    key={entry.id}
                    className="bg-indigo-100 dark:bg-indigo-900/60 rounded-md px-4 py-2"
                  >
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{entry.time}</div>
                    <div>{entry.text}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Floating Mic Button */}
      <button
        onClick={() => setIsMicOn((prev) => !prev)}
        className={`fixed bottom-6 right-6 z-50 p-5 rounded-full text-white transition-all duration-300 shadow-xl ${
          isMicOn ? "bg-red-600 animate-pulse" : "bg-green-600 hover:scale-110"
        }`}
        title={isMicOn ? "Stop Listening" : "Start Listening"}
      >
        {isMicOn ? <MicOff size={24} /> : <Mic size={24} />}
      </button>
    </div>
  );
}
