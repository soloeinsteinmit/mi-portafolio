import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Solomon Eshun — AI & Data Systems Engineer";

/** Share card, drawn in the same visual language as the site. */
export default function OpengraphImage() {
  const nodes = Array.from({ length: 26 }, (_, i) => {
    const a = (i * 2.399) % (Math.PI * 2);
    const r = 90 + ((i * 37) % 200);
    return {
      x: 955 + Math.cos(a) * r * 0.92,
      y: 315 + Math.sin(a) * r * 0.86,
      s: 4 + ((i * 13) % 7),
      hot: i % 7 === 0,
    };
  });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0c0e",
          padding: "64px 72px",
          position: "relative",
        }}
      >
        {nodes.map((n, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: n.x,
              top: n.y,
              width: n.s,
              height: n.s,
              borderRadius: 999,
              background: n.hot ? "#5cc8ff" : "#454c56",
            }}
          />
        ))}

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#4ade80" }} />
          <div
            style={{
              color: "#6a717a",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            AI &amp; Data Systems Engineer · Accra, Ghana
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#e9ebee",
              fontSize: 84,
              fontWeight: 700,
              letterSpacing: -2.5,
              lineHeight: 1,
            }}
          >
            Solomon Eshun
          </div>
          <div
            style={{
              color: "#9aa1aa",
              fontSize: 34,
              marginTop: 22,
              lineHeight: 1.25,
              maxWidth: 780,
            }}
          >
            Building reliable intelligent systems — and keeping them running
            once they meet real data.
          </div>
        </div>

        <div style={{ display: "flex", gap: 28, color: "#6a717a", fontSize: 21 }}>
          <div>Production MLOps</div>
          <div style={{ color: "#363c44" }}>/</div>
          <div>Agentic systems</div>
          <div style={{ color: "#363c44" }}>/</div>
          <div>Applied research</div>
          <div style={{ color: "#363c44" }}>/</div>
          <div style={{ color: "#5cc8ff" }}>solomoneshun.vercel.app</div>
        </div>
      </div>
    ),
    size
  );
}
