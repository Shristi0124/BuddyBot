'use client'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { toast } from 'react-hot-toast'
import Button from '@/components/ui/Button'

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
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-xl rounded-xl text-center">
        <h2 className="text-2xl font-bold text-gray-800">Welcome to BuddyBot</h2>

        <Button
          onClick={loginWithGoogle}
          isLoading={isLoading}
          className="w-full flex items-center justify-center gap-2"
        >
          {!isLoading && (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
              <path
                d="M21.805 10.023h-9.52v3.956h5.46c-.23 1.207-.924 2.23-1.965 2.922l3.172 2.47c1.858-1.714 2.853-4.24 2.853-7.106 0-.656-.06-1.296-.17-1.932z"
                fill="#4285F4"
              />
              <path
                d="M12.286 21c2.478 0 4.56-.82 6.08-2.214l-3.172-2.47c-.882.588-2.006.938-3.126.938-2.402 0-4.436-1.622-5.164-3.804l-3.214 2.496C5.454 19.608 8.64 21 12.286 21z"
                fill="#34A853"
              />
              <path
                d="M7.122 13.45c-.202-.588-.316-1.214-.316-1.85 0-.64.114-1.264.308-1.85l-3.214-2.496C3.406 8.638 2.9 10.274 2.9 12c0 1.714.49 3.326 1.322 4.696l2.9-2.246z"
                fill="#FBBC05"
              />
              <path
                d="M12.286 6.19c1.27 0 2.408.438 3.306 1.29l2.47-2.47C16.834 3.778 14.752 3 12.286 3 8.64 3 5.454 4.39 3.51 6.804l3.214 2.496c.728-2.18 2.762-3.11 5.562-3.11z"
                fill="#EA4335"
              />
            </svg>
          )}
          {isLoading ? 'Signing in...' : 'Sign in with Google'}
        </Button>
      </div>
    </div>
  )
}
