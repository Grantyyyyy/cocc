import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";
import { siteConfig } from "@/data/site";

export const alt = `${siteConfig.name}, ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The OG renderer does not decode WebP, so it reads the PNG app icon instead.
const logoData = await readFile(join(process.cwd(), "src/app/icon.png"), "base64");
const logoSrc = `data:image/png;base64,${logoData}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: 80,
          background: "#8214d9",
          color: "#ffffff",
        }}
      >
        <img src={logoSrc} width={256} height={256} style={{ borderRadius: 28 }} alt="" />
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 30, color: "#efe4fc" }}>{siteConfig.name}</div>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.02, letterSpacing: -2 }}>
            {siteConfig.tagline}
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#fcdc58" }}>
            {`Sundays ${siteConfig.service.time}, ${siteConfig.venue.name}`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
