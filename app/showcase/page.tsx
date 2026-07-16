import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import GetInTouch from "@/components/GetInTouch";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Showcase - ACT Decks",
  description:
    "A showcase of completed ACT Decks projects across Canberra — decks, pergolas, stairs, balustrades, pool fencing and privacy screening.",
};

export default function ShowcasePage() {
  return (
    <>
      <PageHero title="Showcase" subtitle="Recent Projects" image="/images/210624_0070.jpeg" />

      <section className="section">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-medium">Some of our recent work in Canberra</h2>
            <p className="mt-3">
              Explore a selection of decks, pergolas and outdoor living spaces we&apos;ve built across
              the Canberra region.
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {projects.map((p, i) => {
              const imageRight = i % 2 === 1;
              return (
                <article key={`${p.name}-${i}`} className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
                  <Link
                    href={`/portfolio/${p.slug}`}
                    className={`group relative aspect-[4/3] overflow-hidden shadow-xl ${imageRight ? "lg:order-last" : ""}`}
                  >
                    <Image
                      src={p.image}
                      alt={`${p.name} project`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width:1024px) 100vw, 50vw"
                    />
                  </Link>
                  <div>
                    <p className="text-sm uppercase tracking-[2px] text-brand-orange font-semibold mb-2">
                      {p.categories}
                    </p>
                    <h3 className="font-heading text-3xl md:text-4xl font-semibold mb-4">{p.name}</h3>
                    <p className="text-body leading-relaxed mb-6">{p.description}</p>
                    <Link href={`/portfolio/${p.slug}`} className="btn">View Project</Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <GetInTouch />
    </>
  );
}
