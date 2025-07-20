'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.3,
          },
        },
      }}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-primary"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to BuddyBot 🤖
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        Your AI-powered daily assistant for mindful productivity and seamless task management.
      </motion.p>

      <motion.div
        className="mt-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <button className="px-6 py-3 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition duration-300 shadow-lg">
          Get Started
        </button>
      </motion.div>
    </motion.div>
  )
}
