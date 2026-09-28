# Portfolio

A single-page developer portfolio built with Next.js (App Router) and TypeScript.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Editing your content

Everything on the page — your name, bio, projects, work history, and
skills — lives in one file: **`lib/data.ts`**. Edit that file and the
whole site updates. You shouldn't need to touch the component files
unless you want to change the layout or add a section.

## Adding a resume download

Drop a `resume.pdf` into the `public/` folder — it's already linked from
the footer via `site.socials` in `lib/data.ts`.

## About the contact section

Instead of a form, the contact section shows three direct-action cards —
resume download, email, and phone — built from `site.phone` and
`site.email` in `lib/data.ts` and the "Resume" entry in `site.socials`.
Set `site.phone` to your real number (`components/Contact.tsx` strips
everything but digits and `+` to build the `tel:` link).

## Deploying

The easiest path is [Vercel](https://vercel.com) (made by the creators
of Next.js) — connect your GitHub repo and it deploys automatically.
Netlify and Cloudflare Pages also support Next.js.

## Structure

```
app/            Next.js App Router pages, layout, global CSS
components/     One component per section (Hero, About, Projects, etc.)
lib/data.ts     All site content — edit this
public/         Static assets (add your resume, favicon, etc. here)
```
