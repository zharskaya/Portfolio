"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/testimonials-data";
import { cn } from "@/lib/utils";

interface TestimonialsProps {
  isHeroAnimationComplete: boolean;
}

export function Testimonials({ isHeroAnimationComplete }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused]);

  const goToTestimonial = useCallback(
    (index: number) => {
      if (index === currentIndex) return;
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
      setIsAutoPlaying(false);
    },
    [currentIndex]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        const next = (currentIndex + 1) % testimonials.length;
        goToTestimonial(next);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        const prev =
          (currentIndex - 1 + testimonials.length) % testimonials.length;
        goToTestimonial(prev);
      }
    },
    [currentIndex, goToTestimonial]
  );

  const slideVariants = {
    enter: (dir: number) => ({
      x: prefersReducedMotion.current ? 0 : dir * 40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: prefersReducedMotion.current ? 0 : dir * -40,
      opacity: 0,
    }),
  };

  const transitionConfig = {
    duration: prefersReducedMotion.current ? 0 : 0.4,
    ease: "easeInOut" as const,
  };

  const testimonial = testimonials[currentIndex];

  return (
    <motion.section
      id="testimonials"
      role="region"
      aria-roledescription="carousel"
      aria-label="Partner feedback"
      className="w-full py-20 md:py-24"
      initial={{ opacity: 0, y: 20 }}
      animate={
        isHeroAnimationComplete
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 20 }
      }
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
    >
      {/* Screen reader announcements */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        Testimonial {currentIndex + 1} of {testimonials.length}:{" "}
        {testimonial.name}, {testimonial.title} at {testimonial.company}
      </div>

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={
          isHeroAnimationComplete
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 24 }
        }
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="section-container flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12 md:mb-16"
      >
        <div className="md:w-1/2">
          <span
            className="block font-heading text-ghost text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase"
            style={{ lineHeight: 0.85 }}
          >
            Partner
          </span>
          <h2 className="mt-0 mb-0">Feedback</h2>
        </div>

        <p className="text-muted-foreground max-w-md text-left md:w-1/2 mb-0">
          {"// Testimonials from colleagues and clients I've worked with"}
        </p>
      </motion.div>

      {/* Testimonial content */}
      <motion.div
        className="section-container"
        initial={{ opacity: 0, y: 24 }}
        animate={
          isHeroAnimationComplete
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 24 }
        }
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <div className="min-h-[280px] md:min-h-[220px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transitionConfig}
              className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-12"
            >
              {/* Left column: Number + Name + Title */}
              <div className="flex flex-col md:items-end md:text-right">
                <span className="bracket-label text-foreground mb-1 md:mb-2">
                  [ {String(currentIndex + 1).padStart(2, "0")} ]
                </span>
                <div className="font-heading font-semibold text-foreground text-sm md:text-base uppercase">
                  {testimonial.name}
                </div>
                <div className="font-light text-muted-foreground text-sm md:text-base">
                  {testimonial.title} at {testimonial.company}
                </div>
              </div>

              {/* Right column: Quote text */}
              <blockquote className="text-sm md:text-base leading-relaxed max-w-2xl">
                {testimonial.quote.split("\n").map((paragraph, idx) => (
                  <p key={idx} className={idx > 0 ? "mt-4" : "mt-0"}>
                    {paragraph.trim()}
                  </p>
                ))}
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <nav
          aria-label="Testimonial pagination"
          className="flex items-center justify-center gap-4 md:gap-6 mt-12 md:mt-16"
        >
          {testimonials.map((_, idx) => {
            const number = String(idx + 1).padStart(2, "0");
            const isActive = idx === currentIndex;
            return (
              <button
                key={idx}
                onClick={() => goToTestimonial(idx)}
                aria-label={`Go to testimonial ${idx + 1} of ${testimonials.length}`}
                aria-current={isActive ? "step" : undefined}
                className={cn(
                  "bracket-label px-2 transition-colors duration-200",
                  isActive
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                )}
              >
                {isActive ? `[ ${number} ]` : number}
              </button>
            );
          })}
        </nav>
      </motion.div>
    </motion.section>
  );
}
