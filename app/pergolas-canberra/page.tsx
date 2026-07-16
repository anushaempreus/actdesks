import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import GetInTouch from "@/components/GetInTouch";

export const metadata: Metadata = {
  title: "Pergolas Canberra - ACT Decks | Pergola Builders Canberra",
  description:
    "ACT Decks builds stylish pergolas in Canberra from hardwood, galvanised steel and aluminium — open, gabled, pitched and louvered. Premium materials from Versiclad, Ampelite, Stratco and more.",
};

const benefits = [
  "Great for outdoor entertaining.",
  "Adds a living space to your home.",
  "Can add resale value to a home over time.",
  "Makes a home look better in many cases.",
  "Extends the time you can spend outdoors, especially if the pergola has roofing, walls, and/or lighting.",
  "Ideal for growing vines and ferns.",
  "Can sometimes provide the home it’s attached to with an additional layer of energy efficiency.",
];

const types = [
  {
    title: "Open-roof Pergola",
    image: "/images/perg-open-roof.jpg",
    text: "A conventional open-roof pergola doesn’t have a roof and is box or rectangular-shaped. Open-roof pergolas are common in Canberra and are relatively inexpensive to build. They channel airflow, but provide a lower level of shade than pergolas with a roof.",
  },
  {
    title: "Gabled Pergola",
    image: "/images/perg-gabled.jpg",
    text: "A gabled pergola has a ridged or peaked roof that provides additional headroom and encourages water runoff. Many people like the look of a gabled pergola, as it provides a “holiday resort” feel. Since 2012, ACT Decks has built numerous gabled pergolas in the Canberra region.",
  },
  {
    title: "Pitched Pergola",
    image: "/images/perg-pitched.jpg",
    text: "A pitched pergola is a sloping roof (often Colorbond) attached to a dwelling or wall. Due to having a single sloping roof, pitched pergolas handle water runoff well and collect fewer leaves. Many clients opt to enclose a pitched pergola – effectively creating another room in the process.",
  },
  {
    title: "Louvered Pergola (Stratco Pavilion Allure)",
    image: "/images/perg-louvered.jpg",
    text: "Stratco’s Pavilion Allure louvered patio roofing is designed for year-round alfresco living. The remote-controlled louvres enable a homeowner to alternate between an open-roof pergola and a covered one. Stratco Pavilion Allure is perfect for clients seeking a “flexible” pergola in Canberra.",
  },
];

const gallery = [
  "perg-g1", "perg-g2", "perg-g3", "perg-g4", "perg-g5", "perg-l1",
  "perg-l2", "perg-l3", "perg-l4", "perg-l5", "perg-sg1", "perg-sg2",
].map((n) => `/images/${n}.jpg`);

const roofingOptions = [
  {
    title: "Versiclad",
    image: "/images/opt-versiclad.jpg",
    text: "Versiclad’s Structural Insulated Panels are perfect for creating a comfortable and stylish outdoor space that can be enjoyed all year round. The unique insulation properties of Versiclad panels help to regulate temperature, keeping you cool in summer and warm in winter.",
  },
  {
    title: "Ampelite",
    image: "/images/opt-ampelite.jpg",
    text: "One of the standout features of Ampelite sheets is their ability to come in a variety of colours that allow different percentages of light and heat transfer. The clear polycarbonate sheets allow for maximum light transmission, while the bronze and opal sheets offer varying levels of shading and heat reduction.",
  },
  {
    title: "Louvered",
    image: "/images/opt-louvered.jpg",
    text: "The Stratco Outback Louvered pergola is a versatile and stylish outdoor living solution that offers you complete control over the amount of sunlight and shade in your outdoor area. With adjustable louvers, you can easily create the perfect atmosphere for any occasion.",
  },
];

