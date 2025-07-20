// ✅ Correct
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
    <html lang="en">
      <body className={`${inter.className} bg-white text-black dark:bg-black dark:text-white transition-colors duration-300`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
