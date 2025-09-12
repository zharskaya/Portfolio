"use client";

import { motion } from 'framer-motion';
import React from 'react';


export default function Project7Story() {
  return (
    <div className="space-y-12 md:space-y-16">
      
      {/* Overview Section */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="container"
      >
        <div>
        <h2 className='text-primary'>Compiling case study… will be ready soon!</h2>
      </div>
      </motion.section>
    </div>
  );
}
