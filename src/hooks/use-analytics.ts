"use client";

import { useEffect, useState } from 'react';

export function useAnalytics() {
  const [shouldExclude, setShouldExclude] = useState(false);

  useEffect(() => {
    // Check if we're on localhost or your local network
    const hostname = window.location.hostname;
    const isLocalhost = hostname === 'localhost' || 
                       hostname === '127.0.0.1' ||
                       hostname === '192.168.1.26' ||
                       hostname.includes('192.168.1.');

    if (isLocalhost) {
      setShouldExclude(true);
      return;
    }

    // Check for specific user agents or device identifiers
    const userAgent = window.navigator.userAgent;
    const isYourDevice = 
      userAgent.includes('YourSpecificDevice') || 
      userAgent.includes('YourBrowserIdentifier') ||
      false;

    setShouldExclude(isYourDevice);
  }, []);

  return shouldExclude;
}
