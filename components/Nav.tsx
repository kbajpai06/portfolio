"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-[3px] inset-x-0 z-40 bg-gradient-to-b from-void/60 via-void/20 to-transparent">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
          <a href="#top"
          className="font-mono text-sm font-semibold text-cream tracking-tight hover:text-signal transition-colors"
        >
          kartik<span className="text-warn">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs font-medium text-cream/80 hover:text-cream transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
            <a
            href={`mailto:${profile.email}`}
            className="font-mono text-xs font-medium text-cream border border-cream/40 px-4 py-2 rounded hover:border-cream hover:bg-cream hover:text-void transition-colors"
          >
            Say hello
          </a>
        </div>

        <button
          className="md:hidden text-cream"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <div className="w-5 space-y-1.5">
            <span className="block h-px bg-cream" />
            <span className="block h-px bg-cream" />
          </div>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-line px-6 py-4 flex flex-col gap-4 bg-void">
          {links.map((l) => (
              <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm text-muted hover:text-primary"
            >
              {l.label}
            </a>
          ))}
            <a
            href={`mailto:${profile.email}`}
            onClick={() => setOpen(false)}
            className="font-mono text-sm text-signal"
          >
            Say hello →
          </a>
        </nav>
      )}
    </header>
  );
}


