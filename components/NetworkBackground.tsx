"use client";

// A very subtle, slow-moving field of nodes and connecting lines.
// Purely decorative — aria-hidden, and respects reduced-motion via
// the animate-drift utility being neutralized globally in globals.css.

const nodes = [
  { x: 8, y: 18 }, { x: 22, y: 42 }, { x: 6, y: 70 }, { x: 34, y: 12 },
  { x: 46, y: 55 }, { x: 62, y: 24 }, { x: 78, y: 60 }, { x: 92, y: 30 },
  { x: 88, y: 80 }, { x: 58, y: 88 }, { x: 15, y: 92 }, { x: 40, y: 76 },
];

const edges: [number, number][] = [
  [0, 1], [1, 2], [1, 3], [3, 5], [4, 5], [4, 11], [5, 6], [6, 7],
  [6, 8], [8, 9], [9, 11], [2, 11], [1, 4],
];

export default function NetworkBackground() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#4FB3BF"
          strokeWidth="0.15"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i % 3 === 0 ? 0.6 : 0.35}
          fill="#4FB3BF"
          className="animate-drift"
          style={{ animationDelay: `${i * 0.6}s` }}
        />
      ))}
    </svg>
  );
}
