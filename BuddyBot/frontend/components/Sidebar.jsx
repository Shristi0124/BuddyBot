// components/Sidebar.jsx
import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { CogIcon, ChatBubbleLeftRightIcon, HomeIcon } from '@heroicons/react/24/outline';

export default function Sidebar() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="hidden md:flex md:flex-col w-64 h-full border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">BuddyBot</h1>
      </div>
      
      <div className="flex-1 flex flex-col overflow-y-auto">
        <nav className="flex-1 px-2 py-4 space-y-1">
          <Link 
            href="/dashboard" 
            className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <HomeIcon className="h-5 w-5 mr-3" />
            Dashboard
          </Link>
          <Link 
            href="/dashboard/chat" 
            className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <ChatBubbleLeftRightIcon className="h-5 w-5 mr-3" />
            Chat
          </Link>
          <Link 
            href="/dashboard/settings" 
            className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <CogIcon className="h-5 w-5 mr-3" />
            Settings
          </Link>
        </nav>
      </div>
      
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          {theme === 'dark' ? (
            <>
              <SunIcon className="h-5 w-5 mr-3" />
              Light Mode
            </>
          ) : (
            <>
              <MoonIcon className="h-5 w-5 mr-3" />
              Dark Mode
            </>
          )}
        </button>
      </div>
    </div>
  );
}