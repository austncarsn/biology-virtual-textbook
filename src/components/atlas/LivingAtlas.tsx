"use client";

import React, { useEffect, useMemo, useRef } from "react";

type Organism = "plant" | "animal" | "bacteria";

/** All supported organelle keys */
type OrganelleKey =
  | "nucleus"
  | "chloroplast"
  | "mitochondrion"
  | "vacuole"
  | "er"
  | "golgi"
  | "lysosome"
  | "ribosome"
  | "centrosome"
  | "nuclearPore"
  | "microtubules"
  | "membraneTransport";

interface OrganellePosition {
  cx: number;
  cy: number;
  r: number;
}

interface LivingAtlasProps {
  /** Organelle key to focus, e.g. "chloroplast" */
  focused?: OrganelleKey | null;
  /** Additional organelles to highlight (connections etc) */
  highlighted?: OrganelleKey[];
  organism?: Organism;
  /** Optional raw SVG markup for a high-fidelity atlas (rendered if present) */
  atlasMarkup?: string | null;
  /** Optional mapping of organelle keys -> element IDs inside the atlas SVG */
  idMap?: Partial<Record<OrganelleKey, string>> | null;
}

/**
 * Minimal spatial map for organelle coordinates inside the SVG viewBox.
 * The values are normalized to a 100x100 viewBox.
 */
const ORG_POS: Record<OrganelleKey, OrganellePosition> = {
  nucleus: { cx: 50, cy: 50, r: 18 },
  chloroplast: { cx: 80, cy: 40, r: 10 },
  mitochondrion: { cx: 65, cy: 70, r: 9 },
  vacuole: { cx: 30, cy: 70, r: 16 },
  er: { cx: 40, cy: 40, r: 8 },
  golgi: { cx: 55, cy: 45, r: 7 },
  lysosome: { cx: 72, cy: 55, r: 6 },
  ribosome: { cx: 45, cy: 55, r: 4 },
  centrosome: { cx: 20, cy: 30, r: 5 },
  nuclearPore: { cx: 50, cy: 32, r: 2 },
  microtubules: { cx: 60, cy: 20, r: 5 },
  membraneTransport: { cx: 90, cy: 50, r: 6 },
};

interface OrganelleConfig {
  key: OrganelleKey;
  label: string;
  show: (organism: Organism) => boolean;
}

/** Which organelles exist in which organism type */
const ORGANELLES: OrganelleConfig[] = [
  { key: "nucleus", label: "Nucleus", show: (o) => o !== "bacteria" },
  { key: "chloroplast", label: "Chloroplast", show: (o) => o === "plant" },
  { key: "mitochondrion", label: "Mitochondrion", show: (o) => o !== "bacteria" },
  { key: "vacuole", label: "Vacuole", show: (o) => o === "plant" },
  { key: "er", label: "Endoplasmic Reticulum", show: (o) => o !== "bacteria" },
  { key: "golgi", label: "Golgi", show: (o) => o !== "bacteria" },
  { key: "lysosome", label: "Lysosome", show: (o) => o !== "bacteria" },
  { key: "ribosome", label: "Ribosome", show: () => true },
  { key: "centrosome", label: "Centrosome", show: (o) => o !== "bacteria" },
  { key: "nuclearPore", label: "Nuclear Pore", show: (o) => o !== "bacteria" },
  { key: "microtubules", label: "Microtubules", show: (o) => o !== "bacteria" },
  { key: "membraneTransport", label: "Membrane Transport", show: () => true },
];

/**
 * Best effort mapping from figure titles or captions
 * to canonical organelle keys.
 */
export function organelleKeyFromFigure(title: string): OrganelleKey | null {
  const t = title.toLowerCase();
  if (t.includes("chloroplast")) return "chloroplast";
  if (t.includes("mitochond")) return "mitochondrion";
  if (t.includes("vacuole")) return "vacuole";
  if (t.includes("endoplasmic") || t.includes("er")) return "er";
  if (t.includes("golgi") || t.includes("endomembrane")) return "golgi";
  if (t.includes("lysosome")) return "lysosome";
  if (t.includes("ribosome")) return "ribosome";
  if (t.includes("centrosome")) return "centrosome";
  if (t.includes("nuclear pore")) return "nuclearPore";
  if (t.includes("microtubule")) return "microtubules";
  if (t.includes("membrane transport")) return "membraneTransport";
  return null;
}

