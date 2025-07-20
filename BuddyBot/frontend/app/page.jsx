"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import HeroSection from "../components/HeroSection";
import Button from "../components/ui/Button";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong during login.");
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-xl rounded-xl text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Welcome to BuddyBot
        </h2>

        <Button
          onClick={loginWithGoogle}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition text-sm">
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
