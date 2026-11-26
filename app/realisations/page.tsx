export const metadata = { title: "Réalisations | Atelier Korrigan" };

export default function Page() {
  return (<>
<section className="wrap page-title"><h1>Réalisations</h1><p className="lede">Deux exemples de pages conçues autour de ce que les clients viennent chercher.</p></section><section className="wrap block" id="realisations">
<h2>Deux métiers, deux façons de se présenter</h2>
<div className="projects">
<article><div className="showcase bakery" aria-hidden="true"><div className="mock"><small>BOULANGERIE LEMAIRE</small><i>Les grandes occasions<br />ont leur gâteau.</i><span>Gâteaux sur demande</span></div></div>
<h3>Boulangerie Lemaire</h3><p>Une vitrine centrée sur les gâteaux personnalisés et les demandes pour les grandes occasions.</p></article>
<article><div className="showcase pottery" aria-hidden="true"><div className="mock"><small>ATELIER CÉRAMIQUE</small><i>De la terre<br />au premier bol.</i><span>Planning des cours</span></div></div>
<h3>Atelier céramique</h3><p>Une présentation des cours qui permet de repérer les créneaux et de choisir son atelier.</p></article>
</div>
<p className="caption">Maquettes illustratives inspirées des projets présentés sur le site d’origine.</p>
</section><section className="band"><div className="wrap block"><h2>Exemples de menuiserie</h2><div className="projects"><article><h3>Bibliothèque chêne massif</h3><p>Finition huilée, ajustée au millimètre.</p></article><article><h3>Cuisine compacte</h3><p>Optimisation espace, charnières amorties.</p></article></div></div></section>
  </>);
}
