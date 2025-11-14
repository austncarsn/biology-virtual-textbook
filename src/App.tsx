"use client";

import { useState, useRef, useCallback } from "react";
import { toast } from "sonner";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import FiguresSection from "./components/sections/FiguresSection";
import GlossarySection from "./components/sections/GlossarySection";
import DownloadsSection from "./components/sections/DownloadsSection";
import GlossaryModal from "./components/features/GlossaryModal";
import ImageLightbox from "./components/features/ImageLightbox";
import { figures } from "./data/figures";
import { glossaryData, glossaryPreviewTerms } from "./data/glossary";
import erSmoothImg from "./assets/er-smooth.png";
import { generatePDF } from "./utils/generatePDF";
import { Figure } from "./types";

export default function App() {
  const [activeSection, setActiveSection] = useState("overview");
  const [organism, setOrganism] = useState<"plant" | "animal" | "bacteria">("plant");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedFigure, setSelectedFigure] = useState<{ image: string; title: string; figureNumber: number } | null>(null);

  const overviewRef = useRef<HTMLElement>(null);
  const figuresRef = useRef<HTMLElement>(null);
  const glossaryRef = useRef<HTMLElement>(null);
  const downloadsRef = useRef<HTMLElement>(null);

  const scrollToSection = (section: string) => {
    const refs = { overview: overviewRef, figures: figuresRef, glossary: glossaryRef, downloads: downloadsRef };
    refs[section as keyof typeof refs]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(section);
  };

  const handleTermClick = (term: string) => {
    setSelectedTerm(term);
    setModalOpen(true);
  };

  const handleDownloadPDF = async () => {
    toast.success("PDF download initiated", { description: "Your educational resource is being prepared." });
    try {
      await generatePDF(figures);
      toast.success("PDF ready!", { description: "Cell-Biology-Essential-Organelles.pdf has been downloaded." });
    } catch (error) {
      console.error("PDF generation failed:", error);
      toast.error("PDF generation failed", { description: "Please try again later." });
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Cell Biology: Essential Organelles",
        text: "Explore detailed cellular biology diagrams",
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard");
    }
  };

  const handleImageClick = (figure: Figure) => {
    setSelectedFigure({ 
      image: figure.image, 
      title: figure.title, 
      figureNumber: figure.figure_number 
    });
    setLightboxOpen(true);
  };

  const selectedGlossaryData = selectedTerm ? glossaryData[selectedTerm] : null;

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onDownloadPDF={handleDownloadPDF}
        onShare={handleShare}
      />

      <section ref={overviewRef} id="overview">
        <HeroSection
          onStartExploring={() => scrollToSection("figures")}
          onDownloadPDF={handleDownloadPDF}
          previewImage={erSmoothImg}
          previewTitle="Endoplasmic Reticulum"
          organism={organism}
          onOrganismChange={setOrganism}
        />
      </section>

      <section ref={figuresRef} id="figures">
        <FiguresSection
          figures={figures}
          onTermClick={handleTermClick}
          onImageClick={handleImageClick}
          organism={organism}
        />
      </section>

      <section ref={glossaryRef} id="glossary">
        <GlossarySection
          terms={glossaryPreviewTerms}
          onTermClick={handleTermClick}
          onViewAll={() => handleTermClick("Eukaryotic Cell")}
        />
      </section>

      <section ref={downloadsRef} id="downloads">
        <DownloadsSection />
      </section>

      <Footer />

      {selectedTerm && selectedGlossaryData && (
        <GlossaryModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          term={selectedTerm}
          definition={selectedGlossaryData.definition}
          illustration={selectedGlossaryData.illustration}
          relatedFigures={selectedGlossaryData.relatedFigures}
        />
      )}

      {lightboxOpen && selectedFigure && (
        <ImageLightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          image={selectedFigure.image}
          title={selectedFigure.title}
          figureNumber={selectedFigure.figureNumber}
        />
      )}
    </div>
  );
}