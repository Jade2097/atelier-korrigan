import './globals.css';
import Navigation from './components/navigation';

export const metadata = {
  title: 'Sites web pour artisans | Atelier Korrigan',
  description: 'Atelier Korrigan, création de sites web pour artisans et indépendants.',
  openGraph: { title: 'Atelier Korrigan', description: 'Votre métier, sur le web.' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <a className="skip" href="#contenu">Aller au contenu</a>
        <header><div className="wrap nav">
          <a className="brand" href="/" aria-label="Atelier Korrigan, accueil">
            <span className="mark" aria-hidden="true">K</span>
            <span>Atelier <strong>Korrigan</strong></span>
          </a>
          <Navigation />
        </div></header>
        <main id="contenu">{children}</main>
        <footer><div className="wrap foot">
          <a className="brand" href="/">Atelier Korrigan</a>
          <a className="quiet" href="/contact">Parler d’un projet</a>
        </div></footer>
      </body>
    </html>
  );
}
