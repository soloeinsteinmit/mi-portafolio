# Portfolio v2 — rebuild notes

Branch: `portfolio-v2-rebuild` (branched from `master`; the live site on
`master` is untouched).

Every public sentence on the new site was written against the **Master Profile
Evidence Bank**, with the Master Academic CV and the CV Pending Updates
checklist as secondary sources. Where the old site conflicted with the evidence
bank, the evidence bank won.

---

## 1. Content migrated

| From the old site | Where it went now |
| --- | --- |
| Lumis SDK | Tier‑1 featured, full case study, pre-alpha status visible |
| Noeud | Tier‑1, rewritten around the current R&D architecture |
| Bioinformatics orchestration + Moremi Bio Agent | Merged into one Tier‑1 entry, *Moremi Intelligent Research Systems* |
| Moremi Deep Research Agent | Tier‑2 (benchmark claims removed) |
| Moremi Bio Co-Researcher | Tier‑2 |
| XAU/USD quant strategy | Tier‑2 |
| LLM from scratch | Tier‑2 |
| OpenDSA, DS.AlgoDeck, Sonu AI | Tier‑3 archive rows |
| Publications (4) | `/research`, grouped, with DOIs and system cross-links |
| Experience entries | `/experience` timeline, weighted |
| Gallery (36 photos) | `/gallery`, grouped and captioned |
| Medium article, MinoHealth blog posts | `/writing` (posts labelled as third-party coverage, not his byline) |
| Talks / workshops | `/talks` |

## 2. Content added (was missing from the live site)

- **EnBW production Data Platform + MLOps** as the lead Tier‑1 case study.
- **First-author self-healing paper** (arXiv:2608.01955), leading `/research`.
- **Databricks Certified Data Engineer Professional**.
- **KaraAgro / CADI** computer-vision and drone work as a proper case study.
- **ActiveTrack** and **PiDro Bot** as archive entries for continuity.
- Capability matrix, About page, Contact page, Field Notes, 404, sitemap,
  robots, JSON-LD, generated OG image.

## 3. Content removed or corrected

- **DeepResearch Bench score (RACE 46.3, ranked 3/18)** — removed everywhere.
  The Deep Research Agent is now described only as an agent for autonomous,
  multi-step research workflows.
- **DataOps-only EnBW framing and stale title/dates** — replaced with the
  Data Platform Engineer → MLOps Engineer progression.
- **Heavy biomedical framing of Moremi** — reframed around agentic systems and
  research infrastructure; the papers are presented as downstream evidence.
- **Equal visual weight across projects** — replaced by the tier system.
- **Old beginner certificates** — dropped entirely.
- **Buy Me A Coffee button** and the **Google-Translate language detector** —
  dropped; neither fits the positioning.
- **Moremi Biokits / Moremi AI Agents standalone cards** — folded into the
  Moremi umbrella entry rather than given equal weight. Easy to split back out
  if you want them separate.
- Stale repo docs (`ARCHITECTURE_EXPLANATION.md`, `PRODUCTION_READY_SUMMARY.md`,
  etc.) — deleted; they described the old build. History is on `master`.

## 4. Claims deliberately omitted

These are supportable privately but are **not** on the site, per the evidence
bank's confidentiality and status rules:

1. The DeepResearch Bench score and ranking.
2. The failed Databricks ML Professional attempt and all planned certifications
   (Context Engineer, Spark, Generative AI).
3. The INTERNAL-ONLY EnBW self-healing initiative. The site says only that the
   research is informed by real production reliability problems.
4. The internal Python framework's name, internal repositories, customer-specific
   logic, sensitive business use cases.
5. Exact project counts, countries and end-user groups at EnBW — the site says
   "multiple concurrent projects and teams".
6. TFT and Markov/HMM as production components — disclosed as explored and
   benchmarked only.
7. "Invited speaker" — the site says Workshop Presenter / Presenter /
   Facilitator / Instructor, matching the evidence.
8. The Conformal-FX statistics project — no public card, since no repo, report
   or results exist yet.

## 5. Links and assets

All 38 external links resolve. Medium returns 403 and LinkedIn 999 to
automated checks; both are bot-blocking, not broken links.

**Unused assets left in `public/`** (safe to delete, kept in case you want them):
`ss.jpeg`, `screenshot.png`, `gallery/1_1.jpeg`, `gallery/glb6.jpg`,
`gallery/kara.png`, `gallery/ds2.jpg`, `gallery/rob2.jpg`, `gallery/giz.png`,
`gallery/cadi8.jpg`, `project-imgs/biokit.mp4`, `project-imgs/agent.png`,
`project-imgs/biokit_thumnail.png`, `project-imgs/bio.png`,
`project-imgs/moremi.png`, `project-imgs/search.gif`.

## 6. Awaiting verification — action items

| # | Item | Where to change |
| --- | --- | --- |
| 1 | **The linked CV PDF is stale.** `public/SolomonEshun_Resume_AI_ML_Engineer.pdf` predates the EnBW role, the self-healing paper, Lumis and the Databricks certification. Four buttons point at it. | Replace the file, or repoint `site.cv` |
| 2 | Databricks credential URL not published (the evidence bank keeps it in the application workspace) | `certifications.ts` → `credentialUrl` |
| 3 | Noeud market-regime public release (expected around end of August 2026) — add the live link, screenshots and results, and change the status | `projects.ts` → `noeud-fx-intelligence` |
| 4 | Lumis public docs/landing site URL once deployed | `projects.ts` → `lumis-sdk` links |
| 5 | The Agno + OpenRouter workshop is dated **2026** based on the IndabaX 2026 photos. Confirm the year. | `talks.ts` |
| 6 | Databricks ML Professional, if passed | `certifications.ts` |
| 7 | Conformal-FX statistics project, once a repo and report exist | `projects.ts` |
| 8 | `public/favicon.png` is still the old icon | `public/favicon.png` |

## 7. Preview deployment

Not deployed — that publishes the site publicly, so it needs your go-ahead and
your Vercel account. When you're ready:

```bash
npx vercel --prod=false
```

That produces a preview URL without touching production. `master` still holds
the current live site, so nothing ships until this branch is merged.
