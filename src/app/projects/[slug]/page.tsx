import { projects } from '@/lib/projects-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import React, { Suspense } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollToTopButton } from '@/components/ui/scroll-to-top-button';

async function ProjectStory({ slug }: { slug: string }) {
  const { default: Component } = await import(`@/content/projects/${slug}.tsx`);
  return <Component />;
}

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto py-2 md:py-8 bg-primary-foreground">
      <ScrollToTopButton />
      <div className="container mx-auto">
        <div className="mb-0 md:mb-1">
          <Link href="/#projects">
            <Button variant="link" className="gap-2 px-0 font-semibold">
              <ArrowLeft className="h-4 w-4" />
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
  return projects
    .filter((project) => !!project.slug)
    .map((project) => ({ slug: project.slug }));
} 