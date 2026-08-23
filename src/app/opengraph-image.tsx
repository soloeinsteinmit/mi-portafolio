import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Solomon Eshun — A search into the unknown";

/** Share card, drawn in the same visual language as the site. */
export default function OpengraphImage() {
  const equations = [
    ["div E = rho / epsilon_0", 785, 78, 22],
    ["P(A|B) = P(B|A)P(A) / P(B)", 720, 170, 20],
    ["F(w) = integral f(t) exp(-iwt) dt", 790, 258, 21],
    ["x' = Ax + Bu", 760, 405, 23],
    ["dx dp >= hbar / 2", 915, 490, 23],
  ] as const;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(118deg, #050505 0%, #0a0c0f 56%, #111821 100%)",
          padding: "64px 72px",
          position: "relative",
        }}
      >
        {Array.from({ length: 240 }, (_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: 690 + (i % 24) * 22,
              top: 36 + Math.floor(i / 24) * 56,
              color: i % 17 === 0 ? "#5cc8ff" : "#4b535d",
              fontFamily: "monospace",
              fontSize: 15,
              opacity: i % 7 === 0 ? 0.8 : 0.42,
            }}
          >
            {i % 3 === 0 ? "1" : "0"}
          </div>
        ))}

        {equations.map(([formula, left, top, fontSize]) => (
          <div
            key={formula}
            style={{
              position: "absolute",
              left,
              top,
              color: "#c8d0d8",
              fontFamily: "serif",
              fontSize,
              opacity: 0.58,
              whiteSpace: "nowrap",
            }}
          >
            {formula}
          </div>
        ))}

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#4ade80" }} />
          <div
            style={{
              color: "#8a929c",
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
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: -2.5,
              lineHeight: 1,
            }}
          >
            A search into
          </div>
          <div
            style={{
              color: "#5cc8ff",
              fontSize: 76,
              fontStyle: "italic",
              fontWeight: 500,
              letterSpacing: -2,
              lineHeight: 1,
              marginTop: 4,
            }}
          >
            the unknown
          </div>
          <div style={{ color: "#9aa1aa", fontSize: 24, marginTop: 24 }}>
            Solomon Eshun · AI, ML &amp; Data Systems Engineer
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
