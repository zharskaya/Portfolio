"use client";

import React, { useEffect, useRef } from 'react';
import { TrendingUp, Zap, CloudCheck, Award } from "lucide-react";

import Image from "next/image";
import { ImageZoom } from "@/components/ui/image-zoom";
import { motion } from "framer-motion";

export default function Project1Story() {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      const video = videoRef.current;
      if (!video) return;
      const shrinkEnd = 400; // px after which video is fully shrunk
      const scrollY = window.scrollY;
      if (scrollY > shrinkEnd) {
        video.classList.add("is-shrunk");
      } else {
        video.classList.remove("is-shrunk");
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="space-y-12 md:space-y-16">
      {/* Video Demo */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="section-container relative w-full pt-0 mt-0 rounded-lg"
      >
        <div
          ref={videoRef}
          className={`
            sticky top-0 z-10
            transition-all duration-700
            aspect-video
            overflow-hidden
            w-full
            max-w-[1680px]
            mx-auto
            rounded-lg
          `}
          style={{ minHeight: '200px' }}
          id="sticky-video"
        >
          <video
            className="w-full h-full object-contain pt-0 mt-0"
            controls
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/images/projects/install-app-12.jpg"
            controlsList="nodownload"
            disablePictureInPicture
            style={{ maxHeight: '80vh' }}
          >
            <source src="/videos/install-app-demo.mp4" type="video/quicktime" />
            <source src="/videos/install-app-demo.mp4" type="video/mp4" />
            <source src="/videos/install-app-demo.mp4" type="video/webm" />
            <p className="p-4 text-center text-muted-foreground">
              Your browser doesn't support HTML5 video. 
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
              Ahead of the new EVBox charger launch, we recognized a critical issue: <b className='text-primary'>the end-to-end experience</b> for both installers and station owners <b className='text-primary'>didn't meet user expectations</b>. 
              User feedback revealed confusing navigation, unreliable connectivity, and a lack of clear guidance.
            </p>
            <p>
              Instead of patching the old foundation, the product team chose to <b className='text-primary'>redesign the user experience from the ground up</b> to meet user needs and support new hardware capabilities.
            </p>
          </div>
        
        <div>
          <h2 className='text-primary'>Challenge</h2>
          <p>
            Design a seamless end-to-end experience, including a mobile app, that enables professional electricians to efficiently install and configure next-generation EVBox charging stations.
          </p>
        </div>

        <div>
          <h2 className='text-primary'>My Design Footprint</h2>
          <p>
            Design leadership, User Reasearch, UX/UI design for mobile, Prototyping, Usability testing, Illustrations, Animations 
          </p>
        </div>
      </motion.section>

      {/* Impact */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container"
      >
        <div>
          <h2 className='text-primary'>Ripples of Impact</h2>
          <div className="flex flex-col lg:flex-row w-full lg:items-start mt-6">
            {/* Content */}
            <div className="flex flex-col justify-center w-full lg:w-1/2 lg:pr-8 xl:pr-12">
              <ul className='px-0 space-y-6'>
              <li className="flex gap-4">
                  <CloudCheck className="h-5 w-5 mt-1 shrink-0 text-primary" />
                  <div>
                    <div className='font-bold text-primary'>Achieved connectivity target</div> 
                    <div>96.5% of new-gen chargers connected to the backend</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Zap className="h-5 w-5 mt-1 shrink-0 text-primary" />
                  <div>
                    <div className='font-bold text-primary'>3x faster configuration</div> 
                    <div>Installers reported reduced friction and time-on-site</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <TrendingUp className="h-5 w-5 mt-1 shrink-0 text-primary" />
                  <div>
                    <div className='text-primary font-bold'>Improved installaters' experience</div> 
                    <div>Positive feedback highlighted easier and more intuitive setup and testing</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Award className="h-5 w-5 mt-1 shrink-0 text-primary" />
                  <div>
                    <div className='font-bold text-primary'>Recognised by customers</div> 
                    <div>EVBox Livo charging station was rated best overall by customers in <a href="https://www.p3-group.com/en/p3-updates/p3-wallbox-benchmark-23/" target="_blank" rel="noopener noreferrer" className="text-accent">P3 Group's 2023 Wallbox Benchmark</a>, standing out in every category—especially for its <b className='text-primary'>installer experience</b>, which scored <b className='text-primary'>88.7 / 100</b></div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Award className="h-5 w-5 mt-1 shrink-0 text-primary" />
                  <div>
                    <div className='font-bold text-primary'>Recognised by industry experts</div> 
                    <div><a href="https://www.faz.net/kaufkompass/vergleich/die-beste-wallbox/#evboxlivo" target="_blank" rel="noopener noreferrer" className="text-accent">Frankfurter Allgemeine Zeitung</a> has ranked EVBox Livo as <b className='text-primary'>the smartest charging station on the market</b></div>
                  </div>
                </li>
              </ul>
            </div>
            {/* Image */}
            <div className="relative w-full lg:w-1/2 mt-4 sm:mt-5 lg:mt-0">
              <figure className="section-container max-w-[1680px] mx-auto">
                <ImageZoom
                  src="/images/projects/install-app-13.jpg"
                  alt="Impact visualization showing the success metrics and achievements"
                  width={1680}
                  height={1120}
                  className="object-contain w-full h-auto block"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <figcaption>EVBox Livo and Install app awards</figcaption>
              </figure>
            </div>
          </div>
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
        <h1 className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 text-primary">Behind the Layers</h1>
        <p>Grab a coffee, it's a long read.</p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container"
      >
        <h2 className='text-primary'>Design process</h2>
        <p>Starting this project from scratch, I followed the Design Thinking framework, with some adjustments to fit the project's needs:</p>
        <ul className="list-disc space-y-4 pl-6">
          <li>
            I researched the current installer workflow, created an As-Is Customer Journey Map (CJM), and identified key areas for improvement
          </li>
          <li>
            During the ideation phase, I mapped the To-Be CJM and developed high-level wireframes, incorporating strategic business goals, product priorities, and technical limitations. We spent a significant amount of time refining the most critical user flows in detail
          </li>
          <li>
          I prototyped ideas and validated them through multiple rounds of usability testing, including end-to-end tests from unboxing to charger handoff
          </li>
          <li>
            I designed the UI, created illustrations and animations, and supported the development team during implementation
          </li>
        </ul>
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
            src="/images/projects/install-app-02.jpg"
            alt="Design process overview showing the journey from research to implementation"
            width={1680}
            height={512}
            className="object-contain w-full h-auto block"
            priority
            sizes="(max-width: 1680px) 100vw, 50vw"
          />
          <figcaption>Design process</figcaption>
        </figure>
      </motion.section>

      {/* Research */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container"
      >
        <h2 className='text-primary'>Research</h2>
        <p>
          The primary goal of this phase was to gain in-depth insights into installers' workflows and their experiences with the previous generation of EVBox charging stations, as well as with competitor products. To do this, I took the following steps: 
        </p>
        <ul className="list-disc space-y-4 pl-6">
          <li>
            Together with regional teams, I conducted user interviews with the installers in key regions (Netherlands, Belgium, France, Norway)
          </li>
          <li>
            I interviewed the technical support team who communicate with installers and address their issues daily
          </li>
          <li>
            I collect known issues and feedback about the previous generation charging stations from the Product team
          </li>
          <li>
            Together with the Hardware Design team we tried out the configuration of 4 competitors' stations
          </li>
        </ul>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl mx-auto space-y-4"
      >
        <figure className="section-container max-w-[1680px] mx-auto">
          <Image
            src="/images/projects/install-app-03.jpg"
            alt="Photos of testing testing competitor charging stations and early EVBox prototypes"
            width={1680}
            height={718}
            className="object-contain w-full h-auto block"
            priority
            sizes="(max-width: 1680px) 100vw, 50vw"
          />
          <figcaption>The fun of testing competitor charging stations and early EVBox prototypes</figcaption>
        </figure>
      </motion.section>

      {/* Pain points */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container"
      >
        <h2 className='text-primary'>Key pain points</h2>
        <p>
          Research data analysis revealed key pain points in the current installers' experience:
        </p>
        <ul className="list-disc space-y-4 pl-6">
          <li>
            Pairing with the charging station requires manual input of ID, password, and security code (20-character strings)
          </li>
          <li>
            The connection with the charging station is not stable
          </li>
          <li>
            No guidelines in the app on how to configure the station, what settings are required
          </li>
          <li>
            No clear feedback in the app if the settings are applied or not
          </li>
          <li>
            Confusing distribution of settings between installer and station owner modes
          </li>
          <li>
            Safety-sensitive settings accessible to non-professional users
          </li>
          <li>
            Not clear how to connect a station to the backend (Charging management system)
          </li>
        </ul>
      </motion.section>

      {/* Product decisions */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container"
      >
        <h2 className='text-primary'>Strategic Product Decisions</h2>
        <p>
          Several strategic product decisions significantly shaped the direction and mobile app experience: 
        </p>
        <ul className="list-disc space-y-4 pl-6">
          <li>
            Split installer and owner experiences to reduce confusion and prevent access to safety-sensitive settings. The Install app should serve installers only
          </li>
          <li>
            Enable plug-and-charge by default for instant testing without backend dependency. Installers hate wasting time on setting up backend connectivity
          </li>
          <li>
            Use local wi-fi hotspot for connection to the charging station
          </li>
        </ul>
      </motion.section>

      {/* CJM */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container"
      >
        <p>
          Considering everything mentioned above, I've mapped a journey To-Be for installers of the new-generation stations.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="space-y-4"
      >
        <figure className="section-container max-w-[1680px] mx-auto">
          <ImageZoom
            src="/images/projects/install-app-04.jpg"
            alt="Customer Journey Map To-Be"
            width={1680}
            height={2936}
            className="object-contain w-full h-auto block"
            priority
            sizes="(max-width: 1680px) 100vw, 50vw"
          />
          <figcaption>Customer Journey Map To-Be</figcaption>
        </figure>
      </motion.section>

      {/* Wireframes */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container"
      >
        <h2 className='text-primary'>Wireframes and user flows</h2>
        <p>
          I kicked off the design phase with rapid user flows and wireframes—the fastest way to communicate ideas and align with Product and Development teams, surfacing technical constraints, errors, and edge cases early.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="space-y-4"
      >
        <figure className="section-container max-w-[1680px] mx-auto">
          <ImageZoom
            src="/images/projects/install-app-05.jpg"
            alt="Wireframes and user flows"
            width={5879}
            height={2878}
            className="object-contain w-full h-auto block"
            priority
            sizes="(max-width: 5812px) 100vw, 50vw"
          />
          <figcaption>Example of wireframes and user flows</figcaption>
        </figure>
      </motion.section>

      {/* Pairing flow */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container"
      >
        <h2 className='text-primary'>Paring with the charger</h2>
        <p>
          Pairing with a charging station is one of the app's most critical flows.
        </p>
        <p>
          Installers must connect to the station's Wi-Fi hotspot with network name and password, and then authentificate with a security code (station key). For security reasons, this network is only accessible through the app but not in a standard Wi-Fi settings.
        </p>
        <p>
          To make pairing as seamless as possible, we encoded all required data into a QR code. Scanning it with the app automatically connects the mobile device to the station's hotspot and completes authentication. The QR code is printed on the configuration sticker included with the station.
        </p>
        <p>While the happy flow is quick and effortless, it comes with a range of edge cases. Key challenges:</p>
        <ul className="list-disc space-y-4 pl-6">
          <li>
            <div className='font-bold text-primary'>Simplify manual input while meeting security requirements</div>
            <div>I reduced manual input by aligning with architects to use the station ID as the hotspot name. I also proposed splitting long character strings into 4-character chunks.</div>
          </li>
          <li>
            <div className='font-bold text-primary'>Optimize user interaction with the app for both iOS and Android</div>
            <div>Handling wi-fi connections has several limitations and requires app users to provide some permissions, for example, permission for the app to access a camera to scan a QR code. Together with the Mobile app development team, we explore all these limitations and ensure we cover all of them.</div>
          </li>
          <li>
            <div className='font-bold text-primary'>Guiding installers</div>
            <div>Several steps are critical for installers and must not be missed. I added clear guidelines in the app, on the charging station itself, and in the documentation.</div>
          </li>
          <li>
            <div className='font-bold text-primary'>Identify and handle possible errors</div>
            <div>What happens if the user denies camera access, Wi-Fi is disabled, or authentication fails? Together with the development team, we thoughtfully addressed each of these edge cases and designed clear, actionable instructions to guide installers.</div>
          </li>
        </ul> 
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
            src="/images/projects/install-app-07.jpg"
            alt="Mock-ups of the Pairing flow"
            width={1680}
            height={876}
            className="object-contain w-full h-auto block"
            priority
            sizes="(max-width: 1680px) 100vw, 50vw"
          />
          <figcaption>Pairing with the charger</figcaption>
        </figure>
      </motion.section>

      {/* Configuration sticker */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container"
      >
      <p>
      This flow underwent several end-to-end usability tests with installers in the Netherlands and Germany. Iterations focused on optimizing user interaction, creatively designing and positioning the configuration sticker on the station, and refining the in-app instructions.
      </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="space-y-4"
      >
        <figure className="section-container max-w-[1680px] mx-auto">
          <ImageZoom
            src="/images/projects/install-app-06.jpg"
            alt="Configuration sticker"
            width={1680}
            height={314}
            className="object-contain w-full h-auto block"
            priority
            sizes="(max-width: 1680px) 100vw, 50vw"
          />
          <figcaption>Evolution of the Configuration Sticker</figcaption>
        </figure>
      </motion.section>

      {/* Configuration flow */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container"
      >
        <h2 className='text-primary'>Configuration flow</h2>
        <p>
          Another key flow was the Configuration Wizard. It was designed to address major user pain points during the initial configuration of the charging station.
        </p>
        <p>
          After designing the flow, I conducted a usability test to validate the experience. The test surfaced several critical issues:
        </p>
        <ul className="list-disc space-y-4 pl-6">
          <li>
            <div className='font-bold text-primary'>Unclear navigation back to the Configuration Wizard from internet connectivity sub-flows</div>
            <div>Although a standard modal close button was present, all participants instinctively looked for an action button at the bottom of the screen—where the main CTA is usually located</div>
            <div><b className=' text-primary'>Solution: </b>I introduced a "Done" button at the bottom of the screen to provide a more intuitive exit point</div>
          </li>
          <li>
            <div className='font-bold text-primary'>Ambiguous instructions on where to place the configuration sticker</div>
            <div>Participants were unsure about the sticker's correct placement</div>
            <div><b className=' text-primary'>Solution: </b>This was resolved through close collaboration with the tech writing team to clarify the instructions</div>
          </li>
          <li>
            <div className='font-bold text-primary'>Uncertainty about the final steps and whether configuration was complete</div>
            <div>Users didn't feel confident the process had ended</div>
            <div><b className=' text-primary'>Solution: </b>On the last screen of the wizard, I combined the final instructions with the configuration confirmation. The screen transition was redesigned to clearly signal the completion of the flow.</div>
          </li>
          </ul>
          <p>The next round of usability testing confirmed that we had resolved these issues. Users rated it 5 out of 5.</p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="space-y-4"
      >
        <figure className="w-full max-w-[1680px] mx-auto">
          <Image
            src="/images/projects/install-app-08.jpg"
            alt="Usability test set up"
            width={1680}
            height={840}
            className="object-contain w-full h-auto block"
            priority
            sizes="(max-width: 1680px) 100vw, 50vw"
          />
          <figcaption>Usability test online setup. From left to right: Notes, Figma prototype, Script, Product Owner, Participant, Myself.</figcaption>
        </figure>
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
            src="/images/projects/install-app-09.jpg"
            alt="Mock-ups of the Configuration flow"
            width={1680}
            height={1712}
            className="object-contain w-full h-auto block"
            priority
            sizes="(max-width: 1680px) 100vw, 50vw"
          />
          <figcaption>Configuration wizard</figcaption>
        </figure>
      </motion.section>

      {/* Visual design */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container"
      >
        <h2 className='text-primary'>Visual design</h2>
        <p>
          Several constraints influenced the visual design decisions for this project:
        </p>
        <ul className="list-disc space-y-4 pl-6">
          <li>
            <div className='font-bold text-primary'>Neutral branding</div>
            <div>Since the app is intended for use with EVBox-branded charging stations and other brands, it should not include the EVBox logo, brand colors, or recognizable patterns.</div>
          </li>
          <li>
            <div className='font-bold text-primary'>Product illustrations instead of photos</div>
            <div>Similar branding constraints applied to product photos. Since branded renders couldn't be used, I created custom illustrations aligned with the design system guidelines.</div>
          </li>
          <li>
            <div className='font-bold text-primary'>Light color mode</div>
            <div> Research indicates that dark text on a light background is generally more readable, even for individuals with good vision, particularly in low-light settings like underground parking or in bright sunlight.</div>
          </li>
          <li>
            <div className='font-bold text-primary'>Design system compliance</div>
            <div>To ensure consistency across products, I used components, patterns, illustrations, and icons from the existing design system.</div>
          </li>
        </ul>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="space-y-4"
      >
        <figure className="section-container max-w-[1680px] mx-auto">
          <ImageZoom
            src="/images/projects/install-app-10.jpg"
            alt="Some styles and components"
            width={2740}
            height={1555}
            className="object-contain w-full h-auto block"
            priority
            sizes="(max-width: 2740px) 100vw, 50vw"
          />
          <figcaption>Sneak peek at some styles and components</figcaption>
        </figure>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="space-y-4"
      >
        <figure className="section-container max-w-[1680px] mx-auto">
          <ImageZoom
            src="/images/projects/install-app-11.jpg"
            alt="Illustrations"
            width={1680}
            height={643}
            className="object-contain w-full h-auto block"
            priority
            sizes="(max-width: 1680px) 100vw, 50vw"
          />
          <figcaption>Example of Illustrations</figcaption>
        </figure>
      </motion.section>
      
      
    </div>
  );
} 