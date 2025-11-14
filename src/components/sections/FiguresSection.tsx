import React, { memo, useMemo, useState } from "react";
import { Figure } from "../../types";
import FigureCard from "../features/FigureCard";
import { motion } from "motion/react";

interface FiguresSectionProps {
  figures: Figure[];
  onTermClick: (term: string) => void;
  onImageClick: (figure: Figure) => void;
  organism?: "plant" | "animal" | "bacteria";
}

function FiguresSection({ figures, onTermClick, onImageClick, organism = "plant" }: FiguresSectionProps) {
  const [sortMode, setSortMode] = useState<"number" | "alphabetical" | "function">("number");

  // visibleFigures: memoized filter + sort according to sortMode
  const visibleFigures = useMemo(() => {
    const base = figures.filter((f) => {
      const t = f.title.toLowerCase();
      if (organism === "plant") return true;
      if (organism === "animal") {
        if (t.includes("chloroplast") || t.includes("plant") || t.includes("vacuole")) return false;
        return true;
      }
      if (organism === "bacteria") {
        if (t.includes("nucleus") || t.includes("chloroplast") || t.includes("vacuole") || t.includes("mitochond")) return false;
        return true;
      }
      return true;
    });

    if (sortMode === "alphabetical") {
      return base.slice().sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sortMode === "function") {
      const rank = (f: Figure) => {
        const t = f.title.toLowerCase();
        if (t.includes("mitochond")) return 0;
        if (t.includes("chloroplast")) return 1;
        if (t.includes("er") || t.includes("endomembrane")) return 2;
        if (t.includes("membrane") || t.includes("transport")) return 3;
        if (t.includes("ribosome") || t.includes("nucleus")) return 4;
        return 5;
      };
      return base.slice().sort((a, b) => rank(a) - rank(b) || a.figure_number - b.figure_number);
    }

    // default: numeric order
    return base.slice().sort((a, b) => a.figure_number - b.figure_number);
  }, [figures, organism, sortMode]);

  return (
    <section className="py-12 sm:py-16" style={{ background: "var(--bg)" }}>
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="mb-10 sm:mb-12">
          <label
            style={{
              color: "var(--brand)",
              fontSize: "var(--text-label)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              display: "block",
              marginBottom: "8px",
            }}
          >
            Comprehensive Gallery
          </label>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 600, color: "var(--text)", lineHeight: 1.3 }}>
            Cellular Organelles & Structures
          </h2>
          <div style={{ marginTop: 12, display: "flex", gap: 8, alignItems: "center" }}>
            <div style={{ fontSize: 12, color: "var(--text-secondary)", marginRight: 8 }}>Order</div>
            <div style={{ display: "flex", gap: 6 }}>
              <button
                onClick={() => setSortMode("number")}
                aria-pressed={sortMode === "number"}
                style={{
                  padding: "6px 10px",
                  background: sortMode === "number" ? "var(--brand)" : "transparent",
                  color: sortMode === "number" ? "white" : "var(--text)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  borderRadius: 8,
                  fontSize: 13,
                  cursor: "pointer",
                }}
              >
                Number
              </button>
              <button
                onClick={() => setSortMode("alphabetical")}
                aria-pressed={sortMode === "alphabetical"}
                style={{
                  padding: "6px 10px",
                  background: sortMode === "alphabetical" ? "var(--brand)" : "transparent",
                  color: sortMode === "alphabetical" ? "white" : "var(--text)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  borderRadius: 8,
                  fontSize: 13,
                  cursor: "pointer",
                }}
              >
                A–Z
              </button>
              <button
                onClick={() => setSortMode("function")}
                aria-pressed={sortMode === "function"}
                style={{
                  padding: "6px 10px",
                  background: sortMode === "function" ? "var(--brand)" : "transparent",
                  color: sortMode === "function" ? "white" : "var(--text)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  borderRadius: 8,
                  fontSize: 13,
                  cursor: "pointer",
                }}
              >
                Function
              </button>
            </div>
          </div>
        </div>

        {/* Figure Note */}
        <div
          className="mb-8 sm:mb-10 p-4 sm:p-5 rounded-xl"
          style={{
            background: "linear-gradient(135deg, rgba(0, 122, 124, 0.04) 0%, rgba(16, 185, 129, 0.03) 100%)",
            border: "1px solid rgba(0, 122, 124, 0.12)",
            borderLeft: "4px solid var(--brand)",
          }}
        >
          <div className="flex items-start gap-3">
            <div
              className="flex-shrink-0 mt-1"
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--brand)",
              }}
            />
            <div>
              <p
                style={{
                  fontSize: "11px",
                  color: "var(--brand)",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "6px",
                }}
              >
                Figure Note
              </p>
              <p
                style={{
                  fontSize: "clamp(14px, 1.5vw, 15px)",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                }}
              >
                Every diagram in this resource was designed by me using Sora. For now, the images are
                intentionally unlabeled so the focus stays on visual structure. Over the coming months,
                I'll be updating each figure with clear labels and callouts to support detailed study.
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }}>
          <div>
            <div className="grid gap-6 sm:gap-8" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))" }}>
              {visibleFigures.map((figure) => (
                <motion.div layout key={figure.figure_number}>
                  <FigureCard
                    figureNumber={figure.figure_number}
                    title={figure.title}
                    subtitle={figure.subtitle}
                    summary={figure.summary}
                    image={figure.image}
                    alt={figure.alt}
                    sourceRef={figure.source_ref}
                    license={figure.license}
                    onTermClick={onTermClick}
                    onImageClick={() => onImageClick(figure)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(FiguresSection);