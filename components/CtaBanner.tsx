import Link from "next/link";
import { company } from "@/lib/data";

export default function CtaBanner({
  text = "Ready to start your outdoor living project?",
}: {
  text?: string;
}) {
  return (
    <section className="bg-brand-orange text-white">
      <div className="container-x py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white">
            {text}
          </h2>
          <p className="text-white/90 mt-1">
            Call the experienced team at ACT Decks on{" "}
            <a href={company.phoneHref} className="underline font-semibold">
              {company.phone}
            </a>
          </p>
        </div>
        <Link href="/contact" className="bg-brand-button hover:bg-brand-navy text-white font-body font-medium px-8 py-4 uppercase tracking-wide text-sm transition-colors whitespace-nowrap">
          Get a Quote
        </Link>
      </div>
    </section>
  );
}
