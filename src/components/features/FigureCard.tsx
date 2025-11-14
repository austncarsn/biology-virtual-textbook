"use client";

import { useState, memo } from "react";
// Use bundled assets directly as runtime fallbacks (no data/images.ts)
import erSmoothImg from "../../assets/er-smooth.png";
import chloroplastImg from "../../assets/chloroplast.png";
import eukaryoticCellImg from "../../assets/eukaryotic-cell.png";
import mitochondrionImg from "../../assets/mitochondrion.png";
import vacuoleImg from "../../assets/vacuole.png";
import osmosisImg from "../../assets/osmosis-turgor-pressure.png";
import plantCellImg from "../../assets/plant-cell.png";
import lysosomeImg from "../../assets/lysosome.png";
import ribosomeImg from "../../assets/ribosome-80s.png";
import centrosomeImg from "../../assets/centrosome-centrioles.png";
import nuclearPoreImg from "../../assets/nuclear-pore-complex.png";
import endomembraneImg from "../../assets/endomembrane-system.png";
import microtubulesImg from "../../assets/microtubules.png";
import membraneTransportImg from "../../assets/membrane-transport.png";
import biologyCoverImg from "../../assets/biology-cover.png";

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
import { BookOpen, ZoomIn } from "lucide-react";

interface FigureCardProps {
  figureNumber: number;
  title: string;
  subtitle: string;
  summary: string;
  image: string;
  alt?: string;
  sourceRef: string;
  license: string;
  onTermClick?: (term: string) => void;
  onImageClick?: () => void;
  onHover?: (title: string | null) => void;
}

function FigureCard({
  figureNumber,
  title,
  subtitle,
  summary,
  image,
  alt,
  sourceRef,
  license,
  onTermClick,
  onImageClick,
  onHover,
}: FigureCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <figure
      className="transition-all duration-200"
      style={{
        background: "var(--surface)",
        border: `1px solid ${isHovered ? "var(--border-strong)" : "var(--border)"}`,
        borderRadius: "var(--radius-lg)",
        boxShadow: isHovered ? "var(--shadow-md)" : "var(--shadow-sm)",
        transform: isHovered ? "scale(1.01)" : "scale(1)",
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        onHover?.(title);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onHover?.(null);
      }}
      tabIndex={0}
      aria-labelledby={`figure-${figureNumber}-title`}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden cursor-pointer touch-manipulation"
        style={{
          aspectRatio: "4/3",
          borderTopLeftRadius: "var(--radius-lg)",
          borderTopRightRadius: "var(--radius-lg)",
          background: "linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%)",
        }}
        onClick={onImageClick}
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
      >
        <img
          src={image}
          alt={alt ?? `3D diagram of ${title}, showing ${subtitle}`}
          loading="lazy"
          decoding="async"
          className="w-full h-full transition-transform duration-300"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            transform: isImageHovered ? "scale(1.05)" : "scale(1)",
          }}
          onError={(e) => {
            // If public image is missing (404), swap to bundled fallback if available
            try {
              const imgEl = e.currentTarget as HTMLImageElement;
              const src = imgEl.src || image;
              const fileName = src.split("/").pop() || "";
              const fallback = imageFallbacks[fileName];
              if (fallback && imgEl.src !== fallback) {
                imgEl.src = fallback;
              } else {
                // hide broken image gracefully
                imgEl.style.display = "none";
              }
            } catch (err) {
              // swallow errors
            }
          }}
          onLoad={(e) => {
            // If the image loaded but is empty (0x0), swap to fallback
            try {
              const imgEl = e.currentTarget as HTMLImageElement;
              if ((imgEl.naturalWidth === 0 || imgEl.naturalHeight === 0)) {
                const src = imgEl.src || image;
                const fileName = src.split("/").pop() || "";
                const fallback = imageFallbacks[fileName];
                if (fallback && imgEl.src !== fallback) {
                  imgEl.src = fallback;
                } else {
                  imgEl.style.display = "none";
                }
              }
            } catch (err) {
              // ignore
            }
          }}
        />
        
        {/* Figure Number Badge */}
        <div
          className="absolute top-4 left-4 px-3 py-1.5 rounded-full backdrop-blur-sm"
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            border: "1px solid var(--border)",
          }}
        >
          <label
            style={{
              color: "var(--brand)",
              fontSize: "var(--text-label)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Figure {figureNumber}
          </label>
        </div>

        {/* no pathway step badge */}

        {/* Zoom Indicator */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-200"
          style={{
            background: "rgba(0, 0, 0, 0.4)",
            opacity: isImageHovered ? 1 : 0,
            pointerEvents: "none",
          }}
        >
          <div
            className="p-3 rounded-full"
            style={{
              background: "var(--surface)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <ZoomIn size={24} style={{ color: "var(--brand)" }} />
          </div>
        </div>
      </div>

      <div style={{ height: "1px", background: "var(--border)" }} />

      {/* Content */}
      <figcaption className="p-4 sm:p-6">
        <div className="mb-3">
          <h3
            id={`figure-${figureNumber}-title`}
            style={{
              fontSize: "clamp(16px, 2vw, 18px)",
              fontWeight: 600,
              color: "var(--text)",
              lineHeight: 1.3,
              marginBottom: "4px",
            }}
          >
            {title}
          </h3>
          <p style={{ fontSize: "clamp(13px, 1.5vw, 14px)", color: "var(--text-secondary)", fontWeight: 500 }}>
            {subtitle}
          </p>
        </div>

        <p
          style={{
            fontSize: "clamp(14px, 1.5vw, 15px)",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            marginBottom: "16px",
          }}
        >
          {summary}
        </p>

        <div
          className="pt-4 flex flex-col sm:flex-row items-start sm:items-start justify-between gap-3 sm:gap-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p style={{ fontSize: "clamp(11px, 1.5vw, 12px)", color: "var(--text-tertiary)", lineHeight: 1.4, flex: 1 }}>
            Source: {sourceRef}
            <br />
            License: {license}
          </p>
          {onTermClick && (
            <button
              onClick={() => onTermClick(title)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
              style={{
                background: "var(--brand-light)",
                color: "var(--brand)",
                fontSize: "12px",
                fontWeight: 500,
              }}
              aria-label={`View glossary for ${title}`}
            >
              <BookOpen size={14} />
              <span>Glossary</span>
            </button>
          )}
        </div>
      </figcaption>
    </figure>
  );
}

// Memoize to prevent unnecessary re-renders
const MemoizedFigureCard = memo(FigureCard);
export default MemoizedFigureCard;