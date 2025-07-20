'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'

export default function LoginPage() {
  const [loading, setLoading] = useState(false)

  const handleGoogleSignIn = async () => {
    setLoading(true)
    try {
      await signIn('google', { callbackUrl: '/' })
    } catch (error) {
      console.error('Sign-in error:', error)
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
      <div className="p-8 bg-gray-100 dark:bg-gray-900 rounded-xl shadow-md text-center">
        <h1 className="text-2xl font-bold mb-6 text-black dark:text-white">Sign in to BuddyBot</h1>
        <button
          onClick={handleGoogleSignIn}
          className="bg-white border border-gray-300 px-6 py-3 rounded-lg flex items-center gap-3 hover:shadow-md dark:bg-gray-800 dark:text-white"
        >
          <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
          {loading ? 'Signing in...' : 'Sign in with Google'}
        </button>
      </div>
    </div>
  )
}
