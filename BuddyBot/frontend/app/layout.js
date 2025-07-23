// app/(home)/layout.jsx

import React from 'react';
import Navbar from '../components/Navbar';
import AnimatedLayout from '../components/AnimatedLayout';
import { ThemeProvider } from 'next-themes';
import './globals.css'; // global styles

export const metadata = {
  title: 'BuddyBot - Home',
  description: 'Your personalized AI assistant',
};

export default function HomeLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className="min-h-screen font-sans transition-colors duration-300
                   bg-gradient-to-br from-[#f0f4ff] to-[#e6f7ff] 
                   dark:from-[#1a1c2c] dark:to-[#12131a] 
                   text-gray-900 dark:text-gray-100"
      >
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <Navbar />
          <AnimatedLayout>
            {children}
          </AnimatedLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
