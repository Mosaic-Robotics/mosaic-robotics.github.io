# MOSAIC Robotics Lab Website Template

This is a dependency-free static website draft for MOSAIC Robotics Lab.

## Pages

- `index.html`: home, research overview, links, news
- `people.html`: team and alumni
- `publications.html`: reverse chronological paper list with search
- `outreach.html`: demos, workshops, media, press kit
- `join.html`: recruiting and contact

## Editing

Replace placeholders in the HTML files directly. The shared visual system lives in `assets/styles.css`, and the small mobile menu/publication search script lives in `assets/site.js`.

The current hero image is a generated placeholder at `assets/mosaic-hero.jpg`. Swap it with a lab photo, collage, rendered experiment image, or short video still once the lab has final imagery.

## Local Preview

From this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.
