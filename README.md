# Personal website — Shankar Gugoloth

This repository contains a simple static personal website.

## Quickstart (local)
1. Clone the repo:
   git clone https://github.com/gugolothshankar/Shankar-Gugoloth.git
2. Open `index.html` in the browser, or run a local server:
   npx http-server .  # or: python -m http.server

## Deployment (GitHub Pages)
Method A — Serve from root of main:
1. Push these files to the repository root on the `main` branch.
2. In the repository Settings -> Pages, choose Branch: `main` and folder: `/ (root)`.
3. Save. Your site will be available at `https://gugolothshankar.github.io/Shankar-Gugoloth/`.

Method B — Use `/docs` folder:
1. Move site files into a `docs/` directory at repo root.
2. In Settings -> Pages select Branch: `main` and folder: `/docs`.

Custom domain:
- Add a `CNAME` file with your domain (one line with `example.com`).
- Update DNS to point to GitHub Pages IPs or use CNAME record (see GitHub Pages docs).

## Customization
- Replace `images/profile.jpg` with your photo.
- Update the hero text, bio, and project entries.
- Replace contact form `action` with your Formspree ID, Netlify form, or a mailto.

## Next steps
- Add meta/social OpenGraph tags for nicer cards on social shares.
- Add accessible keyboard focus styles.
- Add MDX/Markdown-based blog with a static site generator (Next.js, Astro, Eleventy) if you want posts.

Note: I created placeholder empty files `images/.gitkeep` and `files/.gitkeep` so you can add your profile image and resume PDF to `images/` and `files/` respectively.
