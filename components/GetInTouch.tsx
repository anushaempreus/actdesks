import Link from "next/link";
import { company } from "@/lib/data";

export default function GetInTouch() {
  return (
    <section className="relative min-h-[420px] flex items-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/get-in-touch-poster.jpeg"
      >
        <source src="/images/get-in-touch.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-brand-navy/70" />
      <div className="container-x relative text-center text-white py-20">
        <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-5">
          Get in touch
        </h2>
        <p className="text-white/90 text-lg mb-8">
          To organise a quote on a deck, pergola, or other outdoor living solution in the
          Canberra region, call the experienced team at ACT Decks on{" "}
          <a href={company.phoneHref} className="font-semibold underline">{company.phone}</a>.
        </p>
        <Link href="/contact" className="btn-orange">Contact Us</Link>
      </div>
    </section>
  );
}
