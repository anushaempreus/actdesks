import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "info@actdecks.com.au";
// Until a verified sending domain is added in Resend, their shared
// onboarding sender works for testing.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "ACT Decks Website <onboarding@resend.dev>";

function clean(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function isEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string
  );
}

export async function POST(req: NextRequest) {
  // 1. Rate limit by client IP
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  // 2. Parse body
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // 3. Honeypot — bots fill the hidden "company" field. Drop silently.
  if (clean(body.company, 100)) {
    return NextResponse.json({ ok: true });
  }

  // 4. Validate + sanitise
  const name = clean(body.name, 100);
  const phone = clean(body.phone, 40);
  const email = clean(body.email, 150);
  const address = clean(body.address, 200);
  const message = clean(body.message, 4000);

  if (!name || !phone || !address || !email || !isEmail(email)) {
    return NextResponse.json(
      { error: "Please complete all required fields with valid details." },
      { status: 422 }
    );
  }

  // 5. Send via Resend
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Key not configured yet. In development, log and soft-succeed so the
    // form flow can be exercised; in production, fail clearly.
    if (process.env.NODE_ENV !== "production") {
      console.log("[contact] RESEND_API_KEY not set — dev submission:", { name, phone, email, address });
      return NextResponse.json({ ok: true, dev: true });
    }
    return NextResponse.json(
      { error: "Our contact form isn't configured yet — please call us on 02 6280 6858." },
      { status: 503 }
    );
  }

  const html = `
    <h2>New website enquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Residential address:</strong> ${escapeHtml(address)}</p>
    <p><strong>Project details:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>") || "(none provided)"}</p>
  `;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New website enquiry from ${name}`,
      html,
    });
    if (error) {
      return NextResponse.json(
        { error: "Could not send your message. Please call us on 02 6280 6858." },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Could not send your message. Please call us on 02 6280 6858." },
      { status: 502 }
    );
  }
}
