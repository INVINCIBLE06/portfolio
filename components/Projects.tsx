import { projects } from "@/lib/data";
import SectionLabel from "@/components/SectionLabel";
import RevealItem from "@/components/RevealItem";

export default function Projects() {
  return (
    <section id="projects" className="hairline">
      <div className="mx-auto max-w-wide px-6 py-16 md:px-10 md:py-24">
        <SectionLabel text="projects" />
        <h2 className="mt-4 font-display text-2xl font-semibold text-ink md:text-3xl">
          Selected work
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <RevealItem key={project.name} delay={i * 100} className="h-full">
              <article className="flex h-full flex-col justify-between rounded-sm border border-hairline bg-surface p-6 transition-colors hover:border-accent">
                <div>
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {project.name}
                    </h3>
                    <span className="font-mono text-xs text-slate">
                      {project.period}
                    </span>
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6">
                  <ul className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-sm border border-hairline bg-paper px-2 py-1 font-mono text-xs text-slate"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex gap-5">
                    {project.link && (
                      <a
                        href={project.link}
                        className="link-underline pb-0.5 font-mono text-xs text-ink"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View live ↗
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        className="link-underline pb-0.5 font-mono text-xs text-ink"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}
