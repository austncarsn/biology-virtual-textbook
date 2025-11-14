import { GlossaryPreviewTerm } from "../../types";
import GlossaryPreview from "../GlossaryPreview";

interface GlossarySectionProps {
  terms: GlossaryPreviewTerm[];
  onTermClick: (term: string) => void;
  onViewAll: () => void;
}

export default function GlossarySection({
  terms,
  onTermClick,
  onViewAll,
}: GlossarySectionProps) {
  return (
    <GlossaryPreview
      terms={terms}
      onTermClick={onTermClick}
      onViewAll={onViewAll}
    />
  );
}
