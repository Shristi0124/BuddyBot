import React from 'react'
import Navbar from '../components/Navbar'
import AnimatedLayout from '../components/AnimatedLayout'
import { ThemeProvider } from 'next-themes'
import './globals.css'

export const metadata = {
  title: 'BuddyBot - Home',
  description: 'Your personalized AI assistant',
}

export default function HomeLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen font-sans transition-colors duration-300 bg-backgroundLight dark:bg-backgroundDark text-textLight dark:text-textDark">
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <Navbar />
          <AnimatedLayout>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </AnimatedLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
