// app/layout.js
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import { ThemeProvider } from 'next-themes'

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
      <body className={`${inter.className} transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="bg-backgroundLight text-textLight dark:bg-backgroundDark dark:text-textDark min-h-screen">
            <Navbar />
            <main className="px-4 py-6 max-w-6xl mx-auto">{children}</main>
            <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-4">
              © {new Date().getFullYear()} BuddyBot. All rights reserved.
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
