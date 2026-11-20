"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  {
    label: "GitHub",
    value: "github.com/" + profile.githubUsername,
    href: profile.github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/kartik-bajpai",
    href: profile.linkedin,
  },
  { label: "LeetCode", value: "u/kartikbajpaii", href: profile.leetcode },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs text-signal mb-3">Contact</p>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-cream leading-tight mb-6">
              Let's{" "}
              <span className="font-serif italic font-medium">Connect</span>
            </h2>
            <p className="font-mono text-xs text-faint mb-4">
              Open to full-time SDE roles as a 2027 graduate.
            </p>
            <p className="text-muted leading-relaxed max-w-md">
              Graduating in 2027, currently interviewing for full-time backend
              and software engineering positions. If you're hiring, or just want
              to talk systems, GenAI, or competitive programming, reach out
              below.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-xl divide-y divide-line bg-panel/40"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-between px-6 py-4 hover:bg-panel/70 transition-colors group"
              >
                <span className="font-mono text-xs text-faint uppercase tracking-wide">
                  {l.label}
                </span>
                <span className="text-sm text-primary group-hover:text-signal transition-colors">
                  {l.value}
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
