// D:\SHRISTI\BuddyBot\BuddyBot\frontend\components\ui\Button.jsx
import React from 'react'

export default function Button({ children, onClick, isLoading, className = '' }) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition ${className}`}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  )
}
