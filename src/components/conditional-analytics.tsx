"use client";

import { Analytics } from '@vercel/analytics/react';
import { useAnalytics } from '@/hooks/use-analytics';

export function ConditionalAnalytics() {
  const shouldExclude = useAnalytics();
  
  // Don't load Vercel Analytics if user should be excluded
  if (shouldExclude) {
    return null;
  }

  return <Analytics />;
}
