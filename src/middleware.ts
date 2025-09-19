import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { shouldExcludeFromAnalyticsServer } from '@/lib/analytics';

export function middleware(request: NextRequest) {
  // Get the real IP address from headers
  const ip = request.ip || 
            request.headers.get('x-forwarded-for')?.split(',')[0] ||
            request.headers.get('x-real-ip') ||
            'unknown';

  // Check if this IP should be excluded from analytics
  const shouldExclude = shouldExcludeFromAnalyticsServer(ip);

  // Add a header to indicate if analytics should be disabled
  const response = NextResponse.next();
  
  if (shouldExclude) {
    response.headers.set('x-analytics-disabled', 'true');
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
