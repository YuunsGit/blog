import {defineConfig, sharpImageService} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from "./src/remark-reading-time.mjs";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.yunusemre.dev",
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    remarkPlugins: [remarkReadingTime]
  },
  output: "static",
  adapter: vercel({
    analytics: true,
  }),
  image: {
    service: sharpImageService()
  }
});