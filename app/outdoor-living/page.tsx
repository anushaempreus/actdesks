import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Outdoor Living - ACT Decks",
  description:
    "Make the most of year-round outdoor living in Canberra with ACT Decks — pergolas, decks, alfresco spaces, stairs, handrails, windows, doors, pool fences and privacy screens.",
};

const oneStop = [
  "Pergolas (open, enclosed, and louvered)",
  "Decks (attached, detached, wraparound, multi-tier, and pool / spa)",
  "Stairs (for decks)",
  "Handrails (for decks)",
  "Double-glazed windows",
  "Doors",
  "Pool fences (in glass, aluminium, steel, and hardwood)",
  "Privacy screens",
];

const gallery = [
  "/images/ol-8.jpg",
  "/images/ol-1.jpg",
  "/images/ol-2.jpg",
  "/images/ol-3.jpg",
  "/images/ol-4.jpg",
  "/images/ol-5.jpg",
  "/images/ol-6.jpg",
  "/images/ol-7.jpg",
];

export default function OutdoorLivingPage() {
  return (
    <>
      <PageHero title="Outdoor Living" subtitle="Outdoor Living" image="/images/main-outdoor-living-photo.jpg" />

      {/* Intro */}
      <section className="section">
        <div className="container-x max-w-4xl prose-content">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Make the Most of Outdoor Living in Canberra
          </h2>
          <p>
            Year-round outdoor living in Canberra is possible with a quality outdoor living
            solution from ACT Decks. We design and build stylish pergolas (open and enclosed),
            decks, and alfresco spaces to enhance your lifestyle. An outdoor living solution from
            ACT Decks increases your home&apos;s living space, functionality, value, and attractiveness.
          </p>
          <p>
            ACT Decks has completed over 3,500 outdoor living projects in Canberra since 2012.
            Xavier and the team take great pride in every project – ensuring that clients receive
            an outdoor living solution that&apos;s the envy of their friends and neighbours in Canberra.
            As a local builder, ACT Decks is renowned for its integrity, creativity, and
            craftsmanship.
          </p>

          <h2 className="text-3xl md:text-4xl font-medium mt-10 mb-6">
            Your One-Stop Shop for Outdoor Living Solutions in Canberra
          </h2>
          <p className="mb-4">ACT Decks has you covered for quality outdoor living solutions in Canberra, including:</p>
          <ul>
            {oneStop.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Stylish end-to-end solutions are our specialty. Our friendly and experienced team will
            help you create a unique outdoor living space in Canberra – one that exudes quality,
            functionality, and character. As a licensed builder in Canberra, ACT Decks has access
            to building certifiers (Capital Certifiers), land surveyors (Clarke &amp; Di Pauli), and
            architectural design services (Design by Rabbit).
          </p>
        </div>
      </section>

      {/* You're Invited to our Showroom — image banner */}
      <section className="relative py-24">
        <Image src="/images/outdoor-showroom.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-brand-navy/80" />
        <div className="container-x relative text-center text-white max-w-3xl">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-4">
            You&apos;re Invited to our Showroom
          </h2>
          <p className="text-white/90 text-lg">
            Explore the many outdoor living options we offer at our new showroom in Fyshwick
            (10/157 Gladstone Street). It&apos;s where outdoor living dreams in Canberra start to
            become realities.
          </p>
        </div>
      </section>

      {/* Only the Best Products and Materials */}
      <section className="section">
        <div className="container-x max-w-4xl prose-content">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Only the Best Products and Materials</h2>
          <p>
            We use only quality products and materials on our outdoor living projects in Canberra.
            Our professional team enjoys working with many materials, including hardwood, composite
            timber, aluminium, galvanised steel, glass, polycarbonate, and uPVC. As an established
            provider of outdoor living solutions in Canberra, we strive to use Australian-made
            products wherever possible.
          </p>
          <p className="text-sm italic text-body/80">
            *** Please note that we reserve the right to change our suppliers at any time ***
          </p>
          <p>
            To enquire about outdoor living solutions in Canberra, please call the experienced team
            at ACT Decks on{" "}
            <a href="tel:0262806858" className="text-brand-orange font-semibold">02 6280 6858</a>.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section bg-light">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((src, i) => (
              <div key={i} className="relative aspect-[3/2] overflow-hidden shadow-sm">
                <Image src={src} alt="ACT Decks outdoor living project" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width:768px) 50vw, 25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner text="Start planning your outdoor living space today" />
    </>
  );
}
