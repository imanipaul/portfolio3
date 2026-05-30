"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Header() {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      {/* Status — green pulsing dot */}
      <motion.div
        variants={item}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "7px",
          fontSize: "11px",
          color: "var(--green)",
          fontFamily: "var(--font-dm-mono)",
          letterSpacing: "0.04em",
          marginBottom: "22px",
        }}
      >
        <motion.div
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          style={{
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            background: "var(--green)",
            boxShadow: "0 0 8px var(--green)",
            flexShrink: 0,
          }}
        />
        Available for new roles
      </motion.div>

      {/* Name */}
      <motion.div
        variants={item}
        style={{
          fontSize: "30px",
          fontWeight: 500,
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          marginBottom: "8px",
          transition: "color 0.3s",
        }}
      >
        Imani Paul
      </motion.div>

      {/* Role */}
      <motion.div
        variants={item}
        style={{
          fontSize: "13px",
          color: "var(--text-secondary)",
          fontFamily: "var(--font-dm-mono)",
          marginBottom: "4px",
          transition: "color 0.3s",
        }}
      >
        Software Engineer
      </motion.div>

      {/* Previous */}
      <motion.div
        variants={item}
        style={{
          fontSize: "12px",
          color: "var(--text-muted)",
          fontFamily: "var(--font-dm-mono)",
          marginBottom: "22px",
          transition: "color 0.3s",
        }}
      >
        Previously{" "}
        <span style={{ color: "var(--accent)" }}>Nike / S23NYC</span>
      </motion.div>

      {/* Tagline */}
      <motion.div
        variants={item}
        style={{
          fontSize: "13px",
          lineHeight: 1.75,
          color: "var(--text-secondary)",
          maxWidth: "200px",
          marginBottom: "36px",
          transition: "color 0.3s",
        }}
      >
        I build accessible, pixel-perfect digital experiences that bridge
        technical complexity and human need.
      </motion.div>
    </motion.div>
  );
}
