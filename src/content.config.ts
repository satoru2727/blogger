// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { file, glob } from "astro/loaders";

// 3. Define your collection(s)
const blog = defineCollection({
	loader: glob({ pattern: "**/*.mdx", base: "./article/blog" }),
	schema: z.object({
		title: z.string(),
		publishedAt: z.date(),
		tag: z.array(z.string()),
		updatedAt: z.date().optional(),
	}),
});
const philosophy = defineCollection({
	loader: glob({ pattern: "**/*.mdx", base: "./article/philosophy" }),
	schema: z.object({
		title: z.string(),
		publishedAt: z.date(),
		tag: z.array(z.string()),
		updatedAt: z.date().optional(),
	}),
});
export const collections = { blog, philosophy };
