"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import NeuralSkillsMap from "./NeuralSkillsMap";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-12">
          {/* Left: intro + neural map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs text-signal mb-3">Tech Stack</p>
            <h2 className="font-display text-3xl md:text-4xl text-cream leading-tight mb-6">
  The engineering <span className="font-serif italic font-medium">foundation.</span>
</h2>
            <p className="text-muted leading-relaxed mb-8">
              Tools and frameworks I reach for when building backend systems,
              real-time platforms, and GenAI pipelines.
            </p>
            <NeuralSkillsMap />
          </motion.div>

          {/* Right: numbered category grid with pills */}
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="flex items-baseline gap-2 mb-4 pb-3 border-b border-line">
                  <span className="font-mono text-xs text-signal">
                    {`/0${i + 1}`}
                  </span>
                  <h3 className="font-display text-lg text-primary">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs text-primary/90 glass bg-panel2 rounded-full px-3.5 py-1.5 hover:border-signal/50 hover:text-signal transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}