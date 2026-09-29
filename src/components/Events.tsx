import Link from "next/link";
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

export default function Events({
  standalone = false,
}: {
  standalone?: boolean;
}) {
  return (
    <section
      aria-labelledby={standalone ? undefined : "events-title"}
      aria-label={standalone ? "Upcoming events" : undefined}
      className="py-14 sm:py-20"
    >
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6">
        {standalone ? (
          <p className="text-sm text-muted">
            These dates are examples for now. Check our Facebook page for the latest.
          </p>
        ) : (
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              id="events-title"
              title="Coming up"
              description="Everyone’s welcome, first-timers included. These dates are examples for now."
            />
            <Link
              href="/events"
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-text/30 px-6 py-3 text-sm font-semibold text-text transition-[border-color,gap] duration-300 hover:gap-3 hover:border-text/60"
            >
              All events
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>
        )}

        <ul className={`${standalone ? "mt-8" : "mt-14"} border-t border-line`}>
          {events.map((event) => {
            const { month, day, weekday } = parts(event.date);
            return (
              <li
                key={event.title}
                className="grid grid-cols-[4.5rem_minmax(0,1fr)] items-center gap-x-6 gap-y-2 border-b border-line py-8 sm:grid-cols-[5.5rem_minmax(0,1fr)_minmax(0,1.2fr)] sm:gap-x-10"
              >
                <time
                  dateTime={event.date}
                  className="row-span-2 flex aspect-square flex-col items-center justify-center rounded-xl bg-violet numeric sm:row-span-1"
                >
                  <span className="text-xs font-semibold tracking-[0.12em] text-on-violet-muted">
                    {month}
                  </span>
                  <span className="font-display text-2xl font-bold leading-none text-text sm:text-3xl">
                    {day}
                  </span>
                </time>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-text sm:text-2xl">
                    {event.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {weekday} · {event.time} · {event.location}
                  </p>
                </div>
                <p className="max-w-[52ch] leading-7 text-muted">
                  {event.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
