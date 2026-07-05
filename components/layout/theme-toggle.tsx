"use client";

import { FaMoon, FaSun } from "react-icons/fa6";

import { Button } from "@/components/ui/button";

function ThemeToggle() {
  function toggleTheme() {
    const html = document.documentElement;
    const nextTheme = html.classList.contains("dark") ? "light" : "dark";

    html.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("theme", nextTheme);
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={toggleTheme}
    >
      <FaMoon className="dark:hidden" />
      <FaSun className="hidden dark:block" />
    </Button>
  );
}

export { ThemeToggle };
