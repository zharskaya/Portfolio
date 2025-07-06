"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface AnimationContextType {
  isHeaderVisible: boolean;
  setHeaderVisible: (isVisible: boolean) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export function AnimationProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/#hero";
  const [isHeaderVisible, setHeaderVisible] = useState(isHome ? false : true);

  return (
    <AnimationContext.Provider value={{ isHeaderVisible, setHeaderVisible }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
} 