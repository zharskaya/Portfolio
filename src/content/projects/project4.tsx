"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Star, Trophy, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function Project4Story() {
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
              Over three years, I <b className='text-primary'>continuously evolved the user experience</b> of the EVBox Everon app introducing new features, refining interactions, and improving overall usability. I began with redesigning <b className='text-primary'>loading and errorstates</b> to create a more consistent experience and help users navigate waiting times with clarity
            </p>
            <p>
              Key improvements included streamlined <b className='text-primary'>onboarding</b>, a smooth <b className='text-primary'>account deletion</b> flow, and introduction of an <b className='text-primary'>AI-powered help assistant</b>. I also enhanced map filters and enabled adhoc payments with credit card for public charging.
            </p>
            <p>
              As EVBox hardware evolved, I enhanced the app to support new capabilities like <b className='text-primary'>auto-start, charging with solar energy, and advanced scheduling</b>. While reimagining the station owner experience I ensure seamless compatibility with legacy and third-party stations.
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
                  width={1680}
                  height={1120}
                  className="object-contain w-full h-auto block"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <figcaption>Charnge charging mode</figcaption>
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
        <h2 className='text-primary'>More details are coming soon…</h2>  
      </motion.section>

    </div>
  );
} 