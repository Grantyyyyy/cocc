import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import DailyVerse from "@/components/DailyVerse";
import Events from "@/components/Events";
import Hero from "@/components/Hero";
import Ministries from "@/components/Ministries";
import Pillars from "@/components/Pillars";
import Sermons from "@/components/Sermons";
import Visit from "@/components/Visit";
import WelcomeBand from "@/components/WelcomeBand";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} | Sundays at ${siteConfig.venue.name}, ${siteConfig.venue.city}`,
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

// Re-generate hourly so the verse of the day rolls over at midnight (Manila).
export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <Hero />
      <Ministries />
      <WelcomeBand />
      <Pillars />
      <Sermons />
      <Events />
      <DailyVerse />
      <Visit />
      <CtaBand />
    </>
  );
}
