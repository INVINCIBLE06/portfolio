import { experience } from "@/lib/data";
import SectionLabel from "@/components/SectionLabel";
import RevealItem from "@/components/RevealItem";

export default function Experience() {
  return (
    <section id="experience" className="hairline">
      <div className="mx-auto max-w-wide px-6 py-16 md:px-10 md:py-24">
        <SectionLabel text="experience" />
        <h2 className="mt-4 font-display text-2xl font-semibold text-ink md:text-3xl">
          Where I&apos;ve worked
        </h2>

        <div className="mt-12 max-w-content">
          {experience.map((entry, i) => (
            <RevealItem key={i} delay={i * 120}>
              <div className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="commit-dot mt-2" />
                  {i !== experience.length - 1 && (
                    <div className="commit-line flex-1" />
                  )}
                </div>
                <div className={i !== experience.length - 1 ? "pb-12" : ""}>
                  <p className="font-mono text-xs text-slate">{entry.period}</p>
                  <h3 className="mt-1.5 font-display text-lg font-semibold text-ink">
                    {entry.role}
                    <span className="font-body font-normal text-slate">
                      {" "}
                      · {entry.company}
                    </span>
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate">
                    {entry.summary}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {entry.highlights.map((highlight, j) => (
                      <li
                        key={j}
                        className="flex gap-2.5 text-[15px] leading-relaxed text-ink"
                      >
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}
