import Image from "next/image";
import Icon from "@/components/Icon";
import { siteConfig } from "@/data/site";
import bookCover from "../../public/books/the-blessed-life.png";

export default function PublishedBooks() {
  return (
    <section
      id="books"
      aria-labelledby="books-title"
      className="py-14 sm:py-20"
    >
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6">
        <div className="border-t border-line pt-6">
          <h2
            id="books-title"
            className="font-display text-xl font-semibold tracking-[-0.02em] text-text"
          >
            Published books
          </h2>
        </div>

        <article className="grid gap-10 pb-14 pt-10 sm:gap-14 sm:pb-20 sm:pt-14 lg:grid-cols-12 lg:items-center lg:gap-6">
          <figure className="mx-auto w-full max-w-[23rem] lg:col-span-4 lg:col-start-2 lg:max-w-none">
            <a
              href="/books/the-blessed-life.png"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Image
                src={bookCover}
                alt="The Blessed Life by Bayani C. Areola, with gold grapevines on a dark green cover"
                sizes="(min-width: 1408px) 432px, (min-width: 1024px) 31vw, (min-width: 400px) 368px, calc(100vw - 32px)"
                className="h-auto w-full"
              />
              <span className="mt-4 flex min-h-11 items-center justify-between gap-4 text-xs text-muted transition-colors duration-300 group-hover:text-text">
                View the cover
                <Icon name="arrow-right" className="h-4 w-4 shrink-0 -rotate-45" />
              </span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </figure>

          <div className="mx-auto w-full max-w-[30rem] lg:col-span-5 lg:col-start-7 lg:mx-0">
            <h3 className="max-w-[10ch] font-display text-[clamp(2.75rem,4.5vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-text">
              The Blessed Life
            </h3>
            <p className="mt-5 text-base text-muted">By Bayani C. Areola</p>

            <p className="mt-10 max-w-[30ch] text-xl leading-8 text-text sm:mt-12 sm:text-2xl sm:leading-9">
              10 Principles to a Prosperous, Peaceful, and Productive Life
            </p>
            <p className="mt-5 max-w-[36ch] leading-7 text-muted">
              Receiving a Hundredfold of Increase in Times of Crisis
            </p>

            <p className="mt-8 text-sm leading-6 text-muted">
              Foreword by Bishop Daniel Balais
            </p>

            <div className="mt-10 border-t border-line pt-6 sm:mt-12">
              <a
                href={siteConfig.messenger}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 items-center gap-6 text-sm font-semibold text-text underline decoration-text/35 underline-offset-8 transition-colors duration-300 hover:text-gold hover:decoration-gold"
              >
                Inquire about this book
                <Icon
                  name="arrow-right"
                  className="h-5 w-5 shrink-0 transition-transform duration-300 motion-safe:group-hover:translate-x-1"
                />
                <span className="sr-only"> on Messenger (opens in a new tab)</span>
              </a>
              <p className="mt-3 max-w-[34ch] text-sm leading-6 text-muted">
                Availability and ordering through COCC on Messenger.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
