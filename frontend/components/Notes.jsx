'use client'

import { useState, useEffect } from 'react'

export default function Notes() {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const fetchNotes = async () => {
    const res = await fetch('http://localhost:8000/notes')
    const data = await res.json()
    setNotes(data)
  }

  const addNote = async () => {
    const note = {
      id: Date.now(),
      title,
      content,
      created_at: new Date().toISOString(),
    }
    await fetch('http://localhost:8000/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note),
    })
    fetchNotes()
    setTitle('')
    setContent('')
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Notes</h2>
      <input
        className="w-full p-2 border mb-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-2 border mb-2"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={addNote} className="bg-green-500 text-white px-4 py-2 rounded">
        Add Note
      </button>
      <ul className="mt-4 space-y-2">
        {notes.map((note) => (
          <li key={note.id} className="border p-2 rounded">
            <strong>{note.title}</strong>
            <p>{note.content}</p>
            <small>{new Date(note.created_at).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  )
}
