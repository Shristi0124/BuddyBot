// app/layout.js
// app/layout.js
import '../app/globals.css'

import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BuddyBot',
  description: 'Your daily mindful productivity assistant',
  icons: {
    icon: '/favicon.ico',
  },
  viewport: 'width=device-width, initial-scale=1',
  keywords: ['AI Assistant', 'BuddyBot', 'Mindfulness', 'Productivity'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${inter.className} bg-backgroundLight text-textLight dark:bg-backgroundDark dark:text-textDark transition-colors duration-300`}
      >
        <Navbar />
        <main className="min-h-screen px-4 py-6 max-w-6xl mx-auto">
          {children}
        </main>
        <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-4">
          © {new Date().getFullYear()} BuddyBot. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
