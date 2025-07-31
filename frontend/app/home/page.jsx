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
      transition={{ duration: 0.5 }}
      className="min-h-screen px-6 py-16 flex flex-col items-center justify-center bg-gradient-to-br from-[#eef4ff] to-[#dbeafe] dark:from-slate-900 dark:to-gray-900 text-gray-900 dark:text-white"
    >
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold tracking-tight mb-4">Welcome to BuddyBot 🤖</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Your intelligent AI assistant to manage tasks, learn with you, and understand your needs personally.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-[#1e1e2e] border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl p-8 w-full max-w-4xl space-y-8"
      >
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">🌟 Features</h2>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-lg font-semibold mb-1">Natural Language Understanding</h3>
                <ul className="list-disc ml-5">
                  <li>Intent recognition</li>
                  <li>Entity extraction</li>
                  <li>Context-aware conversations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Personalized Task Execution</h3>
                <ul className="list-disc ml-5">
                  <li>Weather queries</li>
                  <li>Task automation</li>
                  <li>API integrations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">User-Centric Memory</h3>
                <ul className="list-disc ml-5">
                  <li>Short/Long-term memory</li>
                  <li>Habit learning</li>
                  <li>User preferences</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </motion.div>

      <Link href="/login" className="mt-10">
        <Button size="lg" className="px-6 py-3 text-base">Login to BuddyBot</Button>
      </Link>
    </motion.div>
  );
}
