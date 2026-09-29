import CtaBand from "@/components/CtaBand";
import Events from "@/components/Events";
import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Events",
  description: `Upcoming events at ${siteConfig.name} in ${siteConfig.venue.city}. Everyone’s welcome, first-timers included.`,
  path: "/events",
});

export default function EventsPage() {
  return (
    <>
      <PageHeader
        title="Events"
        description="What’s coming up at COCC. Everyone’s welcome, first-timers included."
        image="https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=2000&q=70"
        imageAlt="A crowd worshipping with hands raised under stage lights"
      />
      <Events standalone />
      <CtaBand />
    </>
  );
}
