import { GlossaryData, GlossaryPreviewTerm } from "../types";
// Import assets directly from src/assets (images.ts removed)
import imgErSmoothEr from "../assets/er-smooth.png";
import imgPlantCell from "../assets/plant-cell.png";
import imgChloroplast from "../assets/chloroplast.png";
import imgEukaryoticCell from "../assets/eukaryotic-cell.png";
import imgMitochondrion from "../assets/mitochondrion.png";
import imgOsmosisTurgorPressure from "../assets/osmosis-turgor-pressure.png";
import imgLysosome from "../assets/lysosome.png";
import imgRibosome80SEukarotic from "../assets/ribosome-80s.png";
import imgCentrosomeCentrioles from "../assets/centrosome-centrioles.png";
import imgNuclearPoreComplex from "../assets/nuclear-pore-complex.png";
import imgEndomembraneSystemIntegration from "../assets/endomembrane-system.png";
import imgMicrotubules from "../assets/microtubules.png";
import imgMembraneTransport from "../assets/membrane-transport.png";
import imgVacuole from "../assets/vacuole.png";

export const glossaryData: GlossaryData = {
  "Endoplasmic Reticulum": {
    definition:
      "A network of membranous tubules and sacs within the cytoplasm of eukaryotic cells. The rough ER has ribosomes attached and is involved in protein synthesis, while the smooth ER lacks ribosomes and participates in lipid synthesis, detoxification, and calcium storage.",
  illustration: imgErSmoothEr,
    relatedFigures: [1, 4],
  },
  "Plant Cell": {
    definition:
      "A eukaryotic cell that contains unique features including a rigid cell wall made of cellulose, chloroplasts for photosynthesis, and a large central vacuole for storage and maintaining turgor pressure. Plant cells are the basic unit of plant life.",
  illustration: imgPlantCell,
    relatedFigures: [2, 8],
  },
  Chloroplast: {
    definition:
      "An organelle found in plant cells and some protists that conducts photosynthesis. Contains chlorophyll pigments in thylakoid membranes organized into stacks called grana. The surrounding fluid matrix is called the stroma.",
  illustration: imgChloroplast,
    relatedFigures: [2, 3, 8],
  },
  "Eukaryotic Cell": {
    definition:
      "A cell that contains a membrane-bound nucleus and other specialized organelles. Eukaryotic cells are found in animals, plants, fungi, and protists. They are typically larger and more complex than prokaryotic cells.",
  illustration: imgEukaryoticCell,
    relatedFigures: [1, 2, 4, 5, 7, 8, 9, 10, 11],
  },
  Mitochondrion: {
    definition:
      "A double-membrane organelle often called the powerhouse of the cell. Mitochondria generate ATP through cellular respiration. They have their own DNA and are thought to have evolved from ancient bacteria through endosymbiosis.",
  illustration: imgMitochondrion,
    relatedFigures: [4, 5],
  },
  "Osmosis & Turgor Pressure": {
    definition:
      "Osmosis is the movement of water across a semi-permeable membrane from high to low concentration. In plant cells, water influx creates turgor pressure against the cell wall, providing structural support and maintaining cell shape.",
  illustration: imgOsmosisTurgorPressure,
    relatedFigures: [2, 6, 8],
  },
  Lysosome: {
    definition:
      "A membrane-bound organelle containing hydrolytic enzymes that digest macromolecules, old cell parts, and microorganisms. Lysosomes are the cell's recycling centers, breaking down waste materials and cellular debris through autophagy.",
  illustration: imgLysosome,
    relatedFigures: [4, 7],
  },
  "Plant Cell Structure": {
    definition:
      "The distinctive architecture of plant cells featuring a rigid cell wall outside the plasma membrane, chloroplasts for energy production, a large central vacuole for storage and turgor, and various other organelles that enable plant-specific functions.",
  illustration: imgPlantCell,
    relatedFigures: [2, 3, 6, 8],
  },
  "Ribosome (80S Eukaryotic)": {
    definition:
      "The protein synthesis machinery in eukaryotic cells, composed of a large 60S subunit and a small 40S subunit. These ribosomes are larger than prokaryotic 70S ribosomes and translate mRNA into functional proteins.",
  illustration: imgRibosome80SEukarotic,
    relatedFigures: [1, 4, 9],
  },
  "Centrosome & Centrioles": {
    definition:
      "The main microtubule organizing center (MTOC) of animal cells, consisting of two cylindrical centrioles arranged perpendicular to each other. During cell division, centrosomes organize spindle fibers that separate chromosomes.",
  illustration: imgCentrosomeCentrioles,
    relatedFigures: [4, 10],
  },
  "Nuclear Pore Complex": {
    definition:
      "A large protein structure embedded in the nuclear envelope that regulates the transport of molecules between the nucleus and cytoplasm. It allows selective passage of proteins, RNA, and other molecules essential for gene expression and cell function.",
  illustration: imgNuclearPoreComplex,
    relatedFigures: [4, 11],
  },
  "Endomembrane System Integration": {
    definition:
      "The endomembrane system is a network of membrane-bound organelles that work together to process and transport materials within the cell. It includes the endoplasmic reticulum, Golgi apparatus, lysosomes, and other vesicles.",
  illustration: imgEndomembraneSystemIntegration,
    relatedFigures: [4, 12],
  },
  Microtubules: {
    definition:
      "Rod-like structures composed of tubulin proteins that form the cytoskeleton. Microtubules are involved in cell division, intracellular transport, and maintaining cell shape.",
  illustration: imgMicrotubules,
    relatedFigures: [4, 13],
  },
  "Membrane Transport": {
    definition:
      "Membrane transport mechanisms include active and passive transport, facilitated diffusion, and endocytosis/exocytosis. These processes are crucial for cellular function and homeostasis.",
  illustration: imgMembraneTransport,
    relatedFigures: [4, 14],
  },
  Vacuole: {
    definition:
      "Large membrane-bound organelle found primarily in plant cells. Serves as storage for nutrients, waste products, and helps maintain turgor pressure. The central vacuole occupies up to 90% of plant cell volume.",
  illustration: imgVacuole,
    relatedFigures: [2, 3, 6, 8, 15],
  },
  Cytoplasm: {
    definition:
      "The gel-like substance that fills the cell, consisting of cytosol and organelles. It provides a medium for chemical reactions and cellular processes.",
    relatedFigures: [2, 4, 8],
  },
  Nucleus: {
    definition:
      "The membrane-bound organelle that contains the cell's genetic material (DNA). It controls cell activities and is the site of DNA replication and transcription.",
    relatedFigures: [4, 8, 11],
  },
  Ribosome: {
    definition:
      "Small cellular structures responsible for protein synthesis. They can be free-floating in the cytoplasm or attached to the endoplasmic reticulum.",
  illustration: imgRibosome80SEukarotic,
    relatedFigures: [1, 4, 9],
  },
  "Cell Wall": {
    definition:
      "A rigid outer layer found in plant cells, fungi, and some bacteria. In plants, it's primarily composed of cellulose and provides structural support, protection, and helps maintain cell shape. The cell wall is located outside the plasma membrane.",
    relatedFigures: [2, 6, 8],
  },
  "Cell Membrane": {
    definition:
      "Also called the plasma membrane, this is a selectively permeable lipid bilayer that surrounds all cells. It controls the movement of substances in and out of the cell, maintains cell shape, and facilitates cell communication.",
    relatedFigures: [2, 4, 6, 8, 14],
  },
  "Golgi Apparatus": {
    definition:
      "A membrane-bound organelle that modifies, packages, and distributes proteins and lipids received from the endoplasmic reticulum. It consists of flattened membrane sacs called cisternae and is essential for protein processing and secretion.",
    relatedFigures: [4, 12],
  },
  ATP: {
    definition:
      "Adenosine triphosphate (ATP) is the primary energy currency of cells. It stores and transfers energy for cellular processes. ATP is produced mainly in mitochondria through cellular respiration and in chloroplasts through photosynthesis.",
    relatedFigures: [3, 5],
  },
  DNA: {
    definition:
      "Deoxyribonucleic acid (DNA) is the hereditary material that contains genetic instructions for the development, functioning, and reproduction of all organisms. In eukaryotes, DNA is stored in the nucleus as chromosomes.",
    relatedFigures: [4, 11],
  },
  RNA: {
    definition:
      "Ribonucleic acid (RNA) is a nucleic acid involved in protein synthesis and gene regulation. Major types include messenger RNA (mRNA), transfer RNA (tRNA), and ribosomal RNA (rRNA), each playing distinct roles in gene expression.",
    relatedFigures: [9, 11],
  },
  Chromatin: {
    definition:
      "The complex of DNA and proteins (histones) found in the nucleus of eukaryotic cells. Chromatin condenses to form chromosomes during cell division and allows for efficient packaging and regulation of genetic material.",
    relatedFigures: [4],
  },
  Cytoskeleton: {
    definition:
      "A network of protein filaments that provides structural support, enables cell movement, and facilitates intracellular transport. The three main components are microtubules, microfilaments (actin), and intermediate filaments.",
    relatedFigures: [4, 10, 13],
  },
  Thylakoid: {
    definition:
      "Membrane-bound compartments inside chloroplasts that contain chlorophyll and are the site of light-dependent reactions in photosynthesis. Thylakoids are arranged in stacks called grana.",
    relatedFigures: [3],
  },
  Stroma: {
    definition:
      "The fluid-filled space surrounding the thylakoids in chloroplasts. The stroma contains enzymes, DNA, ribosomes, and is the site of the Calvin cycle (light-independent reactions) in photosynthesis.",
    relatedFigures: [3],
  },
  Cristae: {
    definition:
      "The highly folded inner membrane of mitochondria. Cristae increase surface area for ATP production and contain the electron transport chain proteins essential for cellular respiration.",
    relatedFigures: [5],
  },
  "Mitochondrial Matrix": {
    definition:
      "The fluid-filled space within the inner membrane of mitochondria. It contains enzymes for the citric acid cycle (Krebs cycle), mitochondrial DNA, ribosomes, and is where most cellular respiration occurs.",
    relatedFigures: [5],
  },
  Vesicle: {
    definition:
      "Small membrane-bound sacs that transport materials within cells or to the cell membrane for secretion. Vesicles move between organelles in the endomembrane system and are crucial for cellular trafficking.",
    relatedFigures: [4, 12, 14],
  },
  Enzyme: {
    definition:
      "Biological catalysts, typically proteins, that speed up chemical reactions in cells without being consumed. Enzymes are highly specific and essential for metabolism, DNA replication, and virtually all cellular processes.",
    relatedFigures: [5, 7],
  },
  Organelle: {
    definition:
      "A specialized subunit within a cell that has a specific function. Membrane-bound organelles (like mitochondria, chloroplasts, and the nucleus) are characteristic of eukaryotic cells.",
    relatedFigures: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 15],
  },
  Photosynthesis: {
    definition:
      "The process by which plants, algae, and some bacteria convert light energy into chemical energy (glucose) using carbon dioxide and water. This occurs in chloroplasts and produces oxygen as a byproduct.",
    relatedFigures: [2, 3, 8],
  },
  "Cellular Respiration": {
    definition:
      "The metabolic process that breaks down glucose to produce ATP (energy). It occurs primarily in mitochondria through glycolysis, the citric acid cycle, and the electron transport chain, consuming oxygen and producing carbon dioxide and water.",
    relatedFigures: [4, 5],
  },
  "Protein Synthesis": {
    definition:
      "The process of creating proteins from amino acids, involving transcription (DNA to mRNA in the nucleus) and translation (mRNA to protein at ribosomes). Essential for cell structure, function, and regulation.",
    relatedFigures: [1, 4, 9, 11],
  },
  "Gene Expression": {
    definition:
      "The process by which information from a gene is used to synthesize functional gene products, usually proteins. It involves transcription and translation, and is regulated at multiple levels to control cell function.",
    relatedFigures: [4, 11],
  },
  Endosymbiosis: {
    definition:
      "The theory that mitochondria and chloroplasts originated as free-living bacteria that were engulfed by ancestral eukaryotic cells. This explains why these organelles have their own DNA and ribosomes.",
    relatedFigures: [3, 5],
  },
  Autophagy: {
    definition:
      "The cellular process of self-digestion where lysosomes break down damaged organelles and proteins for recycling. This quality control mechanism is essential for cell health and survival during stress.",
    relatedFigures: [7],
  },
  "Turgor Pressure": {
    definition:
      "The pressure exerted by water inside plant cell vacuoles against the cell wall. Turgor pressure provides rigidity and structural support to plant tissues, and its loss causes wilting.",
    relatedFigures: [2, 6, 8, 15],
  },
  "Selectively Permeable": {
    definition:
      "A property of cell membranes that allows some substances to pass through while blocking others. This selectivity is crucial for maintaining cellular homeostasis and controlling what enters and exits the cell.",
    relatedFigures: [6, 14],
  },
};

