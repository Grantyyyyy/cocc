import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = `${siteConfig.name}, ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #1b0c33 0%, #241041 45%, #8a6a12 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 999,
              background: "#c9a227",
            }}
          />
          <div
            style={{
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#e8d9a8",
            }}
          >
            {`${siteConfig.address.city}, ${siteConfig.address.region}`}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 68, lineHeight: 1.1, fontWeight: 600 }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 34, color: "#d9cbe8", maxWidth: 900 }}>
            {siteConfig.tagline}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 28, color: "#e8d9a8", gap: 32 }}>
          <span>{"Sundays 9:00 & 11:00 AM"}</span>
          <span style={{ color: "#c9a227" }}>|</span>
          <span>{new URL(siteConfig.url).host}</span>
        </div>
      </div>
    ),
    size,
  );
}
