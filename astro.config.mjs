// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

import playformCompress from "@playform/compress";

import tailwindcss from "@tailwindcss/vite";

import remarkCallout from "@r4ai/remark-callout";
import playformInline from "@playform/inline";
export default defineConfig({
    integrations: [mdx(), sitemap(), icon(), playformCompress(), playformInline()],
    vite: {
        plugins: [tailwindcss()],
    },
    markdown: {
    // ...
    remarkPlugins: [
      // ...
      remarkCallout,
    ],
  },
});