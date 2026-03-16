"use client";

import React from 'react';
import { TrendingUp, Timer, CircleCheck, SwatchBook } from "lucide-react";
import Image from "next/image";
import { ImageZoom } from "@/components/ui/image-zoom";
import { motion } from "framer-motion";

export default function Project5Story() {
  return (
    <div className="project-content">  
    
    <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="section-container"
      >
        <figure className="max-w-[1680px] mx-auto">
          <Image
            src="/images/projects/rebranding-01.jpg"
            alt="New EVBox branding"
            width={1680}
            height={840}
            className="object-contain w-full h-auto block"
            priority
            quality={95}
            sizes="(max-width: 1680px) 100vw, 50vw"
          />
        </figure>
      </motion.section>

      {/* Overview Section */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="section-container"
      >
        <h3 id="about" className="h3-section text-right">
          <span className="block text-ghost">About</span>
          <span className="block text-primary">the project</span>
        </h3>

        <div className="mt-10 md:mt-12 space-y-8">
          {/* 01 — Context */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-3 md:gap-12">
            <div className="md:text-right">
              <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 01 ]</span>
              <h4 className="mt-0">Context</h4>
            </div>
            <div className="[&>:first-child]:mt-0">
              <p>
                A last-minute strategic business priority shift required the product team to roll out a new brand identity across the entire product portfolio. This unplanned initiative conflicted with previously committed product work and critical feature timelines. Additional pressure came from the upcoming start of production for next-gen charging stations, which could not be delayed.
              </p>
            </div>
          </div>

          {/* 02 — Challenge */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-3 md:gap-12">
            <div className="md:text-right">
              <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 02 ]</span>
              <h4 className="mt-0">Challenge</h4>
            </div>
            <div className="[&>:first-child]:mt-0">
              <p>
                Apply the new EVBox branding across the full product portfolio with minimal development complexity and resource impact.
              </p>
            </div>
          </div>

          {/* 03 — My Design Footprint */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-3 md:gap-12">
            <div className="md:text-right">
              <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 03 ]</span>
              <h4 className="mt-0">My Design Footprint</h4>
            </div>
            <div className="[&>:first-child]:mt-0">
              <p>
                Design leadership, Visual design strategy, Design system, Illustrations
              </p>
            </div>
          </div>
        </div>

        <h3 id="outcomes-that-matter" className="h3-section">
          <span className="block text-ghost">Outcomes</span>
          <span className="block text-primary">That Matter</span>
        </h3>
        <ul className='px-0 space-y-6'>
        <li className="flex gap-4">
            <Timer className="h-5 w-5 mt-1 shrink-0 text-primary" />
            <div>
              <div className='font-bold text-primary'>New brand rolled out in record time</div> 
              <div>Design proposal created and approved in under 3 weeks. Launched with minimum development overhead</div>
            </div>
          </li>
          <li className="flex gap-4">
            <TrendingUp className="h-5 w-5 mt-1 shrink-0 text-primary" />
            <div>
              <div className='font-bold text-primary'>+40% stronger brand recognition</div> 
              <div>Post-launch feedback confirmed improved recall</div>
            </div>
          </li>
          <li className="flex gap-4">
            <SwatchBook className="h-5 w-5 mt-1 shrink-0 text-primary" />
            <div>
              <div className='text-primary font-bold'>Maintained white-label support</div> 
              <div>Branding updates preserved flexibility for partner experiences</div>
            </div>
          </li>
          <li className="flex gap-4">
            <CircleCheck className="h-5 w-5 mt-1 shrink-0 text-primary" />
            <div>
              <div className='font-bold text-primary'>WCAG 2.1 compliant</div> 
              <div>Resolved contrast issues to meet accessibility standards</div>
            </div>
          </li>
        </ul>
      </motion.section>

      {/* Process */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="section-container"
      >
        <h3 id="design-process" className="h3-section">
          <span className="block text-ghost">Design</span>
          <span className="block text-primary">process</span>
        </h3>
        <figure className="max-w-[1680px] mx-auto">
          <ImageZoom
            src="/images/projects/rebranding-02.jpg"
            alt="Design process overview showing the journey from research to implementation"
            width={1680}
            height={647}
            className="object-contain w-full h-auto block"
            quality={95}
            sizes="(max-width: 1680px) 100vw, 50vw"
            caption="Design process timeline"
          />
        </figure>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="section-container"
      >
        <h3 className="h3-section">
          <span className="block text-ghost">Design</span>
          <span className="block text-primary">requirements</span>
        </h3>  
        <ul className="list-disc space-y-4 pl-6">
          <li>Preserve white-label support</li>
          <li>Minimize development complexity</li>
          <li>Follow WCAG 2.1 AA accessibility</li>
          <li>Stay consistent with evbox.com to strengthen recognition</li>
          <li>Ensure consistency across all touchpoints</li>
        </ul>

        <h3 className="h3-section">
          <span className="block text-ghost">Design</span>
          <span className="block text-primary">process</span>
        </h3>
      </motion.section>

    </div>
  );
} 