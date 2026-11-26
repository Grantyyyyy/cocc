import Icon from "@/components/Icon";
import ServiceCountdown from "@/components/ServiceCountdown";
import { mapsUrl, siteConfig } from "@/data/site";

/** The "when and where" card: the one thing a first-time visitor needs. */
export default function ServiceCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl p-5 ring-1 ring-text/15 sm:p-6 ${className}`}
    >
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-gold">
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60 motion-reduce:hidden" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
        </span>
        <span aria-live="polite">
          <ServiceCountdown fallback={`This ${siteConfig.service.day}`} />
        </span>
      </p>
      <dl className="mt-4 space-y-3 text-sm">
        <div className="flex gap-3">
          <dt className="sr-only">When</dt>
          <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
          <dd className="text-text">
            <span className="font-semibold">{siteConfig.service.day}</span>
            <span className="text-muted"> · </span>
            <span className="numeric">{siteConfig.service.time}</span>
          </dd>
        </div>
        <div className="flex gap-3">
          <dt className="sr-only">Where</dt>
          <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
          <dd className="text-text">
            <span className="font-semibold">{siteConfig.venue.name}</span>
            <span className="block text-muted">{siteConfig.venue.city}</span>
          </dd>
        </div>
      </dl>
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-text underline decoration-text/30 transition-[gap,text-decoration-color] duration-300 hover:gap-3 hover:decoration-gold"
      >
        Get directions
        <Icon name="arrow-right" className="h-4 w-4" />
      </a>
    </div>
  );
}
