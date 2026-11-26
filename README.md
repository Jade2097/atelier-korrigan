# Atelier Korrigan

Site vitrine Next.js pour un atelier d'artisanat : offres claires, réalisations, blog d'atelier et prise de contact rapide.

## Aperçu
- Pages principales : Accueil (`app/page.tsx`), Réalisations (`app/realisations/page.tsx`), Blog (`app/blog/page.tsx`), Contact (`app/contact/page.tsx`).
- Formulaire de contact connecté à une route API factice (`app/api/contact/route.ts`) qui journalise les messages pour le portfolio.
- Styles avec Tailwind CSS et quelques utilitaires maison dans `app/globals.css`.
- App Router, TypeScript et Next.js 16.

## Prérequis
- Node.js ≥ 18.18 et npm.

## Installation
```bash
npm install
```

## Scripts
- `npm run dev` : lance le serveur de développement sur http://localhost:3000.
- `npm run build` : build de production.
- `npm start` : démarre le serveur après un build.
- `npm run lint` : vérifie le code avec ESLint.

## Personnalisation rapide
- Textes et offres : modifiez `app/page.tsx`.
- Réalisations : mettez à jour le tableau `items` dans `app/realisations/page.tsx`.
- Articles du blog d'exemple : liste `posts` dans `app/blog/page.tsx`.
- Formulaire de contact : `app/contact/page.tsx`. La route API associée (`app/api/contact/route.ts`) ne fait qu'afficher dans les logs serveur pour éviter un envoi réel.

## Déploiement
Le projet suit la configuration Next.js par défaut ; un `npm run build` suffit avant de déployer sur la plateforme de votre choix (Vercel recommandé).

## Envoi du formulaire de contact

Le formulaire envoie les messages à **jadedogo08@gmail.com** via l’API Resend.
L’adresse du visiteur est utilisée comme `reply_to` pour répondre directement.

1. Créer une clé API sur Resend et y vérifier un domaine d’envoi.
2. Copier [.env.example](./.env.example) dans `.env.local` pour le développement.
3. Renseigner `RESEND_API_KEY` et `CONTACT_FROM` avec une adresse de ce domaine.
4. Sur Vercel, ajouter ces deux variables dans les paramètres du projet puis redéployer.
5. Envoyer un message depuis le formulaire et vérifier sa réception dans Gmail.

Ne pas exposer la clé avec un préfixe `NEXT_PUBLIC_`, ni la committer.
Sans configuration, le formulaire affiche une erreur et propose un lien e-mail.
Un succès signifie que Resend a accepté l’envoi ; la livraison peut être vérifiée
sur son tableau de bord. Documentation : https://resend.com/docs/api-reference/emails/send-email.
