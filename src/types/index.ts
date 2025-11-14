export interface Figure {
  figure_number: number;
  title: string;
  subtitle: string;
  summary: string;
  image: string;
  /** Optional descriptive alt text for accessibility; if omitted a default is generated */
  alt?: string;
  source_ref: string;
  license: string;
}

export interface GlossaryEntry {
  definition: string;
  illustration?: string;
  relatedFigures: number[];
}

export interface GlossaryPreviewTerm {
  term: string;
  definition: string;
  category: "info" | "success" | "warning";
}

export type GlossaryData = Record<string, GlossaryEntry>;
