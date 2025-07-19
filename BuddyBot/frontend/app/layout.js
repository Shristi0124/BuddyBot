import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

  // app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import Header from '@/components/Header'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: 'BuddyBot',
  description: 'Your personal AI assistant',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Header />
        <main className="max-w-7xl mx-auto p-4">{children}</main>
      </body>
    </html>
  )
}
