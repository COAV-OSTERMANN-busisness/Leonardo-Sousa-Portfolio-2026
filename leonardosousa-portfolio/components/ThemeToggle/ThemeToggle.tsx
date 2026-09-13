"use client";

import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

type Theme = "dark" | "light";

const STORAGE_KEY = "theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY);

    const initialTheme: Theme =
      savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";

    setTheme(initialTheme);

    document.documentElement.setAttribute("data-theme", initialTheme);

    setInitialized(true);
  }, []);

  useEffect(() => {
    if (!initialized) {
      return;
    }

    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme, initialized]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  const isDark = theme === "dark";

  return (
    <div className="border-b border-white/10 pb-4">
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[var(--color-background)] text-[var(--color-text-secondary)] transition-colors duration-200 hover:border-[var(--color-primary)] hover:text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
      >
        <FontAwesomeIcon
          icon={isDark ? faSun : faMoon}
          className="h-4 w-4"
          aria-hidden="true"  
        />
      </button>
    </div>
  );
}
