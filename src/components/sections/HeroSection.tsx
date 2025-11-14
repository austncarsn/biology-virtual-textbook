import Hero from "../Hero";

interface HeroSectionProps {
  onStartExploring: () => void;
  onDownloadPDF: () => void;
  previewImage: string;
  previewTitle: string;
  organism?: "plant" | "animal" | "bacteria";
  onOrganismChange?: (o: "plant" | "animal" | "bacteria") => void;
}

export default function HeroSection({
  onStartExploring,
  onDownloadPDF,
  previewImage,
  previewTitle,
  organism,
  onOrganismChange,
}: HeroSectionProps) {
  return (
    <Hero
      onStartExploring={onStartExploring}
      onDownloadPDF={onDownloadPDF}
      previewImage={previewImage}
      previewTitle={previewTitle}
      organism={organism}
      onOrganismChange={onOrganismChange}
    />
  );
}
