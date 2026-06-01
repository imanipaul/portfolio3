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
      className="flex flex-col gap-[2px]"
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
            className={`flex items-center gap-3 py-[7px] no-underline text-[11px] tracking-widest uppercase font-mono transition-[color] duration-200 ${
              isActive
                ? "text-foreground"
                : isHovered
                  ? "text-(--text-secondary)"
                  : "text-(--text-muted)"
            }`}
          >
            <span
              className={`text-[10px] font-mono transition-[color] duration-200 shrink-0 tracking-[0.05em] ${
                isActive
                  ? "text-(--accent)"
                  : isHovered
                    ? "text-(--text-muted)"
                    : "text-(--border-mid)"
              }`}
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
