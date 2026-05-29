"use client";

import { motion } from "framer-motion";

export function SidebarWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.aside
      className="sidebar"
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.aside>
  );
}
