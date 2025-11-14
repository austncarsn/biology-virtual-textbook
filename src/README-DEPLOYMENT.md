# Vercel Deployment Guide - Image Setup

## 🚨 Critical: Fix Missing Images

Your app uses images that need to be manually added before deploying to Vercel.

## Quick Fix Steps

### 1️⃣ Download Images from Development
While running the app **locally** in Figma Make:

1. Open your browser's **DevTools** (F12)
2. Go to the **Network** tab
3. Reload the page
4. Filter by "Img" or "PNG"
5. Find each image and right-click → "Open in new tab"
6. Save each image with these exact names:

```
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
biology-cover.png (from your Figma import)
```

### 2️⃣ Add Images to Your Project

Place all downloaded images in:
```
/public/images/cell-biology/
```

The folder structure should look like:
```
your-project/
├── public/
│   └── images/
│       └── cell-biology/
│           ├── er-smooth.png
│           ├── chloroplast.png
│           ├── eukaryotic-cell.png
│           ├── mitochondrion.png
│           ├── vacuole.png
│           ├── osmosis-turgor-pressure.png
│           ├── plant-cell.png
│           ├── lysosome.png
│           ├── ribosome-80s.png
│           ├── centrosome-centrioles.png
│           ├── nuclear-pore-complex.png
│           ├── endomembrane-system.png
│           ├── microtubules.png
│           ├── membrane-transport.png
│           └── biology-cover.png
├── components/
├── data/
└── ...
```

### 3️⃣ Deploy to Vercel

Once images are in place:

```bash
# If using Git
git add public/images/
git commit -m "Add cell biology images for deployment"
git push

# Vercel will automatically redeploy
```

Or deploy directly:
```bash
vercel deploy
```

## ✅ Verification Checklist

Before deploying, verify:
- [ ] All 15 images are in `/public/images/cell-biology/`
- [ ] File names match exactly (no spaces, lowercase with hyphens)
- [ ] Images are PNG format
- [ ] Files are under 10MB each for optimal performance

## 🔍 Alternative: Use Placeholder Images Temporarily

If you can't access the original images immediately, you can use placeholders:

```typescript
// In /data/images.ts, temporarily use placeholder service
export const imgErSmoothEr = "https://placehold.co/800x600/E5E7EB/525252?text=ER+Smooth";
// Repeat for others...
```

⚠️ **Note**: This is only for testing. Replace with actual scientific images before production use.

## 🐛 Troubleshooting

### Images still not showing on Vercel?
1. Check Vercel build logs for errors
2. Verify `/public` folder is committed to Git
3. Clear Vercel build cache: Settings → Clear Cache → Redeploy
4. Check browser console for 404 errors

### CORS errors with images?
Images in `/public` folder don't have CORS issues. The problem was with `figma:asset` imports.

### PDF generation fails?
Ensure `biology-cover.png` exists. The PDF generator has a fallback but works best with the actual cover image.

## 📚 Why This Happened

- `figma:asset/...` imports are Figma Make's development-only feature
- These special imports don't work in production builds
- Solution: Use standard `/public` folder for static assets
- This is the standard way Next.js/React apps handle images

## ✨ After Fixing

Once deployed with images, your app will have:
- ✅ All 15 cell biology diagrams visible
- ✅ Working image lightbox/zoom
- ✅ Perfect PDF generation with cover
- ✅ Full responsive image loading
- ✅ No console errors

---

**Need Help?** Check your Vercel deployment logs or browser console for specific error messages.
