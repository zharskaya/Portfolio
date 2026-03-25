# Svetlana Zharskaya — Portfolio

Personal portfolio site. Built with Next.js 15, React 19, TypeScript, Tailwind CSS, and Framer Motion. Deployed on Vercel.

## Tech Stack

| Technology | Role |
|---|---|
| Next.js 15 | App Router, SSG, image optimization |
| React 19 | UI framework |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Scroll-triggered animations, layout transitions |
| Radix UI | Accessible Dialog and Slot primitives |
| Geist Mono | Primary typeface (monospace-first design) |
| CVA | Component variant management |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                   # Root layout — fonts, metadata, providers
│   ├── page.tsx                     # Home — Hero, Projects, Testimonials
│   ├── globals.css                  # CSS custom properties, base styles
│   └── projects/[slug]/page.tsx     # Dynamic case study pages (SSG)
├── components/
│   ├── hero.tsx                     # Animated intro with skills carousel
│   ├── projects.tsx                 # Project grid with cards
│   ├── testimonials.tsx             # Auto-rotating testimonial carousel
│   ├── layout/                      # Header (sticky, animated) + Footer
│   └── ui/                          # Primitives — Button, Card, Badge,
│                                    #   ImageZoom, Sheet, Icons, ScrollToTop
├── content/
│   └── projects/                    # Case study components (project3–8.tsx)
├── context/
│   └── animation-provider.tsx       # Coordinates header/footer visibility
│                                    #   during page-load animation cascade
└── lib/
    ├── projects-data.ts             # Project interface + data array
    ├── testimonials-data.ts         # Testimonial data
    └── utils.ts                     # cn() class merger, slugify()
```

## Architecture

Two routes: `/` (home — hero, projects grid, testimonials) and `/projects/[slug]` (case studies, statically generated). Invalid slugs return 404.

Projects and testimonials live as TypeScript arrays in `src/lib/`. No CMS, no database. Each project has either a `slug` (internal route) or an `externalUrl` (Behance link). A `visible` flag controls what shows on the home page.

### Animation Cascade

Framer Motion orchestrates the home page entrance:

1. Hero animates in (title + skills carousel)
2. Hero completes → header and footer fade in
3. Projects and testimonials stagger into view on scroll

`AnimationProvider` manages this globally. Case study pages skip the cascade — header renders immediately.

### Patterns

- **Client vs. Server:** Interactive components use `"use client"`. Case study pages are server components that dynamically `import()` client-side story components via Suspense.
- **Styling:** Tailwind utilities + CSS custom properties (RGB triplets). Class merging via `cn()` (clsx + tailwind-merge).
- **Icons:** Custom SVG icons in `components/ui/icons.tsx`. Projects use string-to-icon mapping (`iconMap`) resolved at render time.
- **Images:** Next.js `<Image>` with WebP/AVIF. `ImageZoom` provides modal viewing with focus trapping and ESC-to-close.

### Design System

Monospace-first typography (`GeistMono` for headings and body, `Inter` as sans-serif fallback). Uppercase headings, tight line-height, wide tracking. Colors defined as RGB triplets in CSS custom properties (`--background`, `--foreground`, `--muted`, `--ghost`, `--border`). Mobile-first responsive layout with a `section-container` utility for consistent padding. Accessibility built in: skip-to-main link, semantic HTML, `prefers-reduced-motion`, focus trapping, ARIA attributes.
