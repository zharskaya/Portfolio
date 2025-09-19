"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Star, Trophy, TrendingUp } from "lucide-react";
import Image from "next/image";
import { ImageZoom } from "@/components/ui/image-zoom";

export default function Project3Story() {
  return (
    <div className="space-y-12 md:space-y-16 min-h-[60vh]">
      
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
              Over three years, I <b className='text-primary'>continuously evolved the user experience</b> of the EVBox Everon app introducing new features, refining interactions, and improving overall usability. 
            </p>
        </div>

        <div>
          <h2 className='text-primary'>My Design Footprint</h2>
          <p>
            UX/UI design for mobile, Design system, Prototyping, Usability testing, later Design leadership
          </p>
        </div>
        
        <div>
          <h2 className='text-primary'>Signals of Success</h2>
          <ul className='px-0 space-y-6'>
          <li className="flex gap-4">
              <Star className="h-5 w-5 mt-1 shrink-0 text-primary" />
              <div>
                <div className='font-bold text-primary'>3.2 → 4.4 App Store rating uplift</div> 
                <div>Significant improvement in user satisfaction reflected in improved app store rating</div>
              </div>
            </li>
            <li className="flex gap-4">
              <Trophy className="h-5 w-5 mt-1 shrink-0 text-primary" />
              <div>
                <div className='font-bold text-primary'>Smartest charger award</div> 
                <div><a href="https://www.faz.net/kaufkompass/vergleich/die-beste-wallbox/#evboxlivo" target="_blank" rel="noopener noreferrer" className="text-accent">Frankfurter Allgemeine Zeitung</a> has ranked EVBox Livo together with the apps as <b className='text-primary'>the smartest charging station on the market</b></div>
              </div>
            </li>
            <li className="flex gap-4">
              <TrendingUp className="h-5 w-5 mt-1 shrink-0 text-primary" />
              <div>
                <div className='text-primary font-bold'>Better user experience</div> 
                <div>Ongoing UX improvements led to more positive user feedback and fewer support cases over time</div>
              </div>
            </li>
          </ul>
        </div>
      </motion.section>

      {/* Solar Charging Section */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container"
      >
        <div>
          <h2 className='text-primary'>Charging with Solar Energy</h2>
          <div className="flex flex-col lg:flex-row w-full lg:items-start">
            {/* Content */}
            <div className="w-full lg:w-1/2 lg:pr-8 xl:pr-12">
              <p>
              For the first time, we introduced advanced hardware capabilities to a non-technical audience. The challenge was to define the most valuable settings for end users and present them with clarity and simplicity.
              </p>
              <p>After talking to hardware architects and a series of user interviews, I proposed introducing three predefined "charging modes" to make setup easier for non-technical users. Each mode combined technical settings into a clear, easy-to-understand option:</p>
              <ul className='list-disc space-y-6'>
                <li>
                  <span className='font-bold text-primary'>Full Power</span> prioritizes maximum available charging speed regardless of weather conditions
                </li>
                <li>
                  <span className='font-bold text-primary'>Hybrid</span> combines solar and grid energy, minimizing grid usage and reducing charging costs
                </li>
                <li>
                  <span className='font-bold text-primary'>Full Solar</span> uses only solar energy for charging; the charging speed is slow and depends on weather conditions
                </li>
              </ul>
            </div>
            {/* Image */}
            <div className="relative w-full lg:w-1/2 mt-4 sm:mt-5 lg:mt-0">
              <figure className="section-container max-w-[1680px] mx-auto">
                <Image
                  src="/images/projects/station-owner-app-01.gif"
                  alt="Changing charging modes"
                  width={910}
                  height={930}
                  className="object-contain w-full h-auto block"
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <figcaption>Change charging mode</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Loading states */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container"
      >
        <div>
          <div className="flex flex-col lg:flex-row w-full lg:items-start mt-6">
            {/* Content */}
            <div className="w-full lg:w-1/2 lg:pr-8 xl:pr-12">
             <h2 className='text-primary'>Loading states</h2>
             <p>
               When I joined the team, I noticed that the app <b className='text-primary'>lacked loading states</b>, which led to a confusing experience, especially during longer waiting times. User feedback and app store reviews confirmed this: users were often frustrated by delays when interacting with the charging station.
             </p>
             <p>
               I began by analyzing and categorizing all possible loading scenarios across the app.
              </p>
              </div>
        {/*Image*/}
        <div className="relative w-full lg:w-1/2 mt-4 sm:mt-5 lg:mt-0">
        <figure className="section-container max-w-[1680px] mx-auto">
          <ImageZoom
            src="/images/projects/station-owner-app-03.jpg"
            alt="Categorization of loading states"
            width={1680}
            height={1140}
            className="object-contain w-full h-auto block"
            priority
            sizes="(max-width: 1680px) 100vw, 50vw"
            caption="Categorization of loading states"
          />
              </figure>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container"
      >
        <figure className="section-container max-w-[1680px] mx-auto">
          <ImageZoom
            src="/images/projects/station-owner-app-05.jpg"
            alt="Example of loading states"
            width={1680}
            height={876}
            className="object-contain w-full h-auto block"
            priority
            sizes="(max-width: 1680px) 100vw, 50vw"
            caption="Example of loading states"
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
        <div>
          <div className="flex flex-col lg:flex-row w-full lg:items-start mt-6">
            {/* Content */}
            <div className="w-full lg:w-1/2 lg:pr-8 xl:pr-12">
             <h2 className='text-primary'>Contextual animations</h2>
             <p>
               Some actions in the app took a long time to process, sometimes over 30 seconds. To make these waits feel shorter, I designed contextual animations and messages that explained what was happening in the background.
             </p>
             <p>
               One example was ending a charging session: instead of showing a static loading screen, I introduced clear animated stages:
             </p>
             <ul className='list-disc space-y-6'>
                <li>
                  Request sent
                </li>
                <li>
                  Confirmation
                </li>
                <li>
                  Loading session report
                </li>
              </ul>
              <p>
                This gave users a sense of progress and even allowed them to exit earlier without losing data.  
              </p>
            </div>
            {/* Image */}
            <div className="relative w-full lg:w-1/2 mt-4 sm:mt-5 lg:mt-0">
              <figure className="section-container max-w-[1680px] mx-auto">
                <Image
                  src="/images/projects/station-owner-app-02.gif"
                  alt="End charging session loading experience "
                  width={910}
                  height={930}
                  className="object-contain w-full h-auto block"
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 50vw, 50vw"
                />
                <figcaption>End charging session loading experience</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container"
      >
        <figure className="section-container max-w-[1680px] mx-auto">
          <ImageZoom
            src="/images/projects/station-owner-app-04.jpg"
            alt="End session animation steps"
            width={1680}
            height={834}
            className="object-contain w-full h-auto block"
            priority
            sizes="(max-width: 5812px) 100vw, 50vw"
            caption="End session animation steps"
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
        <h2 className='text-primary'>More details are coming soon…</h2>  
      </motion.section>

    </div>
  );
} 