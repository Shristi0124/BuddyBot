'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { toast } from 'react-hot-toast'

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)

  const loginWithGoogle = async () => {
    setIsLoading(true)
    try {
      await signIn('google', { callbackUrl: '/' })
    } catch (error) {
      console.error(error)
      toast.error('Login failed')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-800">Login to BuddyBot</h2>
        <p className="text-gray-500 text-sm mt-2">Use your Google account to continue</p>

        <Button
          onClick={loginWithGoogle}
          disabled={isLoading}
          className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          {isLoading ? 'Signing in...' : 'Sign in with Google'}
        </Button>
      </div>
    </div>
  )
}
