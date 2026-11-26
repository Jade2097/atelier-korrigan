export default function sitemap() {
  const base = 'https://atelier-korrigan.vercel.app';
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/services`, lastModified: new Date() },
    { url: `${base}/blog/photos-site-artisan`, lastModified: new Date() },
    { url: `${base}/blog/ecrire-une-realisation`, lastModified: new Date() },
    { url: `${base}/blog/bois-local`, lastModified: new Date() },
    { url: `${base}/blog/entretenir-plan-de-travail`, lastModified: new Date() },
    { url: `${base}/realisations`, lastModified: new Date() },
    { url: `${base}/blog`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
  ];
}
