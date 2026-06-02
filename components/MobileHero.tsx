"use client";
import { social } from "@/config/site";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";

export function MobileHero() {
  const item = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const socials = [
    { label: "GH", href: social.github, ariaLabel: "GitHub" },
    { label: "LI", href: social.linkedin, ariaLabel: "LinkedIn" },
    { label: "EM", href: social.email, ariaLabel: "Email" },
  ];
  return (
    <>
      <header className="hidden max-md:flex flex-col  bg-background [border-bottom:0.5px_solid_var(--border)] px-5 py-[25px] justify-between transition-[background,border-color] duration-300">
        <div className="flex justify-between">
          <div className="text-[30px] font-medium text-foreground tracking-[-0.02em] leading-[1.1] mb-2 transition-[color] duration-300">
            Imani Paul
          </div>
          <ThemeToggle compact />
        </div>
        <div className="text-[13px] text-(--text-secondary) font-mono mb-1 transition-[color] duration-300">
          Software Engineer
        </div>
        <div className="text-[12px] text-(--text-muted) font-mono transition-[color] duration-300 mb-[22px]">
          Previously <span className="text-(--accent)">Nike</span>
        </div>
        <div>
          <motion.div
            variants={item}
            className="inline-flex items-center gap-[7px] text-[11px] text-(--green) font-mono tracking-[0.04em] mb-[22px]"
          >
            <motion.div
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
              className="w-[7px] h-[7px] rounded-full bg-(--green) shadow-[0_0_8px_var(--green)] shrink-0"
            />
            Available for new roles
          </motion.div>
        </div>
        <div className="text-[13px] leading-[1.75] text-(--text-secondary) max-w-2/3  mb-9 transition-[color] duration-300">
          7+ years of experience building the right solutions to hard frontend
          problems, across consumer and B2B products.
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-3 ">
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
          <Link
            href={"/resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[12px] font-mono text-(--accent) no-underline [border:0.5px_solid_var(--accent-dim)] px-[14px] py-2 rounded-[4px] w-fit transition-[background,border-color] duration-200 hover:bg-(--accent-dim) hover:border-(--accent)"
          >
            View résumé <span>↗</span>
          </Link>
        </div>
      </header>
    </>
  );
}
