import Image from "next/image";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import { sermons } from "@/data/content";
import { siteConfig } from "@/data/site";

const formatDate = (value: string) =>
  new Date(`${value}T12:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

export default function Sermons() {
  return (
    <section id="sermons" className="on-dark scroll-mt-28 bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            title="Listen to a message before you visit"
            description="New messages post every Sunday afternoon. Watch on YouTube or subscribe to the podcast wherever you listen."
            tone="dark"
          />
          <a
            href={siteConfig.watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-on-ink/25 px-6 py-3 text-sm font-semibold text-on-ink transition-[border-color,gap] duration-300 hover:gap-3 hover:border-on-ink/50"
          >
            Watch every message on YouTube
            <Icon name="arrow-right" className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-3">
          {sermons.map((sermon) => (
            <article key={sermon.slug} className="group">
              <a
                href={siteConfig.watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-ink">
                  <Image
                    src={sermon.image}
                    alt={sermon.imageAlt}
                    fill
                    sizes="(min-width: 768px) 30vw, 90vw"
                    className="object-cover opacity-90 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                  <span
                    className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink/70 text-on-ink ring-1 ring-on-ink/30 transition-colors duration-300 group-hover:bg-accent group-hover:text-on-accent group-hover:ring-accent"
                    aria-hidden="true"
                  >
                    <Icon name="play" className="ml-0.5 h-5 w-5" />
                  </span>
                  <span className="absolute bottom-3 right-3 rounded-full bg-ink/80 px-3 py-1 text-xs font-medium text-on-ink numeric">
                    {sermon.duration}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold tracking-[-0.02em] text-on-ink transition-colors duration-300 group-hover:text-accent">
                  {sermon.title}
                  <span className="sr-only">, watch on YouTube</span>
                </h3>
                <p className="mt-2 text-sm text-on-ink-muted">
                  {sermon.series} · {sermon.speaker}
                </p>
                <p className="mt-1 text-sm text-on-ink-muted">
                  <time dateTime={sermon.date}>{formatDate(sermon.date)}</time>
                </p>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
