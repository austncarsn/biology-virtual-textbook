# How to Fix Missing Images on Vercel

## The Problem
The `figma:asset/...` imports only work in Figma Make's development environment. When deployed to Vercel, these images don't exist.

## The Solution

### Step 1: Download All Images
You need to download all the Figma asset images from your local development environment.

**In your browser while running the app locally:**
1. Right-click on each image and "Save Image As..." 
2. Or open the Network tab in DevTools and download the actual image files

Save these 15 images with descriptive names:
- `er-smooth.png`
- `chloroplast.png`
- `eukaryotic-cell.png`
- `mitochondrion.png`
- `vacuole.png`
- `osmosis-turgor-pressure.png`
- `plant-cell.png`
- `lysosome.png`
- `ribosome-80s.png`
- `centrosome-centrioles.png`
- `nuclear-pore-complex.png`
- `endomembrane-system.png`
- `microtubules.png`
- `membrane-transport.png`
- `biology-cover.png` (for the PDF cover)

### Step 2: Create Public Folder Structure
Create this folder in your project root:
```
/public
  /images
    /cell-biology
      er-smooth.png
      chloroplast.png
      eukaryotic-cell.png
      mitochondrion.png
      vacuole.png
      osmosis-turgor-pressure.png
      plant-cell.png
      lysosome.png
      ribosome-80s.png
      centrosome-centrioles.png
      nuclear-pore-complex.png
      endomembrane-system.png
      microtubules.png
      membrane-transport.png
      biology-cover.png
```

### Step 3: Update Code Files
I'll update the code to use the public folder paths instead of figma:asset imports.

---

## Alternative Quick Fix (If you can't download images)
Use placeholder images from Unsplash or similar services as temporary replacements until you can get the actual images.
