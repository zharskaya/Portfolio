import { projects } from '@/lib/projects-data';
import { notFound } from 'next/navigation';
import React, { Suspense } from 'react';
import { ScrollToTopButton } from '@/components/ui/scroll-to-top-button';
import { SectionNav } from '@/components/ui/section-nav';

const projectSections: Record<string, string[]> = {
  project3: ["About", "Signals of Success", "Design Process"],
  project4: ["About", "Outcome", "The Problem", "Design Decisions", "Demo"],
  project5: ["About", "Outcomes That Matter", "Design process"],
  project6: ["About", "Outcome", "Process", "Visuals", "Demo"],
  project7: ["About", "Outcome", "Process", "Visuals"],
};

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
    <div className="mx-auto py-2 md:py-8">
      <ScrollToTopButton />
      <div className="section-container">
{project.projectName && (
          <div className="font-heading font-light uppercase tracking-normal text-muted mb-2">
            {project.projectName}
          </div>
        )}
        <h2 className="mt-1 md:mt-2 mb-6 md:mb-8 xl:mb-12 leading-[0.85]">
          {project.titleGhost && project.titleBold ? (
            project.boldFirst ? (
              <>
                <span className="block">{project.titleBold}</span>
                <span className="block text-ghost">{project.titleGhost}</span>
              </>
            ) : (
              <>
                <span className="block text-ghost">{project.titleGhost}</span>
                <span className="block">{project.titleBold}</span>
              </>
            )
          ) : (
            project.title
          )}
        </h2>
        {projectSections[slug] && (
          <SectionNav sections={projectSections[slug]} />
        )}
      </div>
      <div className="max-w-none">
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