export default function PergolasPage() {
  return (
    <>
      <PageHero title="Pergolas" subtitle="Our Services" image="/images/pergola-main-photo.jpg" />

      {/* Intro + benefits */}
      <section className="section">
        <div className="container-x max-w-4xl prose-content">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Stylish and Functional Pergolas in Canberra</h2>
          <p>
            ACT Decks has been building quality pergolas in Canberra since 2012. We build pergolas
            out of hardwood, galvanised steel, and aluminium. Our pergolas come in various styles
            and can be covered and enclosed. As a leading provider of pergolas in Canberra, we use
            only premium materials from the likes of Spanmor, Ampelite, Versiclad, Stratco,
            DuraGal, and Colorbond. ACT Decks has pergolas to suit every lifestyle and budget in
            Canberra.
          </p>

          <h2 className="text-3xl md:text-4xl font-medium mt-10 mb-6">Benefits of a Pergola in Canberra</h2>
          <p>A pergola adds many tangible and intangible benefits to a home in Canberra.</p>
          <ul>
            {benefits.map((b) => <li key={b}>{b}</li>)}
          </ul>
          <p>ACT Decks is your one-stop shop for quality pergolas in the Canberra region.</p>
        </div>
      </section>

      {/* Types of Pergolas — 4 cards with orange headings */}
      <section className="section bg-light">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-medium">Types of Pergolas</h2>
            <p className="mt-3">
              Pergolas come in many forms and sizes. ACT Decks will help you select a pergola that
              suits your lifestyle, home design, and budget in Canberra.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {types.map((t) => (
              <article key={t.title} className="bg-white shadow-sm hover:shadow-xl transition-shadow overflow-hidden flex flex-col border border-gray-100">
                <div className="relative aspect-[4/3]">
                  <Image src={t.image} alt={t.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 25vw" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading text-xl font-semibold mb-2 text-brand-orange">{t.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{t.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="pt-16 md:pt-24 pb-0">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery.map((src, i) => (
              <div key={i} className="relative aspect-[3/2] overflow-hidden shadow-sm">
                <Image src={src} alt="ACT Decks pergola project" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width:768px) 50vw, 25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pergola Materials Explained — text overlaid on image banner */}
      <section className="pt-10 md:pt-12 pb-10 md:pb-12">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl min-h-[340px] md:min-h-[430px] flex items-center">
            <Image src="/images/perg-banner.jpg" alt="ACT Decks pergola" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-brand-navy/65" />
            <div className="relative max-w-2xl text-white px-8 md:px-14 py-10">
              <h2 className="font-heading text-3xl md:text-5xl font-semibold text-white mb-5">
                Pergola Materials Explained
              </h2>
              <p className="text-white/90 leading-relaxed">
                Most of the pergolas we build in Canberra are made from hardwood or galvanised
                steel, though aluminium is occasionally used. Hardwood has a natural beauty that&apos;s
                difficult to beat but isn&apos;t as strong (or durable) as galvanised steel. ACT Decks
                will help you choose a material to suit your needs and budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Options for Pergolas */}
      <section className="section bg-light">
        <div className="container-x">
          <div className="max-w-4xl mx-auto mb-12 prose-content text-center">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Options for Pergolas in Canberra</h2>
            <p>
              Pergolas are flexible structures that can be covered and enclosed. ACT Decks provides
              a wide range of roofing, wall, ceiling, window, and door options.
            </p>
            <h3 className="text-2xl font-heading font-semibold text-brand-orange mt-6 mb-2">Roofing</h3>
            <p>
              Clients can choose from insulated roof panels, polycarbonate, or a louvered roofing
              system. ACT Decks has access to all the big names in pergola roofing, including
              Colorbond, Ampelite, Versiclad, and Stratco. Versiclad, Ampelite, Stratco, and
              BlueScope (manufacturer of Colorbond) are all iconic Australian companies with proven
              track records in the building sector.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {roofingOptions.map((o) => (
              <article key={o.title} className="bg-white shadow-sm hover:shadow-xl transition-shadow overflow-hidden flex flex-col border border-gray-100">
                <div className="relative aspect-[4/3]">
                  <Image src={o.image} alt={o.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading text-xl font-semibold mb-2 text-brand-orange">{o.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{o.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="max-w-4xl mx-auto mt-12 prose-content text-center">
            <h3 className="text-2xl font-heading font-semibold text-brand-orange mb-3">Walls, Ceilings, Windows, and Doors</h3>
            <p>
              ACT Decks supplies and installs quality insulated wall and ceiling panels from
              Versiclad. We also provide door and window solutions to suit your pergola and/or home
              from Monaro Windows and Trend Windows &amp; Doors.
            </p>
          </div>
        </div>
      </section>

      <GetInTouch />
    </>
  );
}
