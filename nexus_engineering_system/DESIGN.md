---
name: Nexus Engineering System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002113'
  on-tertiary-container: '#009668'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  title-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-base:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin: 32px
---

## Brand & Style

The design system is engineered to bridge the gap between academic rigor and professional industry standards. It targets engineering students and early-career professionals, evoking a sense of structured progression, technical authority, and career-focused optimism.

The visual style is **Corporate Modern with a Minimalist focus**. It prioritizes information density and clarity, using substantial whitespace to decompress complex technical roadmaps. The aesthetic avoids unnecessary decoration, opting instead for functional geometry and a disciplined layout that mirrors the precision of the engineering field.

## Colors

The palette is anchored by deep, high-trust blues and high-performance success accents.

- **Primary (Deep Navy):** Used for global navigation, primary headings, and foundational structural elements to provide a sense of stability.
- **Secondary (Professional Blue):** Utilized for interactive elements, primary buttons, and active "Path" indicators.
- **Success (Vibrant Green):** Reserved exclusively for "Completed" states, career readiness indicators, and progress milestones.
- **Neutral (Slate Gray):** Employed for body text, secondary metadata, and subtle borders to maintain a clean hierarchy.

Surface colors utilize a tiered approach: white for primary cards, and a subtle off-white (`#F8FAFC`) for background layering to define workspace boundaries.

## Typography

The design system utilizes **Inter** exclusively for its exceptional legibility in technical contexts. 

- **Hierarchy:** Use `display-lg` for landing hero sections only. `headline-lg` is the standard for major curriculum milestones.
- **Clarity:** For technical documentation or roadmap descriptions, `body-base` ensures maximum readability over long durations.
- **Labels:** `label-caps` is used for status badges (e.g., "CORE MODULE", "HARDWARE PATH") to differentiate metadata from primary content.
- **Line Height:** Generous line heights are maintained to prevent text density fatigue.

## Layout & Spacing

This design system uses a **12-column fluid grid** for desktop and a **single-column vertical flow** for mobile.

- **The Roadmap Model:** Content is organized in a "Path" sequence. Use `lg` (48px) spacing between roadmap stages to visually isolate different learning phases.
- **Information Density:** Inside cards, use `sm` and `md` spacing to group related technical requirements together. 
- **Margins:** A 32px safe-area margin is required on mobile to ensure content remains readable and accessible. 
- **Breakpoints:**
  - Mobile: < 768px (4 columns)
  - Tablet: 768px - 1199px (8 columns)
  - Desktop: 1200px+ (12 columns)

## Elevation & Depth

To maintain a "Tech-Forward" feel, this design system avoids heavy, traditional shadows in favor of **Tonal Layering and Low-Contrast Outlines**.

- **Level 0 (Background):** Solid `#F8FAFC`.
- **Level 1 (Cards/Containers):** Pure white background with a 1px solid border (`#E2E8F0`). No shadow.
- **Level 2 (Interactive/Hover):** When a roadmap stage is hovered, apply a very soft, diffused shadow: `0 4px 12px rgba(15, 23, 42, 0.05)` and change the border color to the Secondary Blue.
- **Path Separation:** Use a vertical line (2px stroke) to connect roadmap nodes, colored by the path type (Software = Blue, Hardware = Slate).

## Shapes

The shape language is **Soft and Professional**. 

- **Base Radius:** 0.25rem (4px) for small components like inputs, checkboxes, and buttons. This creates a crisp, precise engineering aesthetic.
- **Container Radius:** 0.5rem (8px) for cards and modals to provide a modern, approachable feel without appearing overly "bubbly" or consumer-grade.
- **Icons:** Use linear, 2px stroke icons to match the font weight of Inter and maintain a technical diagram feel.

## Components

### Roadmap Cards
The primary vehicle for the "Contest → Career" journey. Cards must include a status badge (Top-Right), a title, and a "Skills Gained" list. Hardware paths utilize a Slate icon set, while Software paths utilize Blue.

### Buttons
- **Primary:** Solid Secondary Blue with White text. Used for "Start Module" or "Apply for Job".
- **Outline:** 1px Primary Navy border. Used for "View Syllabus" or "Secondary Resources".
- **Success:** Solid Success Green. Used only for "Claim Certificate" or "Path Completed".

### Progress Indicators
Linear progress bars (4px height) should be used within cards. Once a stage reaches 100%, the bar color transitions from Secondary Blue to Success Green.

### Input Fields
Clean, 1px bordered boxes. Focus state uses a 2px Secondary Blue ring. Labels always sit above the field in `label-caps` style for maximum clarity during profile setup or skill-gap assessments.

### Path Toggles
A segmented control used to switch between "Software Engineering Focus" and "Hardware/Systems Focus". The active state is indicated by a Primary Navy fill with White text.