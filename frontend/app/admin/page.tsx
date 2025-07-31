'use client'

import { motion } from 'framer-motion'

export default function AdminPage() {
  return (
    <motion.div
      className="min-h-screen py-16 px-6 bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
        <h1 className="text-3xl font-bold mb-6 text-center">🔐 Admin Dashboard</h1>

        <div className="space-y-4 text-sm md:text-base">
          <p className="text-gray-600 dark:text-gray-300">
            Welcome to the admin panel. You can manage users, monitor usage, and configure backend settings here.
          </p>

          <p className="text-gray-500 dark:text-gray-400">
            (This is just a placeholder — you can integrate real admin features such as user lists, analytics, logs, or settings.)
          </p>
        </div>
      </div>
    </motion.div>
  )
}
