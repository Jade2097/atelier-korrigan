export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://atelier-korrigan.vercel.app/sitemap.xml',
  };
}
