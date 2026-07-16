import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import GetInTouch from "@/components/GetInTouch";

export const metadata: Metadata = {
  title: "Pool Fencing & Privacy Screens Canberra - ACT Decks",
  description:
    "Compliant residential pool fencing and stylish privacy screens in Canberra — steel, aluminium, glass, hardwood and PVC. Meets the ACT Home Swimming Pool Safety Reforms.",
};

const reforms = [
  "A pool fence must be in “good working order” and at least 1.2 metres in height (with a non-climbable zone of 90cm).",
  "A gate must open outwards (to avoid accidental inward pressure opening it), be self-closing, and self-latching.",
  "The gate latch release mechanism must be relatively childproof: at least 1.5 metres off the ground or secured in some way (if lower).",
  "The gap between the fence and ground must be no greater than 10cm.",
  "Gaps in the fence mustn’t exceed 10cm in width.",
];

const poolBenefits = [
  "Sturdy and durable.",
  "Complements your garden and house style.",
  "Enhances pool safety and security, especially for children and pets.",
  "Complies with Australian Standard AS1926.1 (2012) and AS1926.2 (2007).",
  "Adds value to a property over time (if maintained properly).",
];

const poolMaterials = ["Galvanized steel", "Powder coated aluminium", "Glass (semi-frameless, frameless, and framed)"];

const screenBenefits = [
  "Provides a windbreak.",
  "Can serve as a garden “feature.”",
  "Hides eyesores, such as hot water units.",
  "Helps create a storage area (if used under a deck).",
  "Can act as a freestanding “wall” for a patio or pergola.",
  "Provides additional privacy from neighbours and the general public.",
];

const screenMaterials = ["Treated hardwood", "Composite timber", "Powder-coated or anodised (coloured) aluminium", "Galvanized steel"];

const poolGallery = ["/images/pf-1.jpg", "/images/pf-2.jpg", "/images/pf-3.jpg", "/images/pf-4.jpg"];
const screenGallery = ["/images/ps-banner.jpg", "/images/ps-1.jpg", "/images/ps-2.jpg", "/images/ps-3.jpg"];

export default function PoolFencingPage() {
  return (
    <>
      <PageHero title="Pool Fencing & Privacy Screens" subtitle="Our Services" image="/images/main-photo-.jpg" />

      {/* Pool fencing */}
      <section className="section">
        <div className="container-x max-w-4xl prose-content">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Residential Pool Fencing, and Privacy Screens – Canberra</h2>
          <p>
            ACT Decks is your one-stop shop for residential pool fencing and privacy screens in the
            Canberra region. As a licensed builder in Canberra, all our projects comply with the
            Building Code of Australia (BCA) and Australian Standards. Whether you&apos;re seeking to
            comply with pool safety laws or build a private retreat, ACT Decks has you covered for
            pool fencing and privacy screens in the Canberra region.
          </p>

          <h2 className="text-3xl md:text-4xl font-medium mt-10 mb-6">Quality Pool Fences in Canberra</h2>
          <p>
            ACT Decks supplies and installs quality pool fences in the Canberra region. All our
            pool fences – steel, aluminium, glass, hardwood, and PVC – comply with the ACT
            Government&apos;s Home Swimming Pool Safety Reforms that came into effect in 2023. The new
            reforms are based on Australian Standard AS1926.1 (2012) and AS1926.2 (2007) and apply
            to all pool owners in the ACT.
          </p>

          <h3 className="text-2xl font-heading font-semibold !text-brand-orange mt-8 mb-3">Overview of Home Swimming Pool Safety Reforms</h3>
          <p>
            The Home Swimming Pool Safety Reforms aim to not only reduce the number of pool
            fatalities but standardise pool fence laws in Canberra and the ACT. A snapshot of the
            reforms is provided below:
          </p>
          <ul>{reforms.map((r) => <li key={r}>{r}</li>)}</ul>
          <p>
            ACT Decks can assess and upgrade your current pool fence in Canberra to ensure
            compliance. Our stylish pool fences are available in a wide range of materials, colours,
            and styles. We also supply gates, soft close hinges, secure latches, fence posts, fixing
            points, and spigots / aluminium channels.
          </p>

          <h3 className="text-2xl font-heading font-semibold !text-brand-orange mt-8 mb-3">Features and Benefits of a Quality Pool Fence</h3>
          <ul>{poolBenefits.map((b) => <li key={b}>{b}</li>)}</ul>

          <h3 className="text-2xl font-heading font-semibold !text-brand-orange mt-8 mb-3">Popular Pool Fencing Materials in Canberra</h3>
          <ul>{poolMaterials.map((m) => <li key={m}>{m}</li>)}</ul>
          <p>
            ACT Decks has you covered for all the metal pool fence designs in Canberra, including
            flat-top, loop-top, picket, batten, and spear-top.
          </p>
        </div>

        <div className="container-x mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {poolGallery.map((src, i) => (
              <div key={i} className="relative aspect-[3/2] overflow-hidden shadow-sm">
                <Image src={src} alt="ACT Decks pool fencing project" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width:768px) 50vw, 25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stunning Privacy Screens — text overlaid on image banner */}
      <section className="pt-10 md:pt-12 pb-10 md:pb-12">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl min-h-[320px] md:min-h-[400px] flex items-center">
            <Image src="/images/ps-banner.jpg" alt="ACT Decks privacy screens" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-brand-navy/65" />
            <div className="relative max-w-2xl text-white px-8 md:px-14 py-10">
              <h2 className="font-heading text-3xl md:text-5xl font-semibold text-white mb-5">Stunning Privacy Screens – Canberra</h2>
              <p className="text-white/90 leading-relaxed">
                ACT Decks builds elegant privacy screens from timber, Colorbond, aluminium, and
                vinyl in Canberra. Privacy screens are an inexpensive way to improve outdoor privacy
                or create “interest” in a garden. Privacy screens vary in length, height, style, and
                materials. We can help you choose the right one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy screens details */}
      <section className="pb-16 md:pb-24">
        <div className="container-x max-w-4xl prose-content">
          <h3 className="text-2xl font-heading font-semibold !text-brand-orange mb-3">Benefits and Features of a Privacy Screen</h3>
          <ul>{screenBenefits.map((b) => <li key={b}>{b}</li>)}</ul>

          <h3 className="text-2xl font-heading font-semibold !text-brand-orange mt-8 mb-3">Popular Privacy Screen Materials in Canberra</h3>
          <ul>{screenMaterials.map((m) => <li key={m}>{m}</li>)}</ul>
          <p>
            To learn more about residential pool fencing and privacy screens in the Canberra region,
            please call ACT Decks on{" "}
            <a href="tel:0262806858" className="text-brand-orange font-semibold">02 6280 6858</a>.
          </p>
        </div>

        <div className="container-x mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {screenGallery.map((src, i) => (
              <div key={i} className="relative aspect-[3/2] overflow-hidden shadow-sm">
                <Image src={src} alt="ACT Decks privacy screen project" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width:768px) 50vw, 25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <GetInTouch />
    </>
  );
}
