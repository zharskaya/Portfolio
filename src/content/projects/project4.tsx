"use client";

import React from 'react';
import { TrendingDownIcon, StopwatchIcon, DiamanIcon } from "@/components/ui/icons";
import { motion } from "framer-motion";
import Image from 'next/image';


export default function Project4Story() {
  return (
    <div className="project-content">

      {/* Section 1 — About the project */}
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
          {/* 01 — Business Context */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-3 md:gap-12">
            <div className="md:text-right">
              <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 01 ]</span>
              <h4 className="mt-0">Business Context</h4>
            </div>
            <div className="[&>:first-child]:mt-0">
              <p>EVBox Everon is a SaaS platform for managing EV charging networks. The company was shifting to freemium. A new hardware generation was launching with a hard deadline. And onboarding was fundamentally broken.</p>
            </div>
          </div>

          {/* 02 — Challenge */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-3 md:gap-12">
            <div className="md:text-right">
              <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 02 ]</span>
              <h4 className="mt-0">Challenge</h4>
            </div>
            <div className="[&>:first-child]:mt-0">
              <p>Redesign onboarding to enable freemium, reduce support load, and serve user segments that had no path at all.</p>
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
                <li>Led a team of 3 designers</li>
                <li>Owned onboarding across web and mobile</li>
                <li>Designed end-to-end onboarding on behalf for resellers</li>
                <li>Designed end-to-end onboarding for residential station owners</li>
                <li>Ran usability testing across all segments</li>
                <li>Aligned Product, Engineering, and Marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 2 — Outcome */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="section-container space-y-8 md:space-y-12"
      >
        <h3 id="outcome" className="h3-section text-right">
          <span className="block text-primary">Outcome</span>
          <span className="block text-ghost">that matters</span>
        </h3>

        <div>
          <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 04 ]</span>
          <h4 className="text-primary mt-0">Outcome</h4>
        </div>

        {/* 04 - Outcome */}
        <ul className='px-0 space-y-6'>
          <li className="flex gap-4">
            <TrendingDownIcon size={20} className="mt-0.5 shrink-0 text-primary" />
            <div>
              <div className='text-primary highlight'>75% fewer support tickets</div>
              <div>The top-3 category&nbsp;&mdash; irreversible account type errors&nbsp;&mdash; effectively disappeared.</div>
            </div>
          </li>
          <li className="flex gap-4">
            <StopwatchIcon size={20} className="mt-0.5 shrink-0 text-primary" />
            <div>
              <div className='text-primary highlight'>66% faster account activation</div>
              <div>Mandatory inputs reduced from 23 to 8.</div>
            </div>
          </li>
          <li className="flex gap-4">
            <DiamanIcon size={20} className="mt-0.5 shrink-0 text-primary" />
            <div>
              <div className='text-primary highlight'>Freemium model launched on schedule</div>
              <div>New acquisition path unlocked on the hardware deadline.</div>
            </div>
          </li>
        </ul>

        {/* 05 - Trade offs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-4 md:space-y-6"
        >
          <div>
            <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 05 ]</span>
            <h4 className="text-primary mt-0">Trade-offs</h4>
          </div>

          <p>Not everything landed where I wanted it:</p>
          <ul className="list-disc space-y-4 pl-6">
            <li>
              <div className='highlight text-primary'>Address field stayed</div>
              <div>Home owners entered their station address before getting any value. Backend constraint kept it in. I accepted it too quickly.</div>
            </li>
            <li>
              <div className='highlight text-primary'>Migration left to engineering</div>
              <div>I focused on the new flows and trusted engineering to own the migration path. Wrong division of responsibility.</div>
            </li>
            <li>
              <div className='highlight text-primary'>Residential monetisation untested</div>
              <div>Free vs paid tier needed user research before launch, not after. Converting home owners to paid remains unsolved.</div>
            </li>
          </ul>
          
        </motion.div>
      </motion.section>

      {/* Section 3 — Design Process */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="section-container space-y-10 md:space-y-16"
      >
        <h3 id="the-problem" className="h3-section text-right">
          <span className="block text-ghost">From Problem</span>
          <span className="block text-primary">To Solution</span>
        </h3>

        {/* 06 - The Problem */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-4 md:space-y-6"
        >
          <div>
            <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 06 ]</span>
            <h4 className="text-primary mt-0">The problem</h4>
          </div>

          <p>It seemed the problem was on the surface:</p>

          <ul className="list-disc space-y-4 pl-6">
            <li>
              <div className='highlight text-primary'>Account creation issues</div>
              <div>A top-3 support ticket category.</div>
            </li>
            <li>
              <div className='highlight text-primary'>Wrong account type creation</div>
              <div>48% of all issues within the account-creation category.</div>
            </li>
            <li>
              <div className='highlight text-primary'>Longest resolution time</div>
              <div>Wrong account type selection was irreversible. Each case required multiple support–user interactions.</div>
            </li>
          </ul>
          <p>
            These were symptoms, not the root problem. Support ticket analysis and 13 user interviews across segments surfaced three broken paths:
          </p>

          <ul className="list-disc space-y-4 pl-6">
            <li>
              <div className='highlight text-primary'>Business users</div>
              <div>Confused by account taxonomy. &ldquo;Business&rdquo; vs &ldquo;consumer&rdquo; didn&apos;t match their world. Wrong choices were irreversible.</div>
            </li>
            <li>
              <div className='highlight text-primary'>Reseller partners</div>
              <div>No legitimate path to set up client accounts. Partners logged in with shared passwords. A real security problem nobody had solved.</div>
            </li>
            <li>
              <div className='highlight text-primary'>Residential users</div>
              <div>Lease drivers skipped invitations and created wrong accounts. Home owners had no dedicated path&nbsp;&mdash; a whole segment, invisible.</div>
            </li>
          </ul>
        </motion.div>

        {/* The Reframe — oversized text, no background */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="py-6 md:py-12 lg:py-16"
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold text-primary leading-tight max-w-4xl">
            The problem wasn&apos;t the flow. It was the questions inside it and the paths that didn&apos;t exist.
          </p>
        </motion.div>
      </motion.section>

      {/* Section 3 — Design Decisions */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="section-container space-y-10 md:space-y-16"
      >
        <h3 id="design-decisions" className="h3-section text-right">
          <span className="block text-ghost">Design</span>
          <span className="block text-primary">Decisions</span>
        </h3>

        {/* [07] — Design strategy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-4 md:space-y-6"
        >          
          <div>
            <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 07 ]</span>
            <h4 className="mt-0">Design principles</h4>
          </div>

          <p>Three principles guided every design decision:</p>
          
          <div className="md:space-y-16">
          <div className="flex flex-col lg:flex-row w-full lg:items-start">
            <div className="w-full lg:w-1/3 lg:pr-12 xl:pr-20 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
              <div className="highlight text-primary">1. Ask Only When Needed</div>
              <ul>
                <li>Split the flow into meaningful sub-flows&nbsp;&mdash; Account creation, Subscription selection, Reimbursement details, etc.</li>
                <li>Define which sub-flow is needed in the user context</li>
                <li>Define which data is required for each sub-flow</li>
                <li>Request user input at the moment it becomes necessary, not upfront</li>
              </ul>
            </div>
            <div className="relative w-full lg:w-2/3 mt-4 lg:mt-0">
              <figure className="max-w-[1680px] mx-auto mt-0 bg-transparent">
                <Image
                  src="/images/projects/new-onboarding-03.gif"
                  alt="Animation showing reduced onboarding inputs from 23 to 8"
                  width={1680}
                  height={632}
                  className="object-contain w-full h-auto block"
                  unoptimized
                />
                <figcaption id="vid1-caption">{`Reduced mandatory onboarding sub-flows`}</figcaption>
              </figure>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row w-full lg:items-start">
            <div className="w-full lg:w-1/3 lg:pr-12 xl:pr-20 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
              <div className="highlight text-primary">2.Prevent Errors at the Source</div>
              <p>Frame decisions around questions users can answer confidently.</p>
              <p>The original flow asked users to select their account type. Business or consumer. The labels didn't match how users thought about themselves. Wrong choices were irreversible.</p>
              <ul>
                <li>Added routing question before account creation: "How did you get your charging station?" Lease drivers wait for invitation, owners continue. Lease drivers never enter the wrong flow.</li>
                <li>Removed account type selection entirely. Enabling Business subscription is what makes an account a business account. No classification step, no wrong choice.</li>
              </ul>
            </div>
            <div className="relative w-full lg:w-2/3 mt-4 lg:mt-0">
              <figure className="max-w-[1680px] mx-auto mt-0">
                <video
                  src="/videos/new-onboarding-01.mp4"
                  aria-label="Animation showing a routing question that filters out lease drivers"
                  aria-describedby="vid2-caption"
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-contain w-full h-auto block"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
                <figcaption id="vid2-caption">{`Routing question that filters out lease drivers`}</figcaption>
              </figure>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row w-full lg:items-start">
            <div className="w-full lg:w-1/3 lg:pr-12 xl:pr-20 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
              <div className="highlight text-primary">3. One Solution Doesn&apos;t Fit All</div>
              <p>Optimize experiences around user context, not platform parity.</p>
              <ul>
                <li>The web portal enables complex business workflows.</li>
                <li>The mobile app is intentionally simplified for home owners&nbsp;&mdash; no upfront subscription step.</li>
              </ul>
            </div>
            <div className="relative w-full lg:w-2/3 mt-4 lg:mt-0">
            <figure className="max-w-[1680px] mx-auto mt-0">
                <video
                  src="/videos/new-onboarding-02.mp4"
                  aria-label="Animation showing complex web-workflow vs simple mobile start screen"
                  aria-describedby="vid3-caption"
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-contain w-full h-auto block"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
                <figcaption id="vid3-caption">{`Complex web-workflow vs simple mobile start screen`}</figcaption>
              </figure>
            </div>
          </div>
          </div>
        </motion.div>

        {/* [08] — Iterations and trade-offs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-4 md:space-y-6"
        >
          <div>
            <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 08 ]</span>
            <h4 className="mt-0">Iterations and trade-offs</h4>
          </div>
          <p>All flows went through several rounds of usability testing. User feedback shaped specific changes. Here are some that mattered most.</p>
        </motion.div>

        {/* Iteration 1 — One option per screen */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col lg:flex-row w-full lg:items-start">
            <div className="w-full lg:w-1/3 lg:pr-12 xl:pr-20 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
              <div>
                <span className="highlight text-primary">1. One option per screen</span>
              </div>
              <p>The end of account activation offered two main options at once: activate station, activate card. Users froze.</p>
              <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground">
                &ldquo;What should I do now? Should add station first? Or card?&rdquo;
              </blockquote>
              <p>I replaced it with two separate screens&nbsp;&mdash; one option at a time.</p>
            </div>
            <div className="relative w-full lg:w-2/3 mt-4 lg:mt-0">
              <figure className="max-w-[1680px] mx-auto mt-0 bg-transparent">
                <Image
                  src="/images/projects/new-onboarding-01.jpg"
                  alt="Before and after: two options replaced with sequential single-option screens on mobile"
                  width={1680}
                  height={632}
                  className="object-contain w-full h-auto block"
                />
                <figcaption>{`Before / after: two options → sequential single-option screens (mobile)`}</figcaption>
              </figure>
            </div>
          </div>
        </motion.div>

        {/* Iteration 2 — Value before commitment */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col lg:flex-row w-full lg:items-start">
            
            <div className="w-full lg:w-1/3 lg:pr-12 xl:pr-20 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
              <div>
                <span className="highlight text-primary">2. Value before commitment</span>
              </div>
              <p>Subscription selection during onboarding turned out to be a friction point. Everyone continued on the free tier anyway.</p>
              <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground">
                &ldquo;Why do I see this now? I didn&apos;t even get any value yet.&rdquo;
              </blockquote>
              <p>Removed subscription selection from mobile onboarding entirely. Upgrade options appear later in the app, once users have a reason to care.</p>
            </div>

            <div className="relative w-full lg:w-2/3 mt-4 lg:mt-0">
              <figure className="max-w-[1680px] mx-auto mt-0 bg-transparent">
                <Image
                  src="/images/projects/new-onboarding-02.jpg"
                  alt="Before / after: subscription step removed from mobile onboarding"
                  width={1680}
                  height={632}
                  className="object-contain w-full h-auto block"
                />
                <figcaption>{`Before / after: subscription step removed from mobile onboarding`}</figcaption>
              </figure> 
            </div>

          </div>
        </motion.div>

        {/* Iteration 3 — Compliance over speed */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col lg:flex-row w-full lg:items-start">
            <div className="w-full lg:w-1/3 lg:pr-12 xl:pr-20 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
              <div>
                <span className="highlight text-primary">3. Compliance over speed</span>
              </div>
              <p>Client acceptance of terms is required before assets can be activated. This added friction but ensured legal compliance&nbsp;&mdash; a trade-off we accepted deliberately.</p>
            </div>
            <div className="relative w-full lg:w-2/3 mt-4 lg:mt-0">
              <figure className="max-w-[1680px] mx-auto mt-0">
                <video
                  src="/videos/new-onboarding-03.mp4"
                  aria-label="Notification after account creation telling the reseller to wait until the client accepts the Terms of Use."
                  aria-describedby="vid-compliance-caption"
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-contain w-full h-auto block"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
                <figcaption id="vid-compliance-caption">{`Notification after account creation telling the reseller to wait until the client accepts the Terms of Use.`}</figcaption>
              </figure>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Section 5 — Watch it MOVE */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="section-container space-y-10 md:space-y-16"
      >
        <h3 id="demo" className="h3-section text-right">
          <span className="block text-ghost">Watch it</span>
          <span className="block text-primary">MOVE</span>
        </h3>

        {/* [09] Self sign-up — mobile app */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col lg:flex-row w-full lg:items-start">
            <div className="w-full lg:w-1/3 lg:pr-12 xl:pr-20 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
              <div>
                <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 09 ]</span>
                <h4 className="mt-0">Self sign-up</h4>
                <p className="text-sm text-muted-foreground mt-1">Mobile app</p>
              </div>
              <ul>
                <li>Home owners create account by adding name, country, email and password</li>
                <li>Once email address verified, they can activate their assets</li>
                <li>No subscription selection</li>
              </ul>
            </div>
            <div className="relative w-full lg:w-2/3 mt-4 lg:mt-0">
              <figure className="max-w-[1680px] mx-auto mt-0">
                <video
                  src="/videos/new-onboarding-04.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="object-contain w-full h-auto block"
                >
                  Your browser does not support the video tag.
                </video>
                <figcaption>{`Self-signup flow in the mobile app`}</figcaption>
              </figure>
            </div>
          </div>
        </motion.div>

        {/* [10] Onboarding on behalf — Reseller, web */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col lg:flex-row w-full lg:items-start">
            <div className="w-full lg:w-1/3 lg:pr-12 xl:pr-20 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
              <div>
                <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 10 ]</span>
                <h4 className="mt-0">Onboarding on behalf</h4>
                <p className="text-sm text-muted-foreground mt-1">Reseller &mdash; Web</p>
              </div>
              <ul>
                <li>Reseller creates an account on behalf of the Client</li>
                <li>After the Client reviews and accepts the terms, the reseller can add assets for them</li>
              </ul>
            </div>
            <div className="relative w-full lg:w-2/3 mt-4 lg:mt-0">
              <figure className="max-w-[1680px] mx-auto mt-0">
                <video
                  src="/videos/new-onboarding-05.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="object-contain w-full h-auto block"
                >
                  Your browser does not support the video tag.
                </video>
                <figcaption className="mt-3 text-xs text-muted-foreground text-center">
                  Onboarding on behalf on behalf of the Client
                </figcaption>
              </figure>
            </div>
          </div>
        </motion.div>

        {/* [11] Onboarding on behalf — Client, web */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col lg:flex-row w-full lg:items-start">
            <div className="w-full lg:w-1/3 lg:pr-12 xl:pr-20 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
              <div>
                <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 11 ]</span>
                <h4 className="mt-0">Onboarding on behalf</h4>
                <p className="text-sm text-muted-foreground mt-1">Client &mdash; Web</p>
              </div>
              <ul>
                <li>Client follows the email invitation, reviews the subscription, and accepts the terms</li>
                <li>Once the subscription is active, they can add assets themselves or ask the Reseller to do it for them</li>
              </ul>
            </div>
            <div className="relative w-full lg:w-2/3 mt-4 lg:mt-0">
              <figure className="max-w-[1680px] mx-auto mt-0">
                <video
                  src="/videos/new-onboarding-06.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="object-contain w-full h-auto block"
                >
                  Your browser does not support the video tag.
                </video>
                <figcaption className="mt-3 text-xs text-muted-foreground text-center">
                  Onboarding on behalf. Client
                </figcaption>
              </figure>
            </div>
          </div>
        </motion.div>

      </motion.section>

    </div>
  );
}
