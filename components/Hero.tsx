import { site } from "@/lib/data";
import HeroTagline from "@/components/HeroTagline";
import CodeWindow from "@/components/CodeWindow";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-aurora" aria-hidden="true">
        <span className="hero-aurora-blob hero-aurora-blob--a" />
        <span className="hero-aurora-blob hero-aurora-blob--b" />
      </div>

      <div className="relative z-10 mx-auto max-w-wide px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:items-center">
          <div>
            {site.available && (
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-dim px-3.5 py-1.5 font-mono text-xs font-medium text-accent">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                Available for new roles
              </div>
            )}

            <h1 className="max-w-content font-display text-[2.5rem] font-semibold leading-[1.1] tracking-tight text-ink md:text-6xl">
              {site.name}
            </h1>
            <p className="mt-3 font-mono text-sm text-accent md:text-base">
              <HeroTagline text={`${site.role} · ${site.location}`} />
            </p>
            <p className="mt-8 max-w-content text-lg leading-relaxed text-slate md:text-xl">
              {site.summary}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="rounded-sm bg-ink px-5 py-2.5 font-mono text-sm text-paper transition-opacity hover:opacity-85"
              >
                View projects
              </a>
              <a
                href={`mailto:${site.email}`}
                className="link-underline pb-0.5 font-mono text-sm text-ink"
              >
                {site.email}
              </a>
            </div>
          </div>

          <CodeWindow />
        </div>
      </div>
    </section>
  );
}
