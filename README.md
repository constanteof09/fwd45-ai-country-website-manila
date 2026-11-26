# Manila: Pearl of the Orient

A 4-page, hand-coded HTML5/CSS3/vanilla-JS website about **Manila, the capital of the Philippines**, built with a heritage/colonial visual palette and Philippine-flag accents.

## Pages

1. **`index.html` — Home & History**: Hero banner of Manila Bay, introduction, a Quick Facts `<table>`, a 5-step historical `<ol>` timeline, and explore cards.
2. **`attractions.html` — Attractions**: Responsive CSS Grid gallery of 6 landmarks (Intramuros, Fort Santiago, San Agustin Church, Manila Cathedral, Rizal Park, Binondo), a captioned HTML5 `<video>` of Manila Bay (`media/manila.webm` + `media/manila-captions.vtt`), and an `<aside>` visitor tips box.
3. **`culture.html` — Culture & Food**: Festivals & Traditions, Jeepney history, a Tagalog/English `<blockquote>` proverb, Must-Try Foods gallery & list, and an accessible "Plan Your Visit" `<form>`.
4. **`credits.html` — Credits & References**: Complete attributions for every image, video, font, factual reference, and AI tool used, grouped by page with clickable new-tab links and `"Used on:"` page references.

## Key Features & Requirements Met

- **Semantic HTML5**: Landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`), one `<h1>` per page, `<figure>`/`<figcaption>`, `<table>` with `<caption>`/`<thead>`/`scope`, `<blockquote>`, `<video>` with `<track>`, and accessible `<form>`.
- **Responsive Mobile-First CSS**: Built with `css/normalize.css` and `css/styles.css` using CSS Grid, Flexbox, fluid `clamp()` typography, and `min-width` media queries (`48em`, `64em`, `90em`).
- **Accessibility**: Skip link, visible `:focus-visible` outlines, `aria-current="page"`, `lang="tl"` on Tagalog phrases, progressive-enhancement mobile menu (`js/nav.js`), and `prefers-reduced-motion` support.
- **Optimized Media**: Responsive WebP images (`480w`, `960w`, `1600w`) with `srcset`/`sizes`, lazy loading, compressed WebM video with `preload="none"`, and multi-platform favicons (`favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `site.webmanifest`).

## Running Locally

Serve the project over a local HTTP server (recommended so `<track>` video captions load cleanly):

```bash
npx serve .
```

## Licence

Original and adapted site text is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). All third-party images, video, fonts, and libraries are credited on [`credits.html`](credits.html).
