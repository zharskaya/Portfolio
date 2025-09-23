"use client";

import { useEffect, useState } from 'react';

export function useAnalytics() {
  const [shouldExclude, setShouldExclude] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAnalyticsStatus = async () => {
      // First check if we're on localhost or your local network
      const hostname = window.location.hostname;
      const isLocalhost = hostname === 'localhost' || 
                         hostname === '127.0.0.1' ||
                         hostname === '192.168.1.26' ||
                         hostname.includes('192.168.1.');

      if (isLocalhost) {
        setShouldExclude(true);
        setIsLoading(false);
        return;
      }

      // For production, check with the API route
      try {
        const response = await fetch('/api/analytics-status');
        const data = await response.json();
        setShouldExclude(data.excluded);
      } catch {
        // Fallback to client-side detection
        const userAgent = window.navigator.userAgent;
        const isYourDevice = 
          userAgent.includes('YourSpecificDevice') || 
          userAgent.includes('YourBrowserIdentifier') ||
          false;
        setShouldExclude(isYourDevice);
      }
      
      setIsLoading(false);
    };

    checkAnalyticsStatus();
  }, []);

  return { shouldExclude, isLoading };
}
