"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/config/site";

export function Nav() {
  const [active, setActive] = useState("#about");
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <motion.nav
      aria-label="Main navigation"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.55 }}
      style={{ display: "flex", flexDirection: "column", gap: "2px" }}
    >
      {navLinks.map(({ href, label }, index) => {
        const isActive = active === href;
        const isHovered = hovered === href;
        const num = String(index + 1).padStart(2, "0");

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
              gap: "12px",
              padding: "7px 0",
              textDecoration: "none",
              color: isActive
                ? "var(--text-primary)"
                : isHovered
                ? "var(--text-secondary)"
                : "var(--text-muted)",
              fontSize: "11px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "var(--font-dm-mono)",
              transition: "color 0.2s",
            }}
          >
            <span
              style={{
                fontSize: "10px",
                fontFamily: "var(--font-dm-mono)",
                color: isActive
                  ? "var(--accent)"
                  : isHovered
                  ? "var(--text-muted)"
                  : "var(--border-mid)",
                transition: "color 0.2s",
                flexShrink: 0,
                letterSpacing: "0.05em",
              }}
            >
              {num}
            </span>
            {label}
          </a>
        );
      })}
    </motion.nav>
  );
}
