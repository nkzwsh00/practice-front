import { createContext, useContext } from "react";

// Theme context
export const ThemeContext = createContext({
  isDark: true,
  toggleTheme: () => {},
});

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded ${
        isDark ? "bg-yellow-400 text-gray-900" : "bg-gray-800 text-white"
      }`}
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
};
