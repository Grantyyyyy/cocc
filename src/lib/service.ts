import { siteConfig } from "@/data/site";

// Iligan City runs on Philippine Standard Time: UTC+8, no daylight saving.
const MANILA_OFFSET_MS = 8 * 60 * 60 * 1000;

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

const OPENS = toMinutes(siteConfig.service.opens);
const CLOSES = toMinutes(siteConfig.service.closes);

/** Start and end of the next (or current) Sunday service, as real instants. */
export function nextService(now = new Date()) {
  // Shift into Manila wall-clock time, then read it with UTC getters.
  const local = new Date(now.getTime() + MANILA_OFFSET_MS);
  const minutes = local.getUTCHours() * 60 + local.getUTCMinutes();
  let daysAhead = (7 - local.getUTCDay()) % 7; // 0 when it is Sunday
  if (daysAhead === 0 && minutes >= CLOSES) daysAhead = 7;

  const midnightLocal = Date.UTC(
    local.getUTCFullYear(),
    local.getUTCMonth(),
    local.getUTCDate() + daysAhead,
  );
  const start = new Date(midnightLocal + OPENS * 60_000 - MANILA_OFFSET_MS);
  const end = new Date(midnightLocal + CLOSES * 60_000 - MANILA_OFFSET_MS);
  return { start, end, daysAhead, live: now >= start && now < end };
}

/** A short, human label for when the next service is. */
export function serviceCountdown(now = new Date()) {
  const { start, daysAhead, live } = nextService(now);
  if (live) return "Happening now";
  if (daysAhead === 0) {
    const mins = Math.round((start.getTime() - now.getTime()) / 60_000);
    if (mins <= 60) return `Starts in ${Math.max(mins, 1)} min`;
    return "Today at 9AM";
  }
  if (daysAhead === 1) return "Tomorrow at 9AM";
  return `In ${daysAhead} days`;
}

/** Today's date in Manila as YYYY-MM-DD, for comparing with content dates. */
export function manilaToday(now = new Date()) {
  return new Date(now.getTime() + MANILA_OFFSET_MS).toISOString().slice(0, 10);
}

const icsStamp = (date: Date) => date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

/** An .ics calendar file for the next service. */
export function serviceIcs(now = new Date()) {
  const { start, end } = nextService(now);
  const location = `${siteConfig.venue.name}, ${siteConfig.venue.city}`;
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//COCC//Plan a visit//EN",
    "BEGIN:VEVENT",
    `UID:${start.getTime()}@cocc`,
    `DTSTAMP:${icsStamp(now)}`,
    `DTSTART:${icsStamp(start)}`,
    `DTEND:${icsStamp(end)}`,
    `SUMMARY:Sunday Service at ${siteConfig.shortName}`,
    `LOCATION:${location.replace(/,/g, "\\,")}`,
    `DESCRIPTION:${siteConfig.welcome.ceb.replace(/,/g, "\\,")}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}
