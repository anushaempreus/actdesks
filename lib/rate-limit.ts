// Simple in-memory sliding-window rate limiter.
//
// NOTE: this holds state in the process memory of a single server instance.
// It works well for a single long-running Node server, but on serverless
// platforms (e.g. Vercel) each instance has its own memory, so it is a
// best-effort throttle rather than a global guarantee. For strict global
// limiting, back this with a shared store such as Upstash Redis.

const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 5; // per IP per window

const hits = new Map<string, number[]>();

export function rateLimit(key: string, now: number = Date.now()): boolean {
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    hits.set(key, recent);
    return false;
  }
  recent.push(now);
  hits.set(key, recent);
  return true;
}
