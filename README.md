# Aureo — Landing "Aprende a invertir" · Cohort #19

This is the repository for the landing page of the financial education program **"Aprende a invertir" (Cohort #19)**, operated by **Aureo** (Grandes Patrimonios × Zetta Ventures). 

It is a single-page application (SPA) optimized for conversions, with the main goal of directing visitors to contact the team via WhatsApp to enroll.

## 🚀 Tech Stack
- **Frontend**: React 18 + Vite 5
- **Styling**: Plain CSS (no Tailwind, Sass, CSS Modules, or component libraries)
- **Fonts**: Google Fonts (Archivo for headings/numbers, Inter for body text)
- **Architecture**: Fully static, with no database, routing, or complex form states.

## 🛠️ Quick Commands

Install dependencies:
```bash
npm install
```

Start the local development server:
```bash
npm run dev
```

Build the static files for production (outputs to the `dist/` directory):
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## 📁 Key File Structure
- `src/main.jsx`: React entry point; mounts the `<App />` component and imports styling sheets.
- `src/App.jsx`: Contains all visual layout structures, individual section components (Hero, Stats, Program, FAQ, etc.), and their composition.
- `src/data.js`: **Centralized content dictionary**. All Spanish copywriting, session details, FAQs, testimonials, and WhatsApp redirect URLs (`WA`) must be edited here.
- `src/styles.css`: Contains all design tokens (color variables, fonts, spacing) and responsive Flexbox layouts.
- `public/luis-felipe.png`: Profile photo of the program presenter (Luis Felipe Giraldo).

## ✍️ Development Agreements & Code Style
1. **Content Separation**: Never hardcode or edit business copy, prices, or dates directly in `App.jsx`. Always edit them inside `src/data.js`.
2. **Colombia Localization (es-CO)**: All user-facing content is written in Spanish using an engaging yet professional "tú" (informal) tone, and is entirely free of financial jargon.
3. **Currency Formatting**: Monetary figures must be formatted using dots as thousands separators (e.g., `$1.500.000 COP`), never commas or decimal values.
4. **Design System Constraints**:
   - Primary color tokens: `--dark` (`#1E3B2F`), `--cream` (`#F4EFE7`), `--sand` (`#ECE6DB`), `--accent` (`#C9A45C`), `--gold-text` (`#7A5C1E`).
   - **Contrast Warning**: Avoid using the golden `--accent` color for text copy on a `--cream` background (it fails WCAG AA accessibility contrast ratios). Use `--gold-text` instead.
5. **No Raw Emojis**: Always use inline SVGs instead of raw emojis to maintain the brand's premium, clean aesthetic.

## 🌐 Deployment
Since the output of `npm run build` is a completely static Single Page Application, you can host the `dist/` directory on any static provider (such as Vercel, Netlify, Cloudflare Pages, or Firebase Hosting).