export const glossaryPreviewTerms: GlossaryPreviewTerm[] = [
  {
    term: "Cytoplasm",
    definition: "Gel-like substance filling the cell, providing medium for reactions.",
    category: "info",
  },
  {
    term: "Nucleus",
    definition: "Control center containing DNA, regulating all cell activities.",
    category: "success",
  },
  {
    term: "Ribosome",
    definition: "Molecular machines that synthesize proteins from amino acids.",
    category: "warning",
  },
  {
    term: "Mitochondrion",
    definition: "Powerhouse of the cell generating ATP through cellular respiration.",
    category: "info",
  },
  {
    term: "Chloroplast",
    definition: "Site of photosynthesis converting light energy into chemical energy.",
    category: "success",
  },
  {
    term: "Cell Wall",
    definition: "Rigid outer layer providing structural support in plant cells.",
    category: "warning",
  },
  {
    term: "Cell Membrane",
    definition: "Selectively permeable barrier controlling substance movement.",
    category: "info",
  },
  {
    term: "Golgi Apparatus",
    definition: "Modifies, packages, and distributes proteins and lipids.",
    category: "success",
  },
  {
    term: "Lysosome",
    definition: "Contains digestive enzymes for cellular waste breakdown.",
    category: "warning",
  },
  {
    term: "ATP",
    definition: "Primary energy currency storing and transferring cellular energy.",
    category: "info",
  },
  {
    term: "DNA",
    definition: "Hereditary material containing genetic instructions for life.",
    category: "success",
  },
  {
    term: "Vacuole",
    definition: "Storage organelle maintaining turgor pressure in plant cells.",
    category: "warning",
  },
  {
    term: "Endoplasmic Reticulum",
    definition: "Network of tubules for protein and lipid synthesis.",
    category: "info",
  },
  {
    term: "Cytoskeleton",
    definition: "Protein network providing structure and enabling movement.",
    category: "success",
  },
  {
    term: "Photosynthesis",
    definition: "Process converting light energy into glucose using CO₂ and water.",
    category: "warning",
  },
];
