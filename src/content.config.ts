// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { file, glob } from "astro/loaders";

// 3. Define your collection(s)
const blog = defineCollection({
	loader: glob({ pattern: "**/*.mdx", base: "./article" }),
	schema: z.object({
		title: z.string(),
		date: z.string().date(),
		tag: z.array(z.string()),
		updatedAt: z.string().date().optional(),
	}),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog };
