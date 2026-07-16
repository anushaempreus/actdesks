import Image from "next/image";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group bg-white shadow-sm hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.name} project`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs uppercase tracking-wide text-brand-orange font-semibold mb-1">
          {project.categories}
        </p>
        <h3 className="font-heading text-2xl font-semibold mb-3">{project.name}</h3>
        <p className="text-sm text-body leading-relaxed">{project.description}</p>
      </div>
    </article>
  );
}
