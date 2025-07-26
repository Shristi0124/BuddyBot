'use client';
import React from 'react';
import { Home, Settings, User } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-4 hidden md:block">
      <div className="text-2xl font-bold mb-6">BuddyBot</div>
      <nav className="space-y-4">
        <SidebarLink icon={<Home size={20} />} label="Dashboard" />
        <SidebarLink icon={<User size={20} />} label="Profile" />
        <SidebarLink icon={<Settings size={20} />} label="Settings" />
      </nav>
    </aside>
  );
}

function SidebarLink({ icon, label }) {
  return (
    <div className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer">
      {icon}
      <span>{label}</span>
    </div>
  );
}
