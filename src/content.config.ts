import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Essays live in src/content/writing/*.md and publish at /writing/<slug>/.
// The slug is the filename, or the optional `slug` frontmatter override
// (the glob loader uses it as the entry id). Slugs are PERMANENT once
// published — the essays are cross-posted elsewhere with this site as the
// canonical source, so renaming a slug breaks the canonical URL. Pick
// carefully; never rename after publishing.
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    // Meta description and social-card text; search snippets truncate ~160.
    description: z.string().min(50).max(160),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // Drafts build in dev but are excluded from production builds, listings,
    // RSS, and the sitemap.
    draft: z.boolean().default(false),
    slug: z.string().optional(),
    // Schema only for now — no tag pages yet.
    tags: z.array(z.string()).optional(),
    // Path override for the social card; default is the generated
    // /open-graph/<slug>.png card.
    ogImage: z.string().optional(),
  }),
});

export const collections = { writing };
