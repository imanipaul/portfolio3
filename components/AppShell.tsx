"use client";

import { useState } from "react";
import { navLinks, social } from "@/config/site";

export function AppShell() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  };

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);
  const closeDrawer = () => setDrawerOpen(false);

  const isDark = theme === "dark";

  return (
    <>
      {/* Desktop Topbar */}
      <div className="topbar">
        <div className="topbar-left">
          <span style={{ color: "var(--accent)" }}>✦</span>
          <span>Imani Paul — Software Engineer</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <ModeToggle isDark={isDark} onToggle={toggleTheme} />
        </div>
      </div>

      {/* Mobile Header */}
      <header className="mobile-header">
        <div className="mobile-name">Imani Paul</div>
        <div className="mobile-right">
          <ModeToggle isDark={isDark} onToggle={toggleTheme} compact />
          <button
            className={`hamburger${drawerOpen ? " open" : ""}`}
            onClick={toggleDrawer}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <nav className={`mobile-drawer${drawerOpen ? " open" : ""}`}>
        <div>
          <div
            style={{
              fontSize: "12px",
              fontFamily: "var(--font-dm-mono)",
              color: "var(--text-muted)",
              marginBottom: "6px",
            }}
          >
            Previously{" "}
            <span style={{ color: "var(--accent)" }}>Nike / S23NYC</span>
          </div>
          <div
            style={{
              fontSize: "13px",
              color: "var(--text-secondary)",
              marginBottom: "28px",
              lineHeight: 1.7,
            }}
          >
            I build accessible, pixel-perfect digital experiences.
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {navLinks.map(({ href, label }, index) => (
              <a
                key={href}
                href={href}
                onClick={closeDrawer}
                style={{
                  fontSize: "14px",
                  padding: "14px 0",
                  borderBottom: "0.5px solid var(--border)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-dm-mono)",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <span style={{ fontSize: "10px", color: "var(--border-mid)", letterSpacing: "0.05em" }}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                {label}
              </a>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a
            href={social.resume}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "12px",
              fontFamily: "var(--font-dm-mono)",
              color: "var(--accent)",
              border: "0.5px solid var(--accent-dim)",
              padding: "8px 14px",
              borderRadius: "4px",
              textDecoration: "none",
            }}
          >
            View résumé <span>↗</span>
          </a>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            {[
              { label: "GH", href: social.github, aria: "GitHub" },
              { label: "LI", href: social.linkedin, aria: "LinkedIn" },
              { label: "EM", href: social.email, aria: "Email" },
            ].map(({ label, href, aria }) => (
              <a
                key={label}
                href={href}
                aria-label={aria}
                target="_blank"
                rel="noopener noreferrer"
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
                  fontSize: "11px",
                  fontFamily: "var(--font-dm-mono)",
                  textDecoration: "none",
                  transition: "border-color 0.2s, color 0.2s, transform 0.2s",
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

function ModeToggle({
  isDark,
  onToggle,
  compact,
}: {
  isDark: boolean;
  onToggle: () => void;
  compact?: boolean;
}) {
  return (
    <div
      className="mode-toggle"
      onClick={onToggle}
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
