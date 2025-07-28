'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut, CloudSun, ClipboardList, Bot } from 'lucide-react';
import Link from 'next/link';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // ✅ New state

  useEffect(() => {
    const storedUser = localStorage.getItem('buddybot_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoading(false); // ✅ Stop loading after setting user
    } else {
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('buddybot_user');
    router.push('/login');
  };

  // ✅ Show loading screen until user is loaded
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        Loading your dashboard...
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 text-gray-800 ${inter.className}`}>
      <div className="max-w-4xl mx-auto py-12 px-6">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold">👋 Welcome, {user?.name || 'User'}!</h1>
            <p className="text-sm text-gray-600 mt-1">Your AI-Powered Personal Assistant is ready.</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            <LogOut size={16} className="mr-2" />
            Logout
          </button>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/weather">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
              <CloudSun className="text-blue-400 mb-2" size={32} />
              <h2 className="text-lg font-semibold">Weather</h2>
              <p className="text-sm text-gray-500">Get real-time weather updates using OpenWeatherMap.</p>
            </div>
          </Link>

          <Link href="/tasks">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
              <ClipboardList className="text-green-400 mb-2" size={32} />
              <h2 className="text-lg font-semibold">Reminders & Tasks</h2>
              <p className="text-sm text-gray-500">Set and view your notes, reminders, and tasks.</p>
            </div>
          </Link>

          <Link href="/chat">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
              <Bot className="text-purple-400 mb-2" size={32} />
              <h2 className="text-lg font-semibold">Chat with BuddyBot</h2>
              <p className="text-sm text-gray-500">Interact using natural language. Try “What's the weather?”</p>
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
}
