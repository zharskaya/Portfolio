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
            <p className="text-xs text-muted-foreground">Disclaimer: For legal reasons, the company name and branding have been changed.</p>
            <h2 className='text-primary'>Context</h2>
            <p>
              Developers work within a rich ecosystem of tools, documentation, and codebases. Yet when using AI coding assistants, they often struggle to get accurate results because the assistant lacks sufficient context. Instead of saving time, they end up explaining, correcting, or even rewriting code manually. This undermines efficiency, slows adoption, and prevents the tool from reaching its full potential.
            </p>    
        </div>
        
        <div>
          <h2 className='text-primary'>Challenge</h2>
          <p>
            Design a seamless experience that brings the right context into the coding assistant, so developers can focus on building instead of fixing.
          </p>
        </div>

        <div>
          <h2 className='text-primary'>My Design Footprint</h2>
          <p>
            User research, UX/UI design, Prototyping
          </p>
        </div>

        <h2 className='text-primary'>Compiling the rest of the story… will be ready soon!</h2>
      </motion.section>
    </div>
  );
}
