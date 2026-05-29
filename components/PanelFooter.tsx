"use client";

import { motion } from "framer-motion";
import { social } from "@/config/site";

const socials = [
  { label: "GH", href: social.github, ariaLabel: "GitHub" },
  { label: "LI", href: social.linkedin, ariaLabel: "LinkedIn" },
  { label: "DR", href: social.dribbble, ariaLabel: "Dribbble" },
];

export function PanelFooter() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.75 }}
      style={{ display: "flex", flexDirection: "column", gap: "16px" }}
    >
      <a
        href={social.resume}
        target="_blank"
        rel="noopener noreferrer"
        className="resume-btn"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "12px",
          fontFamily: "var(--font-dm-mono)",
          color: "var(--accent)",
          textDecoration: "none",
          border: "0.5px solid var(--accent-dim)",
          padding: "8px 14px",
          borderRadius: "4px",
          width: "fit-content",
          transition: "background 0.2s, border-color 0.2s",
        }}
      >
        View résumé <span>↗</span>
      </a>

      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        {socials.map(({ label, href, ariaLabel }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className="social-icon"
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              border: "0.5px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-muted)",
              fontSize: "13px",
              fontFamily: "var(--font-dm-mono)",
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s, transform 0.2s",
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </motion.div>
  );
}
