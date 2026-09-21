import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSidenotes from './src/plugins/rehype-sidenotes.mjs';
import rehypeNewTabLinks from './src/plugins/rehype-new-tab-links.mjs';

export default defineConfig({
  site: 'https://asyncforest.com',
  integrations: [sitemap()],
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
