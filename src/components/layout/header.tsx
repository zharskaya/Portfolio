"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, Mail, Linkedin, Dribbble, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/ui/logo";
import { useAnimation } from "@/context/animation-provider";

interface NavItem {
  href: string;
  label: string;
  external?: boolean;
  isIcon?: boolean;
  icon?: React.ReactNode;
}

const navItems: NavItem[] = [
  { 
    href: "/#projects", 
    label: "Works" 
  },

  { 
    href: "/images/CV-Product-Design-Leader-Zharskaya-2025.pdf", 
    label: "Resume", 
    external: true 
  },
  
  {
    href: "https://www.linkedin.com/in/zharskaya",
    label: "LinkedIn",
    isIcon: true,
    external: true,
    icon: <Linkedin className="h-6 w-6" />,
  },
  {
    href: "https://dribbble.com/sveta_k",
    label: "Dribbble",
    isIcon: true,
    external: true,
    icon: <Dribbble className="h-6 w-6" />,
  },
  {
    href: "mailto:zharskaya.s.v@gmail.com",
    label: "Email",
    isIcon: true,
    icon: <Mail className="h-6 w-6" />,
  },
];

export function Header() {
  const { isHeaderVisible } = useAnimation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const desktopNavLinks = navItems.filter((item) => !item.isIcon);
  const socialLinks = navItems.filter((item) => item.isIcon);

  return (
    <header className="sticky top-0 z-50 section-container border-b border-primary-foreground/20 bg-background/60 backdrop-blur">
      <div className="flex h-16 items-center">
        <motion.div
          key="header-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHeaderVisible ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex items-center"
        >
          <div className="mr-auto flex items-center">
            <Link href="/#hero" className="mr-6 flex items-center space-x-2 group logo-gradient-hover">
              <Logo className="text-foreground transition-all transition-transform group-hover:rotate-180 origin-center" width={32} height={32} />
              <span className="sr-only">Home</span>
            </Link>
            <nav className="hidden items-center space-x-6 text-xs uppercase tracking-wide font-bold md:flex">
              {desktopNavLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="text-foreground transition-color hover:text-accent flex items-center"
                >
                  {item.label}
                  {item.label === 'Resume' && <ArrowUpRight className="ml-1 h-4 w-4" />}
                </Link>
              ))}
            </nav>
          </div>

          <div className="hidden items-center justify-end space-x-4 md:flex">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                <Button variant="ghost" size="icon">
                  {item.icon}
                  <span className="sr-only">{item.label}</span>
                </Button>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-56 px-4">
                <SheetHeader>
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <SheetDescription className="sr-only">Main navigation and social links</SheetDescription>
                </SheetHeader>
                <div className="grid py-2">
                  <nav className="grid items-start px-2 text-sm font-semibold uppercase tracking-wide">
                    {desktopNavLinks.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-2 rounded-lg py-2 text-foreground transition-colors hover:text-accent"
                      >
                        {item.icon}
                        {item.label}
                        {item.label === 'Resume' && <ArrowUpRight className="h-4 w-4" />}
                      </Link>
                    ))}
                  </nav>
                  {/* Social icons in horizontal line */}
                  <div>
                    <div className="mt-8 mb-2 px-2 text-xs uppercase tracking-wide text-muted-foreground font-medium">Social</div>
                    <div className="flex items-center justify-start space-x-4">
                      {socialLinks.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Button variant="ghost" size="icon">
                            {item.icon}
                            <span className="sr-only">{item.label}</span>
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </motion.div>
      </div>
    </header>
  );
} 