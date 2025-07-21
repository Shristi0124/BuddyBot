'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null
  const isDark = theme === 'dark'

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white dark:bg-zinc-900">
      <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
        BuddyBot
      </Link>

      <div className="flex gap-6 items-center">
        <Link href="/home" className="text-lg hover:text-blue-500 dark:hover:text-blue-300">Home</Link>
        <Link href="/login" className="text-lg hover:text-blue-500 dark:hover:text-blue-300">Login</Link>
        <Link href="/about" className="text-lg hover:text-blue-500 dark:hover:text-blue-300">About</Link>

        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="ml-4 p-2 rounded"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </nav>
  )
}
