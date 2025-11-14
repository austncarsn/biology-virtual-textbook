# Project Structure

This document outlines the professional organization of the Cell Biology Educational Microsite.

## Directory Structure

```
/
├── App.tsx                          # Main application entry point
├── types/                           # TypeScript type definitions
│   └── index.ts                    # Shared interfaces and types
├── data/                           # Application data layer
│   ├── images.ts                   # Centralized image imports
│   ├── figures.ts                  # Figure data (15 cell diagrams)
│   └── glossary.ts                 # Glossary terms and preview data
├── components/                     # React components
│   ├── layout/                     # Layout components
│   │   ├── Header.tsx             # Sticky header with navigation
│   │   └── Footer.tsx             # Site footer with references
│   ├── sections/                   # Page sections
│   │   ├── HeroSection.tsx        # Hero/landing section
│   │   ├── FiguresSection.tsx     # Figures gallery section
│   │   ├── GlossarySection.tsx    # Glossary preview section
│   │   └── DownloadsSection.tsx   # Downloads & resources section
│   ├── features/                   # Feature components
│   │   ├── FigureCard.tsx         # Individual figure card with zoom
│   │   ├── GlossaryModal.tsx      # Term definition modal
│   │   └── ImageLightbox.tsx      # Full-screen image viewer
│   ├── ui/                         # Shadcn UI components
│   ├── figma/                      # Figma-specific components
│   ├── Hero.tsx                    # Hero component (legacy)
│   ├── GlossaryPreview.tsx         # Glossary preview grid
│   └── BioLogo.tsx                 # Biology logo component
├── utils/                          # Utility functions
│   └── generatePDF.ts             # PDF generation logic
├── styles/                         # Global styles
│   └── globals.css                # CSS custom properties & tokens
└── imports/                        # Figma imports
    └── Frame*.tsx                  # Imported Figma frames
```

## Architecture Principles

### 1. Separation of Concerns
- **Data Layer** (`/data`): All static content, images, and configuration
- **Types Layer** (`/types`): Shared TypeScript interfaces
- **Component Layer** (`/components`): UI components organized by function
- **Utils Layer** (`/utils`): Business logic and helper functions

### 2. Component Organization
- **Layout**: Persistent UI elements (header, footer)
- **Sections**: Page-level components representing major sections
- **Features**: Reusable feature components with complex interactions
- **UI**: Third-party component library (Shadcn)

### 3. Data Management
- Centralized data sources in `/data` folder
- Images exported from single source (`images.ts`)
- Type-safe data structures defined in `/types`
- Easy to update content without touching component code

## Key Components

### App.tsx
Main orchestrator that:
- Manages application state (modals, lightbox, active section)
- Handles section scrolling and navigation
- Coordinates between sections and features
- Provides event handlers to child components

### Data Files

#### `/data/images.ts`
- Single source for all figure image imports
- Centralized Figma asset references
- Easy to update or replace images

#### `/data/figures.ts`
- Array of 15 cell biology figures
- Each figure includes: number, title, subtitle, summary, image, source, license
- Type-safe with `Figure` interface

#### `/data/glossary.ts`
- Complete glossary with 42 cell biology terms
- Related figures mapping
- Optional illustrations
- Preview terms for glossary section (15 terms)

### Section Components

#### HeroSection
- Landing page with CTA buttons
- Preview image and title
- Smooth scroll to figures

#### FiguresSection
- Grid layout for 15 figure cards
- Educational note about unlabeled diagrams
- Click handlers for glossary and image zoom

#### GlossarySection
- Preview of 15 key terms
- Color-coded categories (info/success/warning)
- Links to full glossary modal

#### DownloadsSection
- Available formats and resources
- Citation information
- Educational license details

### Feature Components

#### FigureCard
- Hover effects and animations
- Clickable image for lightbox
- Glossary term link
- Figure metadata display

#### GlossaryModal
- Full-screen modal for term definitions
- Optional illustration
- Related figures list
- Keyboard navigation (ESC to close)

#### ImageLightbox
- Full-screen image viewer
- Figure metadata overlay
- Click/ESC to close

## Benefits of This Structure

1. **Maintainability**: Clear separation makes it easy to find and update code
2. **Scalability**: Easy to add new sections, features, or data
3. **Type Safety**: Centralized types prevent errors
4. **Reusability**: Components are modular and can be reused
5. **Testability**: Each layer can be tested independently
6. **Performance**: Data is imported only where needed
7. **Developer Experience**: Logical organization reduces cognitive load

## Making Updates

### Adding a New Figure
1. Add image to `/data/images.ts`
2. Add figure object to `/data/figures.ts`
3. Optionally add glossary entry to `/data/glossary.ts`

### Adding a New Section
1. Create component in `/components/sections/`
2. Add section ref and handler in `App.tsx`
3. Update navigation in `Header.tsx`

### Updating Styles
1. Global tokens: `/styles/globals.css`
2. Component-specific: Inline styles using CSS custom properties
