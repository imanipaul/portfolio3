"use client";

import { useState } from "react";

export function ThemeToggle({ compact = false }: { compact: boolean }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  };

  const isDark = theme === "dark";

  return (
    <div
      className="mode-toggle w-fit"
      onClick={toggleTheme}
      style={compact ? { padding: "3px 5px" } : undefined}
    >
      <div
        className={`toggle-option${isDark ? " active" : ""}`}
        style={compact ? { padding: "2px 8px" } : undefined}
      >
        🌙{!compact && " Dark"}
      </div>
      <div
        className={`toggle-option${!isDark ? " active" : ""}`}
        style={compact ? { padding: "2px 8px" } : undefined}
      >
        ☀️{!compact && " Light"}
      </div>
    </div>
  );
}
