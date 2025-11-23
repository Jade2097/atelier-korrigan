export default function Page() {
  const items = [
    { title: 'Bibliothèque chêne massif', desc: 'Finition huilée, ajustée au millimètre.' },
    { title: 'Cuisine compacte', desc: 'Optimisation espace, charnières amorties.' },
  ];
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold">Réalisations</h2>
      <ul className="grid sm:grid-cols-2 gap-6">
        {items.map((it) => (
          <li key={it.title} className="p-4 border border-slate-800 rounded">
            <h3 className="font-medium">{it.title}</h3>
            <p className="text-slate-300">{it.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
