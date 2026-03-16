"use client";

import React from "react";

import { motion, AnimatePresence } from "framer-motion";
import { useAnimation } from "@/context/animation-provider";

export function Footer() {
  const { isHeaderVisible } = useAnimation();

  return (
    <AnimatePresence>
      {isHeaderVisible && (
        <motion.footer
          className="w-full py-6 bg-background"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-container text-center text-muted-foreground">
            <p className="font-heading text-xs mx-auto">&copy; {new Date().getFullYear()} Zharskaya. Design. Love. AI.</p>
          </div>
        </motion.footer>
      )}
    </AnimatePresence>
  );
}
