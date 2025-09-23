"use client";

import { shouldExcludeFromAnalytics } from '@/lib/analytics';

export function AnalyticsScripts() {
  // Don't load analytics if user should be excluded
  if (shouldExcludeFromAnalytics()) {
    return null;
  }

  return (
    <>
      {/* Hotjar Tracking Code for Site 6527360 */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:6527360,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
        }}
      />
    </>
  );
}
