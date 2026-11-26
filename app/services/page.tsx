export const metadata = { title: "Services | Atelier Korrigan" };

export default function Page() {
  return (<>
<section className="wrap page-title"><h1>Services</h1><p className="lede">Un site vitrine, un journal ou quelques heures pour améliorer le site que vous utilisez déjà.</p></section><section className="band" id="services"><div className="wrap block">
<h2>Les offres de l’atelier</h2>
<div className="services">
<article><h3>Site vitrine</h3><p>Présentez votre activité, vos réalisations et vos coordonnées sur un site de 3 à 5 pages.</p><a className="quiet" href="/contact/">Demander un devis</a></article>
<article><h3>Blog d’atelier</h3><p>Partagez vos conseils et vos coulisses avec des articles faciles à lire et à retrouver.</p><a className="quiet" href="/blog/">Voir des exemples</a></article>
<article><h3>Accompagnement</h3><p>Faites évoluer votre site au fil des besoins avec 5 heures par mois pour vos mises à jour et petites améliorations.</p><a className="quiet" href="/contact/">Parler de vos besoins</a></article>
</div>
</div></section><section className="band" id="methode"><div className="wrap block method">
<div><p className="eyebrow">La méthode</p><h2>De la première idée à la mise en ligne</h2></div>
<ol><li><h3>Faire le point</h3><p>On clarifie ce que vos clients doivent trouver et ce qu’ils doivent pouvoir faire sur le site.</p></li><li><h3>Concevoir les pages</h3><p>On organise vos textes et vos photos, puis on ajuste la mise en page ensemble.</p></li><li><h3>Préparer le lancement</h3><p>On vérifie les liens, la lisibilité et l’affichage sur téléphone avant la mise en ligne.</p></li></ol>
</div></section><section className="contact"><div className="wrap block contact-inner"><div><h2>Discutons de votre site</h2><p>Un premier échange permet de préciser les pages et les fonctions dont vous avez besoin.</p></div><a className="button light" href="/contact/">Prendre contact</a></div></section>
  </>);
}
