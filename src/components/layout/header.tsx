"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MenuIcon, ArrowUpRightIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAnimation } from "@/context/animation-provider";

interface NavItem {
  href: string;
  label: string;
  external?: boolean;
}

const navItems: NavItem[] = [
  {
    href: "/#projects",
    label: "Works",
  },
  {
    href: "/images/CV-Product-Designer-AI-Zharskaya-2026.pdf",
    label: "Resume",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/zharskaya",
    label: "LinkedIn",
    external: true,
  },
  {
    href: "https://dribbble.com/sveta_k",
    label: "Dribbble",
    external: true,
  },
];

export function Header() {
  const { isHeaderVisible } = useAnimation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 section-container bg-background/80 backdrop-blur">
      <div className="flex h-16 items-center">
        <motion.div
          key="header-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHeaderVisible ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex items-center"
          inert={!isHeaderVisible || undefined}
        >
          <div className="mr-auto flex items-center">
            <Link
              href="/#hero"
              className="font-heading text-sm uppercase tracking-widest text-foreground hover:text-muted-foreground transition-colors"
            >
              [ ZHARSKAYA ]
            </Link>
          </div>

          <nav className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="font-heading text-xs uppercase tracking-widest text-foreground transition-colors hover:text-muted-foreground flex items-center gap-1"
              >
                {item.label}
                {item.external && <ArrowUpRightIcon className="h-3 w-3" />}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="size-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-56 px-4">
                <SheetHeader>
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <SheetDescription className="sr-only">Main navigation links</SheetDescription>
                </SheetHeader>
                <nav className="grid items-start px-2 py-4 gap-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-1 rounded-lg py-2 font-heading text-sm uppercase tracking-widest text-foreground transition-colors hover:text-muted-foreground"
                    >
                      {item.label}
                      {item.external && <ArrowUpRightIcon className="h-3 w-3" />}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
