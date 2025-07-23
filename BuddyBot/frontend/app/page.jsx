// app/page.jsx
'use client'

import HeroSection from '../components/HeroSection'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-[#0d0d0d] dark:text-white transition-colors duration-300">
      <HeroSection />
    </main>
  )
}
