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
      <body className="min-h-screen font-sans text-gray-900">
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