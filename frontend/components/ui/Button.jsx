'use client'

export default function Button({ children, className = '', ...props }) {
  return (
    <button
      {...props}
      className={`px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 
                 text-white text-sm md:text-base font-semibold 
                 transition duration-200 focus:outline-none focus:ring-2 
                 focus:ring-offset-2 focus:ring-blue-500 shadow-md 
                 ${className}`}
    >
      {children}
    </button>
  )
}
