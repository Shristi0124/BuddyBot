// app/(home)/layout.jsx
import React from 'react';
import Navbar from './components/Navbar';
import AnimatedLayout from './components/AnimatedLayout';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google'; // ✅ Import Inter font

// ✅ Initialize the Inter font
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BuddyBot - Home',
  description: 'Your personalized AI assistant',
};

export default function HomeLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.className} transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="bg-backgroundLight text-textLight dark:bg-backgroundDark dark:text-textDark min-h-screen">
            <Navbar />
            <main className="px-4 py-6 max-w-6xl mx-auto">{children}</main>
            <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-4">
              {new Date().getFullYear()} BuddyBot. All rights reserved.
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
