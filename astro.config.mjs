// @ts-check
import { defineConfig } from 'astro/config';

// The site is served from a subdirectory of the lab's server, so `base` has to
// be reflected in every internal URL. Use withBase() from src/data/site.ts
// rather than writing the path out by hand.
// https://astro.build/config
export default defineConfig({
	site: 'https://lapth.cnrs.fr',
	base: '/pg-nomin/tourkine',
});
