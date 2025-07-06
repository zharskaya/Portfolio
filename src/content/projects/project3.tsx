"use client";

import React from 'react';
import { TrendingDown, TrendingUp, Zap, Gem } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Project3Story() {
  return (
    <div className="space-y-12 md:space-y-16">
      

      {/* Overview Section */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container"
      >
        <div>
            <h2 className='text-primary'>Context</h2>
            <p>
                The existing onboarding flow led to many support cases caused by incorrectly set up accounts. While reviewing this, we uncovered an opportunity to improve the subscription model to better address user pain points and increase recurring revenue.
            </p>
            <p>Additionally, the new onboarding was timed to support the launch of our next-gen chargers.</p>
        </div>
        
        <div>
          <h2 className='text-primary'>Challenge</h2>
          <p>
          Improve user satisfaction, reduce support volume, and grow revenue by simplifying the onboarding flow and introducing a freemium subscription model.
          </p>
        </div>

        <div>
          <h2 className='text-primary'>My Design Footprint</h2>
          <p>
            Design leadership, UX/UI design for mobile, Prototyping, Usability testing
          </p>
        </div>

        <div>
          <h2 className='text-primary'>Signals of Success</h2>
          <ul className='px-0 space-y-6'>
          <li className="flex gap-4">
              <TrendingDown className="h-5 w-5 mt-1 shrink-0 text-primary" />
              <div>
                <div className='font-bold text-primary'>75% fewer support tickets</div> 
                <div>Significant drop in issues caused by account misconfiguration</div>
              </div>
            </li>
            <li className="flex gap-4">
              <Zap className="h-5 w-5 mt-1 shrink-0 text-primary" />
              <div>
                <div className='font-bold text-primary'>66% faster onboarding</div> 
                <div>Mandatory user inputs reduced from 27 to 9, sstreamlining account creation and time to value</div>
              </div>
            </li>
            <li className="flex gap-4">
              <TrendingUp className="h-5 w-5 mt-1 shrink-0 text-primary" />
              <div>
                <div className='text-primary font-bold'>Optimized mobile experience</div> 
                <div>Mobile users skiped subscription setup during onboarding, accelerating flow</div>
              </div>
            </li>
            <li className="flex gap-4">
              <Gem className="h-5 w-5 mt-1 shrink-0 text-primary" />
              <div>
                <div className='font-bold text-primary'>Freemium model launched</div> 
                <div>Unlocked new acquisition path and boosted recurring revenue stream</div>
              </div>
            </li>
           
          </ul>
        </div>
      </motion.section>

      {/* Process */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container"
      >
        <h1 className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 text-primary">Behind the Layers</h1>
        <p>
        This was a complex, cross-functional initiative that required close collaboration between the Design team and stakeholders across the entire technology organization. Success depended on aligning priorities, requirements, and constraints across software, hardware, and business teams.
        </p>
        <p className='font-bold'>Key collaborators</p>
        <ul className="list-disc space-y-4 pl-6">
            <li>Product Management</li>
            <li>Web Portal Development</li>
            <li>Mobile App Development</li>
            <li>Hardware Product Management</li>
            <li>Hardware Development</li>
            <li>Marketing</li>
        </ul>
        </motion.section>

        <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container"
      >
        <h2 className='text-primary'>Design process</h2>
        <p>The design process was structured, iterative, and grounded in continuous feedback. The illustration below shows how we aligned workstreams to deliver a unified experience across platforms and product touchpoints.</p>
        
        <figure className="section-container max-w-[1680px] mx-auto">
          <Image
            src="/images/projects/new-onboarding-02.jpg"
            alt="Design process overview showing the journey from research to implementation"
            width={1680}
            height={698}
            className="object-contain w-full h-auto block"
            priority
            sizes="(max-width: 1680px) 100vw, 50vw"
          />
          <figcaption>Design process</figcaption>
        </figure>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container"
      >
        <h2 className='text-primary'>More details are coming soon…</h2>  
      </motion.section>

      

      

      

     

      
      
      
    </div>
  );
} 