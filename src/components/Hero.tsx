"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Download, BookOpen, Award, FileCheck, Sparkles } from "lucide-react";
// Use bundled assets directly as runtime fallbacks (no data/images.ts)
import erSmoothImg from "../assets/er-smooth.png";
import chloroplastImg from "../assets/chloroplast.png";
import eukaryoticCellImg from "../assets/eukaryotic-cell.png";
import mitochondrionImg from "../assets/mitochondrion.png";
import vacuoleImg from "../assets/vacuole.png";
import osmosisImg from "../assets/osmosis-turgor-pressure.png";
import plantCellImg from "../assets/plant-cell.png";
import lysosomeImg from "../assets/lysosome.png";
import ribosomeImg from "../assets/ribosome-80s.png";
import centrosomeImg from "../assets/centrosome-centrioles.png";
import nuclearPoreImg from "../assets/nuclear-pore-complex.png";
import endomembraneImg from "../assets/endomembrane-system.png";
import microtubulesImg from "../assets/microtubules.png";
import membraneTransportImg from "../assets/membrane-transport.png";
import biologyCoverImg from "../assets/biology-cover.png";

const imageFallbacks: Record<string, string> = {
  "er-smooth.png": erSmoothImg,
  "chloroplast.png": chloroplastImg,
  "eukaryotic-cell.png": eukaryoticCellImg,
  "mitochondrion.png": mitochondrionImg,
  "vacuole.png": vacuoleImg,
  "osmosis-turgor-pressure.png": osmosisImg,
  "plant-cell.png": plantCellImg,
  "lysosome.png": lysosomeImg,
  "ribosome-80s.png": ribosomeImg,
  "centrosome-centrioles.png": centrosomeImg,
  "nuclear-pore-complex.png": nuclearPoreImg,
  "endomembrane-system.png": endomembraneImg,
  "microtubules.png": microtubulesImg,
  "membrane-transport.png": membraneTransportImg,
  "biology-cover.png": biologyCoverImg,
};

interface HeroProps {
  onStartExploring: () => void;
  onDownloadPDF: () => void;
  previewImage?: string;
  previewTitle?: string;
  organism?: "plant" | "animal" | "bacteria";
  onOrganismChange?: (o: "plant" | "animal" | "bacteria") => void;
}

