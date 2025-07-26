'use client';
import React from 'react';

export default function TopNavbar() {
  return (
    <header className="h-16 px-6 bg-white border-b flex items-center justify-between">
      <div className="text-lg font-medium">Dashboard</div>
      <div className="flex items-center space-x-4">
        <div className="h-10 w-10 rounded-full bg-blue-200 flex items-center justify-center text-white font-bold">
          U
        </div>
      </div>
    </header>
  );
}
