"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { services, company } from "@/lib/data";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "Outdoor Living", href: "/outdoor-living" },
];

const mapHref =
  "https://www.google.com/maps/place/ACT+Decks/@-35.3255346,149.1841617,15z";

/* --- inline icons --- */
function PinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ContactItem({
  icon,
  title,
  sub,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  sub: string;
  href: string;
}) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-3 group">
      <span className="text-brand-orange shrink-0">{icon}</span>
      <span className="leading-tight">
        <span className="block font-heading font-semibold text-brand-navy group-hover:text-brand-orange transition-colors">
          {title}
        </span>
        <span className="block text-xs text-body">{sub}</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header>
      {/* --- Top white bar: logo + contact details --- */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-x flex items-center justify-between py-3 gap-4">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/ACTDecks-logo-primary.png"
              alt="ACT Decks"
              width={1366}
              height={219}
              className="h-12 md:h-16 w-auto"
              priority
            />
          </Link>

          {/* Contact details (desktop) */}
          <div className="hidden lg:flex items-center gap-8">
            <ContactItem
              icon={<PinIcon />}
              title="Unit 10/157 Gladstone St,"
              sub="Fyshwick ACT 2609"
              href={mapHref}
            />
            <ContactItem
              icon={<MailIcon />}
              title={company.email}
              sub="Get in touch"
              href={`mailto:${company.email}`}
            />
            <ContactItem
              icon={<PhoneIcon />}
              title={company.phone}
              sub="Give us a call"
              href={company.phoneHref}
            />
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-3xl text-brand-navy leading-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* --- Orange navigation bar --- */}
      <div className="bg-brand-orange text-white sticky top-0 z-50">
        <div className="container-x">
          {/* Desktop menu */}
          <nav className="hidden lg:flex items-center justify-start gap-8 font-heading uppercase tracking-wide text-[19px] font-medium h-[60px]">
            {mainLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-brand-navy transition-colors">
                {l.label}
              </Link>
            ))}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="uppercase hover:text-brand-navy transition-colors flex items-center gap-1">
                Services
                <span className="text-xs">▾</span>
              </button>
              {servicesOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full">
                  <div className="bg-white text-brand-navy shadow-xl min-w-[320px] py-2">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/${s.slug}`}
                        className="block px-6 py-3 text-[17px] normal-case tracking-normal hover:bg-brand-orange hover:text-white transition-colors"
                      >
                        {s.navTitle}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/showcase" className="hover:text-brand-navy transition-colors">Showcase</Link>
            <Link href="/contact" className="hover:text-brand-navy transition-colors">Contact Us</Link>
          </nav>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="lg:hidden px-5 pb-5 font-heading uppercase tracking-wide">
            {mainLinks.map((l) => (
              <Link key={l.href} href={l.href} className="block py-2.5 border-b border-white/15" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <div className="py-2.5 border-b border-white/15">
              <span className="block mb-1">Services</span>
              <div className="pl-3 normal-case tracking-normal font-body text-base">
                {services.map((s) => (
                  <Link key={s.slug} href={`/${s.slug}`} className="block py-2" onClick={() => setOpen(false)}>
                    {s.navTitle}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/showcase" className="block py-2.5 border-b border-white/15" onClick={() => setOpen(false)}>Showcase</Link>
            <Link href="/contact" className="block py-2.5 border-b border-white/15" onClick={() => setOpen(false)}>Contact Us</Link>
            <a href={company.phoneHref} className="block py-3 font-semibold">{company.phone}</a>
          </nav>
        )}
      </div>
    </header>
  );
}
