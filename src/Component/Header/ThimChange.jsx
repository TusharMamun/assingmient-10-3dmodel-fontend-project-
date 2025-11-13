import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThimChange = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Apply theme to <html> element
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="absolute left-0 -top-2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition"
      title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-yellow-300" />
      ) : (
        <Sun className="w-5 h-5 text-yellow-300" />
      )}
    </button>
  );
};

export default ThimChange;