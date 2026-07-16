import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact ACT Decks today",
  description:
    "Contact ACT Decks in Fyshwick, Canberra for a quote on decks, pergolas, pool fencing and outdoor living solutions. Call 02 6280 6858 or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact ACT Decks Today" subtitle="Get In Touch" video="/images/contact-hero.mp4" poster="/images/ACT-Decks-Exerior-hd.jpg" />
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Contact details</h2>
            <ul className="space-y-4 text-lg">
              <li>
                <span className="block text-sm uppercase tracking-wide text-brand-orange font-semibold">Address</span>
                {company.address}
              </li>
              <li>
                <span className="block text-sm uppercase tracking-wide text-brand-orange font-semibold">Phone</span>
                <a href={company.phoneHref} className="hover:text-brand-orange">{company.phone}</a>
              </li>
              <li>
                <span className="block text-sm uppercase tracking-wide text-brand-orange font-semibold">Email</span>
                <a href={`mailto:${company.email}`} className="hover:text-brand-orange">{company.email}</a>
              </li>
              <li>
                <span className="block text-sm uppercase tracking-wide text-brand-orange font-semibold">Showroom Hours</span>
                8:00am – 4:00pm (Mon–Thu), 8:00am – 2:00pm (Fri)
              </li>
            </ul>
            <div className="mt-8 aspect-[4/3] w-full overflow-hidden shadow">
              <iframe
                title="ACT Decks location"
                src="https://www.google.com/maps?q=Unit%2010%2F157%20Gladstone%20St%2C%20Fyshwick%20ACT%202609&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Send us a message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
