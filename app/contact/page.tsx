'use client';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle'|'ok'|'ko'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget) as any);
    const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
    setStatus(res.ok ? 'ok' : 'ko');
  }

  return (
    <section className="max-w-xl space-y-4">
      <h2 className="text-3xl font-semibold">Contact</h2>
      <form onSubmit={onSubmit} className="space-y-3">
        <input className="w-full bg-transparent border p-2 rounded" name="name" placeholder="Votre nom" required />
        <input className="w-full bg-transparent border p-2 rounded" type="email" name="email" placeholder="Email" required />
        <textarea className="w-full bg-transparent border p-2 rounded" name="message" placeholder="Votre message" rows={5} required />
        <button className="px-4 py-2 bg-white text-black rounded">Envoyer</button>
      </form>
      {status === 'ok' && <p className="text-emerald-400">Merci, votre message a été envoyé.</p>}
      {status === 'ko' && <p className="text-red-400">Oups, une erreur est survenue.</p>}
    </section>
  );
}
