'use client';

import React from 'react';
import Sidebar from '@/components/ui/Sidebar';
import TopNavbar from '@/components/ui/TopNavbar';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-col flex-1">
        <TopNavbar />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
