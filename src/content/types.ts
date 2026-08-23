/**
 * Content model for the portfolio.
 *
 * Everything the site renders comes from `src/content/*`. Pages and components
 * are presentation only — to publish a new project, paper, talk, article or
 * certification you add an entry here and nothing else.
 *
 * `status` mirrors the claim-status vocabulary used in the Master Profile
 * Evidence Bank. It is deliberately part of the type system so that a system
 * under active development can never be rendered as if it had shipped.
 */
export type ClaimStatus =
  | "production" // verified, currently running / delivered
  | "published" // peer-reviewable output that exists at a stable link
  | "active-development" // being built now
  | "pre-alpha" // public but explicitly unfinished
  | "experimental" // challenger / shadow / benchmark only
  | "archived"; // earlier work, kept for continuity

export type LinkKind =
  | "site"
  | "github"
  | "pypi"
  | "paper"
  | "doi"
  | "docs"
  | "article"
  | "video"
  | "credential"
  | "post";

export type ProjectLink = {
  label: string;
  href: string;
  kind: LinkKind;
};

export type Tier = 1 | 2 | 3;

export type Project = {
  slug: string;
  title: string;
  /** One line, shown under the title on compact cards. */
  tagline: string;
  org?: string;
  orgUrl?: string;
  role?: string;
  period?: string;
  status: ClaimStatus;
  /** Short qualifier rendered beside the status chip where nuance matters. */
  statusNote?: string;
  /** 1 = homepage hero weight, 2 = selected work, 3 = archive. */
  tier: Tier;
  /** Lower sorts first within a tier. */
  order: number;
  /** Card copy. Two sentences at most. */
  summary: string;
  /** Tools used to build and run it — not model families. */
  stack: string[];
  /** First link is the card-wide target. */
  links?: ProjectLink[];
  /** Optional. Falls back to generated artwork keyed on the slug. */
  thumbnail?: string;
};

export type Publication = {
  id: string;
  title: string;
  year: number;
  authorPosition: string;
  venue: string;
  href: string;
  doiLabel: string;
  summary: string;
  group: "systems" | "agentic-applications";
  relatedProject?: string;
  extraLinks?: ProjectLink[];
};

export type Experience = {
  slug: string;
  organisation: string;
  orgUrl?: string;
  /** Optional locally stored mark sourced from the organisation's official site. */
  logo?: string;
  /** e.g. "via Ishango.ai" — the delivery relationship, not the employer. */
  relationship?: string;
  roles: { title: string; period: string }[];
  location: string;
  period: string;
  summary: string;
  bullets: string[];
  stack: string[];
  /** 1 expands by default, 2 is compact, 3 is a single line. */
  weight: Tier;
  relatedProjects?: string[];
};

export type Talk = {
  /** Optional. Reuse a gallery photo or drop a new file in /public. */
  image?: string;
  title: string;
  role: string;
  organisation: string;
  venue?: string;
  date: string;
  year: number;
  summary: string;
  links?: ProjectLink[];
};

export type Certification = {
  name: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialUrl?: string;
  credentialId?: string;
  /** Optional badge/screenshot: drop a file in /public and set the path. */
  image?: string;
  verified: boolean;
  note?: string;
};

export type WritingItem = {
  title: string;
  date: string;
  year: number;
  summary: string;
  tags: string[];
  url: string;
  source: string;
};

export type SkillGroup = {
  name: string;
  /** depth drives visual weight — current/high-depth tools read stronger. */
  items: { name: string; depth: "core" | "working" | "familiar" }[];
};

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  year: string;
  group: string;
};
