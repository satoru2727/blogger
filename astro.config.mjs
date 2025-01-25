// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
    integrations: [
      mdx(),
      sitemap(),
      tailwind({ applyBaseStyles: false }),
      icon(),
      playformCompress(),
    ],
});