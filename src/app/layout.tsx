import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { AnimationProvider } from "@/context/animation-provider";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Svetlana Zharskaya | Product Design Leader",
  description: "Portfolio of Svetlana Zharskaya, a Product Design Leader with a focus on AI-powered products, SaaS, and mobile apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          GeistMono.variable,
          inter.variable
        )}
      >
        <AnimationProvider>
            <div className="relative flex min-h-dvh flex-col bg-background">
              <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded focus:font-semibold"
              >
                Skip to main content
              </a>
              <Header />
              <main id="main-content" className="flex-1">{children}</main>
              <Footer />
            </div>
        </AnimationProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
