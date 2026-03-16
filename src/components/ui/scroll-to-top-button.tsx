"use client";

import { useState, useEffect } from "react";
import { ArrowUpIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

export function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let ticking = false;
    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setShow(window.scrollY > 200);
          ticking = false;
        });
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleScrollTop() {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  }

  if (!show) return null;

  return (
    <Button
      onClick={handleScrollTop}
      variant="default"
      size="icon"
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-full w-14 h-14 flex items-center justify-center"
    >
      <ArrowUpIcon className="w-6 h-6" />
    </Button>
  );
} 