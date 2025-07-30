'use client';

import Link from 'next/link';
import Button from '.bin/components/ui/Button';

export default function AboutPage() {
  return (
    <>
      {/* Personal Introduction */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-sky-400 to-purple-500 text-transparent bg-clip-text">
        Hi, I'm Shristi 👋
      </h1>

      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
        A Computer Science Engineering student passionate about AI, NLP, and building intelligent systems. Currently leading the development of an AI-powered assistant called <strong className="text-blue-400">BuddyBot</strong>.
      </p>

      {/* Project Overview Card */}
      <div className="rounded-3xl border border-gray-700 bg-white/5 backdrop-blur-md shadow-2xl p-8 space-y-6 transition hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]">
        <h2 className="text-2xl font-semibold text-white">🤖 BuddyBot – AI-Powered Personalized Assistant</h2>

        <p className="text-gray-300">
          BuddyBot is a smart, interactive personal assistant that understands natural language, learns user preferences, and performs tasks like setting reminders and fetching weather updates using AI and APIs.
        </p>

        <ul className="list-disc list-inside ml-4 text-sm text-gray-300 space-y-1">
          <li>🧠 Intent & entity recognition for natural conversation</li>
          <li>🌐 Real-time weather, notes, reminders with API integration</li>
          <li>🧩 Memory system (planned): user habits, personalization</li>
        </ul>

        <p className="text-sm text-gray-500 italic">
          Built using Next.js, FastAPI, OpenAI, spaCy, Tailwind CSS, and more.
        </p>
      </div>

      {/* Back Button */}
      <div className="mt-10 flex justify-center">
        <Link href="/">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-xl font-semibold shadow-md transition-transform duration-300 transform hover:scale-105">
            ← Back to Home
          </Button>
        </Link>
      </div>
    </>
  );
}
