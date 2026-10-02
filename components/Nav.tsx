import { Kaushan_Script } from "next/font/google";
import { site } from "@/lib/data";
import ThemeToggle from "@/components/ThemeToggle";

const monogram = Kaushan_Script({ subsets: ["latin"], weight: "400" });

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-paper hairline">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-wide items-center justify-between px-6 py-4 md:px-10"
      >
        {/* Signature-style monogram — uses the theme's ink/accent tokens so
            it flips with light/dark mode instead of staying a fixed color. */}
        <a
          href="#top"
          aria-label={`${site.name} — back to top`}
          className="group flex h-12 w-12 flex-shrink-0 items-center justify-center transition-transform duration-300 ease-out hover:scale-110"
        >
          <span
            className={`${monogram.className} text-3xl leading-none tracking-tight text-ink transition-colors duration-200 group-hover:text-accent`}
          >
            SP
          </span>
        </a>
        <ul className="hidden gap-1 text-[14px] font-medium text-slate md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-1.5 transition-colors hover:bg-accent-dim hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-sm border border-ink px-3.5 py-1.5 font-mono text-[13px] text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}
