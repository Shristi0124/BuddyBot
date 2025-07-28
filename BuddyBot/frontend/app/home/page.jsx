'use client'

import { useState } from 'react'
import { Mic } from 'lucide-react'

export default function HomePage() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task])
      setTask('')
    }
  }

  return (
    <main className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <header className="text-center mb-10">
         </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Daily Routine Suggestions */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h3 className="font-semibold text-lg mb-3">🧠 Daily Routine Suggestions</h3>
          <ul className="text-sm space-y-1">
            <li>🧘 Meditate for 10 minutes</li>
            <li>📋 Plan today's tasks</li>
            <li>🧑‍💻 Focus work block (2 hrs)</li>
            <li>🧹 Clean up desktop / files</li>
            <li>📚 Read for 20 minutes</li>
            <li>🍎 Eat a healthy snack</li>
            <li>📉 Disconnect for 30 mins</li>
            <li>🚶 Take a short walk</li>
            <li>📈 Review your goals</li>
            <li>🌙 Reflect on today before bed</li>
            <li className="text-blue-600">📌 Work on your most important task</li>
            <li className="text-blue-600">📧 Check and reply to emails</li>
          </ul>
        </div>

        {/* Speak to BuddyBot */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow lg:col-span-2">
          <h3 className="font-semibold text-lg mb-3">🎤 Speak to BuddyBot</h3>
          <div className="flex gap-4 mb-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded">Start</button>
            <button className="bg-red-600 text-white px-4 py-2 rounded">Stop</button>
          </div>
          <textarea
            className="w-full h-28 p-3 rounded-lg border dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-sm"
            placeholder="Your transcription will appear here..."
            readOnly
          />
        </div>
      </div>

      {/* Task Manager & Conversation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Task Manager */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h3 className="font-semibold text-lg mb-3">✅ Task Manager</h3>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Add new task..."
              className="w-full p-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700"
            />
            <button onClick={addTask} className="bg-purple-600 text-white px-4 py-2 rounded">
              Add
            </button>
          </div>
          {tasks.length === 0 ? (
            <p className="text-sm text-gray-500">No tasks added.</p>
          ) : (
            <ul className="text-sm list-disc list-inside">
              {tasks.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Conversation History */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow relative">
          <h3 className="font-semibold text-lg mb-3">💬 Conversation History</h3>
          <p className="text-sm text-gray-500">Say something to get started...</p>
          <button className="absolute bottom-4 right-4 bg-green-600 text-white p-3 rounded-full">
            <Mic />
          </button>
        </div>
      </div>
    </main>
  )
}
