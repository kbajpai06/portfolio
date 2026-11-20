"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section className="relative py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-signal mb-3"
        >
          Achievements
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display font-semibold text-3xl md:text-4xl text-cream mb-16 max-w-xl"
        >
          Key <span className="font-serif italic font-medium">Milestones</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {achievements.map((a, i) => {
            const Wrapper = a.link ? motion.a : motion.div;
            return (
              <Wrapper
                key={a.title}
                {...(a.link
                  ? {
                      href: a.link,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass rounded-lg p-5 bg-panel/40 hover:border-signal/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-primary font-medium leading-snug">
                    {a.title}
                  </h3>
                  <span className="font-mono text-[10px] text-faint shrink-0 pt-1">
                    {a.date}
                  </span>
                </div>
                <p className="text-muted text-sm mt-2">{a.detail}</p>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
