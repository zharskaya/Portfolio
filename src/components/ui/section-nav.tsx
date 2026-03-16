"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { cn, slugify } from "@/lib/utils";

interface SectionNavProps {
  sections: string[];
}

export function SectionNav({ sections }: SectionNavProps) {
  const [activeSection, setActiveSection] = useState(sections[0] ?? "");
  const navRef = useRef<HTMLElement>(null);
  const activeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = sections
        .map((label) => document.getElementById(slugify(label)))
        .filter(Boolean) as HTMLElement[];

      if (elements.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

          if (visible.length > 0) {
            const id = visible[0].target.id;
            const match = sections.find((s) => slugify(s) === id);
            if (match) setActiveSection(match);
          }
        },
        { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
      );

      elements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 150);

    return () => clearTimeout(timer);
  }, [sections]);

  useEffect(() => {
    const btn = activeBtnRef.current;
    const nav = navRef.current;
    if (btn && nav) {
      const scrollLeft = btn.offsetLeft - nav.offsetWidth / 2 + btn.offsetWidth / 2;
      nav.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [activeSection]);

  const handleClick = useCallback(
    (label: string) => {
      const el = document.getElementById(slugify(label));
      if (!el) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const top =
        el.getBoundingClientRect().top + window.scrollY - 80;

      window.scrollTo({
        top,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });

      setActiveSection(label);
    },
    []
  );

  if (sections.length === 0) return null;

  return (
    <nav
      ref={navRef}
      aria-label="Page sections"
      className="flex items-center gap-3 md:gap-4 overflow-x-auto scrollbar-hide py-2"
    >
      {sections.map((label) => {
        const isActive = label === activeSection;
        return (
          <button
            key={label}
            ref={isActive ? activeBtnRef : undefined}
            onClick={() => handleClick(label)}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "bracket-label px-2 first:pl-0 whitespace-nowrap transition-colors duration-200 shrink-0",
              isActive
                ? "text-foreground"
                : "text-muted hover:text-foreground"
            )}
          >
            {isActive ? `[ ${label} ]` : label}
          </button>
        );
      })}
    </nav>
  );
}
