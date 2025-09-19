"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { testimonials, Testimonial } from "@/lib/testimonials-data";

interface TestimonialsProps {
  isHeroAnimationComplete: boolean;
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex-shrink-0 w-full lg:w-1/2 px-2 md:px-4">
      <motion.div
        className="bg-white rounded-xl p-4 md:p-8 h-full flex flex-col"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <Quote className="w-6 h-6 md:w-8 md:h-8 text-muted/20 mb-4" />
        <blockquote className="text-foreground text-sm md:text-base leading-relaxed mb-6 flex-grow">
          {testimonial.quote.split('\n').map((paragraph, index) => (
            <p key={index} className={index > 0 ? "mt-4" : ""}>
              {paragraph}
            </p>
          ))}
        </blockquote>
        <div>
          <div className="font-semibold text-foreground">
            {testimonial.name}
          </div>
          <div className="text-muted-foreground text-sm md:text-base">
            {testimonial.title} at {testimonial.company}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Testimonials({ isHeroAnimationComplete }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Detect actual cards per view based on container width
  useEffect(() => {
    const updateCardsPerView = () => {
      if (containerRef.current) {
        // If container is wide enough to show 2 cards comfortably
        if (window.innerWidth >= 1024) {
          setCardsPerView(2);
        } else {
          setCardsPerView(1);
        }
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= testimonials.length - cardsPerView ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, cardsPerView]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= testimonials.length - cardsPerView ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex => 
      prevIndex <= 0 ? testimonials.length - cardsPerView : prevIndex - 1
    ));
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <motion.section
      id="testimonials"
      className="w-full py-20 md:py-24"
      initial={{ opacity: 0, y: 20 }}
      animate={isHeroAnimationComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isHeroAnimationComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto text-center px-4 md:px-8 xl:px-12 mb-12 md:mb-16"
      >
        <h2>
          Words from Partners in Crime
        </h2>
        <p className="mx-auto">
          Testimonials from colleagues and clients who have worked with me
        </p>
      </motion.div>

      <motion.div 
        className="relative max-w-7xl mx-auto px-2 md:px-8 xl:px-12"
        initial={{ opacity: 0, y: 24 }}
        animate={isHeroAnimationComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        {/* Navigation Buttons */}
        <motion.div 
          className="flex justify-between items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isHeroAnimationComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-3 w-3 md:h-4 md:w-4" />
          </Button>

          {/* Testimonial Cards Container */}
          <div ref={containerRef} className="flex-1 mx-0 md:mx-2 overflow-hidden">
            <motion.div
              key={cardsPerView} // Force re-render when cardsPerView changes
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`
              }}
            >
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </motion.div>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-3 w-3 md:h-4 md:w-4" />
          </Button>
        </motion.div>

        {/* Dots Indicator */}
        <motion.div 
          className="flex justify-center gap-2 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isHeroAnimationComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
