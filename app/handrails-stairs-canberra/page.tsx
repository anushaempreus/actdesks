import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import GetInTouch from "@/components/GetInTouch";

export const metadata: Metadata = {
  title: "Canberra Handrails & Stairs Builders - ACT Decks",
  description:
    "ACT Decks designs and builds outdoor handrails and stairs in Canberra from timber, glass, powder-coated aluminium and stainless steel — built to Australian Standards.",
};

const handrails = [
  {
    title: "Timber with stainless steel cabling",
    image: "/images/hr-timber-cable.jpg",
    text: "A handrail made from natural timber and stainless steel cabling not only looks stylish but is cost-effective too. It also requires minimal maintenance going forward. We source our stainless steel cabling (also called wire rope) from renowned Australian manufacturer Konnect Fastening Systems.",
  },
  {
    title: "Frameless glass / semi-frameless glass",
    image: "/images/hr-frameless-glass.jpg",
    text: "We design, supply, and install frameless and semi-frameless glass handrails in Canberra. Glass handrails are stylish and timeless – providing uninterrupted views in the process. Our quality glass handrails comply with Australian Standards AS/NZS 1288, 2208, 1170.1, and 1170.2.",
  },
  {
    title: "Glass with timber frame",
    image: "/images/hr-glass-timber.jpg",
    text: "A glass railing / handrail with a timber frame produces a stylish yet homely look. ACT Decks provides a wide range of timbers and glass options (clear, tinted, etched, frosted) for your railing / handrail in Canberra. Popular timber choices (for the actual handrails) include Spotted Gum and Merbau.",
  },
  {
    title: "Powder-coated aluminium",
    image: "/images/hr-aluminium.jpg",
    text: "Powder-coated aluminium handrails are durable, low-maintenance, lightweight, and available in many colours. ACT Decks designs, supplies, and installs handrails made from round and square aluminium tubular sections in Canberra. Powder-coated aluminium handrails don’t rust either.",
  },
];

const stairs = [
  { title: "Boxed Stairs using Composite Decking", image: "/images/stair-boxed-composite.jpg" },
  { title: "Boxed Stairs using Hardwood Decking", image: "/images/stair-boxed-hardwood.jpg" },
  { title: "Stringer Stairs using Hardwood Decking", image: "/images/stair-stringer-hardwood.jpg" },
];

export default function HandrailsStairsPage() {
  return (
    <>
      <PageHero title="Handrails & Stairs" subtitle="Our Services" image="/images/main-photo.jpg" />

      {/* Outdoor Handrail Options */}
      <section className="section">
        <div className="container-x max-w-4xl prose-content mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Outdoor Handrail Options</h2>
          <p>
            Stylish creations are made from durable materials, including timber, glass,
            powder-coated aluminium, and stainless steel. All our outdoor handrails and stairs in
            Canberra are built to Australian Standards, as specified in the Building Code of
            Australia (BCA).
          </p>
          <p>
            At ACT Decks, we source our glass, timber, stainless steel, and aluminium from trusted
            suppliers, such as Glass Tech Australia and Stratco. As a leading provider of outdoor
            living solutions, ACT Decks has you covered for outdoor handrails and stairs in
            Canberra.
          </p>
        </div>
        <div className="container-x">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {handrails.map((h) => (
              <article key={h.title} className="bg-white shadow-sm hover:shadow-xl transition-shadow overflow-hidden flex flex-col border border-gray-100">
                <div className="relative aspect-[4/3]">
                  <Image src={h.image} alt={h.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 25vw" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading text-xl font-semibold mb-2 text-brand-orange">{h.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{h.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stair Explained */}
      <section className="section bg-light">
        <div className="container-x max-w-4xl prose-content mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Stairs Explained</h2>
          <p>
            ACT Decks specialises in building stairs using a variety of hardwoods, including merbau,
            spotted gum, and blackbutt, as well as composite decking materials such as TimberTech
            Azek and Trex Transcend Decking. Hardwoods are known for their durability and natural
            beauty, and composite decking materials offer low-maintenance options that can withstand
            the elements.
          </p>
          <p>
            Stringer stairs are a popular choice for exterior applications. They are constructed by
            attaching treads to a pair of stringers that run vertically between the top and bottom
            landings. Box stairs, on the other hand, incorporate closed risers between the treads,
            creating a solid box-like structure. This type of staircase is often used in modern or
            contemporary designs.
          </p>
        </div>
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-3">
            {stairs.map((s) => (
              <figure key={s.title} className="bg-white shadow-sm overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image src={s.image} alt={s.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                </div>
                <figcaption className="p-4 text-center font-heading text-lg font-semibold text-brand-orange">
                  {s.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <GetInTouch />
    </>
  );
}
