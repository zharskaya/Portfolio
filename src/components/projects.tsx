"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { projects, Project } from "@/lib/projects-data";

function ProjectTitle({ project }: { project: Project }) {
  if (!project.projectName) {
    return <h3>{project.title}</h3>;
  }
  return (
    <>
      <div className="font-heading font-light uppercase tracking-normal text-muted mb-2">
        [ {project.projectName} ]
      </div>
      <h3 className="mb-4 md:mb-8">{project.title}</h3>
    </>
  );
}

function ProjectCard({ project, index, shouldAnimateImmediately }: { project: Project, index: number, shouldAnimateImmediately: boolean }) {
  const isExternal = !!project.externalUrl;
  if (isExternal) {
    return (
      <a href={project.externalUrl!} target="_blank" rel="noopener noreferrer" className="group block w-full">
        <motion.div
          className="flex flex-col md:flex-row w-full px-6 md:px-8 xl:px-12 py-8 md:py-16 lg:py-20 xl:py-24 overflow-hidden group-hover:bg-background"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={shouldAnimateImmediately ? { opacity: 1, y: 0, scale: 1 } : undefined}
          whileInView={!shouldAnimateImmediately ? { opacity: 1, y: 0, scale: 1 } : undefined}
          transition={{ duration: 0.8, delay: index * 0.10, ease: 'easeOut' }}
          viewport={!shouldAnimateImmediately ? { once: true, amount: 0.2 } : undefined}
        >
          {/* Image */}
          <div className="relative w-full md:w-1/2 aspect-[1280/960]">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={1280}
              height={960}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 1280px) 100vw, 50vw"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              quality={85}
            />
          </div>
          {/* Content */}
          <div className="flex flex-col justify-center w-full md:w-1/2 md:pl-12 lg:pl-20 mt-8 sm:mt-10 md:mt-0">
            <div>
              <ProjectTitle project={project} />
              <p>{project.description}</p>
            </div>
            <div className="mt-6 p-0">
              <Button
                asChild
                variant="default"
                className="inline-flex w-full md:w-auto items-center gap-2"
              >
                <span>
                  View on Behance <ArrowUpRightIcon className="ml-1 h-3 w-3" />
                </span>
              </Button>
            </div>
          </div>
        </motion.div>
      </a>
    );
  }
  // Internal link
  return (
    <Link href={`/projects/${project.slug}`} className="group block w-full">
      <motion.div
        className="flex flex-col md:flex-row w-full px-6 md:px-8 xl:px-12 py-8 md:py-16 lg:py-20 xl:py-24 overflow-hidden group-hover:bg-background"
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={shouldAnimateImmediately ? { opacity: 1, y: 0, scale: 1 } : undefined}
        whileInView={!shouldAnimateImmediately ? { opacity: 1, y: 0, scale: 1 } : undefined}
        transition={{ duration: 0.8, delay: index * 0.10, ease: 'easeOut' }}
        viewport={!shouldAnimateImmediately ? { once: true, amount: 0.2 } : undefined}
      >
        {/* Image */}
        <div className="relative w-full md:w-1/2 aspect-[1280/960]">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={1280}
            height={960}
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 1280px) 100vw, 50vw"
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            quality={85}
          />
        </div>
        {/* Content */}
        <div className="flex flex-col justify-center w-full md:w-1/2 md:pl-8 lg:pl-12 mt-8 sm:mt-10 md:mt-0">
          <div>
            <ProjectTitle project={project} />
            <p>{project.description}</p>
          </div>
          <div className="mt-6 p-0">
            <Button
              asChild
              variant="default"
              className="inline-flex w-full md:w-auto items-center gap-2"
            >
              <span>
                View full story
              </span>
            </Button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

interface ProjectsProps {
  isHeroAnimationComplete: boolean;
  onAnimationComplete: () => void;
}

export function Projects({ isHeroAnimationComplete, onAnimationComplete }: ProjectsProps) {
  return (
    <motion.section
      id="projects"
      className="w-full pt-20 pb-12 md:pb-20 bg-background"
      initial={{ opacity: 0, y: 20 }}
      animate={isHeroAnimationComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={onAnimationComplete}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6 section-container"
      >
        {/* Left on desktop: description */}
        <p className="text-muted-foreground order-2 md:order-1 text-left md:w-1/2 mb-0">
          {'// A selection of case studies blending product thinking and design craft to drive business outcomes'}
        </p>
        {/* Right on desktop: heading */}
        <div className="order-1 md:order-2 text-right md:w-1/2">
          <span className="block font-heading text-ghost text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase" style={{ lineHeight: 0.85 }}>
            Selected
          </span>
          <h2 className="mt-0 mb-0">
            works
          </h2>
        </div>
      </motion.div>

      <div className="mx-auto flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20 pt-6 sm:pt-8 md:pt-10 lg:pt-12 section-container">
        {projects
          .filter(project => project.visible)
          .map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              shouldAnimateImmediately={index === 0}
            />
          ))}
      </div>
    </motion.section>
  );
} 
 