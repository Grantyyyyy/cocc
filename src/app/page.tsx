import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServiceTimes from "@/components/ServiceTimes";
import Ministries from "@/components/Ministries";
import Sermons from "@/components/Sermons";
import Events from "@/components/Events";
import Testimonials from "@/components/Testimonials";
import Staff from "@/components/Staff";
import Visit from "@/components/Visit";
import CtaBand from "@/components/CtaBand";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `${siteConfig.tagline} | ${siteConfig.address.city} Church`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServiceTimes />
      <Ministries />
      <Sermons />
      <Events />
      <Testimonials />
      <Staff />
      <Visit />
      <CtaBand />
    </>
  );
}
