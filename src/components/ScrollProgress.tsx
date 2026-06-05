"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import React from "react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Use a spring to make the bar move smoothly
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 to-purple-600 origin-left z-[10001] shadow-[0_0_15px_rgba(0,242,254,0.8)]"
      style={{ scaleX }}
    />
  );
}
