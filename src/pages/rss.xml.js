import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { createMarkdownProcessor } from '@astrojs/markdown-remark';

// Full-content feed. Posts are re-rendered with a plain GFM pipeline (no
// sidenote relocation) so feed readers get ordinary end-of-post footnotes
// instead of the site's sidenote markup — the accepted RSS caveat in §2 of
// the blog spec.
const processor = await createMarkdownProcessor({ gfm: true, smartypants: true });

export async function GET(context) {
  const posts = (await getCollection('writing', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const items = [];
  for (const post of posts) {
    const { code: html } = await processor.render(post.body ?? '');
    items.push({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/writing/${post.id}/`,
      content: html,
    });
  }
  return rss({
    title: 'Async Forest — writing',
    description:
      'Essays on software, AI, and the judgement calls in between, by Henry Franks.',
    site: context.site,
    items,
    customData: '<language>en-gb</language>',
  });
}
