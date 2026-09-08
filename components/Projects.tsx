import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-base-border bg-base-surface/40">
      <div className="mx-auto max-w-content px-6 py-20">
        <p className="section-label">/projects</p>
        <h2 className="mt-2 text-2xl font-semibold text-ink sm:text-3xl">
          Selected Projects
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col overflow-hidden rounded-lg border border-base-border bg-base transition-colors hover:border-signal-tealDim"
            >
              <div className="relative aspect-video w-full border-b border-base-border bg-base-raised">
                <Image
                  src={project.thumbnail}
                  alt={`Thumbnail proyek ${project.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-xs text-ink-faint">{project.number}</p>
                <h3 className="mt-1 text-lg font-medium text-ink">{project.title}</h3>
                <p className="mt-1 font-mono text-xs text-signal-amber">{project.status}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded border border-base-border px-2 py-0.5 font-mono text-[11px] text-ink-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="focus-ring rounded border border-base-border px-3 py-1.5 text-xs text-ink transition-colors hover:border-signal-teal hover:text-signal-teal"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className="focus-ring rounded border border-base-border px-3 py-1.5 text-xs text-ink transition-colors hover:border-signal-teal hover:text-signal-teal"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
