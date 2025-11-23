// app/page.tsx
export default function Page() {
  return (
    <main className="container">
      <section className="section">
        <h1 className="section-title">Atelier Korrigan — sites clairs et accessibles</h1>
        <p className="section-subtitle">Compréhensibles en 5 secondes, faits pour convertir sans chichi.</p>

        <div className="grid grid--3" style={{marginTop: 18}}>
          {[
            {t:'Site vitrine', s:'3-5 pages, livré en 10 jours', c:'Demander un devis'},
            {t:'Blog atelier', s:'Pédagogie, SEO léger', c:'Voir un exemple'},
            {t:'Accompagnement', s:'5h/mois, petites évolutions', c:'Parler de votre besoin'},
          ].map((x,i)=>(
            <article key={i} className="card card--pad">
              <h3 className="font-semibold mb-1">{x.t}</h3>
              <p className="text-muted">{x.s}</p>
              <div className="divider"></div>
              <button className="button">{x.c}</button>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Projets récents</h2>
        <p className="section-subtitle">Objectifs concrets et résultats mesurables.</p>
        <div className="grid grid--2" style={{marginTop: 12}}>
          <article className="card card--pad">
            <h3 className="font-semibold mb-1">Boulangerie Lemaire</h3>
            <p className="measure">+72% de demandes gâteaux personnalisés en 8 semaines.</p>
          </article>
          <article className="card card--pad">
            <h3 className="font-semibold mb-1">Atelier céramique</h3>
            <p className="measure">Planning cours complet 3 semaines à l’avance.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
