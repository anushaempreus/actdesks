/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

// Content Security Policy.
//
// This is a static marketing site (all pages prerendered), so a per-request
// nonce CSP isn't used — nonces require dynamic rendering, which would remove
// the static generation that keeps the site fast. Instead we lock everything
// down to same-origin, and allow the specific things the site needs:
//   - self-hosted fonts (next/font) and Tailwind CSS
//   - the hero / CTA / contact background videos (media-src 'self')
//   - the Google Maps embed on the contact page (frame-src)
//   - inline styles Next injects (style-src 'unsafe-inline')
// 'unsafe-eval' is only permitted in development (needed for HMR); production
// scripts run without it. 'unsafe-inline' on script-src is required because
// Next's bootstrap scripts in static pages carry no nonce.
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "media-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  `script-src 'self' 'unsafe-inline'${isProd ? "" : " 'unsafe-eval'"}`,
  "connect-src 'self'",
  "frame-src https://www.google.com",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // hide the "X-Powered-By: Next.js" fingerprint
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
