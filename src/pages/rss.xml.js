import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const essays = (await getCollection('essays', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  return rss({
    title: 'Async Forest — writing',
    description: 'Essays on software, AI, and the judgement calls in between, by Henry Franks.',
    site: context.site,
    items: essays.map((essay) => ({
      title: essay.data.title,
      description: essay.data.standfirst,
      pubDate: essay.data.date,
      link: `/writing/${essay.id}/`,
    })),
  });
}
