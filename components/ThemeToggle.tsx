"use client";

import { useState, useEffect } from "react";
import { setThemeCookie } from "@/app/actions/theme";

export function ThemeToggle({ compact = false }: { compact: boolean }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme") as "dark" | "light";
    if (current) setTheme(current);
  }, []);

  const toggleTheme = async () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    await setThemeCookie(next);
  };

  const isDark = theme === "dark";

  const optionBase = `text-[11px] font-mono text-[var(--text-muted)] rounded-[16px] transition-all duration-200 cursor-pointer flex items-center gap-[5px]${compact ? " px-2 py-[2px]" : " px-[10px] py-[3px]"}`;
  const activeOption = "bg-[var(--accent)] !text-white";

  return (
    <div
      className={`flex items-center gap-2 bg-(--toggle-bg) [border:0.5px_solid_var(--toggle-border)] rounded-[20px] cursor-pointer transition-all duration-200 w-fit hover:[border-color:var(--accent)]${compact ? " px-[5px] py-[3px]" : " px-[6px] py-[4px]"}`}
      onClick={toggleTheme}
    >
      <div className={`${optionBase}${isDark ? ` ${activeOption}` : ""}`}>
        🌙{!compact && " Dark"}
      </div>
      <div className={`${optionBase}${!isDark ? ` ${activeOption}` : ""}`}>
        ☀️{!compact && " Light"}
      </div>
    </div>
  );
}
