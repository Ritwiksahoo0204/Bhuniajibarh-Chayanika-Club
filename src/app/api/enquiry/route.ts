import { NextResponse } from "next/server";
import { enquirySchema } from "@/lib/validations";
import { deliverEnquiry } from "@/lib/enquiries";

const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60_000;
const MAX = process.env.NODE_ENV === "production" ? 5 : 100;

function isLimited(ip: string) {
    const now = Date.now();
    const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
    recent.push(now);
    hits.set(ip, recent);
    if (hits.size > 5000) hits.clear();
    return recent.length > MAX;
}

export async function POST(request: Request) {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
    if (isLimited(ip)) {
        return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
    }

    const raw = await request.text();
    if (raw.length > 20_000) {
        return NextResponse.json({ ok: false, error: "too_large" }, { status: 413 });
    }

    let body: unknown;
    try {
        body = JSON.parse(raw);
    } catch {
        return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
    }

    // Honeypot: pretend it worked, so bots learn nothing
    if (typeof body === "object" && body !== null && (body as { website?: unknown }).website) {
        return NextResponse.json({ ok: true });
    }

    const parsed = enquirySchema.safeParse(body);
    if (!parsed.success) {
        return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
    }

    try {
        await deliverEnquiry(parsed.data);
        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("[enquiry failed]", error);
        return NextResponse.json({ ok: false, error: "server" }, { status: 500 });
    }
}