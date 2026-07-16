import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import GetInTouch from "@/components/GetInTouch";

export const metadata: Metadata = {
  title: "Windows & Doors Installation Canberra - ACT Decks",
  description:
    "ACT Decks installs quality windows and doors in Canberra from Trend Windows & Doors and Monaro Windows — timber, aluminium and uPVC frames, double glazing and every door style.",
};

const benefits = [
  "Increased natural light.",
  "Improved energy efficiency (double-glazed windows and thermally broken frames reduce external airflow).",
  "Better physical security (solid, lockable doors and double-glazed windows are harder to break or smash).",
  "Reduced noise (double-glazed windows and quality doors are thicker).",
];

const gallery = ["/images/wd-1.jpg", "/images/wd-2.jpg", "/images/wd-3.jpg", "/images/wd-4.jpg"];

export default function WindowsDoorsPage() {
  return (
    <>
      <PageHero title="Windows & Doors" subtitle="Our Services" image="/images/windows-and-doors-main-photo-1.jpg" />

      {/* Intro + benefits + frame materials/styles */}
      <section className="section">
        <div className="container-x max-w-4xl prose-content">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Windows and Doors for Outdoor Living Spaces – Canberra</h2>
          <p>
            As part of its deck and pergola projects, ACT Decks installs quality windows and doors
            in the Canberra region. We source our windows and doors from leading manufacturers,
            such as Trend Windows &amp; Doors and Monaro Windows. As a licensed builder in Canberra, we
            can customise windows and doors to suit any outdoor living space.
          </p>

          <h2 className="text-3xl md:text-4xl font-medium mt-10 mb-6">Benefits of Quality Windows and Doors in Canberra</h2>
          <p>
            Quality doors and windows add the finishing touches to an enclosed pergola or
            pergola-deck solution in Canberra. Benefits include:
          </p>
          <ul>{benefits.map((b) => <li key={b}>{b}</li>)}</ul>
          <p>At ACT Decks, we help you choose the windows and doors to suit your Canberra lifestyle and budget.</p>
        </div>

        {/* 4-photo gallery */}
        <div className="container-x my-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((src, i) => (
              <div key={i} className="relative aspect-[3/2] overflow-hidden shadow-sm">
                <Image src={src} alt="ACT Decks windows and doors project" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width:768px) 50vw, 25vw" />
              </div>
            ))}
          </div>
        </div>

        <div className="container-x max-w-4xl prose-content">
          <h3 className="text-2xl font-heading font-semibold text-brand-navy mt-8 mb-3">Window Frame Materials</h3>
          <p>
            ACT Decks supplies and installs quality window frames made from timber, aluminium, and
            unplasticised polyvinyl chloride (uPVC). All three materials have their pros and cons.
          </p>
          <ul>
            <li><strong>Timber frames</strong> are very stylish and don&apos;t conduct heat; however, they require more maintenance than aluminium and uPVC frames, and are generally more expensive.</li>
            <li><strong>Aluminium frames</strong> are strong, durable, and lightweight; however, aluminium is a good conductor and a poor insulator. Thermally broken frames, which incorporate a polyamide barrier, improve the insulation qualities of aluminium.</li>
            <li><strong>uPVC frames</strong> perform in much the same way as timber frames (they don&apos;t conduct heat); however, they&apos;re more durable and easier to maintain than timber frames.</li>
          </ul>
          <p>
            Timber, aluminium, and uPVC frames are all suitable for double glazing in Canberra.
            Aesthetics and budget usually determine a client&apos;s choice of window frame material.
          </p>

          <h3 className="text-2xl font-heading font-semibold text-brand-navy mt-8 mb-3">Window Frame Styles</h3>
          <p>
            Clients can choose from fixed, stacking, sliding, awning, double hung, sashless,
            bi-fold, louvre, and casement windows in Canberra. Our experienced consultants will
            help you make the right choice – to suit your budget and décor – in this area.
          </p>
        </div>
      </section>

      {/* Decorative image banner */}
      <section className="relative h-[300px] md:h-[460px]">
        <Image src="/images/wd-banner.jpg" alt="ACT Decks windows and doors" fill className="object-cover" sizes="100vw" />
      </section>

      {/* Double glazing + doors */}
      <section className="section">
        <div className="container-x max-w-4xl prose-content">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Benefits of Double Glazing in Canberra</h2>
          <p>
            Given the local climate extremes, double-glazed windows in Canberra are a no-brainer.
            Double-glazed windows reduce energy usage (in summer and winter), improve window
            security (they&apos;re hard to break), and reduce external noise (they have superior
            thickness).
          </p>
          <p>
            In terms of decoration, double-glazed units can be fitted with tinted glass, laminated
            glass, clear float glass, toughened safety glass, reflective glass, and low-e glass (to
            minimise solar heat gain). ACT Decks – in partnership with Trend Windows &amp; Doors and
            Monaro Windows – has you covered for double glazing in Canberra. ACT Decks also supplies
            quality aluminium flyscreens to complement your double-glazed windows.
          </p>

          <h3 className="text-2xl font-heading font-semibold text-brand-navy mt-8 mb-3">Door Materials and Styles</h3>
          <p>
            ACT Decks supplies and installs doors made from timber (solid and hollow core),
            aluminium, glass, fibreglass, steel, unplasticised polyvinyl chloride (uPVC), and
            stained glass / leadlight.
          </p>
          <p>
            We also have you covered for all the door styles, including flush doors, panel doors,
            bi-fold doors, sliding doors, stacking doors, French doors, double doors, pocket doors,
            and barn doors.
          </p>
        </div>
      </section>

      <GetInTouch />
    </>
  );
}
