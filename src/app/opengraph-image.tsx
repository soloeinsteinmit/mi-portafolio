import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Solomon Eshun — A search into the unknown";

/** A static social-card interpretation of the homepage hero. */
export default async function OpengraphImage() {
  const heroBuffer = await readFile(new URL("../../public/img/hero-unknown-v2.png", import.meta.url));
  const heroImage = heroBuffer.buffer.slice(
    heroBuffer.byteOffset,
    heroBuffer.byteOffset + heroBuffer.byteLength
  ) as ArrayBuffer;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#050506",
          color: "#f5f7f8",
          fontFamily: "sans-serif",
        }}
      >
        <img
          src={heroImage as unknown as string}
          alt=""
          width="760"
          height="1014"
          style={{
            position: "absolute",
            width: 760,
            height: 1014,
            right: -30,
            top: -188,
            objectFit: "cover",
            opacity: 0.82,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(90deg, #050506 0%, #050506 31%, rgba(5,5,6,.97) 42%, rgba(5,5,6,.62) 61%, rgba(5,5,6,.08) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(180deg, rgba(5,5,6,.18) 0%, transparent 58%, rgba(5,5,6,.88) 100%)",
          }}
        />

        {Array.from({ length: 150 }, (_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: 38 + (i % 30) * 39,
              top: 20 + Math.floor(i / 30) * 116,
              color: i % 19 === 0 ? "#51c4ff" : "#6b737d",
              fontFamily: "monospace",
              fontSize: 13,
              opacity: i % 19 === 0 ? 0.48 : 0.13,
            }}
          >
            {i % 3 === 0 ? "1" : "0"}
          </div>
        ))}

        <div
          style={{
            position: "absolute",
            inset: "0 0 0 0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "48px 58px 46px",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#8e969f",
              fontSize: 16,
              letterSpacing: 3.2,
              textTransform: "uppercase",
            }}
          >
            ML&nbsp;&nbsp;·&nbsp;&nbsp;DATA&nbsp;&nbsp;·&nbsp;&nbsp;LLMS&nbsp;&nbsp;·&nbsp;&nbsp;SYSTEMS&nbsp;&nbsp;·&nbsp;&nbsp;AGENTIC AI
          </div>

          <div style={{ display: "flex", flexDirection: "column", width: 720 }}>
            <div
              style={{
                display: "flex",
                color: "#9da4ac",
                fontSize: 17,
                letterSpacing: 4.2,
                marginBottom: 18,
              }}
            >
              SOLOMON ESHUN
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 72,
                fontWeight: 500,
                letterSpacing: -3.5,
                lineHeight: 0.96,
              }}
            >
              A search into
            </div>
            <div
              style={{
                display: "flex",
                color: "#50bdff",
                fontSize: 76,
                fontStyle: "italic",
                fontWeight: 500,
                letterSpacing: -3.5,
                lineHeight: 0.98,
                marginTop: 4,
              }}
            >
              the unknown
            </div>
            <div
              style={{
                display: "flex",
                color: "#a8afb7",
                fontSize: 20,
                lineHeight: 1.45,
                marginTop: 24,
                maxWidth: 610,
              }}
            >
              Production ML and data platforms, agentic systems, financial ML, and applied research.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 22,
              color: "#747c85",
              fontSize: 16,
              letterSpacing: 0.4,
            }}
          >
            <div style={{ display: "flex" }}>Production MLOps</div>
            <div style={{ display: "flex", color: "#383e45" }}>/</div>
            <div style={{ display: "flex" }}>Agentic systems</div>
            <div style={{ display: "flex", color: "#383e45" }}>/</div>
            <div style={{ display: "flex" }}>Applied research</div>
            <div style={{ display: "flex", marginLeft: "auto", color: "#50bdff" }}>
              solomoneshun.vercel.app
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
