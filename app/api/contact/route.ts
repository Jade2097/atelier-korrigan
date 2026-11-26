import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let body;
  try {
    const raw = await req.text();
    if (raw.length > 20000) return NextResponse.json({ ok: false }, { status: 413 });
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (!body || typeof body !== "object") return NextResponse.json({ ok: false }, { status: 400 });
  const { name, email, message, website } = body;
  if (website) return NextResponse.json({ ok: false }, { status: 400 });
  if (
    typeof name !== "string" || !name.trim() || name.length > 100 || /[\r\n]/.test(name) ||
    typeof email !== "string" || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof message !== "string" || !message.trim() || message.length > 5000
  ) return NextResponse.json({ ok: false }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM;
  if (!apiKey || !from) return NextResponse.json({ ok: false }, { status: 503 });

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: ["jadedogo08@gmail.com"],
        reply_to: email,
        subject: `Atelier Korrigan — message de ${name.trim()}`,
        text: `Nom : ${name.trim()}\nE-mail : ${email}\n\n${message.trim()}`,
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) return NextResponse.json({ ok: false }, { status: 502 });
    const result = await response.json();
    if (!result.id) return NextResponse.json({ ok: false }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
