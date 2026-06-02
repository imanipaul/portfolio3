"use client";

import { motion } from "framer-motion";

export function SidebarWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.aside
      className="hidden md:flex flex-col justify-between shrink-0 w-[240px] lg:w-[320px] pt-12 pr-5 pb-10 pl-7 lg:pt-16 lg:pr-9 lg:pb-14 lg:pl-12 sticky top-[0px] h-[calc(100vh-41px)] [border-right:0.5px_solid_var(--border)] overflow-y-auto transition-[border-color] duration-300"
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.aside>
  );
}
