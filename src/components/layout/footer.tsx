"use client";

import React from "react";

import { motion, AnimatePresence } from "framer-motion";
import { useAnimation } from "@/context/animation-provider";

export function Footer() {
  const { isHeaderVisible } = useAnimation(); // Reuse the same state for the footer

  return (
    <AnimatePresence>
      {isHeaderVisible && (
        <motion.footer 
          className="w-full py-6 bg-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-container text-center text-muted-foreground">
            <p className="text-xs tracking-wide">&copy; {new Date().getFullYear()} Svetlana Zharskaya. Crafting incredible stuff since 2008. Now with a sprinkle of AI.</p>
          </div>
        </motion.footer>
      )}
    </AnimatePresence>
  );
} 