import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import GetInTouch from "@/components/GetInTouch";

export const metadata: Metadata = {
  title: "Decks Canberra - ACT Decks | Deck Builders Canberra",
  description:
    "ACT Decks builds quality outdoor decks in Canberra from hardwood, composite timber (Trex, AZEK), recycled timber and aluminium. HIA Outdoor Project award winner.",
};

const deckGallery = ["/images/deck-1.jpg", "/images/deck-2.jpg", "/images/deck-3.jpg", "/images/deck-4.jpg"];

const materials = [
  {
    title: "Hardwood",
    image: "/images/mat-hardwood.jpg",
    text: "Due to its natural looks and durability (if maintained regularly), hardwood is a popular decking material in Canberra. Hardwood options include merbau, spotted gum, ironbark, blackbutt, stringybark, and jarrah. Hardwood decking can be painted or stained (the more popular choice).",
  },
  {
    title: "Composite timber",
    image: "/images/mat-composite.jpg",
    text: "Composite timber is an eco-friendly product made from recycled wood fibre and plastic. Composite timber is strong, lightweight, and finished (it requires no painting, staining, or oiling). ACT Decks has access to quality composite decking from TimberTech, Millboard, Trex, and ModWood.",
  },
  {
    title: "Recycled timber",
    image: "/images/mat-recycled.jpg",
    text: "As the name suggests, recycled timber has been recovered from demolition sites and other building projects. ACT Decks sources its recycled timber decking from Thor’s Hammer in Canberra. Depending on availability, we can usually procure recycled blackbutt, ironbark, spotted gum, and merbau.",
  },
  {
    title: "Aluminium",
    image: "/images/mat-aluminium.jpg",
    text: "ACT Decks supplies and installs DecoDeck aluminium decking in Canberra. DecoDeck is manufactured by Deco Australia and looks like natural timber. DecoDeck is low maintenance, non-combustible (BAL-FZ compliant), and available in 14 timber finishes (plus a concrete-look finish).",
  },
];

export default function DecksPage() {
  return (
    <>
      <PageHero title="Decks" subtitle="Our Services" image="/images/main-deck-photo.jpg" />

      {/* Intro */}
      <section className="section">
        <div className="container-x max-w-4xl prose-content">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Outdoor Decks for any Home or Lifestyle in Canberra
          </h2>
          <p>
            ACT Decks is one of the leading providers of outdoor decks in the Canberra region.
            Our team – led by founder and licensed builder Xavier Duffy – has been building
            quality decks in Canberra since 2012. The Housing Industry Association (HIA)
            recognised our efforts in 2016 by judging us as the winner of its Outdoor Project
            award for the ACT / Southern NSW Region.
          </p>
          <p>
            Outdoor decks come in a range of styles and materials to suit every budget and
            lifestyle. As a decking specialist in Canberra, ACT Decks doesn&apos;t compromise on
            quality: all our decking is secured with screws (not nails); in addition, we use
            only superior materials and products from leading brands. A deck from ACT Decks is
            built to last and adds value to your home in Canberra.
          </p>

          <h2 className="text-3xl md:text-4xl font-medium mt-10 mb-6">The Latest Decking Technologies</h2>
          <p>
            A lot has changed in the decking world in recent years. Although natural timber
            decks are still popular in Canberra, many clients choose low-maintenance composite
            timber solutions. Composite timber – made from recycled wood fibre and plastic – is
            the eco-friendly alternative to natural timber (it also requires no finishing and is
            easy to maintain).
          </p>
          <p>
            ACT Decks recommends Trex composite decking and TimberTech AZEK capped PVC decking.
            Trex is the world&apos;s largest producer of composite decking – made from “95% reclaimed
            timber and plastic.” Timbertech&apos;s AZEK product is renowned for its moisture and slip
            resistance qualities (it&apos;s “made from a complex blend of up to 54% recycled material”).
          </p>

          <h2 className="text-3xl md:text-4xl font-medium mt-10 mb-6">Types of Decks We Build in Canberra</h2>
          <p>The talented team at ACT Decks builds the following types of decks in Canberra:</p>
          <ul>
            <li>Attached decks (secured to your property)</li>
            <li>Detached decks (built away from your property)</li>
            <li>Wraparound decks</li>
            <li>Multi-tier decks</li>
            <li>Pool and spa decks (for both in-ground and above ground pools / spas)</li>
          </ul>
          <p>
            Our quality decks can be made from hardwood, composite timber, recycled timber, or
            aluminium. ACT Decks provides an end-to-end decking solution in Canberra – from
            design to construction and project completion. We take care of any required Building
            Approvals (BA) or Development Applications (DA). As a leading provider of decks in
            Canberra, ACT Decks complies with the Building Code of Australia (BCA) and all
            relevant Australian Standards.
          </p>
        </div>

        {/* Intro gallery */}
        <div className="container-x mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {deckGallery.map((src, i) => (
              <div key={i} className="relative aspect-[3/2] overflow-hidden shadow-sm">
                <Image src={src} alt="ACT Decks decking project" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width:768px) 50vw, 25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decking Products We Use — text left, image right */}
      <section className="section bg-black text-white/85">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-center">
          <div className="prose-content">
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-white">Decking Products We Use in Canberra</h2>
            <p>
              ACT Decks partners with some of the biggest producers of composite decking in the
              industry, including TimberTech (makers of AZEK), Millboard, and Trex. We also use
              quality Australian hardwoods, such as Spotted Gum, on projects requiring natural
              timber. Another popular option is aluminium decking, which we source from Australian
              company DecoDeck.
            </p>
            <p>
              All our decks in Canberra are screwed and bolted (not nailed) – ensuring longevity
              and improved safety. We use quality fastening solutions from Macsim and Konnect. For
              subfloors, we often use Spanmor&apos;s aluminium subfloor system, though we also provide
              timber joists. Macsim, Konnect, and Spanmor are all Australian companies committed to
              building excellence.
            </p>
            <p>
              A deck in Canberra wouldn&apos;t be complete without stairs and handrails. ACT Decks has
              you covered for safe and stylish stairs and handrails in the Canberra region. We also
              build pergolas (open, covered, enclosed) from hardwood and galvanised steel. We source
              our pergola materials from the likes of Versiclad, Spanmor, Ampelite, Stratco,
              DuraGal, and Colorbond.
            </p>
          </div>
          <div className="relative aspect-[565/642] shadow-xl order-first lg:order-last">
            <Image src="/images/decking-products.jpg" alt="Decking products we use" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Decking Materials Explained — 4 cards */}
      <section className="section">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-medium">Decking Materials Explained</h2>
            <p className="mt-3">
              It&apos;s easy to get confused by all the decking materials available on the market. ACT
              Decks supplies the following “common” decking materials in Canberra.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {materials.map((m) => (
              <article key={m.title} className="bg-white shadow-sm hover:shadow-xl transition-shadow overflow-hidden flex flex-col border border-gray-100">
                <div className="relative aspect-square">
                  <Image src={m.image} alt={m.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 25vw" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading text-2xl font-semibold mb-2 text-brand-orange">{m.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{m.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <GetInTouch />
    </>
  );
}
