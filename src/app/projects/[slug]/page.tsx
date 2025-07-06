import { projects } from '@/lib/projects-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import React, { Suspense } from 'react';
import { usePathname } from "next/navigation";
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollToTopButton } from '@/components/ui/scroll-to-top-button';

async function ProjectStory({ slug }: { slug: string }) {
  const { default: Component } = await import(`@/content/projects/${slug}.tsx`);
  return <Component />;
}

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto py-2 md:py-8 bg-primary-foreground">
      <ScrollToTopButton />
      <div className="container mx-auto">
        <div className="mb-0">
          <Link href="/#projects">
            <Button variant="ghost" size="sm" className="gap-2 pl-3 text-sm font-semibold transition-all duration-500 ease-in-out ml-[-1rem] hover:translate-x-4">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Works
            </Button>
          </Link>
        </div>
        <h2 className="mt-1 md:mt-2 mb-6 md:mb-8 lx:mb-12">{project.title}</h2>
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <Suspense fallback={<div>Loading story...</div>}>
          <ProjectStory slug={slug} />
        </Suspense>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
} 