'use client'

import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-zinc-900 shadow px-6 py-4 flex justify-between items-center font-sans transition-all">
      {/* Logo */}
      <Link
        href="/"
        className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight"
      >
        BuddyBot 🤖
      </Link>

      {/* Navigation + Controls */}
      <div className="flex items-center space-x-4 text-base font-medium">
        <Link href="/" className="text-zinc-800 dark:text-zinc-200 hover:underline transition">
          Home
        </Link>
        <Link href="/about" className="text-zinc-800 dark:text-zinc-200 hover:underline transition">
          About
        </Link>
        <Link href="/features" className="text-zinc-800 dark:text-zinc-200 hover:underline transition">
          Features
        </Link>
        <Link href="/contact" className="text-zinc-800 dark:text-zinc-200 hover:underline transition">
          Contact
        </Link>

        {/* Theme Toggle inline with nav links */}
        <ThemeToggle />

        {/* Login Button */}
        <Link href="/login">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition text-sm">
            Login
          </button>
        </Link>
      </div>
    </nav>
  )
}
