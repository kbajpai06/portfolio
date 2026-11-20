"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

type GithubData = {
  publicRepos: number | null;
  followers: number | null;
  totalStars: number | null;
  topRepos: {
    name: string;
    description: string | null;
    url: string;
    stars: number;
    forks: number;
    language: string | null;
  }[];
  error?: string;
};

export default function GithubStats() {
  const [data, setData] = useState<GithubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetch("/api/github")
      .then((res) => res.json())
      .then((json) => {
        if (mounted) setData(json);
      })
      .catch(() =>
        mounted &&
        setData({
          publicRepos: null,
          followers: null,
          totalStars: null,
          topRepos: [],
          error: "Could not reach GitHub.",
        })
      )
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="relative py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-xs text-signal mb-3"
            >
              Live from GitHub
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="font-display text-3xl md:text-4xl text-primary max-w-xl"
            >
              Fetched directly from the source.
            </motion.h2>
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted hover:text-signal transition-colors"
          >
            github.com/{profile.githubUsername} ↗
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          {[
            { label: "Public repos", value: data?.publicRepos },
            { label: "Followers", value: data?.followers },
            { label: "Total stars", value: data?.totalStars },
          ].map((s) => (
            <div
              key={s.label}
              className="glass rounded-lg p-6 bg-panel/40"
            >
              <p className="font-display text-3xl text-signal">
                {loading ? (
                  <span className="inline-block w-10 h-8 bg-line/60 rounded animate-pulse" />
                ) : (
                  s.value ?? "—"
                )}
              </p>
              <p className="font-mono text-[11px] text-faint mt-2 uppercase tracking-wide">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {data?.error && (
          <p className="font-mono text-xs text-warn/80 mb-8">
            {data.error}
          </p>
        )}

        {!loading && data && data.topRepos.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-4">
            {data.topRepos.map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-lg p-5 bg-panel/30 hover:border-signal/40 transition-colors"
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="font-mono text-sm text-primary">
                    {r.name}
                  </span>
                  <span className="font-mono text-[11px] text-faint">
                    ★ {r.stars}
                  </span>
                </div>
                {r.description && (
                  <p className="text-muted text-sm leading-relaxed line-clamp-2">
                    {r.description}
                  </p>
                )}
                {r.language && (
                  <span className="inline-block mt-3 font-mono text-[10px] text-signal/80">
                    {r.language}
                  </span>
                )}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
