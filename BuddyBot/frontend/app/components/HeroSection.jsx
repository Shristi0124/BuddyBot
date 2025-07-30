'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-[40vh] text-center px-2 py-4"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.25,
          },
        },
      }}
    >
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-primary mb-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to BuddyBot 🤖
      </motion.h1>

      <motion.p
        className="mt-1 text-base md:text-lg text-muted-foreground max-w-xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Your AI-powered assistant for mindful productivity & seamless task management.
      </motion.p>

      <motion.div
        className="mt-3"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <button className="px-5 py-2.5 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition duration-200 shadow-md text-sm md:text-base">
          Get Started
        </button>
      </motion.div>
    </motion.div>
  )
}
