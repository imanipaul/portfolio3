"use client";

import { useState } from "react";
import { navLinks } from "@/config/site";

export function Nav() {
  const [active, setActive] = useState("#about");
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav
      aria-label="Main navigation"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2px",
        opacity: 0,
        animation: "fadeUp 0.5s ease 0.45s forwards",
      }}
    >
      {navLinks.map(({ href, label }) => {
        const isActive = active === href;
        const isHovered = hovered === href;
        const lineWidth = isActive ? 40 : isHovered ? 30 : 20;
        const lineBg = isActive ? "var(--accent)" : "var(--border-mid)";

        return (
          <a
            key={href}
            href={href}
            onClick={() => setActive(href)}
            onMouseEnter={() => setHovered(href)}
            onMouseLeave={() => setHovered(null)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "6px 0",
              textDecoration: "none",
              color: isActive
                ? "var(--text-primary)"
                : isHovered
                ? "var(--text-secondary)"
                : "var(--text-muted)",
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontFamily: "var(--font-dm-mono)",
              transition: "color 0.2s",
            }}
          >
            <div
              style={{
                height: "1px",
                width: `${lineWidth}px`,
                background: lineBg,
                transition: "width 0.25s ease, background 0.25s ease",
                flexShrink: 0,
              }}
            />
            {label}
          </a>
        );
      })}
    </nav>
  );
}
