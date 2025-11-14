# Responsive Design Documentation

This document outlines the responsive design strategy implemented across the Cell Biology Educational Microsite to ensure optimal viewing experience on all devices.

## Breakpoint System

We use Tailwind CSS's default breakpoint system:

- **Mobile**: < 640px (default, mobile-first)
- **Small (sm)**: ≥ 640px (tablets portrait)
- **Medium (md)**: ≥ 768px (tablets landscape, small laptops)
- **Large (lg)**: ≥ 1024px (desktops)
- **Extra Large (xl)**: ≥ 1280px (large desktops)

## Typography Scaling

All text uses `clamp()` for fluid typography that scales smoothly between devices:

```css
/* Example usage */
font-size: clamp(16px, 2vw, 18px);
/* min: 16px, preferred: 2vw, max: 18px */
```

### Typography Scale by Component

- **Hero Heading**: `clamp(32px, 5vw, 56px)`
- **Section Headings**: `clamp(24px, 4vw, 32px)`
- **Card Titles**: `clamp(16px, 2vw, 18px)`
- **Body Text**: `clamp(14px, 1.5vw, 15px)`
- **Captions**: `clamp(11px, 1.5vw, 12px)`

## Layout Adaptations

### Header
- **Mobile**: Compact icon-only navigation
- **Desktop**: Full navigation with labels
- **Sticky**: Reduces height on scroll (80px → 64px)

### Hero Section
- **Mobile**: Single column, full-width buttons
- **Desktop**: Two-column layout with preview card
- **Buttons**: Stack vertically on mobile, horizontal on tablet+

### Figure Grid
- **Mobile**: 1 column (min-width: 320px)
- **Tablet**: 2 columns
- **Desktop**: Auto-fill with min 320px per card
- **Grid Gap**: 6px (mobile) → 8px (desktop)

### Glossary Grid
- **Mobile**: 1 column
- **Small**: 2 columns
- **Large**: 3 columns

### Footer
- **Mobile**: 1 column stack
- **Small**: 2 columns
- **Large**: 3 columns

## Touch Targets

All interactive elements meet WCAG AAA standards for touch targets:

- **Minimum Size**: 44px × 44px
- **Buttons**: Full-width on mobile, auto-width on desktop
- **Cards**: Touch-friendly with `touch-manipulation` CSS
- **Navigation**: Larger tap areas on mobile

## Spacing System

Responsive padding and margins:

```jsx
// Example
className="px-4 sm:px-6"  // 16px → 24px
className="py-12 sm:py-16" // 48px → 64px
```

### Section Padding
- **Mobile**: `py-12` (48px)
- **Desktop**: `py-16` (64px)

### Container Padding
- **Mobile**: `px-4` (16px)
- **Desktop**: `px-6` (24px)
- **Max Width**: 1120px centered

## Component-Specific Adaptations

### FigureCard
- **Image**: Responsive aspect ratio (4:3)
- **Content**: Padding `p-4` → `p-6`
- **Glossary Button**: Full-width on mobile, auto on desktop
- **Metadata**: Stacks on mobile, side-by-side on desktop

### Modals (GlossaryModal, ImageLightbox)
- **Mobile**: Full-width, slide up from bottom
- **Desktop**: Centered with max-width
- **Close Button**: Touch-friendly (44px)
- **Content**: Scrollable with max-height 90vh

### ImageLightbox
- **Mobile**: Max-height 80vh (leaves room for controls)
- **Desktop**: Max-height 90vh
- **Instructions**: "Tap to close" (mobile) vs "Click/ESC" (desktop)

## Image Optimization

All images use:
- Responsive aspect ratios
- `object-fit: cover` for consistency
- Lazy loading (implicit in modern browsers)
- Fallback gradients during load

## Accessibility Features

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Focus states clearly visible
- Escape key closes modals

### Screen Readers
- Semantic HTML (`<figure>`, `<figcaption>`, `<section>`)
- ARIA labels on icon-only buttons
- Proper heading hierarchy

### Contrast Ratios
- All text meets WCAG AA (4.5:1 minimum)
- Interactive elements have clear focus indicators
- Color is not the only indicator of state

## Performance Optimizations

### Mobile-Specific
- Reduced motion support via `@media (prefers-reduced-motion)`
- Touch events with `touch-manipulation` for better responsiveness
- Optimized animation durations (200-300ms)

### General
- CSS custom properties for consistent theming
- Minimal re-renders with proper React state management
- Grid auto-fill for efficient layouts

## Testing Checklist

- [ ] iPhone SE (375px) - smallest modern mobile
- [ ] iPhone 12/13 Pro (390px)
- [ ] iPhone 14 Pro Max (430px)
- [ ] iPad Mini (768px)
- [ ] iPad Pro (1024px)
- [ ] Desktop 1280px
- [ ] Desktop 1920px
- [ ] Touch interactions on actual devices
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Landscape orientation
- [ ] Browser zoom (50% - 200%)

## Code Patterns

### Responsive Padding Example
```jsx
<div className="px-4 sm:px-6 py-12 sm:py-16">
  {/* Content */}
</div>
```

### Responsive Grid Example
```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
  {/* Items */}
</div>
```

### Responsive Typography Example
```jsx
<h2 style={{ fontSize: "clamp(24px, 4vw, 32px)" }}>
  {/* Heading */}
</h2>
```

### Responsive Button Example
```jsx
<button className="w-full sm:w-auto px-7 py-3.5">
  {/* Button text */}
</button>
```

## Future Enhancements

1. **Progressive Web App**: Add service worker for offline support
2. **Adaptive Loading**: Reduce image quality on slow connections
3. **Container Queries**: Use when browser support improves
4. **Orientation Lock**: Suggest landscape for optimal viewing on tablets

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari iOS 14+
- Chrome Android 90+

All features gracefully degrade in older browsers.
