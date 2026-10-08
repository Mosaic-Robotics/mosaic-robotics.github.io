# MOSAIC Robotics Lab Website Template

This is a dependency-free static website draft for MOSAIC Robotics Lab.

## Pages

- `index.html`: home, research overview, links, news
- `people.html`: team
- `publications.html`: selected preprints and publications
- `join.html`: recruiting and contact

## Editing

Edit page-specific content in the HTML files directly. Edit the shared header, navigation links, tagline, and footer in `assets/site.js` to update all pages at once. That script renders the shared content into the `data-site-header` and `data-site-footer` placeholders, highlights the current navigation link, and handles the mobile menu and optional publication search. JavaScript must be enabled to display the shared header and footer; no build step or additional dependencies are required.

The shared visual system lives in `assets/styles.css`. Each page declares `assets/penrose.svg` as its favicon in its `<head>`; replacing that SVG updates the favicon and header logo together. The home page's hero image is `assets/chihulyCrop.jpg`.

When adding a page, copy an existing page's `<head>`, shared header/footer placeholders, and `assets/site.js` script tag, then add its navigation link in `assets/site.js`.

## Local Preview

From this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.
