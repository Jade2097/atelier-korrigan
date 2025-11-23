// app/page.tsx
export default function Page() {
  return (
    <main className="container mx-auto max-w-5xl px-4">
      {/* Hero */}
      <section className="py-10">
        <h1 className="section-title text-3xl md:text-4xl font-extrabold tracking-tight">
          Atelier Korrigan — sites clairs et accessibles
        </h1>
        <p className="section-subtitle text-slate-600 mt-2">
          Compréhensibles en 5 secondes, faits pour convertir sans chichi.
        </p>

        {/* Offres */}
        <section className="mt-10 grid gap-6 md:grid-cols-3 items-stretch">
          {/* Carte 1 */}
          <article className="rounded-xl border bg-amber-50/40 p-6 h-full flex flex-col min-h-[220px]">
            <h3 className="text-lg font-semibold">Site vitrine</h3>
            <p className="text-sm text-slate-600 mt-2">3–5 pages, livré en 10 jours</p>
            <div className="mt-6 mb-4 h-px bg-amber-200/60" />
            <div className="mt-auto">
              <a
                href="/contact"
                className="inline-flex items-center rounded-md bg-amber-600 px-4 py-2 text-white hover:bg-amber-700"
              >
                Demander un devis
              </a>
            </div>
          </article>

          {/* Carte 2 */}
          <article className="rounded-xl border bg-amber-50/40 p-6 h-full flex flex-col min-h-[220px]">
            <h3 className="text-lg font-semibold">Blog atelier</h3>
            <p className="text-sm text-slate-600 mt-2">Pédagogie, SEO léger</p>
            <div className="mt-6 mb-4 h-px bg-amber-200/60" />
            <div className="mt-auto">
              <a
                href="/blog"
                className="inline-flex items-center rounded-md bg-amber-600 px-4 py-2 text-white hover:bg-amber-700"
              >
                Voir un exemple
              </a>
            </div>
          </article>

          {/* Carte 3 */}
          <article className="rounded-xl border bg-amber-50/40 p-6 h-full flex flex-col min-h-[220px]">
            <h3 className="text-lg font-semibold">Accompagnement</h3>
            <p className="text-sm text-slate-600 mt-2">5h/mois, petites évolutions</p>
            <div className="mt-6 mb-4 h-px bg-amber-200/60" />
            <div className="mt-auto">
              <a
                href="/contact"
                className="inline-flex items-center rounded-md bg-amber-600 px-4 py-2 text-white hover:bg-amber-700"
              >
                Parler de votre besoin
              </a>
            </div>
          </article>
        </section>
      </section>

      {/* Projets récents */}
      <section className="py-10">
        <h2 className="section-title text-2xl md:text-3xl font-bold">Projets récents</h2>
        <p className="section-subtitle text-slate-600">
          Objectifs concrets et résultats mesurables.
        </p>

        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <article className="rounded-xl border bg-white p-5 flex flex-col">
            <h3 className="text-slate-600 font-semibold">Boulangerie Lemaire</h3>
            <p className="text-slate-700">
              +72% de demandes gâteaux personnalisés en 8 semaines.
            </p>
          </article>

          <article className="rounded-xl border bg-white p-5 flex flex-col">
            <h3 className="text-slate-600 font-semibold">Atelier céramique</h3>
            <p className="text-slate-700">
              Planning cours complet 3 semaines à l’avance.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
