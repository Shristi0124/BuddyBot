"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulated user data (can be replaced with real auth/user context)
  const user = {
    name: "Shristi",
    role: "AI Developer",
    location: "Dehradun, India",
  };

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/welcome")
      .then((res) => {
        if (!res.ok) throw new Error("Backend error");
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API error:", err);
        setError("Failed to connect to backend");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-8">
      <h1 className="text-3xl font-bold mb-6">👋 Welcome back, {user.name}!</h1>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-2">Your Info</h2>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Location:</strong> {user.location}</p>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-2">📡 Backend Status</h2>

        {loading && <p className="text-blue-500">Loading from backend...</p>}
        {error && <p className="text-red-500">❌ {error}</p>}
        {data && (
          <p className="text-green-600 dark:text-green-400">
            ✅ {data.message}
          </p>
        )}
      </div>
    </div>
  );
}
