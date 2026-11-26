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

// Re-render hourly so past events drop off on their own.
export const revalidate = 3600;

export default function EventsPage() {
  return (
    <>
      <PageHeader
        title="Events"
        description="What’s coming up at COCC. Everyone’s welcome, first-timers included."
        image="/img/worship-ministry.png"
        imageAlt="The congregation raising their hands as the worship team leads from the stage, framed by red curtains"
      />
      <Events standalone />
      <CtaBand />
    </>
  );
}
