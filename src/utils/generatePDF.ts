import jsPDF from "jspdf";
import { glossaryData } from "../data/glossary";

// Cover image path - must be placed in /public/images/cell-biology/
const imgBiologyCover = "/images/cell-biology/biology-cover.png";

interface Figure {
  figure_number: number;
  title: string;
  subtitle: string;
  summary: string;
  image: string;
  source_ref: string;
  license: string;
}

// Professional color palette matching the design system
const colors = {
  brand: [0, 122, 124],           // Primary teal
  brandLight: [230, 245, 245],    // Light teal
  text: [26, 32, 44],             // Near black
  textSecondary: [74, 85, 104],   // Medium gray
  textTertiary: [160, 174, 192],  // Light gray
  border: [226, 232, 240],        // Very light gray
  surface: [255, 255, 255],       // White
  accent: [139, 92, 246],         // Purple accent
  success: [16, 185, 129],        // Green
  warning: [245, 158, 11],        // Amber
} as const;

export async function generatePDF(figures: Figure[]) {
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 25;
  const contentWidth = pageWidth - 2 * margin;
  let yPosition = margin;

  // Helper: Check if new page is needed
  const checkNewPage = (requiredSpace: number) => {
    if (yPosition + requiredSpace > pageHeight - margin - 15) {
      pdf.addPage();
      yPosition = margin + 25;
      return true;
    }
    return false;
  };

  // Helper: Add professional header
  const addPageHeader = (title: string, pageNum: number) => {
    pdf.setDrawColor(...colors.border);
    pdf.setLineWidth(0.5);
    pdf.line(margin, 15, pageWidth - margin, 15);
    
    pdf.setFontSize(8);
    pdf.setTextColor(...colors.textTertiary);
    pdf.text("CELL BIOLOGY: ESSENTIAL ORGANELLES", margin, 12);
    pdf.text(title.toUpperCase(), pageWidth - margin, 12, { align: "right" });
  };

  // Helper: Add professional footer
  const addPageFooter = (pageNum: number) => {
    // Footer line
    pdf.setDrawColor(...colors.border);
    pdf.setLineWidth(0.5);
    pdf.line(margin, pageHeight - 15, pageWidth - margin, pageHeight - 15);
    
    // Footer text
    pdf.setFontSize(8);
    pdf.setTextColor(...colors.textTertiary);
    pdf.text(
      "Licensed under CC-BY-SA 4.0 • Educational Resource",
      margin,
      pageHeight - 10
    );
    
    // Page number with circle
    pdf.setFillColor(...colors.brand);
    pdf.circle(pageWidth - margin - 5, pageHeight - 11.5, 4, "F");
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(9);
    pdf.text(String(pageNum), pageWidth - margin - 5, pageHeight - 9, { align: "center" });
  };

  // ========================================
  // COVER PAGE
  // ========================================
  
  // Use custom Figma cover
  try {
    const coverImgData = await loadImage(imgBiologyCover);
    
    // Calculate dimensions to fit A4 page
    const coverWidth = pageWidth;
    const coverHeight = pageHeight;
    
    pdf.addImage(coverImgData, "PNG", 0, 0, coverWidth, coverHeight);
  } catch (error) {
    console.error("Failed to load cover image:", error);
    
    // Fallback cover if image fails to load
    pdf.setFillColor(...colors.brand);
    pdf.rect(0, 0, pageWidth, 100, "F");
    
    pdf.setFillColor(...colors.accent);
    pdf.rect(0, 100, pageWidth, 8, "F");

    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(44);
    pdf.text("Cell Biology", pageWidth / 2, 45, { align: "center" });
    
    pdf.setFontSize(36);
    pdf.text("Essential Organelles", pageWidth / 2, 65, { align: "center" });

    pdf.setFontSize(14);
    pdf.setTextColor(230, 240, 240);
    pdf.text("A Comprehensive Visual Guide to Cellular Structures", pageWidth / 2, 85, { align: "center" });

    yPosition = 130;

    pdf.setFillColor(...colors.brandLight);
    pdf.roundedRect(margin, yPosition, 80, 12, 3, 3, "F");
    pdf.setTextColor(...colors.brand);
    pdf.setFontSize(11);
    pdf.text("📚 EDUCATIONAL RESOURCE", margin + 6, yPosition + 8);

    yPosition += 25;

    pdf.setFontSize(18);
    pdf.setTextColor(...colors.text);
    pdf.text("About This Resource", margin, yPosition);
    
    yPosition += 10;
    pdf.setFontSize(11);
    pdf.setTextColor(...colors.textSecondary);
    const introText = [
      "This comprehensive visual guide presents detailed scientific illustrations of essential",
      "cellular organelles and structures. Each figure has been carefully designed to support",
      "educational study with scientific accuracy, clarity, and pedagogical organization.",
      "",
      "The diagrams progress from foundational cellular structures to specialized organelles,",
      "making this resource ideal for students, educators, and anyone interested in understanding",
      "the fascinating architecture of life at the cellular level."
    ];
    introText.forEach((line) => {
      pdf.text(line, margin, yPosition);
      yPosition += 6;
    });

    yPosition += 8;

    const highlights = [
      { icon: "🔬", label: "Figures", value: `${figures.length} detailed diagrams` },
      { icon: "📖", label: "Glossary", value: `${Object.keys(glossaryData).length}+ terms` },
      { icon: "🎨", label: "Quality", value: "High-resolution images" },
      { icon: "📚", label: "Format", value: "Pedagogically organized" }
    ];

    const boxWidth = (contentWidth - 10) / 2;
    const boxHeight = 22;
    let xOffset = margin;
    let yOffset = yPosition;

    highlights.forEach((item, index) => {
      if (index === 2) {
        xOffset = margin;
        yOffset += boxHeight + 5;
      }
      
      pdf.setDrawColor(...colors.border);
      pdf.setLineWidth(1);
      pdf.setFillColor(250, 252, 252);
      pdf.roundedRect(xOffset, yOffset, boxWidth, boxHeight, 2, 2, "FD");
      
      pdf.setFontSize(20);
      pdf.text(item.icon, xOffset + 5, yOffset + 12);
      
      pdf.setFontSize(9);
      pdf.setTextColor(...colors.textTertiary);
      pdf.text(item.label.toUpperCase(), xOffset + 18, yOffset + 8);
      
      pdf.setFontSize(11);
      pdf.setTextColor(...colors.text);
      pdf.text(item.value, xOffset + 18, yOffset + 15);
      
      xOffset += boxWidth + 5;
    });

    yPosition = yOffset + boxHeight + 15;

    pdf.setFillColor(248, 250, 252);
    pdf.roundedRect(margin, yPosition, contentWidth, 30, 3, 3, "F");
    
    pdf.setFontSize(12);
    pdf.setTextColor(...colors.text);
    pdf.text("📄 License & Attribution", margin + 5, yPosition + 8);
    
    pdf.setFontSize(10);
    pdf.setTextColor(...colors.textSecondary);
    const licenseText = [
      "CC-BY-SA 4.0 • Free to share and adapt with attribution",
      "Published: November 2025 • Version 3.2",
      "Source: Biology Textbook v3.2 • Educational Use"
    ];
    licenseText.forEach((line, i) => {
      pdf.text(line, margin + 5, yPosition + 15 + (i * 5));
    });
  }

  // ========================================
  // TABLE OF CONTENTS
  // ========================================
  pdf.addPage();
  yPosition = margin;

  // Section header
  pdf.setFillColor(...colors.brand);
  pdf.rect(0, margin - 10, pageWidth, 20, "F");
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(24);
  pdf.text("Table of Contents", margin, margin + 4);

  yPosition = margin + 35;

  // Figures section
  pdf.setFontSize(14);
  pdf.setTextColor(...colors.brand);
  pdf.text("Cellular Structures & Organelles", margin, yPosition);
  yPosition += 10;

  pdf.setFontSize(10);
  pdf.setTextColor(...colors.textSecondary);
  
  figures.forEach((figure, index) => {
    if (checkNewPage(8)) {
      addPageHeader("Table of Contents", 2);
    }
    
    const pageNum = 3 + index; // Starting page for figures
    
    // Figure number in circle
    pdf.setFillColor(...colors.brandLight);
    pdf.circle(margin + 3, yPosition - 2, 3, "F");
    pdf.setTextColor(...colors.brand);
    pdf.setFontSize(8);
    pdf.text(String(figure.figure_number), margin + 3, yPosition, { align: "center" });
    
    // Title
    pdf.setFontSize(11);
    pdf.setTextColor(...colors.text);
    pdf.text(figure.title, margin + 10, yPosition);
    
    // Subtitle
    pdf.setFontSize(9);
    pdf.setTextColor(...colors.textSecondary);
    pdf.text(`— ${figure.subtitle}`, margin + 10 + pdf.getTextWidth(figure.title) + 2, yPosition);
    
    // Page number with dots
    pdf.setTextColor(...colors.textTertiary);
    const dotsStart = margin + 10 + pdf.getTextWidth(figure.title) + pdf.getTextWidth(`— ${figure.subtitle}`) + 5;
    const dotsEnd = pageWidth - margin - 15;
    let dotX = dotsStart;
    while (dotX < dotsEnd) {
      pdf.circle(dotX, yPosition - 1.5, 0.3, "F");
      dotX += 3;
    }
    
    pdf.setTextColor(...colors.text);
    pdf.setFontSize(10);
    pdf.text(String(pageNum), pageWidth - margin, yPosition, { align: "right" });
    
    yPosition += 7;
  });

  yPosition += 10;

  // Glossary entry
  pdf.setFontSize(14);
  pdf.setTextColor(...colors.brand);
  pdf.text("Reference Materials", margin, yPosition);
  yPosition += 10;

  pdf.setFontSize(11);
  pdf.setTextColor(...colors.text);
  const glossaryPage = 3 + figures.length;
  pdf.text("Comprehensive Glossary", margin + 10, yPosition);
  
  pdf.setTextColor(...colors.textTertiary);
  let dotX = margin + 10 + pdf.getTextWidth("Comprehensive Glossary") + 5;
  while (dotX < pageWidth - margin - 15) {
    pdf.circle(dotX, yPosition - 1.5, 0.3, "F");
    dotX += 3;
  }
  
  pdf.setTextColor(...colors.text);
  pdf.setFontSize(10);
  pdf.text(String(glossaryPage), pageWidth - margin, yPosition, { align: "right" });

  addPageFooter(2);

  // ========================================
  // FIGURES PAGES
  // ========================================
  
  let currentPageNum = 3;
  
  for (const figure of figures) {
    pdf.addPage();
    yPosition = margin + 25;
    
    addPageHeader(`Figure ${figure.figure_number}`, currentPageNum);
    
    // Figure label badge
    pdf.setFillColor(...colors.brand);
    pdf.roundedRect(margin, yPosition, 45, 10, 2, 2, "F");
    pdf.setFontSize(10);
    pdf.setTextColor(255, 255, 255);
    pdf.text(`FIGURE ${figure.figure_number}`, margin + 4, yPosition + 7);

    yPosition += 18;

    // Title with accent bar
    pdf.setFillColor(...colors.accent);
    pdf.rect(margin, yPosition - 6, 3, 12, "F");
    
    pdf.setFontSize(22);
    pdf.setTextColor(...colors.text);
    pdf.text(figure.title, margin + 8, yPosition);
    yPosition += 8;

    // Subtitle
    pdf.setFontSize(14);
    pdf.setTextColor(...colors.textSecondary);
    pdf.text(figure.subtitle, margin + 8, yPosition);
    yPosition += 15;

    // Image with professional frame
    try {
      const imgData = await loadImage(figure.image);
      const imgWidth = contentWidth - 6;
      const imgHeight = (imgWidth * 3) / 4;

      // Shadow effect
      pdf.setFillColor(0, 0, 0, 0.05);
      pdf.roundedRect(margin + 2, yPosition + 2, imgWidth, imgHeight, 4, 4, "F");
      
      // White border
      pdf.setFillColor(255, 255, 255);
      pdf.roundedRect(margin, yPosition, imgWidth, imgHeight, 4, 4, "F");
      
      // Image
      pdf.addImage(imgData, "PNG", margin + 3, yPosition + 3, imgWidth - 6, imgHeight - 6);
      
      // Border
      pdf.setDrawColor(...colors.border);
      pdf.setLineWidth(0.5);
      pdf.roundedRect(margin, yPosition, imgWidth, imgHeight, 4, 4, "D");
      
      yPosition += imgHeight + 12;
    } catch (error) {
      console.error(`Failed to load image for ${figure.title}:`, error);
      const placeholderHeight = 120;
      pdf.setDrawColor(...colors.border);
      pdf.setFillColor(248, 250, 252);
      pdf.roundedRect(margin, yPosition, contentWidth - 6, placeholderHeight, 4, 4, "FD");
      
      pdf.setFontSize(12);
      pdf.setTextColor(...colors.textTertiary);
      pdf.text("Image preview unavailable", pageWidth / 2, yPosition + placeholderHeight / 2, { align: "center" });
      yPosition += placeholderHeight + 12;
    }

    // Description section
    pdf.setFillColor(...colors.brandLight);
    pdf.rect(margin, yPosition, contentWidth, 1, "F");
    yPosition += 8;

    pdf.setFontSize(12);
    pdf.setTextColor(...colors.brand);
    pdf.text("Description", margin, yPosition);
    yPosition += 8;

    pdf.setFontSize(11);
    pdf.setTextColor(...colors.textSecondary);
    const splitSummary = pdf.splitTextToSize(figure.summary, contentWidth - 10);
    pdf.text(splitSummary, margin + 5, yPosition);
    yPosition += splitSummary.length * 6 + 10;

    // Key concepts (if relevant terms exist in glossary)
    const relatedTerms = Object.entries(glossaryData)
      .filter(([_, data]) => data.relatedFigures?.includes(figure.figure_number))
      .slice(0, 3);
    
    if (relatedTerms.length > 0) {
      pdf.setFontSize(11);
      pdf.setTextColor(...colors.brand);
      pdf.text("Related Concepts", margin, yPosition);
      yPosition += 7;

      relatedTerms.forEach(([term, _]) => {
        pdf.setFontSize(10);
        pdf.setTextColor(...colors.textSecondary);
        pdf.text(`• ${term}`, margin + 5, yPosition);
        yPosition += 6;
      });
      
      yPosition += 5;
    }

    // Attribution box
    pdf.setFillColor(248, 250, 252);
    pdf.roundedRect(margin, yPosition, contentWidth, 16, 2, 2, "F");
    
    pdf.setFontSize(9);
    pdf.setTextColor(...colors.textTertiary);
    pdf.text("SOURCE", margin + 5, yPosition + 6);
    pdf.setTextColor(...colors.textSecondary);
    pdf.text(figure.source_ref, margin + 5, yPosition + 11);
    
    pdf.setTextColor(...colors.textTertiary);
    pdf.text("LICENSE", pageWidth / 2 + 5, yPosition + 6);
    pdf.setTextColor(...colors.textSecondary);
    pdf.text(figure.license, pageWidth / 2 + 5, yPosition + 11);

    addPageFooter(currentPageNum);
    currentPageNum++;
  }

  // ========================================
  // GLOSSARY SECTION
  // ========================================
  
  pdf.addPage();
  yPosition = margin;

  // Glossary header
  pdf.setFillColor(...colors.brand);
  pdf.rect(0, margin - 10, pageWidth, 25, "F");
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(28);
  pdf.text("Comprehensive Glossary", margin, margin + 7);
  
  pdf.setFontSize(11);
  pdf.setTextColor(230, 240, 240);
  pdf.text(`${Object.keys(glossaryData).length} Essential Terms & Concepts`, margin, margin + 16);

  yPosition = margin + 40;

  // Sort glossary alphabetically
  const sortedGlossary = Object.entries(glossaryData).sort(([a], [b]) => 
    a.localeCompare(b)
  );

  // Track current letter for section headers
  let currentLetter = "";

  sortedGlossary.forEach(([term, data]) => {
    const firstLetter = term[0].toUpperCase();
    
    // Add letter section header
    if (firstLetter !== currentLetter) {
      if (currentLetter !== "") {
        yPosition += 5;
      }
      
      checkNewPage(20);
      
      currentLetter = firstLetter;
      
      // Letter header with circle
      pdf.setFillColor(...colors.brand);
      pdf.circle(margin + 4, yPosition - 2, 5, "F");
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(14);
      pdf.text(currentLetter, margin + 4, yPosition + 2, { align: "center" });
      
      pdf.setDrawColor(...colors.border);
      pdf.setLineWidth(0.5);
      pdf.line(margin + 12, yPosition, pageWidth - margin, yPosition);
      
      yPosition += 10;
    }

    checkNewPage(25);

    // Term
    pdf.setFontSize(12);
    pdf.setTextColor(...colors.brand);
    pdf.text(term, margin + 5, yPosition);
    yPosition += 6;

    // Definition
    pdf.setFontSize(10);
    pdf.setTextColor(...colors.textSecondary);
    const splitDef = pdf.splitTextToSize(data.definition, contentWidth - 15);
    pdf.text(splitDef, margin + 5, yPosition);
    yPosition += splitDef.length * 5;

    // Related figures
    if (data.relatedFigures && data.relatedFigures.length > 0) {
      yPosition += 3;
      pdf.setFontSize(8);
      pdf.setTextColor(...colors.textTertiary);
      pdf.text(
        `→ See Figures: ${data.relatedFigures.join(", ")}`,
        margin + 5,
        yPosition
      );
      yPosition += 3;
    }

    yPosition += 8;
  });

  addPageHeader("Glossary", currentPageNum);
  addPageFooter(currentPageNum);

  // ========================================
  // BACK COVER / CLOSING PAGE
  // ========================================
  
  pdf.addPage();
  currentPageNum++;

  // Top section
  pdf.setFillColor(...colors.brand);
  pdf.rect(0, 0, pageWidth, 60, "F");

  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(32);
  pdf.text("Thank You", pageWidth / 2, 30, { align: "center" });
  
  pdf.setFontSize(13);
  pdf.setTextColor(230, 240, 240);
  pdf.text("for exploring the fascinating world of cell biology", pageWidth / 2, 45, { align: "center" });

  yPosition = 85;

  // Usage guidelines
  pdf.setFontSize(16);
  pdf.setTextColor(...colors.text);
  pdf.text("How to Use This Resource", pageWidth / 2, yPosition, { align: "center" });
  
  yPosition += 12;

  const guidelines = [
    { icon: "🎓", text: "Perfect for students studying cellular biology and life sciences" },
    { icon: "👨‍🏫", text: "Educators can use these diagrams in presentations and materials" },
    { icon: "🔄", text: "Free to share and adapt under CC-BY-SA 4.0 license" },
    { icon: "📚", text: "Reference the glossary for detailed term definitions" },
    { icon: "🔬", text: "Use figures sequentially for progressive learning" }
  ];

  guidelines.forEach((item) => {
    pdf.setFontSize(20);
    pdf.text(item.icon, margin + 5, yPosition);
    
    pdf.setFontSize(11);
    pdf.setTextColor(...colors.textSecondary);
    const wrapped = pdf.splitTextToSize(item.text, contentWidth - 20);
    pdf.text(wrapped, margin + 15, yPosition - 1);
    yPosition += wrapped.length * 6 + 5;
  });

  yPosition += 10;

  // Attribution reminder
  pdf.setFillColor(...colors.brandLight);
  pdf.roundedRect(margin, yPosition, contentWidth, 35, 3, 3, "F");
  
  pdf.setFontSize(12);
  pdf.setTextColor(...colors.brand);
  pdf.text("📋 Attribution Required", margin + 5, yPosition + 10);
  
  pdf.setFontSize(10);
  pdf.setTextColor(...colors.textSecondary);
  const attrText = [
    'When using this resource, please attribute: "Cell Biology: Essential Organelles',
    'by Biology Textbook v3.2, licensed under CC-BY-SA 4.0"'
  ];
  attrText.forEach((line, i) => {
    pdf.text(line, margin + 5, yPosition + 18 + (i * 5));
  });

  yPosition += 45;

  // Footer section
  pdf.setFillColor(248, 250, 252);
  pdf.rect(0, pageHeight - 40, pageWidth, 40, "F");
  
  pdf.setFontSize(10);
  pdf.setTextColor(...colors.textSecondary);
  pdf.text("Published November 2025", pageWidth / 2, pageHeight - 25, { align: "center" });
  pdf.text("Biology Textbook v3.2 • Educational Resource", pageWidth / 2, pageHeight - 18, { align: "center" });
  
  pdf.setFontSize(8);
  pdf.setTextColor(...colors.textTertiary);
  pdf.text("For questions or feedback, consult your educational institution", pageWidth / 2, pageHeight - 10, { align: "center" });

  addPageFooter(currentPageNum);

  // Save the PDF
  pdf.save("Cell-Biology-Essential-Organelles.pdf");
}

// Helper function to load images as base64
function loadImage(src: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL("image/png"));
      } else {
        reject(new Error("Failed to get canvas context"));
      }
    };
    
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
}