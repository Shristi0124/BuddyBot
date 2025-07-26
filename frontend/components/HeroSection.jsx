'use client'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center px-4 py-16 space-y-6"
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
        className="text-4xl md:text-6xl font-extrabold text-primary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to BuddyBot 🤖
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-muted-foreground max-w-2xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Your AI-powered assistant for mindful productivity, smart reminders, and seamless task flow.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg text-base font-medium transition duration-200">
          Get Started
        </button>
      </motion.div>
    </motion.div>
  )
}
