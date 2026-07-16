import Link from "next/link";
import Image from "next/image";
import { services, company } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white/90">
      <div className="container-x py-16 grid gap-10 md:grid-cols-4">
        <div>
          <Image
            src="/images/ACTDecks-logo-primary.png"
            alt="ACT Decks"
            width={170}
            height={68}
            className="h-14 w-auto mb-4"
          />
          <p className="text-sm leading-relaxed text-white/70">
            Canberra&apos;s premier provider of outdoor living solutions since 2012 —
            over 3,500 projects completed.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl uppercase tracking-wide text-white mb-4">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-brand-orange">Home</Link></li>
            <li><Link href="/about-us" className="hover:text-brand-orange">About us</Link></li>
            <li><Link href="/outdoor-living" className="hover:text-brand-orange">Outdoor Living</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-brand-orange">Privacy Policy</Link></li>
            <li><Link href="/contact" className="hover:text-brand-orange">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-xl uppercase tracking-wide text-white mb-4">
            Services
          </h2>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="hover:text-brand-orange">
                  {s.navTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-xl uppercase tracking-wide text-white mb-4">
            Contact Information
          </h2>
          <ul className="space-y-2 text-sm">
            <li>{company.address}</li>
            <li>
              <a href={company.phoneHref} className="hover:text-brand-orange">
                {company.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="hover:text-brand-orange">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs text-white/60 flex flex-col md:flex-row justify-between gap-2">
          <span>Copyright © {new Date().getFullYear()} ACT Decks. All rights reserved.</span>
          <span>ACT Builder Licence: {company.licence}</span>
        </div>
      </div>
    </footer>
  );
}
