"use client";

import { useState, useEffect, useRef } from "react";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { useAnimation } from "@/context/animation-provider";

export default function Home() {
  const { setHeaderVisible } = useAnimation();
  const [isHeroAnimationComplete, setIsHeroAnimationComplete] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check if user is scrolled past the hero section on page load
    if (window.scrollY > 100) {
      setIsHeroAnimationComplete(true);
    } else {
      // Set up intersection observer to detect if hero is not visible
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) {
            setIsHeroAnimationComplete(true);
          }
        },
        { threshold: 0.1 }
      );
      
      if (heroRef.current) {
        observer.observe(heroRef.current);
      }
      
      return () => observer.disconnect();
    }
  }, []);

  return (
    <>
      <Hero ref={heroRef} onAnimationComplete={() => setIsHeroAnimationComplete(true)} />
      <Projects 
        isHeroAnimationComplete={isHeroAnimationComplete} 
        onAnimationComplete={() => setTimeout(() => setHeaderVisible(true), 600)} 
      />
    </>
  );
}
