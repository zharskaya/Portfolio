"use client";

import React from 'react';
import { TrendingUp, Timer, CircleCheck, SwatchBook } from "lucide-react";
import Image from "next/image";
import { ImageZoom } from "@/components/ui/image-zoom";
import { motion } from "framer-motion";

export default function Project5Story() {
  return (
    <div className="space-y-12 md:space-y-16">  
    
    <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className=""
      >
        <figure className="section-container max-w-[1680px] mx-auto">
          <Image
            src="/images/projects/rebranding-01.jpg"
            alt="New EVBox branding"
            width={1680}
            height={840}
            className="object-contain w-full h-auto block"
            priority
            sizes="(max-width: 1680px) 100vw, 50vw"
          />
        </figure>
      </motion.section>

      {/* Overview Section */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="container"
      >
        <div>
            <h2 className='text-primary'>Context</h2>
            <p>
            A last-minute strategic business priority shift required the product team to roll out a new brand identity across the entire product portfolio. This unplanned initiative conflicted with previously committed product work and critical feature timelines. Additional pressure came from the upcoming start of production for next-gen charging stations, which could not be delayed.
            </p>
        </div>
        
        <div>
          <h2 className='text-primary'>Challenge</h2>
          <p>
            Apply the new EVBox branding across the full product portfolio with minimal development complexity and resource impact.
          </p>
        </div>

        <div>
          <h2 className='text-primary'>My Design Footprint</h2>
          <p>
            Design leadership, Visual design strategy, Design system, Illustrations
          </p>
        </div>
      
        <h2 className='text-primary'>Outcomes That Matter</h2>
        <ul className='px-0 space-y-6'>
        <li className="flex gap-4">
            <Timer className="h-5 w-5 mt-1 shrink-0 text-primary" />
            <div>
              <div className='font-bold text-primary'>New brand rolled out in record time</div> 
              <div>Design proposal created and approved in under 3 weeks. Launched with minimum development overheat</div>
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
        className="container"
      >
        <h2 className='text-primary'>Design process</h2>
        <figure className="section-container max-w-[1680px] mx-auto">
          <ImageZoom
            src="/images/projects/rebranding-02.jpg"
            alt="Design process overview showing the journey from research to implementation"
            width={1680}
            height={647}
            className="object-contain w-full h-auto block"
            priority
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
        className="container"
      >
        <h3 className='text-primary'>Requirements</h3>  
        <ul className="list-disc space-y-4 pl-6">
          <li>Preserve white-label support</li>
          <li>Minimize development complexity</li>
          <li>Follow WCAG 2.1 AA accessibility</li>
          <li>Stay consistent with evbox.com to strengthen recognition</li>
          <li>Ensure consistency across all touchpoints</li>
        </ul>

        <h3 className='text-primary'>Process</h3>
      </motion.section>

    </div>
  );
} 