'use client';

import HeroSection from '../components/HeroSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-[#0d0d0d] dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <HeroSection />
      </div>
    </main>
  );
}
