"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { education } from "@/lib/data";

// Sub-component to handle word-by-word scroll lighting opacity
function ScrollWord({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block mr-[0.28em]">
      <motion.span style={{ opacity }} className="text-cream transition-colors">
        {children}
      </motion.span>
    </span>
  );
}

// Scroll lighting wrapper
function TextReveal({ text }: { text: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.35"],
  });

  const words = text.split(" ");

  return (
    <p
      ref={containerRef}
      className="text-base sm:text-lg leading-relaxed flex flex-wrap"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <ScrollWord key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </ScrollWord>
        );
      })}
    </p>
  );
}

export default function About() {
  const bioText =
    " I enjoy breaking concepts down, trying bold ideas and pushing boundaries with AI. I am passionate about building end-to-end backend systems and GenAI-powered products, from real-time pipelines to production APIs. I am always eager to learn and explore new technologies, and I am open to full-time SDE roles as a 2027 graduate.";

  return (
    <section id="about" className="relative py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 font-mono text-[11px] uppercase tracking-wider text-muted">
              <span>Engineering & AI</span>
              <span className="text-signal">//</span>
              <span>About</span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-cream leading-[1.12] tracking-tight">
              I am Kartik Bajpai,{" "}
              <span className="font-serif italic font-normal text-cream/90">
                an aspiring developer,
              </span>{" "}
              I love exploring AI systems and building systems that make life easier.
            </h2>

            {/* Scroll-Lit Paragraph */}
            <TextReveal text={bioText} />

            {/* Metadata Footer */}
            <div className="grid sm:grid-cols-2 gap-8 pt-6 border-t border-line/40 mt-8">
              <div>
                <p className="font-mono text-[11px] text-faint uppercase tracking-wider mb-2">
                  Institution
                </p>
                <p className="text-cream font-medium text-base">
                  {education.institution}
                </p>
                <p className="text-muted text-sm mt-0.5">{education.degree}</p>
                <p className="text-signal text-xs font-mono mt-1">
                  {education.detail}
                </p>
              </div>

              <div>
                <p className="font-mono text-[11px] text-faint uppercase tracking-wider mb-2">
                  Focus Areas
                </p>
                <p className="text-cream font-medium text-base">
                  {education.focus}
                </p>
                <p className="text-muted text-sm mt-1 leading-relaxed">
                  Comfortable across the stack, most at home designing system infrastructure.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Profile Card Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sticky top-28"
          >
            <div className="rounded-2xl border border-white/10 bg-[#0d0d0d] p-4 sm:p-5 shadow-2xl backdrop-blur-md">
              {/* Card Header */}
              <div className="flex justify-between items-center text-[10px] font-mono text-faint uppercase tracking-widest mb-3">
                <span>PROFILE.JPG</span>
                <span>ACTIVE_SYS</span>
              </div>

              {/* Photo Area */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-white/5 border border-white/5">
                <Image
                  src="/profile.jpg" // Replace with your image path
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card Footer */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                <div>
                  <p className="text-cream font-medium text-sm">Kartik Bajpai</p>
                  <p className="text-[10px] font-mono text-faint uppercase tracking-wider mt-0.5">
                    ENGINEER // DEVELOPER
                  </p>
                </div>
                <span className="text-[10px] font-mono border border-white/10 bg-white/5 px-2 py-1 rounded text-muted">
                  2027_SYS
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}