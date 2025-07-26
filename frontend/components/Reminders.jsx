'use client'

import { useState, useEffect } from 'react'

export default function Reminders() {
  const [reminders, setReminders] = useState([])
  const [message, setMessage] = useState('')
  const [remindAt, setRemindAt] = useState('')

  const fetchReminders = async () => {
    const res = await fetch('http://localhost:8000/reminders')
    const data = await res.json()
    setReminders(data)
  }

  const addReminder = async () => {
    const reminder = {
      id: Date.now(),
      message,
      remind_at: new Date(remindAt).toISOString(),
    }
    await fetch('http://localhost:8000/reminders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reminder),
    })
    fetchReminders()
    setMessage('')
    setRemindAt('')
  }

  useEffect(() => {
    fetchReminders()
  }, [])

  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Reminders</h2>
      <input
        className="w-full p-2 border mb-2"
        type="text"
        placeholder="Reminder message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input
        className="w-full p-2 border mb-2"
        type="datetime-local"
        value={remindAt}
        onChange={(e) => setRemindAt(e.target.value)}
      />
      <button onClick={addReminder} className="bg-yellow-500 text-white px-4 py-2 rounded">
        Set Reminder
      </button>
      <ul className="mt-4 space-y-2">
        {reminders.map((r) => (
          <li key={r.id} className="border p-2 rounded">
            <strong>{r.message}</strong>
            <p><small>{new Date(r.remind_at).toLocaleString()}</small></p>
          </li>
        ))}
      </ul>
    </div>
  )
}
