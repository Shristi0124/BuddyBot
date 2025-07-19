// components/Header.tsx
export default function Header() {
  return (
    <header className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">🤖 BuddyBot</h1>
        <button
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-sm"
          onClick={() =>
            document.documentElement.classList.toggle('dark')
          }
        >
          Toggle Theme
        </button>
      </div>
    </header>
  )
}
