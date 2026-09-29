import { verseOfTheDay } from "@/data/verses";

export default function DailyVerse() {
  const verse = verseOfTheDay();

  return (
    <section aria-labelledby="daily-verse-title" className="px-3 pb-3 sm:px-4 sm:pb-4 lg:px-6 lg:pb-6">
      <div className="mx-auto max-w-[88rem] rounded-2xl bg-raised px-6 py-16 text-center ring-1 ring-line sm:px-10 lg:px-14 lg:py-20">
        <h2
          id="daily-verse-title"
          className="font-display text-sm font-semibold text-gold"
        >
          Verse of the day
        </h2>
        <figure className="mx-auto mt-6 max-w-4xl">
          <blockquote>
            <p className="font-display text-[clamp(1.5rem,3.2vw,2.5rem)] font-bold leading-[1.2] tracking-[-0.02em] text-text">
              &ldquo;{verse.text}&rdquo;
            </p>
          </blockquote>
          <figcaption className="mt-6 text-sm font-semibold text-muted">
            {verse.reference} <span className="font-normal">· KJV</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
