import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import { events } from "@/data/content";

const parts = (value: string) => {
  const date = new Date(`${value}T12:00:00`);
  return {
    month: date.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
    day: date.toLocaleDateString("en-US", { day: "numeric" }),
    weekday: date.toLocaleDateString("en-US", { weekday: "long" }),
  };
};

export default function Events() {
  return (
    <section id="events" className="scroll-mt-28 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Upcoming events"
          description="Guests are welcome at every one of these. No sign-up required unless noted."
        />

        <ul className="mt-16 border-t border-line">
          {events.map((event) => {
            const { month, day, weekday } = parts(event.date);
            return (
              <li key={event.title} className="border-b border-line">
                <article className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:gap-10">
                  <time
                    dateTime={event.date}
                    className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-surface-muted numeric"
                  >
                    <span className="text-xs font-semibold tracking-[0.12em] text-accent-strong">
                      {month}
                    </span>
                    <span className="font-serif text-2xl font-semibold text-ink">
                      {day}
                    </span>
                  </time>

                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold tracking-[-0.02em] text-ink">
                      {event.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted numeric">
                      {weekday} · {event.time} · {event.location}
                    </p>
                    <p className="mt-3 max-w-[64ch] leading-7 text-muted">
                      {event.description}
                    </p>
                  </div>

                  <a
                    href="#visit"
                    className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-ink px-5 py-2.5 text-sm font-semibold text-ink transition-[background-color,color,gap] duration-300 hover:gap-3 hover:bg-ink hover:text-white"
                  >
                    Details
                    <Icon name="arrow-right" className="h-4 w-4" />
                    <span className="sr-only">about {event.title}</span>
                  </a>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
