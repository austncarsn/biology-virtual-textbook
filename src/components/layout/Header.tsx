"use client";

import { useState, useEffect } from "react";
import { BookOpen, Download, Share2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  onDownloadPDF: () => void;
  onShare: () => void;
}

const NAV_ITEMS = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "figures", label: "Figures", icon: Sparkles },
  { id: "glossary", label: "Glossary", icon: BookOpen },
  { id: "downloads", label: "Downloads", icon: Download },
] as const;

export default function Header({
  activeSection,
  onNavigate,
  onDownloadPDF,
  onShare,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300 no-print"
      style={{
        background: isScrolled ? "rgba(250, 249, 246, 0.8)" : "rgba(250, 249, 246, 0.95)",
        backdropFilter: "blur(20px)",
        borderBottom: isScrolled ? "1px solid rgba(0, 122, 124, 0.1)" : "1px solid transparent",
        boxShadow: isScrolled ? "0 4px 24px -2px rgba(0, 0, 0, 0.05), 0 2px 8px -2px rgba(0, 122, 124, 0.08)" : "none",
      }}
    >
      <div className="max-w-[1120px] mx-auto px-6">
        <div 
          className="flex items-center justify-between transition-all duration-300"
          style={{ height: isScrolled ? "64px" : "80px" }}
        >
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div 
              className="flex items-center gap-1 p-1.5 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(0, 122, 124, 0.05) 0%, rgba(16, 185, 129, 0.03) 100%)",
                border: "1px solid rgba(0, 122, 124, 0.08)",
              }}
            >
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                const isHovered = hoveredItem === item.id;
                
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    onHoverStart={() => setHoveredItem(item.id)}
                    onHoverEnd={() => setHoveredItem(null)}
                    className="relative px-5 py-2.5 rounded-xl transition-all duration-300"
                    style={{
                      color: isActive ? "var(--brand)" : "var(--text-secondary)",
                      zIndex: 1,
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 rounded-xl"
                          style={{
                            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)",
                            border: "1px solid rgba(0, 122, 124, 0.15)",
                            boxShadow: "0 4px 16px -4px rgba(0, 122, 124, 0.2), 0 2px 8px -2px rgba(0, 122, 124, 0.1)",
                          }}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        />
                      )}
                    </AnimatePresence>

                    <AnimatePresence>
                      {isHovered && !isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-xl"
                          style={{ background: "rgba(0, 122, 124, 0.04)" }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </AnimatePresence>

                    <span className="relative flex items-center gap-2">
                      <Icon 
                        size={14} 
                        strokeWidth={isActive ? 2.5 : 2}
                        style={{ opacity: isActive ? 1 : 0.7 }}
                      />
                      <span 
                        style={{ 
                          fontSize: "14px", 
                          fontWeight: isActive ? 600 : 500,
                          letterSpacing: isActive ? "0.01em" : "0",
                        }}
                      >
                        {item.label}
                      </span>
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </nav>

          {/* Mobile Navigation */}
          <nav className="flex md:hidden items-center gap-2">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="p-2 rounded-lg"
                  style={{
                    color: isActive ? "var(--brand)" : "var(--text-secondary)",
                    background: isActive ? "rgba(0, 122, 124, 0.08)" : "transparent",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                </motion.button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <motion.button
              onClick={onDownloadPDF}
              className="hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-xl relative overflow-hidden"
              style={{
                color: "var(--text)",
                border: "1px solid rgba(0, 122, 124, 0.15)",
                background: "rgba(255, 255, 255, 0.6)",
              }}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Download PDF"
            >
              <Download size={16} strokeWidth={2.5} />
              <span className="relative hidden lg:inline" style={{ fontSize: "14px", fontWeight: 500 }}>
                Download
              </span>
            </motion.button>

            <motion.button
              onClick={onShare}
              className="p-2.5 rounded-xl"
              style={{
                color: "var(--text-secondary)",
                border: "1px solid rgba(0, 122, 124, 0.15)",
                background: "rgba(255, 255, 255, 0.6)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Share"
            >
              <Share2 size={16} strokeWidth={2.5} />
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
}
