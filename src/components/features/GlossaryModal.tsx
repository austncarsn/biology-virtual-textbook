"use client";

import { useEffect, memo } from "react";
import { X } from "lucide-react";

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  term: string;
  definition: string;
  illustration?: string;
  relatedFigures?: number[];
}

export default memo(function GlossaryModal({
  isOpen,
  onClose,
  term,
  definition,
  illustration,
  relatedFigures,
}: GlossaryModalProps) {
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
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center animate-fadeIn"
      style={{ background: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full sm:max-w-2xl sm:mx-4 animate-slideUp"
        style={{
          background: "var(--surface)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-lg)",
          maxHeight: "90vh",
          overflow: "hidden",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 px-4 sm:px-6 py-4 flex items-start justify-between gap-4" style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
          <div>
            <label
              style={{
                color: "var(--brand)",
                fontSize: "var(--text-label)",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                display: "block",
                marginBottom: "4px",
              }}
            >
              Glossary Term
            </label>
            <h2 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 600, color: "var(--text)", lineHeight: 1.3 }}>
              {term}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95"
            style={{ background: "var(--bg)", color: "var(--text-secondary)" }}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="px-4 sm:px-6 py-6 overflow-y-auto" style={{ maxHeight: "calc(90vh - 120px)" }}>
          {illustration && (
            <div
              className="mb-6 rounded-lg overflow-hidden"
              style={{
                aspectRatio: "16/9",
                background: "linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%)",
              }}
            >
              <img
                src={illustration}
                alt={`Illustration of ${term}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full"
                style={{ objectFit: "cover" }}
              />
            </div>
          )}

          <div className="mb-6">
            <h3
              style={{
                fontSize: "clamp(16px, 2vw, 18px)",
                fontWeight: 600,
                color: "var(--text)",
                marginBottom: "12px",
              }}
            >
              Definition
            </h3>
            <p
              style={{
                fontSize: "clamp(14px, 1.5vw, 15px)",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
              }}
            >
              {definition}
            </p>
          </div>

          {relatedFigures && relatedFigures.length > 0 && (
            <div>
              <h3
                style={{
                  fontSize: "clamp(16px, 2vw, 18px)",
                  fontWeight: 600,
                  color: "var(--text)",
                  marginBottom: "12px",
                }}
              >
                Related Figures
              </h3>
              <div className="flex flex-wrap gap-2">
                {relatedFigures.map((figNum) => (
                  <span
                    key={figNum}
                    className="px-3 py-1.5 rounded-md"
                    style={{
                      background: "var(--brand-light)",
                      color: "var(--brand)",
                      fontSize: "clamp(12px, 1.5vw, 13px)",
                      fontWeight: 500,
                    }}
                  >
                    Figure {figNum}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});