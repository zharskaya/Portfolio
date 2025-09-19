"use client";

import { ImageZoom } from '@/components/ui/image-zoom';
import { motion } from 'framer-motion';
import { Crosshair, TrendingUp, Zap, ShieldCheck, FileText, SlidersHorizontal } from 'lucide-react';
import React from 'react';
import Image from "next/image";

export default function Project7Story() {
  return (
    <div className="space-y-12 md:space-y-16">
      
      {/* Overview Section */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="container"
      >
        <div>
            <p className="text-xs text-muted-foreground"><b>Disclaimer:</b> Company name and branding have been changed for legal reasons.</p>
            <h2 className='text-primary'>Context</h2>
            <p>
             Software development requires synthesizing information from many sources, such as codebases, requirements, architecture, design decisions, meeting outcomes, and more. 
             </p>
             <p>
             Most AI assistants lack access to this context, resulting in incomplete or incorrect output. 
             This shifts effort back to engineers for correction and reduces efficiency, trust, and adoption.
            </p>    
        </div>
        
        <div>
          <h2 className='text-primary'>Challenge</h2>
          <p>
            Reimagine how engineers interact with an AI coding assistant once external context becomes accessible within the IDE.
          </p>
        </div>

        <div>
          <h2 className='text-primary'>My Design Footprint</h2>
          <p>
            Research, UX/UI design
          </p>
        </div>

        <div>
          <h2 className='text-primary'>Signs of Success</h2>
          <ul className='px-0 space-y-6'>
          <li className="flex gap-4">
              <Crosshair className="h-5 w-5 mt-1 shrink-0 text-primary" />
              <div>
                <div className='font-bold text-primary'>56% higher suggestion accuracy</div> 
                <div>During the testing, engineers reported fewer irrelevant outputs and less time spent correcting code</div>
              </div>
            </li>
            <li className="flex gap-4">
              <Zap className="h-5 w-5 mt-1 shrink-0 text-primary" />
              <div>
                <div className='text-primary font-bold'>2x faster task completion</div> 
                <div>Testing showed engineers finishing tasks twice as quickly, reaching outcomes with less effort</div>
              </div>
            </li>
            <li className="flex gap-4">
              <TrendingUp className="h-5 w-5 mt-1 shrink-0 text-primary" />
              <div>
                <div className='text-primary font-bold'>Improved interaction</div> 
                <div>80% of engineers confirmed in-chat interaction sped up their coding process and made it smoother</div>
              </div>
            </li>
          </ul>
        </div>
      </motion.section>

      {/* Process */}
       <motion.section
         initial={{ opacity: 0, y: 24 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.1 }}
         transition={{ duration: 0.7, ease: "easeOut" }}
         className="container"
       >
         <h1 className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 text-primary">Process</h1>
         
         <h2 className='text-primary'>Research</h2>
         <p>I started this project by researching the current state of AI coding tools and interviewing developers and product managers who code with AI daily. I also drew on my own hands-on experience.</p>
         <h3 className="text-primary">Key design principles</h3>
         <p>While reflecting on ongoing trends, I defined UX principles essential when designing for AI</p>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-8 mb-8">

           {/* Build Trust */}
           <div className="bg-gray-50 p-5 rounded-md space-y-2">
             <ShieldCheck className="h-5 w-5 text-primary mt-2" />
             <h3 className="text-primary font-bold uppercase text-sm">Build Trust</h3>
             <p>
               Be transparent in actions and decisions and provide clear explanations
             </p>
           </div>

           {/* Right Level of Control */}
           <div className="bg-gray-50 p-5 rounded-md space-y-2">
             <SlidersHorizontal className="h-5 w-5 text-primary mt-2" />
             <h3 className="text-primary font-bold uppercase text-sm">Right Level of Control</h3>
             <p>
               Give users control and let them choose between full automation and co-pilot mode
             </p>
           </div>

           {/* Context Is Everything */}
           <div className="bg-gray-50 p-5 rounded-md space-y-2">
             <FileText className="h-5 w-5 text-primary mt-2" />
             <h3 className="text-primary font-bold uppercase text-sm">Context Is The King</h3>
             <p>
               Use only relevant, clean, and well-structured context
             </p>
           </div>
         </div>
         
         <div className="mt-12">
         <h3 className="text-primary">Pain points</h3>
         <p>Among all uncovered pain points, I prioritized three the most common</p>
         <ul className="list-disc space-y-4 pl-6">
          <li>
            Missing, excessive, or irrelevant context leads to incorrect or incomplete suggections
          </li>
          <li>
            Bring all the relevant context (docs, tickets, and chats etc.) into IDE is challenging
          </li>
          <li>
            Clarifying and explaining context slows the development process
          </li>
         </ul>
         </div>
      </motion.section>

      <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="container"
        >
        <div className="flex flex-col lg:flex-row w-full lg:items-center">
  
          <div className="w-full lg:w-1/2 lg:pr-8 xl:pr-12">
            <h2 className="text-primary">Proposed solution</h2>
            <p>
             AI assistant connects to External Memory (codebase, project management tools, messengers, documentation, etc.). 
            </p>
            <p>
             The workflow is divided into three phases:
	          </p>
            <ul className="list-disc space-y-4 pl-6">
 	          <li><b>Research</b>. AI assistant searches connected sources, retrieves relevant context, and brings it into the chat</li>
 	          <li><b>Plan</b>. AI assistant analyzes inputs and suggests a step-by-step implementation plan</li>
 	          <li><b>Implementation</b>. AI assistant handles each step of the plan</li>
            </ul>
            <p>
             At any point, users can add missing context, provide comments, or adjust guidance.
            </p>
            <p>
             Some interactions are streamlined directly in chat to speed up collaboration.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full lg:w-1/2 mt-4 sm:mt-5 lg:mt-0">
            <figure className="max-w-[910px] mx-auto">
              <Image
                src="/images/projects/code-buddy-01.jpg"
                alt="Code Buddy Concept"
                width={910}
                height={930}
                className="object-contain w-full h-auto block rounded-lg"
                priority
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <figcaption>Code Buddy Concept</figcaption>
            </figure>
          </div>
        </div>
       </motion.section>

        {/* Integration with JIRA Section */}
        <motion.section
         initial={{ opacity: 0, y: 24 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.1 }}
         transition={{ duration: 0.7, ease: "easeOut" }}
         className="container"
        >
          <div>
            <div className="flex flex-col lg:flex-row w-full lg:items-start mb-8">
            {/* Content */}
            <div className="w-full lg:w-1/3 lg:pr-8 xl:pr-12">
            <h3 className='text-primary'>Integration with Project management systems</h3>
              <p>
               Engineers can now integrate their project management platform (Jira, Monday, Asana, Linear, and more) and add issues directly to the context.
              </p>
              <p>
                For quicker access, this action is also available in the Quick Start menu.
              </p>
            </div>

            {/* Video */}
            <div className="relative w-full lg:w-2/3 mt-4 sm:mt-5 lg:mt-0">
              <figure className="max-w-[2560px] mx-auto">
                <video
                  src="/videos/code-buddy-video-01.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-contain w-full h-auto block rounded-lg"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
                <figcaption>Select JIRA issue</figcaption>
              </figure>
            </div>
          </div>
          </div>
        </motion.section>

      {/* Accept and confirm additional context */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container"
      >
        <div>
          <div className="flex flex-col lg:flex-row w-full lg:items-start">
            {/* Content */}
            <div className="w-full lg:w-1/3 lg:pr-8 xl:pr-12">
            <h3 className='text-primary'>Context management</h3>
             <p>
                  AI assistant scans connected memory sources to find relevant context
                </p>
                <p>
                  When Context Control is enabled, the AI assistant asks user to review the suggested context before continue
                </p>
                <p>
                  Users can unselect items, add extra context, or leave comments directly in the chat
                </p>
              
            </div>

             {/* Video */}
             <div className="relative w-full lg:w-2/3 mt-4 sm:mt-5 lg:mt-0">
               <figure className="max-w-[2560px] mx-auto">
                 <video
                   src="/videos/code-buddy-video-02.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-contain w-full h-auto block rounded-lg"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
                <figcaption>Manage suggested context</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Review and confirm implementation plan */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container"
      >
        <div>
          <div className="flex flex-col lg:flex-row w-full lg:items-start">
            {/* Content */}
            <div className="w-full lg:w-1/3 lg:pr-8 xl:pr-12">
            <h3 className='text-primary'>Implementation plan</h3>
             <p>
                The Assistant suggests an implementation plan. 
             </p>
             <p>
              Users can review, unselect, edit, or add items before continuing.
             </p>
            </div>

             {/* Video */}
             <div className="relative w-full lg:w-2/3 mt-4 sm:mt-5 lg:mt-0">
               <figure className="max-w-[2560px] mx-auto">
                 <video
                   src="/videos/code-buddy-video-03.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-contain w-full h-auto block rounded-lg"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
                <figcaption>Review implementation plan</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </motion.section>

    </div>
  );
}
