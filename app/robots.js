import { site } from '@/content/site';

/* Required by output: 'export' — these must be generated at build time. */
export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
