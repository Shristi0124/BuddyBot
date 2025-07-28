'use client'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { toast } from 'react-hot-toast'

import HeroSection from '../components/HeroSection'
// import WeatherCard from '../components/WeatherCard'
// import Notes from '../components/Notes'
// import Reminders from '../components/Reminders'

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)

  const loginWithGoogle = async () => {
    setIsLoading(true)
    try {
      await signIn('google', { callbackUrl: '/' })
    } catch (error) {
      console.error(error)
      toast.error('Something went wrong during login.')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      {/* Hero Section (can show some intro even before login) */}
      <div className="mb-8 w-full max-w-2xl">
        <HeroSection />
      </div>



      {/* Optional: Preview Components (commented until authenticated routing is set up) */}
      {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl">
        <WeatherCard />
        <Notes />
        <Reminders />
      </div> */}
    </div>
  )
}
