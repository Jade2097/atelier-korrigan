"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(fields)),
      });
      if (!response.ok) throw new Error("Envoi impossible");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return <>
    <section className="wrap page-title">
      <h1>Parlons de votre projet</h1>
      <p className="lede">Pour préparer un premier échange, quelques lignes suffisent.</p>
    </section>
    <section className="wrap contact-page">
      <div><h2>Que mettre dans votre message ?</h2><ul>
        <li>Votre activité et le lien vers votre site si vous en avez un.</li>
        <li>Ce que vos clients doivent pouvoir trouver ou faire en ligne.</li>
        <li>Votre échéance, si vous avez déjà une date en tête.</li>
      </ul></div>
      <div className="contact-panel">
        <form onSubmit={onSubmit} className="contact-form" aria-busy={status === "loading"}>
          <p className="form-note">Votre message sera adressé à l’atelier. Vos coordonnées serviront à vous répondre.</p>
          <div className="contact-trap" aria-hidden="true"><label htmlFor="website">Site web</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
          <div><label htmlFor="name">Nom</label><input id="name" name="name" autoComplete="name" maxLength={100} required /></div>
          <div><label htmlFor="email">E-mail</label><input id="email" name="email" type="email" autoComplete="email" maxLength={254} required /></div>
          <div><label htmlFor="message">Votre projet</label><textarea id="message" name="message" rows={6} maxLength={5000} required /></div>
          <button className="button" disabled={status === "loading"}>{status === "loading" ? "Envoi…" : "Envoyer le message"}</button>
          <div aria-live="polite">
            {status === "success" && <p>Merci, votre message a bien été envoyé.</p>}
            {status === "error" && <p role="alert">L’envoi n’a pas abouti. Veuillez réessayer ou écrire à <a href="mailto:jadedogo08@gmail.com">jadedogo08@gmail.com</a>.</p>}
          </div>
        </form>
      </div>
    </section>
  </>;
}
