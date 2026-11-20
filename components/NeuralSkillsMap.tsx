"use client";

const nodes = [
  { id: "ts", label: "TypeScript", x: 60, y: 40 },
  { id: "next", label: "Next.js", x: 170, y: 70 },
  { id: "python", label: "Python", x: 40, y: 160 },
  { id: "genai", label: "GenAI", x: 150, y: 180 },
  { id: "sql", label: "PostgreSQL", x: 260, y: 130 },
  { id: "langchain", label: "LangChain", x: 240, y: 210 },
  { id: "docker", label: "Docker", x: 90, y: 250 },
  { id: "sysdesign", label: "System Design", x: 210, y: 270 },
];

const edges = [
  ["ts", "next"],
  ["next", "docker"],
  ["python", "genai"],
  ["python", "docker"],
  ["genai", "langchain"],
  ["genai", "sql"],
  ["langchain", "sql"],
  ["docker", "sysdesign"],
  ["sql", "sysdesign"],
];

export default function NeuralSkillsMap() {
  const find = (id: string) => nodes.find((n) => n.id === id)!;

  return (
    <div className="border border-line rounded-lg bg-panel/40 p-5">
      <div className="flex items-center gap-2 mb-4 font-mono text-[11px] text-signal">
        <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
        INTERACTIVE NEURAL SKILLS MAP
      </div>
      <svg
        viewBox="0 0 300 300"
        className="w-full h-auto"
        role="img"
        aria-label="Diagram connecting core skills"
      >
        {edges.map(([a, b], i) => {
          const p1 = find(a);
          const p2 = find(b);
          return (
            <line
              key={i}
              x1={p1.x}
              y1={p1.y}
              x2={p2.x}
              y2={p2.y}
              stroke="#1E2630"
              strokeWidth="1"
            />
          );
        })}
        {nodes.map((n) => (
          <g key={n.id}>
            <circle cx={n.x} cy={n.y} r="3.5" fill="#4FE3C1" />
            <text
              x={n.x + 8}
              y={n.y + 4}
              className="font-mono"
              fontSize="9"
              fill="#7C8798"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}