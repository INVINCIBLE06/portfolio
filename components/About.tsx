import { about } from "@/lib/data";
import SectionLabel from "@/components/SectionLabel";

export default function About() {
  return (
    <section id="about" className="hairline">
      <div className="mx-auto max-w-wide px-6 py-16 md:px-10 md:py-24">
        <SectionLabel text="about" />
        <div className="mt-6 max-w-content space-y-5">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-[17px] leading-relaxed text-slate">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
