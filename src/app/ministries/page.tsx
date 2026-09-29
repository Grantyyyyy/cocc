import CtaBand from "@/components/CtaBand";
import Ministries from "@/components/Ministries";
import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Ministries",
  description: `Kids, youth, life groups, worship, outreach and prayer at ${siteConfig.name} in ${siteConfig.venue.city}. There is a place here for your whole family.`,
  path: "/ministries",
});

export default function MinistriesPage() {
  return (
    <>
      <PageHeader
        title="Ministries"
        description="From the littlest ones to the prayer team, there is a place here for your whole family."
        image="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2000&q=70"
        imageAlt="Friends with their arms around each other at sunset"
      />
      <Ministries variant="grid" />
      <CtaBand />
    </>
  );
}