export default function Hero({
  onStartExploring,
  onDownloadPDF,
  previewImage,
  previewTitle = "Endoplasmic Reticulum",
  organism = "plant",
  onOrganismChange,
}: HeroProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isHoveredPrimary, setIsHoveredPrimary] = useState(false);
  const [isHoveredSecondary, setIsHoveredSecondary] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FDFDFB 0%, #F9F9F7 50%, #F5F5F2 100%)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Organic Background Shapes - Subtle Cell Membrane Hints */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.4,
          background: `
            radial-gradient(circle at 20% 30%, rgba(0, 122, 124, 0.04) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.02) 0%, transparent 60%)
          `,
        }}
      />
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0, 122, 124, 0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 py-16 sm:py-20 lg:py-24">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="relative z-10">
            {/* Educational Resource Chip */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 transition-all duration-200 hover:scale-105"
              style={{
                background: "rgba(0, 122, 124, 0.08)",
                border: "1px solid rgba(0, 122, 124, 0.15)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                className="flex items-center justify-center w-5 h-5 rounded-full"
                style={{
                  background: "var(--success)",
                  animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                }}
              >
                <Sparkles size={12} style={{ color: "white" }} />
              </div>
              <span
                style={{
                  fontSize: "13px",
                  color: "var(--brand)",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                }}
              >
                Educational Resource
              </span>
            </div>

            {/* Main Heading */}
            <h1
              style={{
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: 700,
                color: "var(--text)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "16px",
              }}
            >
              Cell Biology:
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, var(--brand) 0%, #10B981 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Essential Organelles
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "clamp(16px, 2vw, 18px)",
                color: "var(--text-secondary)",
                lineHeight: 1.65,
                marginBottom: "28px",
                maxWidth: "540px",
              }}
            >
              A comprehensive visual guide to cellular structures and their functions. Explore detailed 
              diagrams with scientific accuracy and educational clarity.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-8">
              {/* Primary Button */}
              <button
                onClick={onStartExploring}
                onMouseEnter={() => setIsHoveredPrimary(true)}
                onMouseLeave={() => setIsHoveredPrimary(false)}
                className="group relative flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl transition-all duration-200 w-full sm:w-auto"
                style={{
                  background: "var(--brand)",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: 600,
                  boxShadow: isHoveredPrimary
                    ? "0 8px 24px rgba(0, 122, 124, 0.3)"
                    : "0 4px 12px rgba(0, 122, 124, 0.2)",
                  transform: isHoveredPrimary ? "translateY(-2px)" : "translateY(0)",
                }}
                aria-label="Start exploring cellular diagrams"
              >
                <span>Start Exploring</span>
                <ArrowRight
                  size={18}
                  style={{
                    transform: isHoveredPrimary ? "translateX(4px)" : "translateX(0)",
                    transition: "transform 0.2s ease",
                  }}
                />
                {/* Focus Ring */}
                <div
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    boxShadow: "0 0 0 4px rgba(0, 122, 124, 0.2)",
                    opacity: 0,
                    transition: "opacity 0.2s ease",
                  }}
                />
              </button>

              {/* Secondary Button */}
              <button
                onClick={onDownloadPDF}
                onMouseEnter={() => setIsHoveredSecondary(true)}
                onMouseLeave={() => setIsHoveredSecondary(false)}
                className="flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl transition-all duration-200 w-full sm:w-auto"
                style={{
                  background: isHoveredSecondary ? "var(--surface)" : "transparent",
                  color: "var(--text)",
                  fontSize: "16px",
                  fontWeight: 600,
                  border: `2px solid ${isHoveredSecondary ? "var(--border-strong)" : "var(--border)"}`,
                  transform: isHoveredSecondary ? "translateY(-2px)" : "translateY(0)",
                }}
                aria-label="Download PDF version"
              >
                <Download size={18} />
                <span>Download PDF</span>
              </button>
            </div>

            {/* Stat Strip - Compact Chips */}
            <div className="flex flex-wrap gap-2.5">
              <div
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <BookOpen size={16} style={{ color: "var(--brand)" }} />
                <span style={{ fontSize: "13px", color: "var(--text)", fontWeight: 500 }}>
                  15 diagrams
                </span>
              </div>
              <div
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <FileCheck size={16} style={{ color: "var(--success)" }} />
                <span style={{ fontSize: "13px", color: "var(--text)", fontWeight: 500 }}>
                  Exam-ready
                </span>
              </div>
              <div
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <Award size={16} style={{ color: "var(--info)" }} />
                <span style={{ fontSize: "13px", color: "var(--text)", fontWeight: 500 }}>
                  CC-BY-SA 4.0
                </span>
              </div>
            </div>

            {/* Organism Toggle */}
            <div className="mt-6">
              <label style={{ fontSize: 12, color: "var(--text-tertiary)", marginRight: 8 }}>Atlas:</label>
              <div className="inline-flex rounded-full" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <button onClick={() => onOrganismChange?.("plant")} className={`px-3 py-1 rounded-l-full ${organism === "plant" ? "bg-green-50" : ""}`} aria-pressed={organism === "plant"}>
                  Plant
                </button>
                <button onClick={() => onOrganismChange?.("animal")} className={`px-3 py-1 ${organism === "animal" ? "bg-green-50" : ""}`} aria-pressed={organism === "animal"}>
                  Animal
                </button>
                <button onClick={() => onOrganismChange?.("bacteria")} className={`px-3 py-1 rounded-r-full ${organism === "bacteria" ? "bg-green-50" : ""}`} aria-pressed={organism === "bacteria"}>
                  Bacteria
                </button>
              </div>
            </div>

            {/* Meta Row - System Grid */}
            <div className="mt-8 pt-6 border-t border-border grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <p
                  style={{
                    fontSize: "10px",
                    color: "var(--text-tertiary)",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "6px",
                  }}
                >
                  Figures
                </p>
                <p
                  style={{
                    fontSize: "clamp(16px, 2vw, 18px)",
                    color: "var(--text)",
                    fontWeight: 700,
                  }}
                >
                  15 Diagrams
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "10px",
                    color: "var(--text-tertiary)",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "6px",
                  }}
                >
                  License
                </p>
                <p
                  style={{
                    fontSize: "clamp(14px, 2vw, 18px)",
                    color: "var(--text)",
                    fontWeight: 700,
                  }}
                >
                  CC-BY-SA 4.0
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "10px",
                    color: "var(--text-tertiary)",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "6px",
                  }}
                >
                  Updated
                </p>
                <p
                  style={{
                    fontSize: "clamp(16px, 2vw, 18px)",
                    color: "var(--text)",
                    fontWeight: 700,
                  }}
                >
                  Nov 2025
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Preview */}
          <div className="relative lg:block hidden">
            {/* Glassmorphic Preview Card */}
            <div
              className="relative overflow-hidden rounded-2xl transition-all duration-500"
              style={{
                background: "rgba(255, 255, 255, 0.7)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.8)",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.05)",
                transform: `translateY(${scrollY * 0.05}px)`,
              }}
            >
              {/* Figure Label */}
              <div
                className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(0, 122, 124, 0.2)",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    color: "var(--brand)",
                    fontWeight: 700,
                    letterSpacing: "0.03em",
                  }}
                >
                  FIGURE 1 OF 15
                </span>
              </div>

              {/* Preview Image */}
              {previewImage && (
                <div
                  className="relative"
                  style={{
                    aspectRatio: "4/3",
                    background: "linear-gradient(135deg, #F5F5F2 0%, #ECECEC 100%)",
                  }}
                >
                  <img
                    src={previewImage}
                    alt={`Preview of ${previewTitle}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    onError={(e) => {
                      try {
                        const imgEl = e.currentTarget as HTMLImageElement;
                        const src = imgEl.src || previewImage;
                        const fileName = src.split("/").pop() || "";
                        const fallback = imageFallbacks[fileName];
                        if (fallback && imgEl.src !== fallback) imgEl.src = fallback;
                      } catch (err) {}
                    }}
                    onLoad={(e) => {
                      try {
                        const imgEl = e.currentTarget as HTMLImageElement;
                        if (imgEl.naturalWidth === 0 || imgEl.naturalHeight === 0) {
                          const src = imgEl.src || previewImage;
                          const fileName = src.split("/").pop() || "";
                          const fallback = imageFallbacks[fileName];
                          if (fallback && imgEl.src !== fallback) imgEl.src = fallback;
                        }
                      } catch (err) {}
                    }}
                  />
                  {/* Gradient Overlay for Caption */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-24"
                    style={{
                      background: "linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)",
                    }}
                  />
                </div>
              )}

              {/* Caption Panel */}
              <div
                className="absolute bottom-0 left-0 right-0 p-5"
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(12px)",
                  borderTop: "1px solid rgba(0, 0, 0, 0.06)",
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p
                      style={{
                        fontSize: "10px",
                        color: "var(--brand)",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: "4px",
                      }}
                    >
                      Featured Organelle
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "var(--text)",
                        fontWeight: 600,
                        lineHeight: 1.3,
                      }}
                    >
                      {previewTitle}
                    </p>
                  </div>
                  <div
                    className="flex items-center justify-center w-8 h-8 rounded-full"
                    style={{
                      background: "var(--brand-light)",
                    }}
                  >
                    <ArrowRight size={16} style={{ color: "var(--brand)" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Accent Element */}
            <div
              className="absolute -top-6 -right-6 w-32 h-32 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
                filter: "blur(30px)",
                animation: "float 6s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}