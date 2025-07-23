'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '../components/ui/button';

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-6 py-12 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-gray-800 text-white"
    >
      <h1 className="text-4xl font-bold text-center mb-4">Welcome to BuddyBot 🤖</h1>
      <p className="text-lg text-center max-w-2xl mb-8">
        Your intelligent AI assistant to help manage your tasks, understand your needs, and learn with you.
      </p>

      <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-xl p-6 w-full max-w-3xl space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-2">🌟 Features</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">1. Natural Language Understanding (NLU)</h3>
              <ul className="list-disc list-inside ml-4 text-sm text-gray-300">
                <li>Intent recognition (e.g., set reminder, get weather)</li>
                <li>Entity extraction (e.g., time, location)</li>
                <li>Context-aware conversation tracking</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">2. Personalized Task Execution</h3>
              <ul className="list-disc list-inside ml-4 text-sm text-gray-300">
                <li>Weather queries via OpenWeatherMap API</li>
                <li>Task automation (reminders, notes)</li>
                <li>Integration-ready with external APIs</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">3. User-Centric Memory (Planned)</h3>
              <ul className="list-disc list-inside ml-4 text-sm text-gray-300">
                <li>Short-term and long-term memory</li>
                <li>Learns habits, preferences, and user profiles</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <Link href="/login">
        <Button className="mt-8">Login to BuddyBot</Button>
      </Link>
    </motion.div>
  );
}
