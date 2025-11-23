// app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  if (!name || !email || !message) return NextResponse.json({ ok:false }, { status:400 });

  // Portfolio: on “fait comme si” (pas d’email réel)
  console.log("[CONTACT]", { name, email, message });
  return NextResponse.json({ ok:true });
}
