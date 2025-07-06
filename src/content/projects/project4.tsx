"use client";

import React, { useEffect, useRef } from 'react';
import { TrendingDown, TrendingUp, Zap, Gem } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Project4Story() {
  return (
    <div className="space-y-12 md:space-y-16">

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container"
      >
        <h2 className='text-primary'>Still sketching the story… check back soon!</h2>  
      </motion.section>
      
    </div>
  );
} 