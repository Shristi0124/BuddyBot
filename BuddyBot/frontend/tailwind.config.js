/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}', // Optional: if you use /pages folder too
  ],
  darkMode: 'class', // Enables dark mode via 'dark' class
  theme: {
    extend: {
      colors: {
        primary: '#6366F1', // Indigo-500 (example)
        secondary: '#F43F5E', // Rose-500 (example)
        backgroundLight: '#FFFFFF',
        backgroundDark: '#0F172A',
        textLight: '#1E293B',
        textDark: '#F8FAFC',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  
  plugins: [
    require('@tailwindcss/forms'),    // For better form styling
    require('@tailwindcss/typography'), // For prose/markdown
    require('@tailwindcss/aspect-ratio'), // For responsive media
  ],
}
