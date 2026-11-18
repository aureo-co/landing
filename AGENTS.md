# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## 1. Stack & Critical Commands
- **Stack**: React 18 (Vite 5) + Plain CSS (no Tailwind, Sass, CSS Modules, or UI libraries).
- **No Test/Lint Suite**: There are no tests, linters, or TypeScript configured. Standard commands like `npm run lint` or `npm test` do not exist. To run a single test is not applicable.
- **Verification**: Run `npm run build` to verify clean compilation. View in browser at mobile (`~390px`) and desktop (`~1440px`) widths.

## 2. Code Style & Architecture
- **File Directory Map**:
  - `src/App.jsx`: Component logic and layout composition.
  - `src/data.js`: Central dictionary for all copywriting, lists, and links.
  - `src/styles.css`: Scoped global CSS variables, tokens, and layouts.
- **Content Separation**: All user-facing text, arrays, lists, FAQS, and WhatsApp URLs **must** be stored as exported constants in `src/data.js`. Do not inline copy in `src/App.jsx`.
- **Colombia Localization (es-CO)**: All copy is in Spanish ("tú" form, calm, no hype). Currency **must** use dot-thousands formatting: `$1.500.000 COP` (never commas or decimals). Dates must match the Colombian format (e.g., "18 nov", "25 nov", "15 dic", "28 ene").
- **Styling**: Styles are flat, scoped to `:root` variables in `src/styles.css`. Layout relies on flexbox wrapping for responsiveness with a single major mobile breakpoint at `640px`.
- **Accessibility & Contrast**:
  - Touch targets must be $\ge$ 44px. Use `aria-expanded` and `aria-controls` on the Faq buttons.
  - Do not use the gold `--accent` (`#C9A45C`) as text on `--cream` (insufficient contrast). Use `--gold-text` (`#7A5C1E`) instead.
- **Gotchas**:
  - Do not use raw emojis; use inline SVG.
  - No external routers or state management; keep it a pure static single page.
  - All CTAs must use the prefilled `WA` link imported from `data.js`.
  - Legal compliance: The disclaimer in the footer and the specific FAQ answers must stay as-is. Never add claims of guaranteed returns or specific percentage figures.
