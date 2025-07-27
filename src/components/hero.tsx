"use client";

import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { SearchCheck, PencilRuler, Gem, LocateFixed } from "lucide-react";

const highlights = [
  {
    number: "15+",
    text: "YRS\nExperience",
  },
  {
    number: "3+",
    text: "YRS Leading\nDesign Function",
  },
  {
    icon: LocateFixed,
    text: "Design\nStrategy",
  },
  {
    icon: Gem,
    text: "Product\nDesign",
  },
  {
    icon: SearchCheck,
    text: "Reseach &\nValidation",
  },
  {
    icon: PencilRuler,
    text: "Design\nSystems",
  },
  
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface HeroProps {
  onAnimationComplete: () => void;
}

export const Hero = forwardRef<HTMLElement, HeroProps>(({ onAnimationComplete }, ref) => {
  return (
    <motion.section 
      ref={ref}
      id="hero"
      className="section-container text-center pb-12 md:pb-16 pt-16 md:pt-24"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      onAnimationComplete={onAnimationComplete}
    >
      <motion.h2 variants={itemVariants} className="text-muted font-extraboldt mb-0">
        Svetlana Zharskaya
      </motion.h2>
      <motion.h1 variants={itemVariants} className="font-black mt-0">
        Product Design Leader
      </motion.h1>
      <motion.p variants={itemVariants} className="text-muted-foreground font-bold leading-tight mt-8 sm:mt-10 md:mt-12 lg:mt-14 mb-0">
        Making complex feel simple.
      </motion.p>
      <motion.p variants={itemVariants} className="text-muted-foreground font-bold leading-tight mt-1 md:mt-2">
        Leading teams that deliver.
      </motion.p>   

      {/* Highlights Section */}
      <motion.div variants={itemVariants} className="mt-16 sm:mt-18 md:mt-20 lg:mt-24 flex justify-center">
        <div className="grid [grid-template-columns:repeat(2,max-content)] sm:[grid-template-columns:repeat(3,max-content)] lg:[grid-template-columns:repeat(6,max-content)] gap-8 md:gap-12 lg:gap-14">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex flex-row items-center text-left gap-4">
              {item.icon ? (
                <item.icon className="w-6 h-6 flex-shrink-0 text-accent" />
              ) : (
                <span className="h-6 text-xl font-extrabold flex-shrink-0 text-accent">
                  {item.number}
                </span>
              )}
              <span className="text-xs uppercase tracking-wide font-extrabold bg-gradient-to-r from-[#02A7AD] to-[#7B6BED] bg-clip-text text-transparent">
                {item.text.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i !== item.text.split('\n').length - 1 && <br />}
                </React.Fragment>
                ))}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
});

Hero.displayName = "Hero"; 