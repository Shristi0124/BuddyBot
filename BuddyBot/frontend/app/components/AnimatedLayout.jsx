'use client';

import { motion } from 'framer-motion';

export default function AnimatedLayout({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="max-w-5xl mx-auto mt-10 mb-10 px-6 py-8 bg-white dark:bg-[#1f1f2f] shadow-xl rounded-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300"
    >
      {children}
    </motion.main>
  );
}
