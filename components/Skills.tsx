import { skills } from "@/lib/data";
import SectionLabel from "@/components/SectionLabel";
import RevealItem from "@/components/RevealItem";
import TechIcon from "@/components/TechIcon";

export default function Skills() {
  return (
    <section id="skills" className="hairline">
      <div className="mx-auto max-w-wide px-6 py-16 md:px-10 md:py-24">
        <SectionLabel text="skills" />
        <h2 className="mt-4 font-display text-2xl font-semibold text-ink md:text-3xl">
          Tools &amp; practices
        </h2>

        <div className="mt-12 space-y-10">
          {skills.map((group, i) => (
            <div key={group.category}>
              <h3 className="font-mono text-xs uppercase tracking-wider2 text-slate">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {group.items.map((item, j) => (
                  <RevealItem key={item} delay={i * 80 + j * 40}>
                    <div className="group flex items-center gap-2 rounded-sm border border-hairline bg-surface px-3.5 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent-dim">
                      <TechIcon
                        name={item}
                        className="h-4 w-4 flex-shrink-0 text-slate transition-all duration-200 group-hover:scale-110 group-hover:text-accent"
                      />
                      <span className="text-[14px] text-ink">{item}</span>
                    </div>
                  </RevealItem>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
