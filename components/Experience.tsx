"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-signal mb-3"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl md:text-4xl text-cream mb-16 max-w-xl"
        >
          Two internships, <span className="font-serif italic font-medium">shipped features.</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px rail-line hidden sm:block" />

          <div className="space-y-14">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative sm:pl-10"
              >
                <span className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-void border-2 border-signal hidden sm:block" />

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-3">
                  <h3 className="font-display text-xl text-primary">
                    {job.role}
                  </h3>
                  <span className="font-mono text-xs text-faint">
                    {job.period}
                  </span>
                </div>
                <p className="text-signal text-sm font-mono mb-4">
                  {job.company}
                </p>
                <ul className="space-y-2.5">
                  {job.points.map((p) => (
                    <li
                      key={p}
                      className="text-muted text-sm sm:text-base leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-line"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
