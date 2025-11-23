export default function sitemap() {
  const base = 'https://atelier-korrigan.vercel.app';
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/realisations`, lastModified: new Date() },
    { url: `${base}/blog`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
  ];
}
