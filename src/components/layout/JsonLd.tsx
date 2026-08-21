/**
 * Structured data. Rendered as a plain script so it is present in the
 * server-rendered HTML where crawlers actually read it.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
