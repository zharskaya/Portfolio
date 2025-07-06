"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CloudCheck, Zap, FileBadge, Megaphone, SwatchBook, CircleCheck, TrendingDown, TrendingUp, Gem, Trophy, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, Project } from "@/lib/projects-data";

export const iconMap = {
  CloudCheck,
  Zap,
  FileBadge,
  Megaphone,
  SwatchBook,
  CircleCheck,
  TrendingDown,
  TrendingUp,
  Gem,
  Trophy,
  Star
};

function ProjectCard({ project, index }: { project: Project, index: number }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block w-full">
      <motion.div
        className="flex flex-col md:flex-row w-full px-6 md:px-8 xl:px-12 py-8 md:py-16 lg:py-20 xl:py-24 rounded-2xl overflow-hidden"
        initial={{ opacity: 0, y: 80, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: index * 0.10, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Image */}
        <div className="relative w-full md:w-1/2 aspect-[1280/960]">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={1280}
            height={960}
            className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
            sizes="(max-width: 1280x) 100vw, 50vw"
            priority={true}
          />
        </div>
        {/* Content */}
        <div className="flex flex-col justify-center w-full md:w-1/2 md:pl-8 lg:pl-12 mt-4 sm:mt-5 md:mt-0">
          <div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.impacts && (
              <div className="flex flex-col flex-wrap gap-x-8 md:gap-x-12 lg:gap-x-14 gap-y-2 my-6 md:my-8">
                {project.impacts.map((impact, i) => (
                  <div key={i} className="flex flex-row items-center text-left gap-4">
                    {impact.icon &&
                      React.createElement(iconMap[impact.icon as keyof typeof iconMap], { className: "w-5 h-5 flex-shrink-0 text-muted" })
                    }
                    <span className="text-xs md:text-sm uppercase tracking-wide font-bold text-muted">
                      {impact.text.split('\n').map((line, j) => (
                        <React.Fragment key={j}>
                          {line}
                          {j !== impact.text.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mt-4 p-0">
            <Button 
              variant="ghost" 
              className="flex items-center gap-2 pr-3 text-sm font-semibold transition-all duration-500 ease-in-out ml-[-1rem] group-hover:translate-x-4 group-hover:bg-primary group-hover:text-primary-foreground"
            >
              View full story <ArrowRight className="ml-1 h-3 w-3" />
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
      className="w-full pt-20 md:pb-24 pb-12 md:pb-20 bg-primary-foreground"
      initial={{ opacity: 0, y: 20 }}
      animate={isHeroAnimationComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={onAnimationComplete}
    >
      <div className="mx-auto text-center px-6 md:px-8 xl:px-12">
        <h2>
          Driving Impact Through Design
        </h2>
        <p>
          A selection of work that blends product thinking, user insight, and design craft to drive business outcomes
        </p>
      </div>

      <div className="mx-auto flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20 pt-6 sm:pt-8 md:pt-10 lg:pt-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </motion.section>
  );
} 