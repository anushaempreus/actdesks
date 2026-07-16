import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug, projectGalleries } from "@/lib/data";
import GetInTouch from "@/components/GetInTouch";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project - ACT Decks" };
  return {
    title: `${project.name} - ACT Decks`,
    description: project.description.slice(0, 160),
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  // Three related projects (following ones in the list, wrapping around)
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const related = [1, 2, 3].map((n) => projects[(idx + n) % projects.length]);

  const gallery = projectGalleries[project.slug] ?? [project.image];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[360px] md:h-[520px] flex items-end">
        <Image src={project.image} alt={project.name} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent" />
        <div className="container-x relative text-white pb-12">
          <p className="text-sm uppercase tracking-[2px] text-brand-orange font-semibold mb-2">
            {project.categories}
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-white">{project.name}</h1>
        </div>
      </section>

      {/* Project Information — big image beside the text */}
      <section className="section">
        <div className="container-x grid gap-10 lg:gap-12 lg:grid-cols-2 items-stretch">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[420px] overflow-hidden shadow-xl">
            <Image src={gallery[0]} alt={project.name} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
          </div>
          <div className="prose-content">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Project Information</h2>
            <p>{project.description}</p>
            <div className="mt-8">
              <h3 className="font-heading text-xl font-semibold mb-3 !text-brand-orange">Scope of Work</h3>
              <ul className="flex flex-wrap gap-2 mb-6">
                {project.categories.split(/\s*·\s*/).map((c) => (
                  <li key={c} className="bg-light px-4 py-1.5 text-sm">{c}</li>
                ))}
              </ul>
              <Link href="/contact" className="btn-orange">Enquire Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Smaller project photos below */}
      {gallery.length > 1 && (
        <section className="pb-16 md:pb-24">
          <div className="container-x">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {gallery.slice(1).map((src, i) => (
                <div key={src} className="relative aspect-[4/3] overflow-hidden shadow-sm">
                  <Image
                    src={src}
                    alt={`${project.name} project photo ${i + 2}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width:768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Portfolio */}
      <section className="section bg-light">
        <div className="container-x">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-3xl md:text-4xl font-medium">Related Portfolio</h2>
            <Link href="/showcase" className="text-brand-orange font-semibold uppercase text-sm tracking-wide hover:text-brand-navy">
              View All →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/portfolio/${r.slug}`} className="group relative aspect-[4/3] overflow-hidden shadow-sm">
                <Image src={r.image} alt={r.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs uppercase tracking-wide text-brand-orange font-semibold">{r.categories}</p>
                  <span className="font-heading text-2xl font-semibold">{r.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GetInTouch />
    </>
  );
}
