"use client";

import { Search } from "lucide-react";

interface GlossaryTerm {
  term: string;
  definition: string;
  category: "info" | "success" | "warning";
}

interface GlossaryPreviewProps {
  terms: GlossaryTerm[];
  onTermClick: (term: string) => void;
  onViewAll: () => void;
}

export default function GlossaryPreview({
  terms,
  onTermClick,
  onViewAll,
}: GlossaryPreviewProps) {
  const categoryColors = {
    info: {
      bg: "#EFF6FF",
      border: "#BFDBFE",
      text: "#1E40AF",
    },
    success: {
      bg: "#F0FDF4",
      border: "#BBF7D0",
      text: "#15803D",
    },
    warning: {
      bg: "#FFFBEB",
      border: "#FDE68A",
      text: "#B45309",
    },
  };

  return (
    <section className="py-12 sm:py-16" style={{ background: "var(--bg)" }}>
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
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
              Quick Reference
            </label>
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 32px)",
                fontWeight: 600,
                color: "var(--text)",
                lineHeight: 1.3,
              }}
            >
              Key Terms & Definitions
            </h2>
          </div>
          <button
            onClick={onViewAll}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
            style={{
              background: "var(--brand)",
              color: "white",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            <Search size={16} />
            <span>View All Terms</span>
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {terms.map((item, idx) => {
            const colors = categoryColors[item.category];
            return (
              <button
                key={idx}
                onClick={() => onTermClick(item.term)}
                className="text-left p-4 sm:p-5 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: colors.bg,
                  border: `1px solid ${colors.border}`,
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <h3
                  style={{
                    fontSize: "clamp(16px, 2vw, 18px)",
                    fontWeight: 600,
                    color: colors.text,
                    lineHeight: 1.3,
                    marginBottom: "8px",
                  }}
                >
                  {item.term}
                </h3>
                <p
                  style={{
                    fontSize: "clamp(13px, 1.5vw, 14px)",
                    color: "var(--text-secondary)",
                    lineHeight: 1.5,
                  }}
                >
                  {item.definition}
                </p>
              </button>
            );
          })}
        </div>

        {/* Mobile View All Button */}
        <button
          onClick={onViewAll}
          className="sm:hidden w-full mt-6 flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg transition-all duration-200 active:scale-95"
          style={{
            background: "var(--brand)",
            color: "white",
            fontSize: "16px",
            fontWeight: 500,
          }}
        >
          <Search size={18} />
          <span>View All Terms</span>
        </button>
      </div>
    </section>
  );
}