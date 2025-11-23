import './globals.css';
export const metadata = {
  title: 'Atelier Korrigan — Artisan',
  description: 'Vitrine artisan locale: services, réalisations, blog et contact.',
  openGraph: { title: 'Atelier Korrigan', images: ['/og.png'] },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-[#0b0f17] text-slate-100">
        <header className="container mx-auto p-6">
          <nav className="flex gap-6">
            <nav className="site-nav">
              <a href="/">Accueil</a>
              <a href="/realisations">Réalisations</a>
              <a href="/blog">Blog</a>
              <a href="/contact">Contact</a>
            </nav>
          </nav>
        </header>
        <main className="container mx-auto p-6">{children}</main>
        <footer className="container mx-auto p-6 text-slate-400">© {new Date().getFullYear()} Atelier Korrigan</footer>
      </body>
    </html>
  );
}
