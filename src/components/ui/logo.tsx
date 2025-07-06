import * as React from "react";

/**
 * Logo component. The path uses currentColor for its fill, so you can control its color via the className prop.
 * The circle background remains white and is not affected by color changes.
 * Pass a className to control the path color (e.g., text-foreground, group-hover:text-accent).
 */
export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo"
      {...props}
    >
      <circle cx="128" cy="128" r="120" fill="white" />
      <path
        className={className}
        d="M126.449 247.99C60.8899 247.16 8.00008 193.756 8.00001 128L8.00978 126.449C8.84001 60.8896 62.2436 8.00002 128 7.99999L129.551 8.00976C194.594 8.8335 247.167 61.4057 247.99 126.449L248 128C248 194.274 194.274 248 128 248L126.449 247.99ZM128 232C185.438 232 232 185.438 232 128C232 70.5623 185.438 24 128 24C70.5625 24 24 70.5623 24 128C24.0001 185.438 70.5625 232 128 232ZM195 128C195 90.9969 165.003 61 128 61C90.997 61 61 90.9969 61 128L61 136L45 136L45 128C45 82.1603 82.1604 45 128 45C173.84 45 211 82.1603 211 128L211 136L195 136L195 128ZM135 127.5L151 127.5L151 158.5L135 158.5L135 127.5ZM105 127.5L121 127.5L121 158.5L105 158.5L105 127.5Z"
        fill="currentColor"
      />
    </svg>
  );
} 