"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Star, Trophy, TrendingUp } from "lucide-react";

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

    </div>
  );
} 