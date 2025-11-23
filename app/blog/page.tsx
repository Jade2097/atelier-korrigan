import Link from 'next/link';

const posts = [
  { slug: 'bois-local', title: 'Pourquoi choisir du bois local' },
  { slug: 'entretenir-plan-de-travail', title: 'Entretenir un plan de travail' },
];

export default function BlogIndex() {
  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-semibold">Blog</h2>
      <ul className="list-disc pl-5">
        {posts.map((p) => (
          <li key={p.slug}><Link href={`/blog/${p.slug}`}>{p.title}</Link></li>
        ))}
      </ul>
    </section>
  );
}
