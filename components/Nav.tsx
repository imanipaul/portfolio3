"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "@/config/site";

// A section becomes active once its top crosses this fraction of the viewport
const ACTIVATION_OFFSET = 0.3;

export function Nav() {
  const [active, setActive] = useState("#about");
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      // Short final sections may never reach the activation line, so pin to
      // the last one when the page is fully scrolled
      let current = sections[0];
      if (atBottom) {
        current = sections[sections.length - 1];
      } else {
        const line = window.innerHeight * ACTIVATION_OFFSET;
        for (const section of sections) {
          if (section.getBoundingClientRect().top <= line) current = section;
        }
      }
      setActive(`#${current.id}`);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

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
