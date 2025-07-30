'use client'

import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-50 transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide text-blue-600 dark:text-blue-400">
          BuddyBot
        </h1>

        {/* Navigation Links + Theme Toggle */}
        <div className="flex items-center gap-6 flex-nowrap">
          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About' },
            { path: '/dashboard', label: 'Dashboard' },
            { path: '/login', label: 'Login' },
          ].map(({ path, label }) => (
            <Link
              key={label}
              href={path}
              className="relative text-gray-800 dark:text-gray-100 font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              <span className="hover-underline">{label}</span>
            </Link>
          ))}

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>

      {/* Underline animation */}
      <style jsx>{`
        .hover-underline::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 2px;
          background-color: currentColor;
          transition: width 0.3s ease-in-out;
        }

        .hover-underline:hover::after {
          width: 100%;
        }
      `}</style>
    </nav>
  )
}
