import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const essays = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/essays' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    standfirst: z.string(),
    pinned: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { essays };
