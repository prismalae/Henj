import { site } from '@/content/site';
import { categories } from '@/content/products';

/** Every route the site exports, so search engines do not have to crawl to find them. */
/* Required by output: 'export' — these must be generated at build time. */
export const dynamic = 'force-static';

export default function sitemap() {
  const routes = [
    { path: '/', priority: 1.0 },
    { path: '/about', priority: 0.8 },
    { path: '/our-group', priority: 0.7 },
    { path: '/products', priority: 0.9 },
    ...categories.map((c) => ({ path: c.href, priority: 0.9 })),
    { path: '/services', priority: 0.8 },
    { path: '/catering-supply', priority: 0.8 },
    { path: '/air-shipment', priority: 0.8 },
    { path: '/packing-shipping', priority: 0.7 },
    { path: '/quality', priority: 0.7 },
    { path: '/faq', priority: 0.6 },
    { path: '/contact', priority: 0.8 },
  ];
  const now = new Date();
  return routes.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority,
  }));
}
