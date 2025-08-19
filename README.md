
# Opsloom — Revamped Static Site

This drop-in upgrade adds premium UI, accessibility, SEO, and PWA features while keeping it deployable on GitHub Pages.

## What's Included
- Tailwind (CDN) + dark/light mode with persistence
- Responsive layouts incl. large/TV screens
- Higher-conversion sections (services, testimonials, process, CTAs)
- Accessibility-first structure (WCAG 2.2 AA-minded)
- SEO: meta tags, Open Graph, sitemap, robots
- PWA: `manifest.json` + `sw.js` (installable + offline caching)

## How to Use
1. Replace your current `/` with these files (or copy pages one by one).
2. Ensure `/assets/logo.svg` and `/assets/logo.png` exist.
3. Add this to `index.html` (already included):
   ```html
   <script>if('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js');</script>
   ```
4. Push to GitHub Pages repo.

## Edit Points
- Update `contact.html` form action with your Formspree ID.
- Replace placeholder testimonials and metrics.
- Adjust brand colors in `tailwind.config` block inside the page head.
