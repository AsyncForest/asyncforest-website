import { readdirSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSidenotes from './src/plugins/rehype-sidenotes.mjs';
import rehypeNewTabLinks from './src/plugins/rehype-new-tab-links.mjs';

// Unlisted posts (frontmatter `unlisted: true`) stay out of the sitemap. The
// config runs before the content layer exists, so read the frontmatter here.
const writingDir = new URL('./src/content/writing/', import.meta.url);
const unlistedSlugs = readdirSync(writingDir)
  .filter((f) => f.endsWith('.md'))
  .flatMap((f) => {
    const src = readFileSync(new URL(f, writingDir), 'utf8');
    const fm = src.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
    if (!/^unlisted:\s*true\s*$/m.test(fm)) return [];
    const slug = fm.match(/^slug:\s*['"]?([^'"\n]+?)['"]?\s*$/m)?.[1] ?? f.replace(/\.md$/, '');
    return [slug];
  });

export default defineConfig({
  site: 'https://asyncforest.com',
  integrations: [
    sitemap({
      filter: (page) => !unlistedSlugs.some((slug) => page.endsWith(`/writing/${slug}/`)),
    }),
  ],
  markdown: {
    shikiConfig: { theme: 'github-light' },
    rehypePlugins: [
      // Astro normally adds heading ids after custom plugins; adding the
      // plugin here explicitly puts the ids in place before autolink runs.
      rehypeHeadingIds,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: { className: ['heading-anchor'], ariaLabel: 'Link to this section' },
          content: { type: 'text', value: '#' },
        },
      ],
      rehypeSidenotes,
      rehypeNewTabLinks,
    ],
  },
});
