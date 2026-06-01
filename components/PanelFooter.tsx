"use client";

import { motion } from "framer-motion";
import { social } from "@/config/site";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";

const socials = [
  { label: "GH", href: social.github, ariaLabel: "GitHub" },
  { label: "LI", href: social.linkedin, ariaLabel: "LinkedIn" },
  { label: "EM", href: social.email, ariaLabel: "Email" },
];

export function PanelFooter() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.75 }}
      className="flex flex-col gap-4"
    >
      <ThemeToggle compact={false} />
      <Link
        href={"/resume.pdf"}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-[12px] font-mono text-(--accent) no-underline [border:0.5px_solid_var(--accent-dim)] px-[14px] py-2 rounded-[4px] w-fit transition-[background,border-color] duration-200 hover:bg-(--accent-dim) hover:border-(--accent)"
      >
        View résumé <span>↗</span>
      </Link>

      <div className="flex gap-3 items-center">
        {socials.map(({ label, href, ariaLabel }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className="w-[34px] h-[34px] rounded-full [border:0.5px_solid_var(--border)] flex items-center justify-center text-(--text-muted) text-[11px] font-mono no-underline transition-[border-color,color,transform] duration-200 hover:border-(--accent) hover:text-(--accent) hover:-translate-y-0.5"
          >
            {label}
          </a>
        ))}
      </div>
    </motion.div>
  );
}
