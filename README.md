# Luxora Interiors — Website

A React + Vite website for a luxury interior design studio, built from the provided mockups (Home, Portfolio, Project Detail).

## Tech
- React 19 + Vite
- React Router for page navigation
- lucide-react for icons
- Plain CSS (no framework) with CSS variables for the design system

## Pages
- `/` — Home (hero, stats, featured projects, services, testimonials)
- `/about` — About Us
- `/services` — Services
- `/portfolio` — Portfolio grid with category filters
- `/portfolio/:id` — Individual project detail page
- `/styles` — Design styles
- `/blog` — Blog listing
- `/contact` — Contact form + map

## Run locally
```bash
npm install
npm run dev
```

## Build for production
```bash
npm run build
```
Output goes to `dist/`.

## Notes
- All imagery is sourced from Unsplash via direct URLs (no local assets needed).
- Design tokens (colors, fonts) live in `src/index.css` as CSS variables — change `--gold`, `--black`, `--cream` etc. there to retheme the whole site.
- Project/service/testimonial data lives in `src/data/index.js` — edit this to update content without touching components.