/** Styles kept in a constant so they are not recreated every render */
const ATLAS_STYLES = `
  /* Scoped under .living-atlas-root to avoid global leakage */
  .living-atlas-root .atlas-highlighted {
    transition: all 240ms cubic-bezier(.2,.9,.2,1);
    stroke: #10B981 !important;
    stroke-width: 2.4 !important;
    opacity: 1 !important;
    filter:
      drop-shadow(0 6px 10px rgba(16,185,129,0.22))
      drop-shadow(0 0 12px rgba(16,185,129,0.18));
    transform-origin: center center;
    animation: atlas-pulse 1500ms ease-in-out infinite;
  }

  .living-atlas-root .atlas-dim {
    opacity: 0.28 !important;
    transition: opacity 200ms ease;
  }

  .living-atlas-root .atlas-organelle {
    transform-origin: center center;
  }

  @keyframes atlas-pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.06); }
    100% { transform: scale(1); }
  }

  .living-atlas-root .ribbon-animated {
    stroke-dasharray: 6 6;
    stroke-linecap: round;
    animation:
      atlas-dash 1.1s linear infinite,
      atlas-ribbonGlow 1400ms ease-in-out infinite;
    stroke-width: 1.6;
  }

  .living-atlas-root .ribbon-dim {
    stroke-dasharray: 2 6;
    stroke-linecap: round;
    opacity: 0.42;
  }

  @keyframes atlas-dash {
    to { stroke-dashoffset: -24; }
  }

  @keyframes atlas-ribbonGlow {
    0%   { filter: drop-shadow(0 0 0px rgba(142,231,192,0.0)); }
    50%  { filter: drop-shadow(0 0 8px rgba(142,231,192,0.14)); }
    100% { filter: drop-shadow(0 0 0px rgba(142,231,192,0.0)); }
  }

  /* Respect users who prefer reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .living-atlas-root .atlas-highlighted,
    .living-atlas-root .ribbon-animated {
      animation: none !important;
    }

    .living-atlas-root .atlas-highlighted {
      transition: none !important;
      filter: none !important;
      transform: none !important;
    }
  }
`;

