'use client'

import { signIn } from "next-auth/react"

export default function SignInButton() {
  const handleGoogleSignIn = async () => {
    console.log("Google sign-in button clicked");
    try {
      await signIn("google");
      console.log("signIn function called");
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return <button onClick={handleGoogleSignIn}>Sign in with Google</button>
}
