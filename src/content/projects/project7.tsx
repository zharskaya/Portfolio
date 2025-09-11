"use client";

import React from 'react';
import { motion } from "framer-motion";
import { CircleCheck, Zap } from "lucide-react";

export default function Project7Story() {
  return (
    <div className="space-y-12 md:space-y-16 min-h-[60vh]">
      
      {/* Overview Section */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="prose dark:prose-invert max-w-none">
          <h1>AI Coding Assistant. Advanced Context Engineering</h1>
          <p>Empowered developers with advanced context and memory controls — enabling them to decide what the AI knows, reduce irrelevant suggestions, and speed up coding workflows.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
              <CircleCheck className="w-6 h-6 text-green-500" />
              <span className="font-semibold">42% fewer irrelevant AI suggestions</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
              <Zap className="w-6 h-6 text-yellow-500" />
              <span className="font-semibold">27% faster task completion in testing</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
              <CircleCheck className="w-6 h-6 text-blue-500" />
              <span className="font-semibold">35% fewer context-related errors</span>
            </div>
          </div>
        </div>
      </motion.section>
      
    </div>
  );
}
