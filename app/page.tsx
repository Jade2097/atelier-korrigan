export const metadata = { title: "Sites web pour artisans | Atelier Korrigan" };

export default function Page() {
  return (<>
<section className="wrap hero">
<div className="intro"><p className="eyebrow">Studio web pour artisans et indépendants</p>
<h1>Votre métier, sur le web.</h1>
<p className="lede">Un site pour montrer vos pièces, annoncer vos prochains ateliers ou recevoir des demandes de devis.</p>
<div className="actions"><a className="button" href="/realisations/">Voir les réalisations</a><a className="quiet" href="/services/">Découvrir les services</a></div></div>
<div className="hero-print" aria-hidden="true"><div className="ink-frame"><div className="ink-seal">K</div><div className="ink-name">Atelier<br />Korrigan</div><div className="ink-line"></div><div className="ink-type">DES SITES POUR<br />LES GENS DE MÉTIER</div></div></div>
</section><section className="band" id="services"><div className="wrap block">
<p className="eyebrow">Les services</p><h2>Un site pensé pour votre métier</h2>
<div className="services">
<article><h3>Site vitrine</h3><p>Présentez votre activité, vos réalisations et vos coordonnées sur un site de 3 à 5 pages.</p><a className="quiet" href="/contact/">Demander un devis</a></article>
<article><h3>Blog d’atelier</h3><p>Partagez vos conseils et vos coulisses avec des articles faciles à lire et à retrouver.</p><a className="quiet" href="/blog/">Voir des exemples</a></article>
<article><h3>Accompagnement</h3><p>Faites évoluer votre site au fil des besoins avec 5 heures par mois pour vos mises à jour et petites améliorations.</p><a className="quiet" href="/contact/">Parler de vos besoins</a></article>
</div>
</div></section><section className="wrap block home-note"><div><h2>Ce qu’on montre change selon le métier.</h2></div><div><p>Une boulangerie a besoin de montrer ses gâteaux et de recevoir des demandes précises. Un atelier de céramique doit surtout rendre ses cours faciles à trouver.</p><a className="quiet" href="/realisations/">Voir les deux exemples</a></div></section><section className="contact"><div className="wrap block contact-inner"><div><h2>Vous avez un site en tête ?</h2><p>Dites-nous ce que vos clients doivent pouvoir faire en arrivant sur votre site.</p></div><a className="button light" href="/contact/">Parler de votre projet</a></div></section>
  </>);
}
