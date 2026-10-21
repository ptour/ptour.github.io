// @ts-check
import { defineConfig } from 'astro/config';

// By default the site is served from a subdirectory of the lab's server, so
// `base` has to be reflected in every internal URL. Use withBase() from
// src/data/site.ts rather than writing the path out by hand.
// The GitHub Pages build (.github/workflows/deploy.yml) overrides both values
// through the SITE_URL and SITE_BASE environment variables.
// https://astro.build/config
export default defineConfig({
	site: process.env.SITE_URL ?? 'https://lapth.cnrs.fr',
	base: process.env.SITE_BASE ?? '/pg-nomin/tourkine',
});
