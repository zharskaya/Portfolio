"use client";

import { useState } from "react";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { useAnimation } from "@/context/animation-provider";

export default function Home() {
  const { setHeaderVisible } = useAnimation();
  const [isHeroAnimationComplete, setIsHeroAnimationComplete] = useState(false);

  return (
    <>
      <Hero onAnimationComplete={() => setIsHeroAnimationComplete(true)} />
      <Projects 
        isHeroAnimationComplete={isHeroAnimationComplete} 
        onAnimationComplete={() => setTimeout(() => setHeaderVisible(true), 600)} 
      />
    </>
  );
}
