import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import GetInTouch from "@/components/GetInTouch";

export const metadata: Metadata = {
  title: "About us - ACT Decks | Canberra Decks & Pergolas Builder",
  description:
    "ACT Decks (Construction Radical Pty Ltd) is a local Canberra company specialising in decks, pergolas and outdoor living, founded in 2012 by licensed builder Xavier Duffy.",
};

const valueProps = [
  "Consultative and friendly approach.",
  "Price competitive (without compromising on quality).",
  "Compliant with the Building Code of Australia (BCA) and all relevant Australian Standards.",
  "Extensive experience working with natural and composite timbers, galvanised steel, aluminium, stainless steel, fibreglass, polycarbonate, and structural insulated panels.",
  "In-depth knowledge of the latest construction techniques, materials, and design trends.",
  "One-stop shop for decks, pergolas, and outdoor living solutions in Canberra, including access to building certifiers, architectural design services, and land surveyors.",
];

const mission = [
  "To engage constructively and consultatively with our clients.",
  "To provide quality outdoor living solutions, such as decks and pergolas, in Canberra.",
  "To comply with all environmental and workplace health and safety (WHS) laws.",
  "To stay up to date with the latest technologies, developments, and materials in outdoor living.",
  "To uphold the professional values of the Housing Industry Association (HIA) and Master Builders Association (MBA).",
  "To reduce our carbon footprint wherever possible.",
];

const locations = [
  "Belconnen", "Canberra City", "Ginninderry", "Gungahlin", "Hall", "Jerrabomberra",
  "Molonglo Valley", "North Canberra", "Queanbeyan", "South Canberra", "Tuggeranong",
  "Weston Creek", "Woden Valley",
];

const gallery = [
  "/images/about-1.jpg",
  "/images/about-2.jpg",
  "/images/about-3.jpg",
  "/images/about-4.jpg",
  "/images/about-5.jpg",
  "/images/USE-BONNER-1.jpg",
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="About us" />

      {/* Intro */}
      <section className="section">
        <div className="container-x max-w-4xl prose-content">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            A Local Decking, Pergola, and Outdoor Living Company in Canberra
          </h2>
          <p>
            ACT Decks is a well-known local company specialising in decks, pergolas, and outdoor
            living solutions in Canberra. Founded in 2012, ACT Decks has established a reputation
            for competitive pricing, quality workmanship, and timely service delivery. The skilled
            and experienced team at ACT Decks is led by owner and licensed builder Xavier Duffy.
          </p>
          <p>
            Since 2012, ACT Decks has completed over 3,500 building projects – decks, pergolas,
            handrails, gates, fences, and privacy screens – in the Canberra region. As part of our
            projects, we&apos;ve also installed many doors and windows. Xavier and the team enjoy
            working with clients to create stunning decks, pergolas, and outdoor living spaces in
            Canberra.
          </p>
        </div>
      </section>

      {/* Visit our Showroom — image banner */}
      <section className="relative py-24">
        <Image src="/images/visit-showroom.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-brand-navy/80" />
        <div className="container-x relative text-center text-white max-w-3xl">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-4">
            Visit our Showroom
          </h2>
          <p className="text-white/90 text-lg">
            Potential clients can gain an insight into the solutions we provide at our new showroom
            in Fyshwick (10/157 Gladstone Street). Please feel free to drop in and browse the
            products, materials, and finishes we offer.
          </p>
        </div>
      </section>

      {/* Our Value Proposition — text left, image right */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Our Value Proposition</h2>
            <ul className="space-y-3">
              {valueProps.map((v, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-brand-orange font-bold shrink-0 mt-1">✓</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-square shadow-xl order-first lg:order-last">
            <Image src="/images/value-proposition.jpeg" alt="ACT Decks value proposition" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Our Mission — image left, text right */}
      <section className="section bg-light">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative aspect-[4/3] shadow-xl">
            <Image src="/images/our-mission.jpeg" alt="ACT Decks mission" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Our Mission</h2>
            <ul className="space-y-3">
              {mission.map((m, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-brand-orange font-bold shrink-0 mt-1">✓</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Full-width image band before Locations */}
      <section className="relative h-[300px] md:h-[460px]">
        <Image src="/images/visit-showroom.jpg" alt="ACT Decks outdoor living" fill className="object-cover" sizes="100vw" />
      </section>

      {/* Locations + gallery */}
      <section className="section">
        <div className="container-x">
          <div className="max-w-4xl mb-10">
            <h2 className="text-3xl md:text-4xl font-medium mb-3">Locations We Service in the ACT and NSW</h2>
            <p className="mb-6">
              ACT Decks services the following locations in and around Canberra. All our
              tradespeople are insured and licensed to work in both the ACT and NSW.
            </p>
            <div className="flex flex-wrap gap-3">
              {locations.map((l) => (
                <span key={l} className="bg-light px-4 py-2 text-sm shadow-sm">{l}</span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {gallery.map((src, i) => (
              <div key={i} className="relative aspect-[2/3] overflow-hidden shadow-sm">
                <Image src={src} alt="ACT Decks project" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width:768px) 50vw, 16vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="section bg-light">
        <div className="container-x max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-medium mb-5">Company Details</h2>
          <p className="mb-6">Construction Radical Pty Ltd trading as ACT Decks is a private company registered in the ACT.</p>
          <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-4 text-sm">
            <div><dt className="font-semibold text-brand-navy">Legal Entity</dt><dd>Construction Radical Pty Ltd</dd></div>
            <div><dt className="font-semibold text-brand-navy">ACT Builder Licence</dt><dd>2015624</dd></div>
            <div><dt className="font-semibold text-brand-navy">Head Office</dt><dd>Unit 10/157 Gladstone St, Fyshwick ACT 2609</dd></div>
            <div><dt className="font-semibold text-brand-navy">Site Operating Hours</dt><dd>7:00am – 4:00pm (Monday to Friday)</dd></div>
            <div><dt className="font-semibold text-brand-navy">Showroom Hours</dt><dd>8:00am – 4:00pm (Mon–Thu), 8:00am – 2:00pm (Fri)</dd></div>
            <div><dt className="font-semibold text-brand-navy">ACN</dt><dd>156 103 490</dd></div>
            <div><dt className="font-semibold text-brand-navy">ABN</dt><dd>35 156 103 490</dd></div>
          </dl>
        </div>
      </section>

      <GetInTouch />
    </>
  );
}
