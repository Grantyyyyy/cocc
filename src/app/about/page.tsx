import CtaBand from "@/components/CtaBand";
import Leaders from "@/components/Leaders";
import PageHeader from "@/components/PageHeader";
import Pillars from "@/components/Pillars";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import baptism from "../../../public/img/baptismal.webp";

export const metadata = pageMetadata({
  title: "About us",
  description: `${siteConfig.name} is a church family in ${siteConfig.venue.city}. ${siteConfig.tagline} Meet our pastors and learn what we build our lives on.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About us"
        description={`A church family in ${siteConfig.venue.city}. ${siteConfig.welcome.en}`}
        image={baptism}
        imageAlt="A line of people in white shirts holding hands in the sea during a COCC baptism"
      />
      <Pillars />
      <Leaders />
      <CtaBand />
    </>
  );
}
