"use client";

import React, { useEffect, useState } from 'react';
import { CircleCheckIcon, StopwatchIcon, TrendingUpIcon, TrophyIcon } from "@/components/ui/icons";

import Image from "next/image";
import { ImageZoom } from "@/components/ui/image-zoom";
import { motion } from "framer-motion";

export default function Project6Story() {
  const [shouldAutoplay, setShouldAutoplay] = useState(true);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setShouldAutoplay(false);
    }
  }, []);

  return (
    <div className="project-content">
      {/* Overview Section */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="section-container space-y-10 md:space-y-16"
      >
        <h3 id="about" className="h3-section text-right">
          <span className="block text-ghost">About</span>
          <span className="block text-primary">the project</span>
        </h3>

        <div className="space-y-8">
          {/* 01 — Context */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-3 md:gap-12">
            <div className="md:text-right">
              <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 01 ]</span>
              <h4 className="mt-0">Context</h4>
            </div>
            <div className="[&>:first-child]:mt-0">
              <p>
                EVBox was launching the Livo — a next-gen charger that needed <b className='text-primary'>a new installer app to ship with it</b>. Hard deadline, no fallback.
              </p>
              <p>
                The existing experience wasn't cutting it: confusing navigation, unreliable connectivity, no clear guidance. Instead of patching a broken foundation, we <b className='text-primary'>redesigned from scratch</b>.
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
                Design end-to-end experience to let professional electricians install and configure next-gen EVBox chargers. Fast and friction-free.
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
              <ul className="list-disc space-y-2 pl-6">
                <li>Sole designer on the project. Owned the end-to-end design process from research to shipped product</li>
                <li>Aligned hardware, firmware, mobile dev, regional, marketing, and tech writing teams</li>
                <li>Ran user research across 4 markets (NL, BE, FR, NO)</li>
                <li>Designed UX/UI, illustrations, animations, and configuration sticker</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Impact */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="section-container space-y-8 md:space-y-12"
      >
        <h3 id="outcome" className="h3-section text-right">
          <span className="block text-ghost">Ripples of</span>
          <span className="block text-primary">Impact</span>
        </h3>

        <div>
          <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 04 ]</span>
          <h4 className="text-primary mt-0">Outcome</h4>
        </div>

        {/* 04 — Outcome */}
          <div className="flex flex-col lg:flex-row w-full lg:items-start">
            {/* Content */}
            <div className="w-full lg:w-1/2 lg:pr-12 xl:pr-20 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
              <ul className='px-0 space-y-6'>
              <li className="flex gap-4">
                  <CircleCheckIcon size={20} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <div className='text-primary highlight'>Achieved connectivity target</div> 
                    <div>96.5% of new-gen chargers connected to the backend</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <StopwatchIcon size={20} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <div className='text-primary highlight'>3x faster configuration</div> 
                    <div>Installers reported reduced friction and time-on-site</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <TrendingUpIcon size={20} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <div className='text-primary highlight'>Improved installers' experience</div> 
                    <div>Positive feedback highlighted easier and more intuitive setup and testing</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <TrophyIcon size={20} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <div className='text-primary highlight'>Recognised by customers</div> 
                    <div>EVBox Livo charging station was rated best overall by customers in <a href="https://www.p3-group.com/en/p3-updates/p3-wallbox-benchmark-23/" target="_blank" rel="noopener noreferrer" className="text-accent">P3 Group's 2023 Wallbox Benchmark</a>, standing out in every category—especially for its <b className='text-primary'>installer experience</b>, which scored <b className='text-primary'>88.7 / 100</b></div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <TrophyIcon size={20} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <div className='text-primary highlight'>Recognised by industry experts</div> 
                    <div><a href="https://www.faz.net/kaufkompass/vergleich/die-beste-wallbox/#evboxlivo" target="_blank" rel="noopener noreferrer" className="text-accent">Frankfurter Allgemeine Zeitung</a> has ranked EVBox Livo as <b className='text-primary'>the smartest charging station on the market</b></div>
                  </div>
                </li>
              </ul>
            </div>
            {/* Image */}
            <div className="relative w-full lg:w-1/2 lg:mt-0">
              <figure className="max-w-[1680px] mx-auto lg:mt-0">
                <ImageZoom
                  src="/images/projects/install-app-13.jpg"
                  alt="Impact visualization showing the success metrics and achievements"
                  width={1680}
                  height={1120}
                  className="object-contain w-full h-auto block"
                  priority
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  caption="EVBox Livo and Install app awards"
                />
              </figure>
            </div>
          </div>

        {/* 04b — What we cut */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-4 md:space-y-6"
        >
          <div>
            <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 05 ]</span>
            <h4 className="text-primary mt-0">What we cut</h4>
          </div>

          <p>
            The EVBox Livo launch set a hard deadline. Not everything made it into version 1:
          </p>
          <ul className="list-disc space-y-4 pl-6">
            <li>
              <div className='highlight text-primary'>Connectivity status</div>
              <div>The app could only show internet connection, not whether the station reached the backend. Wi-Fi details were limited. Firmware wasn't ready, and the deadline didn't move.</div>
            </li>
            <li>
              <div className='highlight text-primary'>Remote reboot</div>
              <div> Planned for the app, cut to physical hard reset only (power off the station).</div>
            </li>
            <li>
              <div className='highlight text-primary'>Legal friction stayed</div> 
              <div>Certified-electrician confirmation was required before configuration and on settings. A legal requirement I had to design around, not remove.</div>
            </li>
          </ul>
          <p>
            Given more time, I would have polished Wi-Fi configuration. Tech constraints made this the roughest part of the experience.
          </p>
        </motion.div>
      </motion.section>

      {/* Chapter 3 — Behind the Layers */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="section-container space-y-10 md:space-y-16"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6">
          {/* Left on desktop, below on mobile */}
          <p className="text-muted-foreground max-w-none mt-0 mb-0 order-2 md:order-1 text-left md:w-1/2">
            {"// Grab a coffee, it's a long read."}
          </p>
          {/* Right on desktop, top on mobile */}
          <h3 id="process" className="h3-section text-right order-1 md:order-2 md:w-1/2 !mb-0">
            <span className="block text-ghost">Behind the</span>
            <span className="block text-primary">Layers</span>
          </h3>
        </div>

        {/* 06 — Research */}
        <div className="flex flex-col lg:flex-row w-full lg:items-start">
          {/* Content */}
          <div className="w-full lg:w-2/3 lg:pr-12 xl:pr-20 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
            <div>
              <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 06 ]</span>
              <h4 className="text-primary mt-0">Research</h4>
            </div>
            <p>
              I start from digging into how installers actually work with EVBox stations and competitors:
            </p>
            <ul className="list-disc space-y-4 pl-6">
              <li>
                Interviewed installers across 4 markets (NL, BE, FR, NO) with regional teams.
              </li>
              <li>
                Interviewed tech support, the people talking to installers every day.
              </li>
              <li>
                Collected known issues and feedback on previous-gen stations from Product.
              </li>
              <li>
                Hands-on tested 4 competitor stations with the Hardware Design team.
              </li>
            </ul>
          </div>
          {/* Image */}
          <div className="relative w-full lg:w-1/3 lg:mt-0">
            <figure className="max-w-[1680px] mx-auto lg:mt-0">
              <ImageZoom
                src="/images/projects/install-app-03.jpg"
                alt="Photos of testing competitor charging stations and early EVBox prototypes"
                width={1680}
                height={1480}
                className="object-contain w-full h-auto block"
                quality={95}
                sizes="(max-width: 1680px) 100vw, 50vw"
                caption="Fun of testing competitor charging stations and early EVBox prototypes"
              />
            </figure>
          </div>
        </div>

        {/* 07 — Key pain points */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-4 md:space-y-6"
        >
          <div>
            <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 07 ]</span>
            <h4 className="text-primary mt-0">Key pain points</h4>
          </div>
          <p>
            What installers struggled with most:
          </p>
          <ul className="list-disc space-y-4 pl-6">
            <li>
              Pairing with the charging station requires manual input of ID, password, and security code (20-character strings)
            </li>
            <li>
              The connection with the charging station is not stable.
            </li>
            <li>
              No guidelines in the app on how to configure the station, what settings are required.
            </li>
            <li>
              No clear feedback in the app if the settings are applied or not.
            </li>
            <li>
              Confusing distribution of settings between installer and station owner modes.
            </li>
            <li>
              Safety-sensitive settings accessible to non-professional users.
            </li>
            <li>
              Not clear how to connect a station to the backend (Charging management system).
            </li>
          </ul>
        </motion.div>

        {/* 08 — Strategic product decisions */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-4 md:space-y-6"
        >
          <div>
            <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 08 ]</span>
            <h4 className="text-primary mt-0">Strategic product decisions</h4>
          </div>
          <p>
            Installer interviews shaped several product-level decisions I brought to the team:
          </p>
          <ul className="list-disc space-y-4 pl-6">
            <li>
              <div className='highlight text-primary'>Split installer and owner experience</div> 
              <div>The old app mixed both roles — installers were confused, and non-professionals had access to safety-sensitive settings. I pushed for a clean separation.</div>
            </li>
            <li>
              <div className='highlight text-primary'>Plug-and-charge by default</div> 
              <div>Installers hated setting up backend connectivity on-site. I advocated for instant charging to enable testing without backend dependency.</div>
            </li>
            <li>
            <div className='highlight text-primary'>Wi-Fi hotspot over Bluetooth</div> 
            <div>I advocated for Bluetooth. Fewer edge cases, more straightforward for users. But supply chain risks and spare part availability outweighed UX preference. I accepted the tradeoff and designed around the complexity.</div>
            </li>
          </ul>
        </motion.div>

        {/* 09 — CJM */}
        <div className="flex flex-col lg:flex-row w-full lg:items-start">
          {/* Content */}
          <div className="w-full lg:w-1/3 lg:pr-12 xl:pr-20 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
            <div>
              <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 09 ]</span>
              <h4 className="text-primary mt-0">CJM</h4>
            </div>
            <p>
              I mapped the to-be journey for the new-gen installer experience.
            </p>
          </div>
          {/* Image */}
          <div className="relative w-full lg:w-2/3 lg:mt-0">
            <figure className="max-w-[1680px] mx-auto lg:mt-0">
              <ImageZoom
                src="/images/projects/install-app-04.jpg"
                alt="Customer Journey Map To-Be"
                width={1680}
                height={2936}
                className="object-contain w-full h-auto block"
                quality={95}
                sizes="(max-width: 1680px) 100vw, 50vw"
                caption="Customer Journey Map To-Be"
              />
            </figure>
          </div>
        </div>
      </motion.section>

      {/* Chapter 4 — Design in Detail */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="section-container space-y-10 md:space-y-16"
      >
        <h3 id="visuals" className="h3-section text-right">
          <span className="block text-ghost">The Nitty</span>
          <span className="block text-primary">Gritty</span>
        </h3>

        {/* 10 — Wireframes and user flows */}
        <div className="flex flex-col lg:flex-row w-full lg:items-start">
          {/* Content */}
          <div className="w-full lg:w-1/2 lg:pr-12 xl:pr-20 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
            <div>
              <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 10 ]</span>
              <h4 className="text-primary mt-0">Wireframes and user flows</h4>
            </div>
            <p>
              I kicked off the design phase with rapid user flows and wireframes as the fastest way to communicate ideas and align with Product and Development teams, surfacing technical constraints, errors, and edge cases early.
            </p>
          </div>
          {/* Images */}
          <div className="relative w-full lg:w-1/2 lg:mt-0 space-y-2 md:space-y-4">
            <figure className="max-w-[1680px] mx-auto mb-0 lg:mt-0">
              <ImageZoom
                src="/images/projects/install-app-07-2.jpg"
                alt="User flow diagram showing decision points for QR scanning vs manual entry and configuration"
                width={800}
                height={1200}
                className="object-contain w-full h-auto block"
                quality={95}
                sizes="(max-width: 1024px) 100vw, 50vw"
                caption="User flow. Happy scenario"
              />
            </figure>
            <figure className="max-w-[1680px] mx-auto mb-0 lg:mt-0">
              <ImageZoom
                src="/images/projects/install-app-05.jpg"
                alt="Wireframes and user flows"
                width={5879}
                height={2878}
                className="object-contain w-full h-auto block"
                quality={95}
                sizes="(max-width: 1680px) 100vw, 50vw"
                caption="Example of wireframes and user flows"
              />
            </figure>
            <figure className="max-w-[1680px] mx-auto mb-0 lg:mt-0">
              <ImageZoom
                src="/images/projects/install-app-14.jpg"
                alt="Wireframes and user flows"
                width={8002}
                height={8311}
                className="object-contain w-full h-auto block"
                quality={95}
                sizes="(max-width: 1680px) 100vw, 50vw"
                caption="Example of quick feature exploration with dev team"
              />
            </figure>
          </div>
        </div>

        {/* 11 — Pairing with the charger */}
        <div className="flex flex-col lg:flex-row w-full lg:items-start">
          {/* Content */}
          <div className="w-full lg:w-1/2 lg:pr-12 xl:pr-20 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
            <div>
              <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 11 ]</span>
              <h4 className="text-primary mt-0">Pairing with the charger</h4>
            </div>
            <p>
              The most critical flow in the app. Installers connect to the station's Wi-Fi hotspot and authenticate with a security code. For security reasons the network is visible only in the app.
            </p>
            <p>
              We encoded all credentials into a QR code on the configuration sticker. One scan: auto-connect, auto-authenticate. Done.
            </p>
          </div>
          {/* Images */}
          <div className="relative w-full lg:w-1/2 lg:mt-0">
            <figure className="max-w-[1680px] mx-auto lg:mt-0">
              <ImageZoom
                src="/images/projects/install-app-06.jpg"
                alt="Configuration sticker"
                width={910}
                height={909}
                className="object-contain w-full h-auto block"
                quality={95}
                sizes="(max-width: 1024px) 100vw, 50vw"
                caption="Evolution of the Configuration Sticker"
              />
            </figure>
          </div>
        </div>

        {/* 11b — Pairing challenges & testing */}
        <div className="flex flex-col lg:flex-row w-full lg:items-start">
          {/* Content */}
          <div className="w-full lg:w-1/2 lg:pr-12 xl:pr-20 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
            <p>The happy path is quick. The edge cases aren't. 20-character security code, cross-platform Wi-Fi restrictions, denied camera access, failed authentication. Each one is a rabbit hole.</p>
            <p>
              I cut manual input by using the station ID as the hotspot name and splitting long strings into 4-character chunks. For the rest, I mapped every error path with the dev team and designed recovery flows for both iOS and Android.
            </p>
            <p>
              Usability tests with installers in the Netherlands and Germany refined sticker placement, in-app instructions, and the full interaction flow.
            </p>
          </div>
           {/* Images */}
           <div className="relative w-full lg:w-1/2 lg:mt-0 space-y-2 md:space-y-4">
           <figure className="max-w-[1680px] mx-auto mb-0 lg:mt-0">
              <ImageZoom
                src="/images/projects/install-app-07.jpg"
                alt="Pairing with the charger"
                width={1680}
                height={1120}
                className="object-contain w-full h-auto block"
                quality={95}
                sizes="(max-width: 1024px) 100vw, 50vw"
                caption="Pairing with the charger"
              />
            </figure>
            <figure className="max-w-[1680px] mx-auto mb-0 lg:mt-0">
              <ImageZoom
                src="/images/projects/install-app-07-1.jpg"
                alt="Edge case screens: manual pairing input, camera access denied, unable to connect"
                width={1301}
                height={900}
                className="object-contain w-full h-auto block"
                quality={95}
                sizes="(max-width: 1024px) 100vw, 50vw"
                caption="Edge cases: manual input, camera access, connection errors"
              />
            </figure>  
          </div>
        </div>

        {/* 12 — Configuration flow */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col lg:flex-row w-full lg:items-start"
        >
          {/* Content */}
          <div className="w-full lg:w-1/2 lg:pr-12 xl:pr-20 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
            <div>
              <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 12 ]</span>
              <h4 className="text-primary mt-0">Configuration flow</h4>
            </div>
            <p>
              The Configuration Wizard tackles the biggest pain points in initial station setup.
            </p>
            <p>
              Usability testing surfaced four issues:
            </p>
            <ul className="list-disc space-y-4 pl-6">
              <li>
                <div className='text-primary highlight'>Lost in connectivity sub-flows</div>
                <div>Close button was there. Nobody saw it. Everyone looked for a CTA at the bottom.</div>
                <p><b className='text-primary'>Solution: </b>Added a "Done" button where installers actually look — bottom of the screen.</p>
              </li>
              <li>
                <div className='text-primary highlight'>Unclear sticker placement</div>
                <div>Participants didn't know where to put the configuration sticker.</div>
                <p><b className='text-primary'>Solution: </b>Rewrote instructions with the tech writing team.</p>
              </li>
              <li>
                <div className='text-primary highlight'>No feedback after applying a setting</div>
                <div>Moving to the next step wasn't enough — users couldn't tell if a setting took effect.</div>
                <p><b className=' text-primary'>Solution: </b>Added a green confirmation banner after each applied setting.</p>
              </li>
              <li>
                <div className='text-primary highlight'>No clear endpoint</div>
                <div>Users didn't know what to do next after the configuration in the app was done.</div>
                <p><b className=' text-primary'>Solution: </b>Combined final instructions with a completion confirmation screen.</p>
              </li>
            </ul>
            <p>Next round of testing: all issues resolved. Users rated it 5/5.</p>
          </div>
          {/* Images */}
          <div className="relative w-full lg:w-1/2 lg:mt-0 space-y-2 md:space-y-4">
            <figure className="max-w-[1680px] mx-auto mb-0 lg:mt-0">
              <Image
                src="/images/projects/install-app-08.jpg"
                alt="Usability test set up"
                width={910}
                height={909}
                className="object-contain w-full h-auto block"
                quality={95}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <figcaption>{`Usability test online setup. From left to right: Notes, Figma prototype, Script, Product Owner, Participant, Myself.`}</figcaption>
            </figure>
            <figure className="max-w-[1680px] mx-auto mb-0 lg:mt-0">
              <ImageZoom
                src="/images/projects/install-app-09.jpg"
                alt="Mock-ups of the Configuration flow"
                width={1680}
                height={1712}
                className="object-contain w-full h-auto block"
                quality={95}
                sizes="(max-width: 1024px) 100vw, 50vw"
                caption="Configuration wizard"
              />
            </figure>
          </div>
        </motion.div>

        {/* 13 — Visual design */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col lg:flex-row w-full lg:items-start"
        >
          {/* Content */}
          <div className="w-full lg:w-1/2 lg:pr-12 xl:pr-20 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
            <div>
              <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 13 ]</span>
              <h4 className="text-primary mt-0">Visual design</h4>
            </div>
            <p>
              Four constraints shaped the visual design:
            </p>
            <ul className="list-disc space-y-4 pl-6">
              <li>
                <div className='text-primary highlight'>Neutral branding</div>
                <div>The app works with EVBox and other brands — no EVBox logo, colors, or patterns allowed.</div>
              </li>
              <li>
                <div className='text-primary highlight'>Product illustrations instead of photos</div>
                <div>Branded renders were off-limits. I created custom illustrations within the design system.</div>
              </li>
              <li>
                <div className='text-primary highlight'>Light color mode</div>
                <div>Dark on light reads better everywhere installers work from underground parking to bright sunlight.</div>
              </li>
              <li>
                <div className='text-primary highlight'>Design system compliance</div>
                <div>Built with existing design system components, patterns, and icons for cross-product consistency.</div>
              </li>
            </ul>
          </div>
          {/* Images */}
          <div className="relative w-full lg:w-1/2 lg:mt-0 space-y-2 md:space-y-4">
            <figure className="max-w-[1680px] mx-auto mb-0 lg:mt-0">
              <ImageZoom
                src="/images/projects/install-app-10.jpg"
                alt="Some styles and components"
                width={2740}
                height={1555}
                className="object-contain w-full h-auto block"
                quality={95}
                sizes="(max-width: 1024px) 100vw, 50vw"
                caption="Sneak peek at some styles and components"
              />
            </figure>
            <figure className="max-w-[1680px] mx-auto mb-0 lg:mt-0">
              <ImageZoom
                src="/images/projects/install-app-11.jpg"
                alt="Illustrations"
                width={1680}
                height={643}
                className="object-contain w-full h-auto block"
                quality={95}
                sizes="(max-width: 1024px) 100vw, 50vw"
                caption="Example of Illustrations"
              />
            </figure>
          </div>
        </motion.div>
      </motion.section>

      {/* Chapter 5 — Almost ALIVE */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="section-container space-y-10 md:space-y-16"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6">
          
          {/* Left on desktop, below on mobile */}
          <p className="text-muted-foreground max-w-none mt-0 mb-0 order-2 md:order-1 text-left md:w-1/2">
            {"// Complete happy path from pairing to configuration."}
          </p>
          
          {/* Right on desktop, top on mobile */}
          <h3 id="demo" className="h3-section text-right order-1 md:order-2 md:w-1/2 !mb-0">
            <span className="block text-ghost">Set</span>
            <span className="block text-primary">in Motion</span>
          </h3>
        </div>

        <div className="aspect-video w-full mx-auto overflow-hidden">
          <video
            className="w-full h-full object-contain"
            controls
            autoPlay={shouldAutoplay}
            loop
            muted
            playsInline
            preload="metadata"
            poster="/images/projects/install-app-12.jpg"
            controlsList="nodownload"
            disablePictureInPicture
          >
            <source src="/videos/install-app-demo.mp4" type="video/mp4" />
            <p className="p-4 text-center text-muted-foreground">
              Your browser doesn&apos;t support HTML5 video.
              <br />
              <a
                href="/videos/install-app-demo.mp4"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download the video
              </a>
            </p>
          </video>
        </div>
      </motion.section>

    </div>
  );
} 