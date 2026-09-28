import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="hairline">
      <div className="mx-auto flex max-w-wide flex-col gap-4 px-6 py-10 font-mono text-xs text-slate md:flex-row md:items-center md:justify-between md:px-10">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <ul className="flex gap-5">
          {site.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.url}
                className="link-underline pb-0.5 transition-colors hover:text-ink"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
