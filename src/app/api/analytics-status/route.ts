import { NextRequest, NextResponse } from 'next/server';
import { shouldExcludeFromAnalyticsServer, getRealIP } from '@/lib/analytics';

export async function GET(request: NextRequest) {
  const ip = getRealIP(request);
  const shouldExclude = shouldExcludeFromAnalyticsServer(ip);
  
  return NextResponse.json({
    excluded: shouldExclude,
    ip: ip || 'unknown',
    reason: shouldExclude ? 'IP in exclusion list' : 'IP not excluded'
  });
}
