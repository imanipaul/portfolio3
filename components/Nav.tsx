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
            <motion.div
              animate={{ width: lineWidth, background: lineBg }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              style={{ height: "1px", flexShrink: 0 }}
            />
            {label}
          </a>
        );
      })}
    </motion.nav>
  );
}
