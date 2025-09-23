"use client";

import { Analytics } from '@vercel/analytics/react';
import { useAnalytics } from '@/hooks/use-analytics';

export function ConditionalAnalytics() {
  const { shouldExclude, isLoading } = useAnalytics();
  
  // Don't load Vercel Analytics if user should be excluded or still loading
  if (shouldExclude || isLoading) {
    return null;
  }

  return <Analytics />;
}
