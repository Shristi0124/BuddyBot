'use client';

import React from 'react';
import classNames from 'classnames';

export function Button({ children, className = '', variant = 'primary', ...props }) {
  const baseStyle =
    'inline-flex items-center justify-center font-semibold rounded-2xl transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md';

  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white',
    ghost: 'bg-transparent border border-white hover:bg-white hover:text-black text-white',
  };

  return (
    <button
      {...props}
      className={classNames(baseStyle, variants[variant], 'px-4 py-2', className)}
    >
      {children}
    </button>
  );
}
