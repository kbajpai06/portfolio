"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-signal mb-3"
        >
          Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl md:text-4xl text-cream mb-16 max-w-xl"
        >
          Things I've built <span className="font-serif italic font-medium">end to end.</span>
        </motion.h2>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group block glass rounded-xl p-6 sm:p-8 bg-panel/40 hover:border-signal/50 hover:bg-panel/70 transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <h3 className="font-display text-2xl text-primary group-hover:text-signal transition-colors">
                  {p.name}
                </h3>
                <span className="font-mono text-xs text-faint group-hover:text-signal transition-colors flex items-center gap-1 shrink-0">
                  View repo ↗
                </span>
              </div>

              <p className="text-muted leading-relaxed mb-5 max-w-3xl">
                {p.description}
              </p>

              <ul className="space-y-2 mb-6">
                {p.points.map((pt) => (
                  <li
                    key={pt}
                    className="text-sm text-muted/90 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-line"
                  >
                    {pt}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[11px] text-signal/90 border border-signal/25 bg-signal/5 rounded px-2 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
