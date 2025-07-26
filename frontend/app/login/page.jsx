'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn('google', { callbackUrl: '/' });
    } catch (error) {
      toast.error('Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-3xl font-bold mb-2">Login to BuddyBot</h1>
        <p className="text-gray-500 text-sm mt-2">
          Use your Google account to continue
        </p>

        <button
          onClick={loginWithGoogle}
          disabled={isLoading}
          className={`mt-6 px-4 py-2 rounded text-white font-medium transition ${
            isLoading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-red-500 hover:bg-red-600'
          }`}
        >
          {isLoading ? 'Logging in...' : 'Sign in with Google'}
        </button>
      </div>
    </>
  );
}
