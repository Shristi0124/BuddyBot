'use client'

import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold tracking-wide text-blue-600 dark:text-blue-400">
          BuddyBot
        </h1>

        <div className="flex items-center space-x-6">
          <Link href="/" className="hover:text-blue-500 dark:hover:text-blue-400">Home</Link>
          <Link href="/about" className="hover:text-blue-500 dark:hover:text-blue-400">About</Link>
          <Link href="/dashboard" className="hover:text-blue-500 dark:hover:text-blue-400">Dashboard</Link>
          <Link href="/login" className="hover:text-blue-500 dark:hover:text-blue-400">Login</Link>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
