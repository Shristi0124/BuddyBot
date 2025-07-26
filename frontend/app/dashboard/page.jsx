'use client';
import React from 'react';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Welcome to Your Dashboard 👋</h1>
      <p className="text-gray-600">Here's a quick overview of your activity and tools.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Generate Ideas" description="Create new AI SaaS startup ideas using GPT." />
        <Card title="Deploy Projects" description="Push your ideas to Vercel or GitHub in 1-click." />
        <Card title="Download eBooks" description="Get lifetime access to AI guides & PDFs." />
      </div>
    </div>
  );
}

function Card({ title, description }) {
  return (
    <div className="rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
}
