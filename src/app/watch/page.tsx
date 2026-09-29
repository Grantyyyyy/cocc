import CtaBand from "@/components/CtaBand";
import Icon from "@/components/Icon";
import PageHeader from "@/components/PageHeader";
import Sermons from "@/components/Sermons";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import preaching from "../../../public/brand/pastor-bayani-areola.webp";

export const metadata = pageMetadata({
  title: "Watch online",
  description: `Watch Sunday messages from ${siteConfig.name}. New messages are posted on our Facebook page after every service.`,
  path: "/watch",
});

export default function WatchPage() {
  return (
    <>
      <PageHeader
        title="Watch online"
        description="Missed a Sunday? Every message goes up on our Facebook page after the service."
        image={preaching}
        imageAlt="Pastor Bayani Areola preaching on stage at a COCC service"
        focus="object-[45%_26%]"
      >
        <a
          href={siteConfig.watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-on-gold transition-[background-color,gap] duration-300 hover:gap-3 hover:bg-gold-hover"
        >
          Watch on Facebook
          <Icon name="arrow-right" className="h-4 w-4" />
        </a>
      </PageHeader>
      <Sermons standalone />
      <CtaBand showWatch={false} />
    </>
  );
}
