"use client";

import React, { forwardRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  "Product design",
  "AI workflows",
  "Design Strategy",
  "Research and validation",
  "Design systems",
];

const CYCLE_INTERVAL = 2500;
const ITEM_HEIGHT_SM = 22; // mobile (text-sm)
const ITEM_HEIGHT_MD = 28; // desktop md+ (text-base)

function useResponsiveCarousel() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return {
    itemHeight: isDesktop ? ITEM_HEIGHT_MD : ITEM_HEIGHT_SM,
    center: isDesktop ? skills.length - 1 : 0,
    opacities: isDesktop ? [0.4, 0.6, 0.8, 1, 1] : [1, 1, 0.8, 0.6, 0.4],
    slideIn: isDesktop ? ITEM_HEIGHT_MD : ITEM_HEIGHT_SM,
    slideOut: isDesktop ? -ITEM_HEIGHT_MD : -ITEM_HEIGHT_SM,
  };
}


function getOrderedSkills(activeIndex: number, center: number) {
  const len = skills.length;
  return Array.from({ length: len }, (_, i) => {
    const idx = (activeIndex - center + i + len) % len;
    return { skill: skills[idx], isCenter: i === center };
  });
}

function SkillsCarousel() {
  const { itemHeight, center, opacities, slideIn, slideOut } = useResponsiveCarousel();
  const [activeIndex, setActiveIndex] = useState(center);
  const textRefs = React.useRef<(HTMLSpanElement | null)[]>([]);
  const [maxWidth, setMaxWidth] = useState(0);

  const advance = useCallback(() => {
    setActiveIndex((prev: number) => (prev + 1) % skills.length);
  }, []);

  useEffect(() => {
    const widths = textRefs.current.map((el) => el?.offsetWidth ?? 0);
    setMaxWidth(Math.max(...widths));
  }, []);

  useEffect(() => {
    const id = setInterval(advance, CYCLE_INTERVAL);
    return () => clearInterval(id);
  }, [advance]);

  const ordered = getOrderedSkills(activeIndex, center);

  return (
    <div
      className="relative overflow-hidden"
      style={{ height: itemHeight * skills.length }}
    >
      {/* Sliding skill list */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={activeIndex}
          initial={{ y: slideIn, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: slideOut, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="flex flex-col"
        >
          {ordered.map(({ skill, isCenter }, i) => (
            <span
              key={skill}
              className={`block font-heading text-sm md:text-base ${
                isCenter ? "text-foreground" : "text-ghost"
              }`}
              style={{
                height: itemHeight,
                lineHeight: `${itemHeight}px`,
                paddingLeft: "2ch",
                opacity: opacities[i],
              }}
            >
              <span ref={(el) => { textRefs.current[i] = el; }}>{skill}</span>
            </span>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Static left bracket — fixed at center row */}
      <span
        className="absolute left-0 top-0 font-heading text-sm md:text-base text-foreground pointer-events-none"
        style={{
          lineHeight: `${itemHeight}px`,
          transform: `translateY(${center * itemHeight}px)`,
        }}
      >
        [
      </span>

      {/* Static right bracket — fixed at center row, widest text position */}
      <span
        className="absolute top-0 font-heading text-sm md:text-base text-foreground pointer-events-none"
        style={{
          lineHeight: `${itemHeight}px`,
          left: maxWidth > 0 ? `calc(2ch + ${maxWidth}px + 0.5ch)` : "2ch",
          transform: `translateY(${center * itemHeight}px)`,
        }}
      >
        ]
      </span>
    </div>
  );
}

interface HeroProps {
  onAnimationComplete: () => void;
}

export const Hero = forwardRef<HTMLElement, HeroProps>(({ onAnimationComplete }, ref) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleTitleAnimationComplete = useCallback(() => {
    setAnimationComplete(true);
    onAnimationComplete();
  }, [onAnimationComplete]);

  return (
    <section
      ref={ref}
      id="hero"
      className="section-container pb-16 md:pb-24 pt-20 md:pt-32"
    >
      <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
        {/* Left: Title */}
        <motion.div
          className="w-full md:w-3/5"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onAnimationComplete={handleTitleAnimationComplete}
        >
          <span className="block font-heading text-ghost text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase mb-0" style={{ lineHeight: 0.85 }}>
            Product
          </span>
          <h1 className="mt-0 mb-0">
            Designer
          </h1>
        </motion.div>

        {/* Right: Skills carousel — appears after title */}
        <motion.div
          className="w-full md:w-2/5 md:mb-1"
          initial={{ opacity: 0, y: 24 }}
          animate={animationComplete ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <SkillsCarousel />
        </motion.div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";
