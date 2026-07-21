import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import CtaBanner from "@/components/CtaBanner";

const homeServices = [
  {
    title: "Decks",
    image: "/images/main-deck-photo.jpg",
    href: "/decking-canberra",
    blurb:
      "ACT Decks sets the standard for outdoor decks in Canberra. We build quality decks from hardwood, composite timber (Trex, AZEK), recycled timber, and aluminium. Whether you desire an attached deck or a wraparound deck, ACT Decks has you covered for decks in the Canberra region.",
  },
  {
    title: "Pergolas",
    image: "/images/pergola-main-photo.jpg",
    href: "/pergolas-canberra",
    blurb:
      "Pergolas are a great way to add value and liveability to your home. ACT Decks builds pergolas in Canberra out of hardwood, steel, and aluminium. Pergolas can be covered and/or enclosed with panels made from various timbers, aluminium, polycarbonate, and corrugated iron.",
  },
  {
    title: "Stairs",
    image: "/images/main-photo.jpg",
    href: "/handrails-stairs-canberra",
    blurb:
      "Stairs are an integral part of most decking solutions. ACT Decks constructs stylish outdoor stairs from durable hardwood as well as composite timber in the Canberra region. We design and install stringer and box stairs. Our stairs are renowned for their structural integrity.",
  },
  {
    title: "Handrails",
    image: "/images/use-for-handrails-photo.jpg",
    href: "/handrails-stairs-canberra",
    blurb:
      "Safe, stylish handrails complete any deck or staircase. ACT Decks designs and installs handrails from natural timber, frameless glass, powder-coated aluminium, and stainless steel — all built to Australian Standards for lasting peace of mind.",
  },
  {
    title: "Pool Fencing and Privacy Screens",
    image: "/images/main-photo-.jpg",
    href: "/pool-fencing-and-privacy-screens-canberra",
    blurb:
      "ACT Decks supplies and installs pool fences and privacy screens in the Canberra region. We offer a range of materials, finishes, and styles to suit every home design and budget. Pool fences and privacy screens are great for safety, security, and privacy — not to mention your property value.",
  },
  {
    title: "Windows and Doors",
    image: "/images/windows-and-doors-main-photo-1.jpg",
    href: "/windows-and-doors-canberra",
    blurb:
      "As part of its deck and pergola projects, ACT Decks supplies and installs quality windows and doors from Trend Windows & Doors and Monaro Windows. We can customise windows and doors to suit any outdoor living space in the Canberra region.",
  },
];

const whyChoose = [
  "Fully insured and licensed (ACT Builder Licence: 2015624).",
  "Highly experienced in decks and pergolas in the Canberra region.",
  "Access to some of the best building products on the market from TimberTech (AZEK), Versiclad, Ampelite, Spanmor, Millboard, Trex, and DecoDeck.",
  "Knowledge of the latest construction techniques, materials, and design trends.",
  "Access to building certifiers (Capital Certifiers), land surveyors (Clarke & Di Pauli), and architectural design services (Design by Rabbit).",
  "Member of Housing Industry Association (HIA) and Master Builders Association (MBA).",
];

const homeProjects = projects.filter((p) =>
  ["Bonner", "Farrer", "Garran", "Macgregor", "O’Connor", "Theodore"].includes(p.name)
);

export default function Home() {
  return (
    <>
      {/* Hero — background video */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/ACT-Decks-Exerior-hd.jpg"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-brand-navy/55" />
        <div className="container-x relative text-white py-20 text-left">
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl max-w-3xl leading-[1.05] text-white">
            Outdoor Living Solutions to Enhance Your Lifestyle
          </h1>
          <p className="mt-4 font-heading text-xl md:text-3xl text-white/90 font-medium">
            Quality Decks and Pergolas – Canberra
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-orange">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Intro — split: heading left, text right */}
      <section className="section">
        <div className="container-x grid gap-8 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-medium leading-tight">
              Quality Decks and Pergolas – Canberra
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="mb-5">
              Looking for a stunning and functional deck or pergola in Canberra? Need pool
              fencing that complies with the ACT Government&apos;s new pool safety regulations?
              ACT Decks is the region&apos;s premier provider of outdoor living solutions. We have
              you covered for decks, pergolas (open and enclosed), handrails, stairs, pool
              fencing, and privacy screens in the Canberra region.
            </p>
            <p>
              Since opening its doors in 2012, ACT Decks has completed over 3,500 projects in
              Canberra and surrounding areas. You may know someone who has hired us to build a
              quality deck or pergola in Canberra. Founder and licensed builder Xavier Duffy is
              the driving force behind ACT Decks, which employs 18 dedicated staff.
            </p>
          </div>
        </div>
      </section>

      {/* Showroom — dark image banner, white centered text */}
      <section className="relative py-24">
        <Image src="/images/USE-THEODORE-2.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-brand-navy/80" />
        <div className="container-x relative text-center text-white max-w-3xl">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-4">
            ACT Decks has a Showroom
          </h2>
          <p className="text-white/90 text-lg">
            Potential clients can gain an insight into the solutions we provide at our new
            showroom in Fyshwick (10/157 Gladstone Street).
          </p>
        </div>
      </section>

      {/* Services overview — 6 boxes */}
      <section className="section">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-medium mb-4">
              An Overview of our Outdoor Living Solutions
            </h2>
            <p>
              ACT Decks is your go-to provider of outdoor living solutions, including decks and
              pergolas, in the Canberra region.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((s) => (
              <article key={s.title} className="bg-white shadow-sm hover:shadow-xl transition-shadow overflow-hidden flex flex-col border border-gray-100">
                <div className="relative aspect-[3/2]">
                  <Image src={s.image} alt={s.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading text-2xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-sm text-body leading-relaxed flex-1">{s.blurb}</p>
                  <Link href={s.href} className="mt-5 inline-block text-brand-orange font-semibold uppercase text-sm tracking-wide hover:text-brand-navy">
                    Learn More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose — full width list, no image */}
      <section className="section bg-light">
        <div className="container-x max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-8">Why Choose ACT Decks</h2>
          <ul className="space-y-4 text-left inline-block">
            {whyChoose.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-brand-orange font-bold shrink-0 mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8">
            To organise a quote on a deck, pergola, or other outdoor living solution in the
            Canberra region, please call the experienced team at ACT Decks on{" "}
            <a href="tel:0262806858" className="text-brand-orange font-semibold">02 6280 6858</a>.
          </p>
        </div>
      </section>

      {/* Projects — dark navy background */}
      <section className="section bg-brand-dark">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="eyebrow">Our Projects</p>
            <h2 className="text-4xl md:text-5xl font-medium text-white">Some of our projects</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeProjects.map((p) => (
              <Link key={p.name} href="/showcase" className="group relative aspect-[3/4] overflow-hidden">
                <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent" />
                <span className="absolute bottom-5 left-5 font-heading text-white text-2xl font-semibold">
                  {p.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/showcase" className="btn-orange">View All Projects</Link>
          </div>
        </div>
      </section>

      <CtaBanner text="Get a quote on your deck, pergola or outdoor living solution" />
    </>
  );
}
