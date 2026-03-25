"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { ImageZoom } from '@/components/ui/image-zoom';

export default function Project8Story() {
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
          <p className="font-heading text-xs text-muted-foreground max-w-none mt-0 mb-0 order-2 md:order-1 text-left md:w-1/2">
            {"// This was a design exploration. No team, no production constraints, no shipping deadline. What follows is how I think through a problem when the only constraint is the problem itself."}
          </p>
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
                OTTL&nbsp;&mdash; the OpenTelemetry Transformation Language&nbsp;&mdash; is how telemetry data gets shaped before it hits storage and gets useful.
              </p>
              <p>
                The lack of usability of OTTL is bad for the ecosystem, because OTTL is the right, standard solution for an important set of problems: how to make telemetry look and cost right.
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
                Devise an intuitive, tactile User Experience to transform telemetry.   
              </p>
            </div>
          </div>

          {/* 03 — What I did */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-3 md:gap-12">
            <div className="md:text-right">
              <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 03 ]</span>
              <h4 className="mt-0">What I did</h4>
            </div>
            <div className="[&>:first-child]:mt-0">
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Received a brief. Questioned it. Reframed around what expert users actually need.
                </li>
                <li>
                  Prototyped in code, twice. No research panel, I stress-tested my own assumptions. Then used expert feedback to push further into the visual UI.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 2 — Design Bets */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="section-container space-y-10 md:space-y-16"
      >
        <h3 id="design-bets" className="h3-section text-right">
          <span className="block text-ghost">Design</span>
          <span className="block text-primary">Bets</span>
        </h3>

         {/* 04 - The reframe */}
         <div className="flex flex-col lg:flex-row w-full lg:items-start">
          {/* Text — sticky on desktop */}
          <div className="w-full lg:w-1/2 lg:pr-12 xl:pr-20 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
            <div>
              <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 04 ]</span>
              <h4 className="text-primary mt-0">The reframe</h4>
            </div>
            <div className="[&>:first-child]:mt-0">
              <p>
                The obvious design question: How do I make OTTL easier?
              </p>
              <p>
                It leads to a form-based UI: dropdowns, hidden code, abstracted syntax. Fine for users who don&apos;t know what they&apos;re doing. These users do. So I asked a different question:
              </p>
              <p className="highlight text-primary">What does someone who already knows what to do need from a UI?</p>
              <p>
                A shorter path to say it.
              </p>
              <p>
                I translated that into several design bets.
              </p>
            </div>
          </div>

          {/* Images — scroll on desktop, below text on mobile */}
          <div className="relative w-full lg:w-1/2 lg:mt-0 space-y-2 md:space-y-6">
            <figure className="max-w-[1680px] mx-auto mb-0 lg:mt-0 bg-transparent">
              <ImageZoom
                src="/images/projects/otel-bin-02.png"
                alt="An example of another data transformation playground — ottl.run"
                width={2236}
                height={1474}
                className="object-contain w-full h-auto block"
                quality={95}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <figcaption>
                An example of another data transformation playground&nbsp;&mdash;{' '}
                <a href="https://ottl.run/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">
                  ottl.run
                </a>
              </figcaption>
            </figure>
            <figure className="max-w-[1680px] mx-auto mb-0 lg:mt-0 bg-transparent">
              <ImageZoom
                src="/images/projects/otel-bin-01.svg"
                alt="Graph wireframe of the form UI for data transformation"
                width={4182}
                height={2094}
                className="object-contain w-full h-auto block"
                quality={95}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <figcaption>Wireframe of a Scratch-style form UI for data transformation. Discarded</figcaption>
            </figure>
          </div>
        </div>

          {/* Telemetry view */}
          <div className="flex flex-col lg:flex-row w-full lg:items-start">
            {/* Text — sticky on desktop */}
            <div className="w-full lg:w-1/2 lg:pr-12 xl:pr-20 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
              <p className="highlight text-primary mt-0">1. Telemetry preview</p>
              <p>
                The default data format is JSON. Developers don&apos;t read JSON, they scan it. Looking for a specific attribute, spotting a pattern, checking whether a value landed where it should.
              </p>
              <p>
                I grouped and rearranged input data into a table view. Most important data first. Attribute keys on the left, values on the right. The structure matches how engineers actually parse this data: find the attribute, check the value, move on.
              </p>
            </div>

            {/* Image — scrolls on desktop, below text on mobile */}
            <div className="relative w-full lg:w-1/2 lg:mt-0 space-y-2 md:space-y-4">
              <figure className="max-w-[1680px] mx-auto mb-0 lg:mt-0 bg-transparent">
                <ImageZoom
                  src="/images/projects/otel-bin-03.svg"
                  alt="JSON default vs structured table view"
                  width={4104}
                  height={2106}
                  className="object-contain w-full h-auto block"
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <figcaption>JSON default vs structured table view</figcaption>
              </figure>
            </div>
          </div>

          {/* Verbs over syntax */}
          <div className="flex flex-col lg:flex-row w-full lg:items-start">
            {/* Text — sticky on desktop */}
            <div className="w-full lg:w-1/2 lg:pr-12 xl:pr-20 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
              <p className="highlight text-primary mt-0">2. Verbs over syntax</p>
              <p>
                Instead of writing OTTL statements, users pick from quick actions directly on the attribute. Click a field, see what you can do to it. No syntax to recall.
              </p>
              <p>
                The tool translates each action into the correct OTTL behind the scenes. Users operate on their data, not on code.
              </p>
              <p>
                Raw OTTL is still one step away for anything the quick actions don&apos;t cover. No one gets trapped inside the abstraction.
              </p>
            </div>
            
            {/* Image — scrolls on desktop, below text on mobile */}
            <div className="relative w-full lg:w-1/2 lg:mt-0 space-y-2 md:space-y-4">
              <figure className="max-w-[1680px] mx-auto mb-0 lg:mt-0 bg-transparent">
                <ImageZoom
                  src="/images/projects/otel-bin-04.svg"
                  alt="Quick actions for OTTL transformations"
                  width={4104}
                  height={2106}
                  className="object-contain w-full h-auto block"
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <figcaption>Quick actions: pick an action, the tool writes the OTTL</figcaption>
              </figure>
            </div>
          </div>

          {/* Inline and keyboard */}
          <div className="flex flex-col lg:flex-row w-full lg:items-start">
            {/* Text — sticky on desktop */}
            <div className="w-full lg:w-1/2 lg:pr-12 xl:pr-20 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
              <p className="highlight text-primary mt-0">3. Inline and keyboard</p>
              <p>
                Most transformation tools put the action in a separate panel. That split forces constant context-switching between the data and the operation.
              </p>
              <p>
                I kept everything inline. The user operates directly on the input data. No round trip.
              </p>
              <p>
                Keyboard access runs throughout. These are developers. The mouse is the slower path.
              </p>
            </div>

            {/* Image — scrolls on desktop, below text on mobile */}
            <div className="relative w-full lg:w-1/2 lg:mt-0 space-y-2 md:space-y-6">
              
            <figure className="max-w-[1680px] mx-auto mb-0 lg:mt-0 bg-transparent">
                <ImageZoom
                  src="/images/projects/otel-bin-05.svg"
                  alt="Adding an attribute directly on the data"
                  width={4104}
                  height={2106}
                  className="object-contain w-full h-auto block"
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <figcaption>Inline editing. Adding new static attribute</figcaption>
              </figure>

              <figure className="max-w-[1680px] mx-auto mb-0 lg:mt-0 bg-transparent">
                <ImageZoom
                  src="/images/projects/otel-bin-06.svg"
                  alt="Renaming an attribute directly on the data"
                  width={4104}
                  height={2106}
                  className="object-contain w-full h-auto block"
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <figcaption>Inline editing. Renaming an attribute</figcaption>
              </figure>

              <figure className="max-w-[1680px] mx-auto mb-0 lg:mt-0 bg-transparent">
                <ImageZoom
                  src="/images/projects/otel-bin-07.svg"
                  alt="Masking an attribute value directly on the data"
                  width={4104}
                  height={2106}
                  className="object-contain w-full h-auto block"
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <figcaption>Inline editing. Masking an attribute value</figcaption>
              </figure>


            </div>
          </div>

          {/* Queue decision */}
          <div className="flex flex-col lg:flex-row w-full lg:items-start">
            {/* Text — sticky on desktop */}
            <div className="w-full lg:w-1/2 lg:pr-12 xl:pr-20 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
              <p className="highlight text-primary mt-0">4. Layout</p>
              <p>
                Early on I considered hiding transformation queue entirely and showing only input and output. Cleaner. Less noise.
              </p>
              <p>
                It didn&apos;t hold up. Users need to see what&apos;s queued, in what order. Reordering and raw OTTL input fit naturally in the queue.
              </p>
            </div>

            {/* Image — scrolls on desktop, below text on mobile */}
            <div className="relative w-full lg:w-1/2 lg:mt-0 space-y-2 md:space-y-4">
              <figure className="max-w-[1680px] mx-auto mb-0 lg:mt-0 bg-transparent">
                <Image
                  src="/images/projects/otel-bin-08.gif"
                  alt="Wireframes: layout without queue vs layout with queue"
                  width={1680}
                  height={720}
                  className="object-contain w-full h-auto block"
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
                <figcaption>Hiding vs showing transformation queue. Visibility won</figcaption>
              </figure>
            </div>
          </div>
          
          {/* 05 - Deliberate cuts */}
          <div className="space-y-4 md:space-y-6">
            <div>
              <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 05 ]</span>
              <h4 className="text-primary mt-0">Deliberate cuts</h4>
            </div>

            <ul>
              <li>
                <div className="highlight text-primary">OTTL transformations</div> 
                <div>Quick actions include only the most commonly used ones: adding attribute using static value or subsring from another attribute, mask, and remove. The rest lives in raw OTTL.</div>
              </li>
              <li>
                <div className="highlight text-primary">Keyboard shortcuts</div> 
                <div>Partly in, only to validate some interactions.</div>
              </li>
              <li>
                <div className="highlight text-primary">Validation</div>
                <div>Draft-level. Just enough to mark where guardrails will live, not fully designed.</div>
              </li>
              <li>
                <div className="highlight text-primary">Smart suggestions</div>
                <div>Data normalization, common format detection, and similar assists. Noted as future scope, not prototyped.</div>
              </li>
            </ul>
          
        </div>
      </motion.section>

      {/* Section 4 — Prototype Arc */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="section-container space-y-10 md:space-y-16"
      >
        <h3 id="prototype-arc" className="h3-section text-right">
          <span className="block text-ghost">Prototype</span>
          <span className="block text-primary">Arc</span>
        </h3>

        {/* 06 — v1: the wrong assumption */}
        <div className="flex flex-col lg:flex-row w-full lg:items-start">
          {/* Text — sticky on desktop */}
          <div className="w-full lg:w-1/3 lg:pr-12 xl:pr-20 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
            <div>
              <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 06 ]</span>
              <h4 className="text-primary mt-0">v1. the wrong assumptions</h4>
            </div>
            <p>
              I started with a vibe-coded prototype in Cursor to validate the mental model and interactions.
            </p>
            <p>
              The first version hid transformations from the user. Drag-and-drop let users move any attribute, implying the transformation order changed. The tool handled the rest behind the scenes.
            </p>
            <p>
              Both choices were mistakes. They reduced transparency, introduced ambiguity, and broke trust.
            </p>
          </div>

          {/* Video — scrolls on desktop, below text on mobile */}
          <div className="relative w-full lg:w-2/3 mt-4 lg:mt-0">
            <figure className="max-w-[1680px] mx-auto mt-0">
              <video
                src="/videos/otel-bin-01.mp4"
                aria-label="v1 prototype showing hidden transformations and drag-n-drop"
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
              <figcaption>Prototype v1&nbsp;&mdash;&nbsp;<a href="https://zharskaya.github.io/OTEL-Project/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">try it live</a></figcaption>
            </figure>
          </div>
        </div>

        {/* 07 — v2: make it legible */}
        <div className="flex flex-col lg:flex-row w-full lg:items-start">
          {/* Text — sticky on desktop */}
          <div className="w-full lg:w-1/3 lg:pr-12 xl:pr-20 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
            <div>
              <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 07 ]</span>
              <h4 className="text-primary mt-0">v2. make it legible</h4>
            </div>
            <p>
              Users didn&apos;t trust what they couldn&apos;t see. v2 made the invisible visible.
            </p>
            <ul>
              <li>Showed transformations in a dedicated Transformations panel</li>
              <li>Moved raw OTTL editing and reordering into that same panel</li>
              <li>Kept drag-n-drop only for moving attributes between sections</li>
            </ul>
          </div>

          {/* Video — scrolls on desktop, below text on mobile */}
          <div className="relative w-full lg:w-2/3 mt-4 lg:mt-0">
            <figure className="max-w-[1680px] mx-auto mt-0">
              <video
                src="/videos/otel-bin-02.mp4"
                aria-label="v2 prototype showing visible transformations panel and explicit actions"
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
              <figcaption>Prototype v2&nbsp;&mdash;&nbsp;<a href="https://zharskaya.github.io/OTEL-Project-v2/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">try it live</a></figcaption>
            </figure>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6">
          <p>
            Better. But v2 exposed new cracks.
          </p>
          <ul>
            <li>Attribute drag-and-drop felt ambiguous → replaced with explicit Move to Resource / Span actions</li>
            <li>Text-editor-style diffs didn't match how developers actually read changes → switched to IDE-native diff patterns</li>
            <li>Transformations had misplaced visual weight → iterated on hierarchy and accents</li>
          </ul>
        </div>

      </motion.section>

      {/* Section 5 — Execution */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="section-container space-y-10 md:space-y-16"
      >
        <h3 id="execution" className="h3-section text-right">
          <span className="block text-ghost">Execution</span>
          <span className="block text-primary">Up close</span>
        </h3>

        {/* 09 — Main view */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="space-y-4 md:space-y-6">
            <div>
              <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 09 ]</span>
              <h4 className="mt-0">Main view</h4>
            </div>
            <figure className="max-w-[1680px] mt-0 bg-transparent p-0">
              <ImageZoom
                src="/images/projects/otel-bin-09.jpg"
                alt="Full view of the OTel Bin working surface"
                width={2884}
                height={1804}
                className="object-contain w-full h-auto block"
                quality={95}
              />
              <figcaption>The full working surface</figcaption>
            </figure>
          </div>
        </motion.div>

        {/* 10 — Input data and quick actions */}
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
                <h4 className="mt-0">Input data and quick actions</h4>
              </div>
              <p>
                Input data displayed as a structured table&nbsp;&mdash; attributes on the left, values on the right. Click any field to see what you can do to it: add, rename, delete, mask. No syntax to recall.
              </p>
            </div>
            <div className="relative w-full lg:w-2/3 mt-4 lg:mt-0 space-y-2 md:space-y-4">
              <figure className="max-w-[1680px] mt-0 bg-transparent">
                <ImageZoom
                  src="/images/projects/otel-bin-10.jpg"
                  alt="Quick actions menu on an attribute"
                  width={3360}
                  height={2048}
                  className="object-contain w-full h-auto block"
                  quality={95}
                  sizes="(max-width: 1680px) 100vw, 50vw"
                />
                <figcaption>Quick actions on an attribute</figcaption>
              </figure>
              <figure className="max-w-[1680px] mt-0 bg-transparent p-0">
                <ImageZoom
                  src="/images/projects/otel-bin-11.jpg"
                  alt="Adding a new attribute"
                  width={3360}
                  height={2048}
                  className="object-contain w-full h-auto block"
                  quality={95}
                  sizes="(max-width: 1680px) 100vw, 50vw"
                />
                <figcaption>Adding a new attribute</figcaption>
              </figure>
              <figure className="max-w-[1680px] mt-0 bg-transparent p-0">
                <ImageZoom
                  src="/images/projects/otel-bin-12.jpg"
                  alt="Renaming an attribute"
                  width={3360}
                  height={2048}
                  className="object-contain w-full h-auto block"
                  quality={95}
                  sizes="(max-width: 1680px) 100vw, 50vw"
                />
                <figcaption>Renaming an attribute</figcaption>
              </figure>
            </div>
          </div>
        </motion.div>

        {/* 11 — Transformations */}
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
                <h4 className="mt-0">Transformations</h4>
              </div>
              <p>
                Every transformation lands in the queue. Raw OTTL sits alongside quick actions. Run-till-point lets user review intermediate result.
              </p>
            </div>

            <div className="relative w-full lg:w-2/3 mt-4 lg:mt-0 space-y-2 md:space-y-4">
              <figure className="max-w-[1680px] mt-0">
                <ImageZoom
                  src="/images/projects/otel-bin-13.jpg"
                  alt="The transformation panel"
                  width={3360}
                  height={2048}
                  className="object-contain w-full h-auto block"
                  quality={95}
                  sizes="(max-width: 1680px) 100vw, 50vw"
                />
                <figcaption>The transformation panel</figcaption>
              </figure>  
            </div>
            
          </div>
        </motion.div>

        {/* 12 — Output 
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col lg:flex-row w-full lg:items-start">
            <div className="w-full lg:w-1/3 lg:pr-12 xl:pr-20 lg:sticky lg:top-20 lg:self-start space-y-4 md:space-y-6">
              <div>
                <span className="bracket-label text-foreground block mb-1 md:mb-2">[ 12 ]</span>
                <h4 className="mt-0">Output</h4>
              </div>
              <p>
                IDE-style diff. Two columns: before and after. Expand or collapse sections to focus on what changed.
              </p>
            </div>
            <div className="relative w-full lg:w-2/3 mt-4 lg:mt-0 space-y-2 md:space-y-4">
              <figure className="max-w-[1680px] mx-auto mt-0">
                <div className="w-full aspect-video bg-secondary rounded-sm flex items-center justify-center text-muted-foreground text-sm font-mono">
                  Screenshot: Diff view
                </div>
                <figcaption>IDE-style diff&nbsp;&mdash; before and after</figcaption>
              </figure>
              <figure className="max-w-[1680px] mx-auto mt-0">
                <div className="w-full aspect-video bg-secondary rounded-sm flex items-center justify-center text-muted-foreground text-sm font-mono">
                  Screenshot: Expanded and collapsed view
                </div>
                <figcaption>Expand and collapse to focus on changes</figcaption>
              </figure>
            </div>
          </div>
        </motion.div> */}

      </motion.section>

    </div>
  );
}
