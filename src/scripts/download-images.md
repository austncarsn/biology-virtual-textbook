# Quick Image Download Script

## Option 1: Manual Download (Recommended)

1. **Run your app locally** in Figma Make
2. **Open DevTools** (F12 or Right-click → Inspect)
3. **Go to Network tab**
4. **Reload the page**
5. **Filter by "Img" or "png"**
6. **For each image:**
   - Right-click → Open in new tab
   - Right-click image → Save As
   - Save to `/public/images/cell-biology/` with correct name

## Image Name Mapping

When you see these in the network tab, save them as:

| Network Hash | Save As |
|--------------|---------|
| `782d4571ef70645e125c99d36418a622331e5787.png` | `er-smooth.png` |
| `abeeb3c04b9202aa9d7e9a4f0021b932509973a6.png` | `chloroplast.png` |
| `6849a18c31f488edc2edac97dc913df635c77d79.png` | `eukaryotic-cell.png` |
| `bb61d4a3cc51a74c080384c9ca767d9d283f74d4.png` | `mitochondrion.png` |
| `87a494eedaefd579b8e0dabc8d3c6373682b5180.png` | `vacuole.png` |
| `169430122be2e3705ec095ce9c7e9e54ac04f0ca.png` | `osmosis-turgor-pressure.png` |
| `682af015357950540c5236f0bbbd3c791d64dd3e.png` | `plant-cell.png` |
| `c53cb361b74f2d003e38d0cb46ef8bc8d8c83421.png` | `lysosome.png` |
| `55875ca133e9e74589135174fa0cac54f76cbb44.png` | `ribosome-80s.png` |
| `7812bee65a0bf168f737e26c9905dd1667088d91.png` | `centrosome-centrioles.png` |
| `619a02196aae72fae148649088eaccbffef32f08.png` | `nuclear-pore-complex.png` |
| `701f6fa66894e2506643db74cc271e3df0d196e1.png` | `endomembrane-system.png` |
| `74a02b7a68f4731b55c5a647e84ad8af70b4a07f.png` | `microtubules.png` |
| `88b70dcb38c59b9c489d8f09e325a85266a59b75.png` | `membrane-transport.png` |
| `8c25ced55a2e868a767bcc863c13ebd93da8241f.png` | `biology-cover.png` |

## Option 2: Browser Console Script

1. Open your app locally
2. Open Browser Console (F12 → Console tab)
3. Paste this script and run it:

```javascript
// This will download all images automatically
const images = {
  'er-smooth': '782d4571ef70645e125c99d36418a622331e5787.png',
  'chloroplast': 'abeeb3c04b9202aa9d7e9a4f0021b932509973a6.png',
  'eukaryotic-cell': '6849a18c31f488edc2edac97dc913df635c77d79.png',
  'mitochondrion': 'bb61d4a3cc51a74c080384c9ca767d9d283f74d4.png',
  'vacuole': '87a494eedaefd579b8e0dabc8d3c6373682b5180.png',
  'osmosis-turgor-pressure': '169430122be2e3705ec095ce9c7e9e54ac04f0ca.png',
  'plant-cell': '682af015357950540c5236f0bbbd3c791d64dd3e.png',
  'lysosome': 'c53cb361b74f2d003e38d0cb46ef8bc8d8c83421.png',
  'ribosome-80s': '55875ca133e9e74589135174fa0cac54f76cbb44.png',
  'centrosome-centrioles': '7812bee65a0bf168f737e26c9905dd1667088d91.png',
  'nuclear-pore-complex': '619a02196aae72fae148649088eaccbffef32f08.png',
  'endomembrane-system': '701f6fa66894e2506643db74cc271e3df0d196e1.png',
  'microtubules': '74a02b7a68f4731b55c5a647e84ad8af70b4a07f.png',
  'membrane-transport': '88b70dcb38c59b9c489d8f09e325a85266a59b75.png',
  'biology-cover': '8c25ced55a2e868a767bcc863c13ebd93da8241f.png'
};

Object.entries(images).forEach(([name, hash]) => {
  const img = document.querySelector(`img[src*="${hash}"]`);
  if (img) {
    const link = document.createElement('a');
    link.href = img.src;
    link.download = `${name}.png`;
    link.click();
    console.log(`Downloaded: ${name}.png`);
  }
});
```

## Verification

After downloading, verify files are in correct location:

```
/public/images/cell-biology/
├── er-smooth.png ✓
├── chloroplast.png ✓
├── eukaryotic-cell.png ✓
├── mitochondrion.png ✓
├── vacuole.png ✓
├── osmosis-turgor-pressure.png ✓
├── plant-cell.png ✓
├── lysosome.png ✓
├── ribosome-80s.png ✓
├── centrosome-centrioles.png ✓
├── nuclear-pore-complex.png ✓
├── endomembrane-system.png ✓
├── microtubules.png ✓
├── membrane-transport.png ✓
└── biology-cover.png ✓
```

## Test Locally Before Deploying

```bash
# Test that images load correctly
npm run dev
# or
yarn dev
```

Check that all figure cards show images. If any are broken, the file path or name is incorrect.

## Deploy

Once all images are verified locally:

```bash
git add public/images/
git commit -m "Add cell biology images for production"
git push origin main

# Vercel will auto-deploy
# Or manually: vercel deploy
```

✅ Your images will now work on Vercel!
