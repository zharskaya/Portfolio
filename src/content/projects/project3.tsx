"use client";

import React from 'react';
import { motion } from "framer-motion";
import { StarIcon, TrophyIcon, TrendingUpIcon } from "@/components/ui/icons";
import Image from "next/image";
import { ImageZoom } from "@/components/ui/image-zoom";

export default function Project3Story() {
  return (
    <div className="project-content min-h-[60vh]">

      {/* ─── ABOUT ─── */}
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
                I owned the UX of the EVBox Everon app for almost four years. It started as a charging-on-the-go tool for lease drivers, sitting at 3.2 stars. We turned it into something different: a companion app for EV station owners at home.
              </p>
              <p>
                I shipped features, fixed systemic UX gaps, and <b className='text-primary'>grew into leading the design direction</b> across the product.
              </p>
            </div>
          </div>

          {/* 02 — My Design Footprint */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-3 md:gap-12">
            <div className="md:text-right">
              <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 02 ]</span>
              <h4 className="mt-0">My Design Footprint</h4>
            </div>
            <div className="[&>:first-child]:mt-0">
              <ul className="list-disc space-y-2 pl-6">
                <li>Owned UX/UI for mobile across iOS and Android</li>
                <li>Shaped the design system and interaction patterns</li>
                <li>Ran usability testing and user research</li>
                <li>Grew into design leadership — set direction, mentored, aligned stakeholders</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ─── SIGNALS OF SUCCESS ─── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="section-container space-y-8 md:space-y-12"
      >
        <h3 id="signals-of-success" className="h3-section text-right">
          <span className="block text-ghost">Signals of</span>
          <span className="block text-primary">Success</span>
        </h3>

        <div>
          <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 03 ]</span>
          <h4 className="text-primary mt-0">Outcome</h4>
        </div>

        <ul className='px-0 space-y-6'>
          <li className="flex gap-4">
            <StarIcon size={20} className="mt-0.5 shrink-0 text-primary" />
            <div>
              <div className='highlight text-primary'>3.2 → 4.4 App Store rating uplift</div>
              <div>Users went from angry reviews to recommending the app</div>
            </div>
          </li>
          <li className="flex gap-4">
            <TrophyIcon size={20} className="mt-0.5 shrink-0 text-primary" />
            <div>
              <div className='highlight text-primary'>Smartest charger award</div>
              <div><a href="https://www.faz.net/kaufkompass/vergleich/die-beste-wallbox/#evboxlivo" target="_blank" rel="noopener noreferrer" className="text-accent">Frankfurter Allgemeine Zeitung</a> ranked EVBox Livo together with the apps as <b className='text-primary'>the smartest charging station on the market</b></div>
            </div>
          </li>
          <li className="flex gap-4">
            <TrendingUpIcon size={20} className="mt-0.5 shrink-0 text-primary" />
            <div>
              <div className='highlight text-primary'>Fewer support cases over time</div>
              <div>Systematic UX fixes reduced confusion — users stopped calling because the app started making sense</div>
            </div>
          </li>
        </ul>
      </motion.section>

      {/* ─── DESIGN PROCESS ─── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="section-container"
      >
        <h3 id="design-process" className="h3-section text-right">
          <span className="block text-ghost">Design</span>
          <span className="block text-primary">Process</span>
        </h3>

        <div className="mt-10 md:mt-12">
          <p>
            I inherited the app at 3.2 stars. Before touching anything, I ran a full UX assessment — mapped every flow, catalogued every friction point. Then I sat down with Product and prioritised ruthlessly. One gap stood out above everything else: <b className='text-primary'>missing and inconsistent loading states</b>.
          </p>
        </div>
      </motion.section>

      {/* [04] Loading states */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="section-container"
      >
        <div className="flex flex-col lg:flex-row w-full lg:items-start">
          {/* Content */}
          <div className="w-full lg:w-1/2 lg:pr-8 xl:pr-12 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
            <div>
              <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 04 ]</span>
              <h4 className="mt-0">Loading states</h4>
            </div>
            <p>
              I collected and categorised every async interaction in the app — every tap that triggered a wait, every screen that went blank. Then I designed a system of states that told users what was happening and why.
            </p>
          </div>
          {/* Image */}
          <div className="relative w-full lg:w-1/2 mt-4 sm:mt-5 lg:mt-0">
            <figure className="max-w-[1680px] mx-auto">
              <ImageZoom
                src="/images/projects/station-owner-app-03.jpg"
                alt="Categorization of loading states"
                width={1680}
                height={1140}
                className="object-contain w-full h-auto block"
                quality={95}
                sizes="(max-width: 1680px) 100vw, 50vw"
                caption="Categorization of loading states"
              />
            </figure>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="section-container"
      >
        <figure className="max-w-[1680px] mx-auto">
          <ImageZoom
            src="/images/projects/station-owner-app-05.jpg"
            alt="Example of loading states"
            width={1680}
            height={876}
            className="object-contain w-full h-auto block"
            quality={95}
            sizes="(max-width: 1680px) 100vw, 50vw"
            caption="Example of loading states"
          />
        </figure>
      </motion.section>

      {/* Contextual animations */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="section-container"
      >
        <div className="flex flex-col lg:flex-row w-full lg:items-start">
          {/* Content */}
          <div className="w-full lg:w-1/2 lg:pr-8 xl:pr-12 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
            <h4 className="mt-0">Contextual animations</h4>
            <p>
              Some flows took over 30 seconds to process. You can&#39;t fix the backend latency. But you can <b className='text-primary'>design how waiting feels</b>.
            </p>
            <p>
              I replaced static spinners with contextual animations that showed progress and explained what was happening. Ending a charging session, for example, became three clear stages:
            </p>
            <ul className='list-disc'>
              <li>Request sent</li>
              <li>Confirmation</li>
              <li>Loading session report</li>
            </ul>
            <p>
              Users got a sense of progress — and could exit early without losing data.
            </p>
          </div>
          {/* Images — stacked vertically */}
          <div className="relative w-full lg:w-1/2 mt-4 sm:mt-5 lg:mt-0 space-y-6">
            <figure className="max-w-[1680px] mx-auto">
              <ImageZoom
                src="/images/projects/station-owner-app-04.jpg"
                alt="End session animation steps"
                width={1680}
                height={834}
                className="object-contain w-full h-auto block"
                quality={95}
                sizes="(max-width: 1024px) 100vw, 50vw"
                caption="End charging session animation steps"
              />
            </figure>
            <figure className="max-w-[1680px] mx-auto">
              <Image
                src="/images/projects/station-owner-app-02.gif"
                alt="End charging session loading experience"
                width={910}
                height={930}
                className="object-contain w-full h-auto block"
                quality={95}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <figcaption>End charging session loading experience</figcaption>
            </figure>
          </div>
        </div>
      </motion.section>

      {/* [05] Charging with Solar Energy */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="section-container"
      >
        <div>
          <div>
            <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 05 ]</span>
            <h4 className="mt-0">Charging with Solar Energy</h4>
          </div>
          <div className="flex flex-col lg:flex-row w-full lg:items-start">
            {/* Content */}
            <div className="w-full lg:w-1/2 lg:pr-8 xl:pr-12 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
              <p>
              The new gen of EVBox chargers had solar capabilities. The firmware exposed a number of technical parameters. Station owners — not engineers — had to configure them.
              </p>
              <p>I worked with hardware architects and ran user interviews to find what actually mattered. Then I proposed collapsing the complexity into three predefined charging modes. One simple choice instead of complex settings:</p>
              <ul className='list-disc space-y-6'>
                <li>
                  <span className='highlight text-primary'>Full Power</span> prioritizes maximum available charging speed regardless of weather conditions
                </li>
                <li>
                  <span className='highlight text-primary'>Hybrid</span> combines solar and grid energy, minimizing grid usage and reducing charging costs
                </li>
                <li>
                  <span className='highlight text-primary'>Full Solar</span> uses only solar energy for charging; the charging speed is slow and depends on weather conditions
                </li>
              </ul>
            </div>
            {/* Image */}
            <div className="relative w-full lg:w-1/2 mt-4 sm:mt-5 lg:mt-0">
              <figure className="max-w-[1680px] mx-auto">
                <Image
                  src="/images/projects/station-owner-app-01.gif"
                  alt="Changing charging modes"
                  width={910}
                  height={930}
                  className="object-contain w-full h-auto block"
                  priority
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <figcaption>Change charging mode</figcaption>
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
        className="section-container"
      >
        <p className='highlight text-primary'>More from this project is on the way...</p>
      </motion.section>

    </div>
  );
}
