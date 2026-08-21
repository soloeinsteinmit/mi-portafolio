import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-5 py-32 md:px-8">
      <p className="label mb-5 text-accent">404 · route not found</p>
      <h1 className="text-[clamp(2rem,5vw,3rem)] leading-tight font-semibold tracking-tight text-text">
        This page did not survive the deploy.
      </h1>
      <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
        No diagnosis available — the evidence was never bounded. Try the work
        instead.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-full bg-text px-5 py-2.5 text-sm font-medium text-bg"
        >
          Home
        </Link>
        <Link
          href="/work"
          className="rounded-full border border-border-strong px-5 py-2.5 text-sm text-text transition-colors hover:border-accent hover:text-accent"
        >
          Selected work
        </Link>
      </div>
    </div>
  );
}
