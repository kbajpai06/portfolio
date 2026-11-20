"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bootLines } from "@/lib/data";

export default function BootSequence({ onDone }: { onDone: () => void }) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setExiting(true);
      const t = setTimeout(onDone, 300);
      return () => clearTimeout(t);
    }

    if (visibleLines < bootLines.length) {
      const t = setTimeout(() => setVisibleLines((v) => v + 1), 260);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setExiting(true), 450);
      const t2 = setTimeout(onDone, 1050);
      return () => {
        clearTimeout(t);
        clearTimeout(t2);
      };
    }
  }, [visibleLines, onDone]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-[100] bg-void flex items-center justify-center px-6"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="w-full max-w-md font-mono text-sm">
            {bootLines.slice(0, visibleLines).map((line, i) => (
              <div
                key={line}
                className="flex items-baseline gap-2 py-0.5 text-muted"
              >
                <span className="text-signal/70">{`[${String(i + 1).padStart(2, "0")}]`}</span>
                <span
                  className={
                    i === visibleLines - 1 && i === bootLines.length - 1
                      ? "text-signal"
                      : ""
                  }
                >
                  {line}
                </span>
              </div>
            ))}
            <div className="mt-4 h-px w-full bg-line overflow-hidden">
              <motion.div
                className="h-full bg-signal"
                initial={{ width: "0%" }}
                animate={{
                  width: `${(visibleLines / bootLines.length) * 100}%`,
                }}
                transition={{ duration: 0.25 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
