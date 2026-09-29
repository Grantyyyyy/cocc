import PageHeader from "@/components/PageHeader";
import { FaqStructuredData } from "@/components/StructuredData";
import Visit from "@/components/Visit";
import { visitFaqs } from "@/data/content";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import worship from "../../../public/img/worship.webp";

export const metadata = pageMetadata({
  title: "Plan your visit",
  description: `Plan your first Sunday at ${siteConfig.name}: ${siteConfig.service.day}s, ${siteConfig.service.time}, at ${siteConfig.venue.name}, ${siteConfig.venue.city}. Directions, what to expect, and a host to meet you.`,
  path: "/visit",
});

export default function VisitPage() {
  return (
    <>
      <FaqStructuredData faqs={visitFaqs} />
      <PageHeader
        title="Plan your visit"
        description="Everything you need for your first Sunday. If you would rather just show up, that is completely fine too."
        image={worship}
        imageAlt="The COCC worship team leading the congregation, hands raised, during a Sunday service"
        focus="object-[40%_30%]"
      />
      <Visit />
    </>
  );
}
