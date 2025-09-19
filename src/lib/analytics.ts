// Analytics configuration and IP exclusion
export const shouldExcludeFromAnalytics = (): boolean => {
  // Check if we're in the browser
  if (typeof window === 'undefined') return false;

  // First check if the middleware has already determined this should be excluded
  // This is more reliable for production
  if (typeof document !== 'undefined') {
    const metaTag = document.querySelector('meta[name="analytics-disabled"]');
    if (metaTag && metaTag.getAttribute('content') === 'true') {
      return true;
    }
  }

  // Fallback: For development, exclude localhost and your local network
  const isLocalhost = window.location.hostname === 'localhost' || 
                     window.location.hostname === '127.0.0.1' ||
                     window.location.hostname === '192.168.1.26' ||
                     window.location.hostname.includes('192.168.1.'); // Your local network

  if (isLocalhost) return true;

  // Check for specific user agents or device identifiers
  const userAgent = window.navigator.userAgent;
  
  // You can add specific device identifiers here
  // For example, if you want to exclude specific browsers or devices
  const isYourDevice = 
    userAgent.includes('YourSpecificDevice') || 
    userAgent.includes('YourBrowserIdentifier') ||
    // Add any other patterns that identify your devices
    false;

  return isYourDevice;
};

// Server-side function to check IP exclusion (for use in API routes or middleware)
export const shouldExcludeFromAnalyticsServer = (ip: string | null): boolean => {
  if (!ip) return false;

  // Get excluded IPs from environment variables
  const excludedIPsEnv = process.env.EXCLUDED_IPS || '';
  const excludedIPs = excludedIPsEnv.split(',').map(ip => ip.trim()).filter(Boolean);

  // Default excluded IPs (your local network)
  const defaultExcludedIPs = [
    '192.168.1.26', // Your local IP from terminal
    '192.168.1.0/24', // Your local network
    // Add your other IP addresses here
    // 'your.home.ip.address',
    // 'your.office.ip.address',
    // 'your.mobile.carrier.ip',
  ];

  // Combine environment and default excluded IPs
  const allExcludedIPs = [...excludedIPs, ...defaultExcludedIPs];

  // Check if IP is in excluded list
  const isExcluded = allExcludedIPs.some(excludedIP => {
    if (excludedIP.includes('/')) {
      // Handle CIDR notation (e.g., 192.168.1.0/24)
      const [network, prefixLength] = excludedIP.split('/');
      const ipNum = ipToNumber(ip);
      const networkNum = ipToNumber(network);
      const mask = (0xffffffff << (32 - parseInt(prefixLength))) >>> 0;
      return (ipNum & mask) === (networkNum & mask);
    } else {
      return ip === excludedIP;
    }
  });

  return isExcluded;
};

// Helper function to convert IP to number for CIDR checking
function ipToNumber(ip: string): number {
  return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet), 0) >>> 0;
}

// Configuration for Vercel Analytics
export const analyticsConfig = {
  // Disable analytics for excluded users
  disable: shouldExcludeFromAnalytics(),
  
  // You can also add custom tracking configuration here
  beforeSend: (event: any) => {
    // Additional filtering logic if needed
    return event;
  }
};
