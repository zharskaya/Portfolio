"use client";

import React from 'react';
import { motion } from "framer-motion";

export default function Project4Story() {
  return (
    <div className="space-y-12 md:space-y-16 min-h-[60vh]">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="container"
      >
        <p>Still sketching the story… check back soon!</p>  
      </motion.section>
    </div>
  );
} 