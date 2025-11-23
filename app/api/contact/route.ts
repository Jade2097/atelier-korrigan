export async function POST(req: Request) {
  const body = await req.json();
  // TODO: brancher Resend/Formspree. Ici on simule OK.
  console.log('contact', body);
  return new Response(null, { status: 204 });
}
