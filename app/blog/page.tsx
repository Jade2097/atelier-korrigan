export const metadata = { title: "Journal | Atelier Korrigan" };

export default function Page() {
  return (<>
<section className="wrap page-title"><h1>Le journal</h1><p className="lede">Des notes pour préparer les textes et les images de votre site.</p></section><section className="wrap article-list"><article><h2><a href="/blog/photos-site-artisan/">Quelles photos préparer pour votre site ?</a></h2><p>Une liste courte pour choisir les images de votre vitrine.</p></article><article><h2><a href="/blog/ecrire-une-realisation/">Qu’écrire sur une page de réalisation ?</a></h2><p>Trois éléments à expliquer sous les photos d’un projet.</p></article></section>
<section className="band"><div className="wrap block"><h2>Les articles de menuiserie</h2><ul className="archive"><li><a href="/blog/bois-local">Pourquoi choisir du bois local</a></li><li><a href="/blog/entretenir-plan-de-travail">Entretenir un plan de travail</a></li></ul><p className="caption">Des conseils pratiques issus de l’atelier.</p></div></section>
  </>);
}
