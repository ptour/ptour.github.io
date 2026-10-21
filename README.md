# Piotr Tourkine — personal academic website

Static bilingual (EN/FR) site built with Astro. Served at
https://lapth.cnrs.fr/pg-nomin/tourkine/

## Where to edit

- Almost all text, links and lists: `src/data/site.ts`
- Page layouts and section headings: `src/pages/en/` and `src/pages/fr/`
- PDFs and images: `public/` (e.g. replace `public/cv.pdf` to update the CV)

## Build

```sh
npm install      # first time only
npm run dev      # preview at http://localhost:4321/pg-nomin/tourkine/
npm run build    # writes the final site to ./dist/
```

## Updating the live site

From inside the lab network, or connected to the lab VPN:

```sh
npm run deploy
```

This mounts `smb://fileb.lapp.in2p3.fr/pg-nomin-lapth` if needed, builds the
site, lists what will change on the server, and asks for confirmation before
copying (with rsync). Then check the live site (hard refresh: ⌘⇧R).

Settings (share address, folder name) are at the top of `scripts/deploy.sh`.

By hand, if the script fails: run `npm run build`, open the share in the
Finder (⌘K, address above), and copy the **contents** of `dist/` into the
site's folder, replacing the existing files.
