import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';

// Build-time social cards: /open-graph/<slug>.png — title + site name on the
// brand-dark background, referenced from og:image on each post. Fonts are
// vendored in src/assets/og/ so the build makes no network requests.
const posts = await getCollection('writing', ({ data }) => import.meta.env.DEV || !data.draft);

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'route',
  pages: Object.fromEntries(posts.map((post) => [post.id, post.data])),
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: 'Async Forest — asyncforest.com',
    bgGradient: [[6, 7, 9]],
    padding: 72,
    logo: { path: './public/brand/logo-256-on-dark.png', size: [88] },
    font: {
      title: {
        size: 64,
        weight: 'SemiBold',
        lineHeight: 1.15,
        color: [249, 251, 255],
        families: ['Hanken Grotesk'],
      },
      description: {
        size: 28,
        color: [172, 178, 189],
        families: ['Hanken Grotesk'],
      },
    },
    fonts: ['./src/assets/og/HankenGrotesk-Variable.ttf'],
  }),
});
