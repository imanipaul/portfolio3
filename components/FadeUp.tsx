"use client";

import { motion } from "framer-motion";

// Position only — animating opacity lets Lighthouse sample text mid-fade at low contrast
const variants = {
  hidden: { y: 24 },
  visible: {
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export function FadeUp({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={`fade-up ${className}`} variants={variants}>
      {children}
    </motion.div>
  );
}
