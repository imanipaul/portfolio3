"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function Header() {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      {/* Status — green pulsing dot */}
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

      {/* Name */}
      <motion.div
        variants={item}
        className="text-[30px] font-medium text-foreground tracking-[-0.02em] leading-[1.1] mb-2 transition-[color] duration-300"
      >
        Imani Paul
      </motion.div>

      {/* Role */}
      <motion.div
        variants={item}
        className="text-[13px] text-(--text-secondary) font-mono mb-1 transition-[color] duration-300"
      >
        Software Engineer
      </motion.div>

      {/* Previous */}
      <motion.div
        variants={item}
        className="text-[12px] text-(--text-muted) font-mono mb-[22px] transition-[color] duration-300"
      >
        Previously <span className="text-(--accent)">Nike</span>
      </motion.div>

      {/* Tagline */}
      <motion.div
        variants={item}
        className="text-[13px] leading-[1.75] text-(--text-secondary) max-w-[200px] mb-9 transition-[color] duration-300"
      >
        7+ years of experience building the right solutions to hard frontend
        problems, across consumer and B2B products.
      </motion.div>
    </motion.div>
  );
}
