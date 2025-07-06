"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > 200);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleScrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      <ArrowUp className="w-6 h-6" />
    </Button>
  );
} 