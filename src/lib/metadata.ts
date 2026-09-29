import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

// A page that sets its own openGraph replaces the parent's openGraph entirely,
// so every page rebuilds the full set here instead of relying on inheritance.
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const socialTitle = `${title} | ${siteConfig.name}`;
  const image = { url: "/opengraph-image", width: 1200, height: 630, alt: `${siteConfig.name}, ${siteConfig.tagline}` };
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      url: path,
      title: socialTitle,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image.url],
    },
  };
}
