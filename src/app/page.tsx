"use client";

import { useState, useEffect, useRef } from "react";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Testimonials } from "@/components/testimonials";
import { useAnimation } from "@/context/animation-provider";

export default function Home() {
  const { setHeaderVisible } = useAnimation();
  const [isHeroAnimationComplete, setIsHeroAnimationComplete] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check if user is scrolled past the hero section on page load
    if (window.scrollY > 100) {
      setIsHeroAnimationComplete(true);
      return;
    }

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

    // Safety fallback: if animation callbacks don't fire (e.g. reduced motion),
    // reveal content after the expected animation duration
    const fallback = setTimeout(() => {
      setIsHeroAnimationComplete(true);
      setHeaderVisible(true);
    }, 2500);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [setHeaderVisible]);

  return (
    <>
      <Hero ref={heroRef} onAnimationComplete={() => setIsHeroAnimationComplete(true)} />
      <Projects 
        isHeroAnimationComplete={isHeroAnimationComplete} 
        onAnimationComplete={() => setTimeout(() => setHeaderVisible(true), 600)} 
      />
      <Testimonials isHeroAnimationComplete={isHeroAnimationComplete} />
    </>
  );
}
