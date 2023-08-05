import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";
import {remarkReadingTime} from "./src/remark-reading-time.mjs";

export default defineConfig({
  site: 'https://blog.yuuns.tech',
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});