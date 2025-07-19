import { useContext, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { AppContext } from "@/context/AppContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(AppContext);

  // Apply theme on initial load
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full shadow bg-gray-200 dark:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="text-black w-5 h-5" />
      ) : (
        <Sun className="text-white w-5 h-5" />
      )}
    </button>
  );
}