export default function LivingAtlas({
  focused = null,
  highlighted = [],
  organism = "plant",
  atlasMarkup,
  idMap,
}: LivingAtlasProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const activeKeys = useMemo<Set<OrganelleKey>>(() => {
    const set = new Set<OrganelleKey>();

    if (focused) {
      set.add(focused);
    }

    highlighted.forEach((key) => {
      if (key) set.add(key);
    });

    return set;
  }, [focused, highlighted]);

  // Apply highlight and dim classes when using injected atlas markup
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear previous highlight and dim
    container
      .querySelectorAll<HTMLElement>(".atlas-highlighted, .atlas-dim")
      .forEach((el) => el.classList.remove("atlas-highlighted", "atlas-dim"));

    if (!atlasMarkup || !idMap) return;

    // First dim all mapped elements
    Object.values(idMap).forEach((id) => {
      if (!id) return;
      try {
        const node = container.querySelector<HTMLElement>(`#${CSS.escape(id)}`);
        if (node) node.classList.add("atlas-dim");
      } catch {
        // ignore invalid IDs
      }
    });

    // Then highlight active ones
    activeKeys.forEach((key) => {
      const id = idMap[key];
      if (!id) return;

      try {
        const node = container.querySelector<HTMLElement>(`#${CSS.escape(id)}`);
        if (!node) return;
        node.classList.remove("atlas-dim");
        node.classList.add("atlas-highlighted");
      } catch {
        // ignore
      }
    });
  }, [atlasMarkup, idMap, activeKeys]);

  const renderOrganelle = (key: OrganelleKey, label: string) => {
    const pos = ORG_POS[key];
    if (!pos) return null;

    const isActive = activeKeys.has(key);

    return (
      <g
        key={key}
        data-key={key}
        style={{ transition: "opacity 220ms ease, transform 220ms ease" }}
      >
        <circle
          className={
            isActive ? "atlas-highlighted atlas-organelle" : "atlas-organelle"
          }
          cx={pos.cx}
          cy={pos.cy}
          r={pos.r}
          fill={isActive ? "#10B981" : "#D1FAE5"}
          stroke={isActive ? "#059669" : "#86EFAC"}
          strokeWidth={isActive ? 2 : 1}
          style={{ transform: isActive ? "scale(1.05)" : "scale(1)" }}
        />
        <text
          x={pos.cx}
          y={pos.cy + pos.r + 8}
          fontSize={3.6}
          textAnchor="middle"
          fill="#064E3B"
        >
          {label}
        </text>
      </g>
    );
  };

  // Simple connection ribbons between ER -> Golgi -> membraneTransport
  const connectionPaths: React.ReactElement[] = [];
  const erPos = ORG_POS.er;
  const golgiPos = ORG_POS.golgi;
  const memPos = ORG_POS.membraneTransport;

  if (activeKeys.has("er") || activeKeys.has("golgi") || activeKeys.has("membraneTransport")) {
    if (erPos && golgiPos) {
      const strong = activeKeys.has("er") && activeKeys.has("golgi");
      connectionPaths.push(
        <path
          key="er-golgi"
          d={`M ${erPos.cx} ${erPos.cy} Q ${(erPos.cx + golgiPos.cx) / 2} ${
            (erPos.cy + golgiPos.cy) / 2 - 6
          }, ${golgiPos.cx} ${golgiPos.cy}`}
          stroke="#8EE7C0"
          strokeWidth={strong ? 1.8 : 1.2}
          fill="none"
          strokeOpacity={strong ? 1 : 0.38}
          className={strong ? "ribbon-animated" : "ribbon-dim"}
          style={{
            transition: "stroke-opacity 200ms ease, stroke-width 180ms ease",
          }}
        />
      );
    }

    if (golgiPos && memPos) {
      const strong = activeKeys.has("golgi") && activeKeys.has("membraneTransport");
      connectionPaths.push(
        <path
          key="golgi-mem"
          d={`M ${golgiPos.cx} ${golgiPos.cy} Q ${(golgiPos.cx + memPos.cx) / 2} ${
            (golgiPos.cy + memPos.cy) / 2 - 6
          }, ${memPos.cx} ${memPos.cy}`}
          stroke="#8EE7C0"
          strokeWidth={strong ? 1.6 : 1.0}
          fill="none"
          strokeOpacity={strong ? 1 : 0.38}
          className={strong ? "ribbon-animated" : "ribbon-dim"}
          style={{
            transition: "stroke-opacity 200ms ease, stroke-width 180ms ease",
          }}
        />
      );
    }
  }

  return (
    <div className="living-atlas-root" style={{ width: 320 }} aria-hidden={false}>
      <div
        style={{
          fontSize: 12,
          fontWeight: 700,
          color: "var(--text)",
          marginBottom: 8,
        }}
      >
        Living Cell Atlas
      </div>

      <div ref={containerRef}>
        {atlasMarkup ? (
          <div
            aria-label="Interactive cell atlas"
            role="img"
            dangerouslySetInnerHTML={{ __html: atlasMarkup }}
          />
        ) : (
          <svg
            viewBox="0 0 100 100"
            width="320"
            height="320"
            role="img"
            aria-label="Interactive cell atlas"
          >
            <defs>
              <radialGradient id="mem" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#FEFFFC" stopOpacity="1" />
                <stop offset="100%" stopColor="#F2FAF4" stopOpacity="1" />
              </radialGradient>
            </defs>

            <rect
              x={2}
              y={2}
              width={96}
              height={96}
              rx={20}
              fill="url(#mem)"
              stroke="#D1FAE5"
              strokeWidth={0.5}
            />

            <g strokeLinecap="round" strokeLinejoin="round">
              {connectionPaths}
            </g>

            <g>
              {ORGANELLES.filter((o) => o.show(organism)).map((o) =>
                renderOrganelle(o.key, o.label)
              )}
            </g>
          </svg>
        )}
      </div>

      <style>{ATLAS_STYLES}</style>

      <div
        style={{
          fontSize: 12,
          color: "var(--text-secondary)",
          marginTop: 8,
        }}
      >
        Hover a card to highlight the organelle in context.
      </div>
    </div>
  );
}
