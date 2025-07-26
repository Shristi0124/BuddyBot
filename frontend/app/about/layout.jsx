// app/about/layout.jsx
'use client';

import { motion } from 'framer-motion';

export default function AboutLayout({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen w-full px-4 sm:px-6 py-12 flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
    >
      <div className="w-full max-w-4xl">{children}</div>
    </motion.main>
  );
}
