// app/contact/page.tsx
"use client";
import { useState } from "react";

export default function ContactPage() {
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    const res = await fetch("/api/contact", { method:"POST", body:JSON.stringify(data) });
    setOk(res.ok);
    setLoading(false);
    if (res.ok) form.reset();
  }

  return (
    <main className="max-w-xl mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6">Contact</h1>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Nom</label>
          <input id="name" name="name" required className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input id="email" type="email" name="email" required className="mt-1 w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-amber-500" />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <textarea id="message" name="message" rows={5} required className="mt-1 w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-amber-500" />
        </div>

        <button disabled={loading} className="inline-flex items-center rounded-md bg-amber-600 px-4 py-2 text-white hover:bg-amber-700 disabled:opacity-50">
          {loading ? "Envoi..." : "Envoyer"}
        </button>
      </form>

      {ok && (
        <p className="mt-4 text-sm text-green-700 bg-green-50 border border-green-200 rounded-md p-3">
          Merci, votre message a été envoyé.
        </p>
      )}

      <footer className="mt-10 text-xs text-slate-500">© 2025 Atelier Korrigan</footer>
    </main>
  );
}
