'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <button onClick={() => setDark(!dark)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
