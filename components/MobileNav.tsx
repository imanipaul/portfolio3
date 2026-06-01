"use client";

import { useState } from "react";
import { navLinks, social } from "@/config/site";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";

export function MobileNav() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      {/* Mobile Header */}
      <header className="hidden max-md:flex sticky top-0 z-99 bg-background [border-bottom:0.5px_solid_var(--border)] px-5 py-[13px] items-center justify-between transition-[background,border-color] duration-300">
        <div className="text-[15px] font-medium text-foreground">
          Imani Paul
        </div>
        <div className="flex items-center gap-[10px]">
          <ThemeToggle compact={true} />
          <button
            className={`hamburger${drawerOpen ? " open" : ""} flex flex-col gap-[5px] cursor-pointer p-1 bg-transparent border-none`}
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
      <nav
        className={`hidden max-md:flex fixed inset-0 z-98 bg-background px-7 pt-[80px] pb-10 flex-col justify-between transition-[transform,background] duration-300 ease-in-out${drawerOpen ? " translate-x-0" : " translate-x-full"}`}
      >
        <div>
          <div className="text-[12px] font-mono text-(--text-muted) mb-[6px]">
            Previously <span className="text-(--accent)">Nike / S23NYC</span>
          </div>
          <div className="text-[13px] text-(--text-secondary) mb-7 leading-[1.7]">
            I build accessible, pixel-perfect digital experiences.
          </div>
          <div className="flex flex-col">
            {navLinks.map(({ href, label }, index) => (
              <a
                key={href}
                href={href}
                onClick={closeDrawer}
                className="text-[14px] py-[14px] [border-bottom:0.5px_solid_var(--border)] tracking-[0.06em] uppercase font-mono text-(--text-muted) no-underline flex items-center gap-3"
              >
                <span className="text-[10px] text-(--border-mid) tracking-[0.05em]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Link
            href={"/resume.pdf"}
            className="inline-flex items-center gap-2 text-[12px] font-mono text-(--accent) [border:0.5px_solid_var(--accent-dim)] px-[14px] py-2 rounded-[4px] no-underline"
          >
            View résumé <span>↗</span>
          </Link>
          <div className="flex gap-3 items-center">
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
                className="w-[34px] h-[34px] rounded-full [border:0.5px_solid_var(--border)] flex items-center justify-center text-(--text-muted) text-[11px] font-mono no-underline transition-[border-color,color,transform] duration-200 hover:border-(--accent) hover:text-(--accent) hover:-translate-y-0.5"
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
