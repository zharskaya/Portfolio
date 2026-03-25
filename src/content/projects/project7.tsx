"use client";

import { ImageZoom } from '@/components/ui/image-zoom';
import { motion } from 'framer-motion';
import { AimIcon, StopwatchIcon, TrendingUpIcon, SchieldCheckIcon, CursorIcon, ScriptIcon } from '@/components/ui/icons';
import React from 'react';
import Image from "next/image";

export default function Project7Story() {
  return (
    <div className="project-content">

      {/* Section 1 — About the project */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="section-container space-y-10 md:space-y-16"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6">
          {/* Left on desktop, below on mobile */}
          <p className="font-heading text-xs text-muted-foreground max-w-none mt-0 mb-0 order-2 md:order-1 text-left md:w-1/2">
            {"// Disclaimer: Product name and branding have been changed for legal reasons."}
          </p>
          {/* Right on desktop, top on mobile */}
          <h3 id="about" className="h3-section text-right order-1 md:order-2 md:w-1/2 !mb-0">
            <span className="block text-ghost">About</span>
            <span className="block text-primary">the project</span>
          </h3>
        </div>

        <div className="space-y-8">
          {/* 01 — Context */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-3 md:gap-12">
            <div className="md:text-right">
              <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 01 ]</span>
              <h4 className="mt-0">Context</h4>
            </div>
            <div className="[&>:first-child]:mt-0">
              <p>
                AI coding assistants had an adoption problem. Engineers tried them, got irrelevant suggestions, and reverted to working manually. The root cause wasn&apos;t model quality. It was context.
              </p>
              <p>
                These tools operated blind, cut off from the codebases, tickets, docs, and decisions that shape real engineering work. Without project context, even capable models produce noise.
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
                Prove that giving engineers explicit control over AI context (what goes in, what stays out, and how it&apos;s structured) improves both output quality and developer trust.
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
              <p>
                End-to-end: identified the opportunity, framed the problem space, ran competitive research and user interviews, defined UX strategy, designed interactions, prototyped, and led structured user testing.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 2 — Signs of Success */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="section-container space-y-8 md:space-y-12"
      >
        <h3 id="outcome" className="h3-section text-right">
            <span className="block text-ghost">Signs of</span>
            <span className="block text-primary">Success</span>
        </h3>

        {/* 04 - Outcome */}
        <div>
            <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 04 ]</span>
            <h4 className="text-primary mt-0">Outcome</h4>
        </div>
        
        <ul className='px-0 space-y-6'>
          <li className="flex gap-4">
              <AimIcon size={20} className="mt-0.5 shrink-0 text-primary" />
              <div>
                <div className='text-primary highlight'>56% higher suggestion accuracy</div>
                <div>Fewer irrelevant outputs, less time correcting code. Engineers trusted the suggestions enough to use them.</div>
              </div>
            </li>
            <li className="flex gap-4">
              <StopwatchIcon size={20} className="mt-0.5 shrink-0 text-primary" />
              <div>
                <div className='text-primary highlight'>2x faster task completion</div>
                <div>Engineers finished tasks in half the time. The assistant handled context gathering that used to be manual.</div>
              </div>
            </li>
            <li className="flex gap-4">
              <TrendingUpIcon size={20} className="mt-0.5 shrink-0 text-primary" />
              <div>
                <div className='text-primary highlight'>Smoother collaboration</div>
                <div>80% of engineers said in-chat interactions made their workflow faster and more natural.</div>
              </div>
            </li>
          </ul>
      </motion.section>

      {/* Section 3 — Design process */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="section-container space-y-10 md:space-y-16"
      >
        <h3 id="process" className="h3-section text-right">
          <span className="block text-ghost">Design</span>
          <span className="block text-primary">process</span>
        </h3>

        {/* 05 - Research */}
        <div className="space-y-4 md:space-y-6">
          <div>
            <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 05 ]</span>
            <h4 className="text-primary mt-0">Research</h4>
          </div>
          <p>I audited the AI coding tool landscape (Copilot, Cursor, and others) and interviewed developers and product managers who use them daily. I also drew on my own experience building with these tools. One pattern was consistent: every tool assumed the AI should figure out context on its own. None gave engineers real control.</p>
        </div>

        {/* 06 - Design principles */}
        <div className="space-y-4 md:space-y-6">
          <div>
            <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 06 ]</span>
            <h4 className="text-primary mt-0">Design principles</h4>
          </div>
          <p>Three patterns kept surfacing across research and interviews:</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Build Trust */}
            <div className="bg-secondary p-5 rounded-sm space-y-2">
              <SchieldCheckIcon size={20} className="text-primary mt-2" />
              <p className="highlight text-primary m-0">Build Trust</p>
              <p>
                Show the reasoning. Make every action and decision transparent.
              </p>
            </div>

            {/* Right Level of Control */}
            <div className="bg-secondary p-5 rounded-sm space-y-2">
              <CursorIcon size={20} className="text-primary mt-2" />
              <p className="text-primary highlight m-0">Right Level of Control</p>
              <p>
                Let engineers choose between full automation and co-pilot mode. Never decide for them.
              </p>
            </div>

            {/* Context Is Everything */}
            <div className="bg-secondary p-5 rounded-sm space-y-2">
              <ScriptIcon size={20} className="text-primary mt-2" />
              <p className="text-primary highlight m-0">Context Is King</p>
              <p>
                Only relevant, clean, well-structured context. Anything else is noise.
              </p>
            </div>
          </div>
        </div>

        {/* 07 - Pain points */}
        <div className="space-y-4 md:space-y-6">
          <div>
            <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 07 ]</span>
            <h4 className="text-primary mt-0">Pain points</h4>
          </div>
          <p>Research uncovered dozens of friction points. I prioritized three, the ones that appeared in every interview and blocked adoption the hardest:</p>
          <ol className="list-decimal space-y-4 pl-6">
            <li>
              Wrong context. Missing, excessive, or irrelevant. This produced suggestions engineers couldn&apos;t trust.
            </li>
            <li>
              Pulling relevant context into the IDE (docs, tickets, chats, architecture decisions) was manual and fragmented.
            </li>
            <li>
              Engineers spent more time explaining context to the AI than writing code.
            </li>
          </ol>
        </div>

        {/* 08 - Proposed solution */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col lg:flex-row w-full lg:items-start">
            <div className="w-full lg:w-1/2 lg:pr-12 xl:pr-20 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
              <div>
                <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 08 ]</span>
                <h4 className="text-primary mt-0">Proposed solution</h4>
              </div>
              <p>
                The core design decision: make context selection explicit and collaborative, not silent and automatic.
              </p>
              <p>
                I explored the full spectrum&nbsp;&mdash; from fully automated context retrieval to manual file picking. Full automation broke trust: engineers couldn&apos;t see what the AI was using. Manual selection was accurate but too slow. The answer was in between: AI-suggested context with human review.
              </p>
              <p>
                This shaped a three-phase workflow:
              </p>
              <ol className="list-decimal space-y-4 pl-6">
                <li>
                  <div className='highlight text-primary'>Research</div>
                  <div>The assistant searches connected sources and surfaces relevant context.</div> 
                </li>
                <li>
                  <div className='highlight text-primary'>Plan</div> 
                  <div>It analyzes the context and proposes an implementation plan.</div>
                </li>
                <li>
                  <div className='highlight text-primary'>Implementation</div> 
                  <div>It executes each step.</div>
                </li>
              </ol>
              <p>
                Engineers stay in control throughout adding context, leaving comments, adjusting direction. Key interactions happen directly in chat to keep the flow tight.
              </p>
            </div>

            {/* Image */}
            <div className="relative w-full lg:w-1/2 mt-2 sm:mt-0">
              <figure className="max-w-[910px] mx-auto">
                <Image
                  src="/images/projects/code-buddy-01.jpg"
                  alt="Code Buddy Concept"
                  width={910}
                  height={930}
                  className="object-contain w-full h-auto block"
                  priority
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <figcaption>{`Code Buddy Concept`}</figcaption>
              </figure>
            </div>
          </div>
        </motion.div>

        {/* 09 - User flow */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}

          className="space-y-4 md:space-y-6"
        >
          <div>
            <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 09 ]</span>
            <h4 className="text-primary mt-0">User flow</h4>
          </div>
          <figure className="max-w-[1680px] mx-auto">
            <ImageZoom
              src="/images/projects/code-buddy-02.jpg"
              alt="Code Buddy User Flow"
              width={1680}
              height={822}
              className="object-contain w-full h-auto block"
              caption="Three-phase workflow"
            />
          </figure>
        </motion.div>
      </motion.section>

      {/* Section 4 — Visual and Interaction Design */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="section-container space-y-10 md:space-y-16"
      >
        <h3 id="visuals" className="h3-section text-right">
          <span className="block text-ghost">Visual and Interaction</span>
          <span className="block text-primary">Design</span>
        </h3>

        {/* 10 - Integration with project management systems */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col lg:flex-row w-full lg:items-start">
            {/* 09 - Integration with project management systems */}
            <div className="w-full lg:w-1/3 lg:pr-12 xl:pr-20 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
              <div>
                <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 10 ]</span>
                <h4 className="mt-0">
                  Integration with project management systems
                </h4>
              </div>
              <p>
                This directly tackles pain point #2. Project knowledge lived in tools engineers used daily but couldn&apos;t reach from the IDE.
              </p>
              <p>
                Engineers connect their project management platform (Jira, Monday, Asana, Linear) and pull issues straight into the assistant&apos;s context. For speed, this is also available from the Quick Start menu.
              </p>
            </div>

            {/* Video */}
            <div className="relative w-full lg:w-2/3 mt-4 lg:mt-0">
              <figure className="max-w-[1680px] mx-auto mt-0">
                <video
                  src="/videos/code-buddy-video-01.mp4"
                  aria-label="Animation showing a user selecting a JIRA issue to start an AI-assisted coding task"
                  aria-describedby="vid1-caption"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-contain w-full h-auto block"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
                <figcaption id="vid1-caption">{`Select JIRA issue`}</figcaption>
              </figure>
            </div>
          </div>
        </motion.div>

        {/* 11 - Context management */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col lg:flex-row w-full lg:items-start">
            {/* 10 - Context management */}
            <div className="w-full lg:w-1/3 lg:pr-12 xl:pr-20 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
              <div>
                <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 11 ]</span>
                <h4 className="mt-0">Context management</h4>
              </div>
              <p>
                The Right Level of Control principle in action. 
              </p>
              <p>
                The assistant scans connected sources for relevant context, but doesn&apos;t use it blindly.
              </p>
              <p>
                With Context Control enabled, engineers review what the AI suggests before it proceeds. They can remove items, add missing context, or leave comments. All without leaving the chat.
              </p>
            </div>

            {/* Video */}
            <div className="relative w-full lg:w-2/3 mt-4 lg:mt-0">
              <figure className="max-w-[1680px] mx-auto mt-0">
                <video
                  src="/videos/code-buddy-video-02.mp4"
                  aria-label="Animation showing the AI assistant suggesting context items, with the user reviewing and adjusting them before proceeding"
                  aria-describedby="vid2-caption"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-contain w-full h-auto block"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
                <figcaption id="vid2-caption">{`Manage suggested context`}</figcaption>
              </figure>
            </div>
          </div>
        </motion.div>

        {/* 12 - Implementation plan */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col lg:flex-row w-full lg:items-start">
            {/* 11 - Implementation plan */}
            <div className="w-full lg:w-1/3 lg:pr-12 xl:pr-20 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
              <div>
                <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 12 ]</span>
                <h4 className="mt-0">
                  Implementation plan
                </h4>
              </div>
              <p>
                Phase two of the workflow. The assistant breaks the task into steps and proposes an implementation plan.
              </p>
              <p>
                Engineers review, edit, reorder, or add steps before the AI executes. No black-box automation. No awkward in-chat explanations. Every step is visible and adjustable.
              </p>
            </div>

            {/* Video */}
            <div className="relative w-full lg:w-2/3 mt-4 lg:mt-0">
              <figure className="max-w-[1680px] mx-auto mt-0">
                <video
                  src="/videos/code-buddy-video-03.mp4"
                  aria-label="Animation showing the AI assistant presenting an implementation plan for the user to review, edit, or approve"
                  aria-describedby="vid3-caption"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-contain w-full h-auto block"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
                <figcaption id="vid3-caption">{`Review implementation plan`}</figcaption>
              </figure>
            </div>
          </div>
        </motion.div>
      </motion.section>

    </div>
  );
}
