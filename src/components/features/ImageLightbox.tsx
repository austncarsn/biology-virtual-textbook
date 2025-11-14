"use client";

import { useEffect, memo } from "react";
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
import { X, ZoomIn } from "lucide-react";

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  figureNumber: number;
}

export default memo(function ImageLightbox({
  isOpen,
  onClose,
  image,
  title,
  figureNumber,
}: ImageLightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center animate-fadeIn p-4"
      style={{ background: "rgba(0, 0, 0, 0.85)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      {/* Header */}
      <div
        className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 sm:p-6"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)" }}
      >
        <div>
          <label
            style={{
              color: "white",
              fontSize: "clamp(11px, 1.5vw, 12px)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              display: "block",
              marginBottom: "4px",
            }}
          >
            Figure {figureNumber}
          </label>
          <h3
            style={{
              color: "white",
              fontSize: "clamp(16px, 2vw, 20px)",
              fontWeight: 600,
            }}
          >
            {title}
          </h3>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95"
          style={{ background: "rgba(255,255,255,0.1)", color: "white" }}
          aria-label="Close lightbox"
        >
          <X size={24} />
        </button>
      </div>

      {/* Image */}
      <div
        className="relative max-w-[90vw] max-h-[80vh] sm:max-h-[90vh] animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt={`Expanded view of ${title}`}
          loading="eager"
          decoding="async"
          className="max-w-full max-h-[80vh] sm:max-h-[90vh] rounded-lg"
          style={{
            objectFit: "contain",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          }}
          onError={(e) => {
            try {
              const imgEl = e.currentTarget as HTMLImageElement;
              const src = imgEl.src || image;
              const fileName = src.split("/").pop() || "";
              const fallback = imageFallbacks[fileName];
              if (fallback && imgEl.src !== fallback) imgEl.src = fallback;
            } catch (err) {}
          }}
          onLoad={(e) => {
            try {
              const imgEl = e.currentTarget as HTMLImageElement;
              if (imgEl.naturalWidth === 0 || imgEl.naturalHeight === 0) {
                const src = imgEl.src || image;
                const fileName = src.split("/").pop() || "";
                const fallback = imageFallbacks[fileName];
                if (fallback && imgEl.src !== fallback) imgEl.src = fallback;
              }
            } catch (err) {}
          }}
        />
        <div
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full"
          style={{ background: "rgba(255,255,255,0.9)" }}
        >
          <ZoomIn size={18} style={{ color: "var(--brand)" }} />
        </div>
      </div>

      {/* Hint */}
      <div
        className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 px-4"
        style={{
          color: "rgba(255,255,255,0.7)",
          fontSize: "clamp(12px, 1.5vw, 14px)",
          textAlign: "center",
        }}
      >
        <span className="hidden sm:inline">Click anywhere to close • Press ESC</span>
        <span className="sm:hidden">Tap to close</span>
      </div>
    </div>
  );
});