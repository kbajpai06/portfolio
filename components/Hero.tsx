"use client";

import { motion } from "framer-motion";
import { profile, stats } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      {/* animated background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center animate-kenburns"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1741807117240-0aee0cd41d25?fm=jpg&q=80&w=2400&auto=format&fit=crop')",
          }}
        />
        <div
          className="absolute -inset-1/4 animate-drift-a"
          style={{
            background:
              "radial-gradient(circle, rgba(237,234,222,0.16) 0%, transparent 60%)",
            filter: "blur(40px)",
            mixBlendMode: "screen",
          }}
        />
        <div
          className="absolute -inset-1/4 animate-drift-b"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,74,0.12) 0%, transparent 55%)",
            filter: "blur(50px)",
            mixBlendMode: "screen",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/45 to-void/10" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-6xl mx-auto px-6 min-h-screen flex flex-col justify-end pt-32 pb-16"
      >
        {/* bottom row: name (left) + info block (right), aligned on the same baseline */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          {/* name */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="shrink-0"
          >
            <h1
              className="font-display font-bold text-cream leading-[0.85] tracking-tight"
              style={{ fontSize: "clamp(4rem, 13vw, 11rem)" }}
            >
              Kartik<span className="text-warn">.</span>
            </h1>
            <p className="mt-5 font-mono text-cream/70 text-sm sm:text-base tracking-wide">
              {profile.role} · {profile.location}
            </p>
          </motion.div>

          {/* info block */}
          <div className="w-full max-w-md text-left md:pb-4">
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 font-mono text-xs text-cream border border-cream/25 bg-cream/5 rounded-full px-3 py-1 mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
              {profile.availability}
            </motion.div>

            <motion.div
              variants={item}
              className="flex items-start gap-10 pb-5 mb-5 border-b border-cream/20"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl sm:text-3xl text-cream">
                    {s.value}
                  </div>
                  <div className="font-mono text-[10px] text-cream/60 mt-1.5 uppercase tracking-wide leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.p
              variants={item}
              className="text-cream/85 text-sm sm:text-base leading-relaxed mb-7 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
            >
              {profile.tagline}
            </motion.p>

            <motion.a
              variants={item}
              href="#contact"
              className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-cream text-void font-medium text-sm hover:bg-cream/90 transition-colors"
            >
              Let's Connect
              <span className="w-8 h-8 rounded-full bg-void text-cream flex items-center justify-center text-base">
                →
              </span>
            </motion.a>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-6 right-6 z-10 font-mono text-[10px] text-cream/50 tracking-widest hidden md:block">
        SCROLL
      </div>
    </section>
  );
}