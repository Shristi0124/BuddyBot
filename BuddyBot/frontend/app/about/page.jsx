'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '../components/ui/button';

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-6 py-12 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-gray-800 text-white"
    >
      <h1 className="text-4xl font-bold mb-6 text-center">About BuddyBot 🤖</h1>

      <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-xl p-6 w-full max-w-3xl space-y-6">
        <p className="text-lg text-gray-300">
          <strong>BuddyBot</strong> is your intelligent digital assistant designed to help you stay organized, automate tasks, and access real-time information using the power of AI.
        </p>

        <p className="text-gray-300">
          Built using modern technologies like <strong>Next.js</strong>, <strong>FastAPI</strong>, and advanced AI/NLP models, BuddyBot supports:
        </p>

        <ul className="list-disc list-inside ml-4 text-sm text-gray-300">
          <li>Conversational understanding and contextual responses</li>
          <li>Integration with APIs (weather, notes, reminders)</li>
          <li>User preference learning and personalization</li>
        </ul>

        <p className="text-gray-300">
          Whether you want to check the weather, create a to-do list, or interact naturally with an AI agent, BuddyBot is your daily digital companion.
        </p>

        <p className="text-gray-300">
          This project is proudly developed by a passionate student team, combining AI, web development, and creative design to bring real-world applications to life.
        </p>
      </div>

      <Link href="/">
        <Button className="mt-8">← Back to Home</Button>
      </Link>
    </motion.div>
  );
}
