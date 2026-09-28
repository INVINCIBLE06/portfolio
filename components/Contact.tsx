import { site } from "@/lib/data";
import SectionLabel from "@/components/SectionLabel";
import RevealItem from "@/components/RevealItem";
import { LuDownload, LuMail, LuPhone } from "react-icons/lu";

export default function Contact() {
  const resume = site.socials.find((s) => s.label === "Resume");

  const cards = [
    resume && {
      icon: LuDownload,
      label: "Resume",
      value: "Download PDF",
      href: resume.url,
      download: true,
    },
    {
      icon: LuMail,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: LuPhone,
      label: "Phone",
      value: site.phone,
      href: `tel:${site.phone.replace(/[^+\d]/g, "")}`,
    },
  ].filter(Boolean) as {
    icon: typeof LuMail;
    label: string;
    value: string;
    href: string;
    download?: boolean;
  }[];

  return (
    <section id="contact" className="hairline">
      <div className="mx-auto max-w-wide px-6 py-16 md:px-10 md:py-24">
        <SectionLabel text="contact" />
        <h2 className="mt-4 max-w-content font-display text-2xl font-semibold text-ink md:text-3xl">
          Let&apos;s talk about your next project
        </h2>
        <p className="mt-4 max-w-content text-[17px] leading-relaxed text-slate">
          The fastest way to reach me is email or phone — I usually reply
          within a day or two. You can also grab a copy of my resume below.
        </p>

        <div className="mt-10 grid max-w-content gap-4 sm:grid-cols-3">
          {cards.map((card, i) => (
            <RevealItem key={card.label} delay={i * 100} className="h-full">
              <a
                href={card.href}
                download={card.download}
                target={card.download ? undefined : "_blank"}
                rel={card.download ? undefined : "noopener noreferrer"}
                className="group flex h-full flex-col justify-between gap-6 rounded-sm border border-hairline bg-surface p-5 transition-colors hover:border-accent"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-accent-dim text-accent transition-transform duration-200 group-hover:scale-110">
                  <card.icon size={16} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-xs text-slate">{card.label}</p>
                  <p className="mt-1 break-words text-[15px] font-medium text-ink">
                    {card.value}
                  </p>
                </div>
              </a>
            </RevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}
