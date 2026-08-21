# solomoneshun.dev — portfolio v2

Personal portfolio for **Solomon Eshun** — AI & data systems engineer. Rebuilt
from scratch on Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Motion and
React Three Fiber.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build — every route prerenders static
npm run lint
```

---

## Content architecture

**Nothing on this site is hard-coded into a page component.** Every page reads
from typed content collections in `src/content/`. To publish a change you edit
data, not layout.

| File | Holds | Feeds |
| --- | --- | --- |
| `site.ts` | identity, nav, socials, CV path, SEO defaults | header, footer, metadata, JSON-LD |
| `types.ts` | the content model for everything below | — |
| `projects.ts` | selected work + case-study bodies | `/`, `/work`, `/work/[slug]` |
| `publications.ts` | papers, DOIs, author positions | `/`, `/research` |
| `experience.ts` | roles, education | `/`, `/experience` |
| `talks.ts` | workshops, teaching | `/`, `/talks` |
| `certifications.ts` | issued credentials only | `/`, `/experience` |
| `writing.ts` | articles + third-party coverage | `/`, `/writing` |
| `skills.ts` | capability matrix with depth weighting | `/experience` |
| `gallery.ts` | photographs + captions | `/gallery` |
| `about.ts` | about copy and quick facts | `/`, `/about` |

### Claim status is part of the type system

`Project.status` is a union — `production`, `published`, `active-development`,
`pre-alpha`, `experimental`, `archived` — and renders as a visible chip on every
card and case study. This is deliberate: a system under active development
cannot accidentally be presented as shipped, because the status has to be
declared before the entry compiles.

### Evidence hierarchy

`tier` controls visual weight, not recency:

- **tier 1** — full-width featured rows on the homepage and `/work`
- **tier 2** — compact cards, "Supporting work"
- **tier 3** — single-line archive rows

`order` sorts within a tier.

---

## Adding things

**A project** — append to `src/content/projects.ts`. Only `slug`, `title`,
`tagline`, `status`, `tier`, `order`, `summary` and `stack` are required; the
case study renders whichever optional blocks you fill in (`problem`, `system`,
`contribution`, `decisions`, `flow`, `outcomes`, `currentStatus`, `disclosure`,
`links`). The route, static params and sitemap entry are generated.

**A publication** — append to `src/content/publications.ts`, set `group` to
`systems` or `agentic-applications`, and set `relatedProject` to a project slug
to cross-link system ↔ paper in both directions.

**An article** — append to `src/content/writing.ts`.

**A talk** — append to `src/content/talks.ts`. Use the role you actually held.

**A certification** — append to `src/content/certifications.ts` **on the day it
is issued**, with `verified: true`. Nothing planned or attempted belongs here.

**A photograph** — drop a compressed image in `public/gallery/` and append to
`src/content/gallery.ts` with a `group` from `galleryGroups`.

### Images and thumbnails

Every image field is optional. `Thumb` (`src/components/ui/Thumb.tsx`) takes an
optional `src`; when there is none, it renders **deterministic generated
artwork** derived from a hash of the entry's slug — one of four motifs
(`network`, `field`, `trace`, `contour`) drawn in theme tokens. A card without a
photograph still looks designed, and adding a real image later is a one-line
change.

- `thumbnail` — card artwork
- `image` — case-study header (falls back to `thumbnail`, then generated)

---

## Design system

Tokens live in `src/app/globals.css`. Dark is the default palette on `:root`;
`[data-theme="light"]` overrides it. There is one accent family (cool blue /
electric cyan), used only for active states, links, status and diagrams.

Theme resolution is split so it can never cause a hydration mismatch:
`ThemeScript` sets `data-theme` before first paint (no flash), and `ThemeSync`
re-asserts it immediately after hydration. React never renders the attribute
itself.

`--viz-node` / `--viz-line` tune the hero field independently of body-copy
colours.

## Hero visual

`HeroCanvas` decides once, on the client, whether the device gets the live
WebGL field. It falls back to a static SVG (`StaticTopology`) for
`prefers-reduced-motion`, viewports under 900px, ≤4 cores, ≤4GB memory,
touch-only pointers, and any device without WebGL. The 3D bundle is dynamically
imported and deferred past first paint, and all animation runs in the vertex
shader.

## Accessibility & performance

Semantic headings, skip link, visible focus rings, keyboard-navigable command
palette (⌘K) and gallery lightbox, descriptive alt text, `prefers-reduced-motion`
honoured throughout, no scroll hijacking, no autoplaying sound. All routes
prerender as static HTML.
