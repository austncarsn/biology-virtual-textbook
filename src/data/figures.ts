import { Figure } from "../types";
// import assets directly from src/assets (images.ts removed)
import imgEukaryoticCell from "../assets/eukaryotic-cell.png";
import imgPlantCell from "../assets/plant-cell.png";
import imgMitochondrion from "../assets/mitochondrion.png";
import imgChloroplast from "../assets/chloroplast.png";
import imgErSmoothEr from "../assets/er-smooth.png";
import imgRibosome80SEukarotic from "../assets/ribosome-80s.png";
import imgEndomembraneSystemIntegration from "../assets/endomembrane-system.png";
import imgLysosome from "../assets/lysosome.png";
import imgVacuole from "../assets/vacuole.png";
import imgNuclearPoreComplex from "../assets/nuclear-pore-complex.png";
import imgMembraneTransport from "../assets/membrane-transport.png";
import imgOsmosisTurgorPressure from "../assets/osmosis-turgor-pressure.png";
import imgCentrosomeCentrioles from "../assets/centrosome-centrioles.png";
import imgMicrotubules from "../assets/microtubules.png";

export const figures: Figure[] = [
  {
    figure_number: 1,
    title: "Eukaryotic Cell",
    subtitle: "Complete structure",
    summary:
      "Comprehensive view of cellular components including nucleus, mitochondria, and cytoplasmic organelles. Shows the complex organization of a typical eukaryotic cell.",
  image: imgEukaryoticCell,
    source_ref: "Biology Textbook v3.2 – Chapter 3",
    license: "CC-BY-SA 4.0",
  },
  {
    figure_number: 2,
    title: "Plant Cell",
    subtitle: "Cross-sectional view",
    summary:
      "Complete plant cell structure showing cell wall, membrane, and various organelles. Unique features include chloroplasts, large central vacuole, and rigid cell wall.",
  image: imgPlantCell,
  alt: "Cross-sectional diagram of a plant cell showing the cell wall, plasma membrane, chloroplasts, large central vacuole, nucleus, and other organelles.",
    source_ref: "Biology Textbook v3.2 – Chapter 5",
    license: "CC-BY-SA 4.0",
  },
  {
    figure_number: 3,
    title: "Plant Cell Structure",
    subtitle: "Detailed anatomy",
    summary:
      "Comprehensive illustration of plant cell organization showing the distinctive hexagonal cell wall structure, chloroplasts, nucleus, and various membrane-bound organelles characteristic of plant cells.",
  image: imgPlantCell,
  alt: "Detailed plant cell anatomy: cell wall, chloroplasts, central vacuole, mitochondria, endoplasmic reticulum and nucleus labeled visually.",
    source_ref: "Biology Textbook v3.2 – Chapter 5",
    license: "CC-BY-SA 4.0",
  },
  {
    figure_number: 4,
    title: "Mitochondrion",
    subtitle: "Cellular powerhouse",
    summary:
      "Double-membrane organelle responsible for ATP production through cellular respiration. Features include cristae (inner membrane folds) and matrix containing enzymes.",
  image: imgMitochondrion,
    source_ref: "Biology Textbook v3.2 – Chapter 7",
    license: "CC-BY-SA 4.0",
  },
  {
    figure_number: 5,
    title: "Chloroplast",
    subtitle: "Photosynthesis organelle",
    summary:
      "Site of photosynthesis containing thylakoid stacks (grana) and stroma. Converts light energy into chemical energy through the process of photosynthesis.",
  image: imgChloroplast,
    source_ref: "Biology Textbook v3.2 – Chapter 8",
    license: "CC-BY-SA 4.0",
  },
  {
    figure_number: 6,
    title: "Endoplasmic Reticulum",
    subtitle: "Smooth ER",
    summary:
      "Network of membranous tubules responsible for lipid synthesis and calcium storage. The smooth ER lacks ribosomes and plays a crucial role in detoxification and metabolism.",
  image: imgErSmoothEr,
    source_ref: "Biology Textbook v3.2 – Chapter 4",
    license: "CC-BY-SA 4.0",
  },
  {
    figure_number: 7,
    title: "Ribosome (80S Eukaryotic)",
    subtitle: "Protein synthesis machinery",
    summary:
      "Large (60S) and small (40S) ribosomal subunits that work together to translate mRNA into proteins. Eukaryotic ribosomes are larger and more complex than their prokaryotic counterparts.",
  image: imgRibosome80SEukarotic,
    source_ref: "Biology Textbook v3.2 – Chapter 10",
    license: "CC-BY-SA 4.0",
  },
  {
    figure_number: 8,
    title: "Endomembrane System Integration",
    subtitle: "Cellular organization",
    summary:
      "Illustration of the endomembrane system, showing the integration of the endoplasmic reticulum, Golgi apparatus, and lysosomes in cellular organization and function.",
  image: imgEndomembraneSystemIntegration,
    source_ref: "Biology Textbook v3.2 – Chapter 13",
    license: "CC-BY-SA 4.0",
  },
  {
    figure_number: 9,
    title: "Lysosome",
    subtitle: "Cellular digestion",
    summary:
      "Membrane-bound organelle containing digestive enzymes that break down cellular waste, foreign materials, and damaged organelles. Essential for cellular recycling and waste management.",
  image: imgLysosome,
    source_ref: "Biology Textbook v3.2 – Chapter 9",
    license: "CC-BY-SA 4.0",
  },
  {
    figure_number: 10,
    title: "Vacuole",
    subtitle: "Storage organelle",
    summary:
      "Large membrane-bound organelle found primarily in plant cells. Serves as storage for nutrients, waste products, and helps maintain turgor pressure. The central vacuole occupies up to 90% of plant cell volume.",
  image: imgVacuole,
    source_ref: "Biology Textbook v3.2 – Chapter 16",
    license: "CC-BY-SA 4.0",
  },
  {
    figure_number: 11,
    title: "Nuclear Pore Complex",
    subtitle: "Nuclear transport gateway",
    summary:
      "Large protein complex that spans the nuclear envelope, regulating the selective transport of molecules between the nucleus and cytoplasm. Essential for gene expression and cellular function.",
  image: imgNuclearPoreComplex,
    source_ref: "Biology Textbook v3.2 – Chapter 12",
    license: "CC-BY-SA 4.0",
  },
  {
    figure_number: 12,
    title: "Membrane Transport",
    subtitle: "Cellular function",
    summary:
      "Illustration of membrane transport mechanisms, including active and passive transport, facilitated diffusion, and endocytosis/exocytosis. These processes are crucial for cellular function and homeostasis.",
  image: imgMembraneTransport,
    source_ref: "Biology Textbook v3.2 – Chapter 15",
    license: "CC-BY-SA 4.0",
  },
  {
    figure_number: 13,
    title: "Osmosis & Turgor Pressure",
    subtitle: "Water movement",
    summary:
      "Demonstration of osmotic pressure and cell wall rigidity in plant cells. Shows how water movement affects cell shape and structural integrity.",
  image: imgOsmosisTurgorPressure,
    source_ref: "Biology Textbook v3.2 – Chapter 6",
    license: "CC-BY-SA 4.0",
  },
  {
    figure_number: 14,
    title: "Centrosome & Centrioles",
    subtitle: "Cell division organelle",
    summary:
      "Microtubule organizing center containing two perpendicular centrioles. Plays a crucial role in cell division by organizing the mitotic spindle and ensuring proper chromosome separation.",
  image: imgCentrosomeCentrioles,
    source_ref: "Biology Textbook v3.2 – Chapter 11",
    license: "CC-BY-SA 4.0",
  },
  {
    figure_number: 15,
    title: "Microtubules",
    subtitle: "Cellular structure",
    summary:
      "Rod-like structures composed of tubulin proteins that form the cytoskeleton. Microtubules are involved in cell division, intracellular transport, and maintaining cell shape.",
  image: imgMicrotubules,
    source_ref: "Biology Textbook v3.2 – Chapter 14",
    license: "CC-BY-SA 4.0",
  },
];