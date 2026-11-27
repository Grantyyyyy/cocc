import Image from "next/image";
import Icon from "@/components/Icon";
import ContentMotion from "@/components/ContentMotion";
import BuyBox from "@/components/shop/BuyBox";
import CoverZoom from "@/components/shop/CoverZoom";
import { books } from "@/data/books";
import { siteConfig } from "@/data/site";

const perks = [
  { icon: "pin", title: "Free pickup", body: `Sundays at ${siteConfig.venue.name}` },
  { icon: "truck", title: "Delivery", body: `Within ${siteConfig.venue.city}, fee confirmed on Messenger` },
  { icon: "wallet", title: "Easy payment", body: "GCash, bank transfer, or cash on pickup" },
] as const;

export default function PublishedBooks() {
  const book = books[0];

  return (
    <ContentMotion scene="book">
      <section id="books" aria-labelledby="books-title" className="py-14 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-4 sm:px-6">
          <div className="border-t border-line pt-6">
            <h2
              id="books-title"
              className="font-display text-xl font-semibold tracking-[-0.02em] text-text"
            >
              Published books
            </h2>
          </div>

          <article className="grid gap-10 pt-10 sm:pt-14 lg:grid-cols-12 lg:items-center lg:gap-10">
            {/* Product image: the cover as a physical book on a soft stage. */}
            <figure className="relative isolate flex items-center justify-center overflow-hidden rounded-2xl bg-raised px-8 py-12 ring-1 ring-line sm:py-16 lg:col-span-6 lg:py-20">
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_45%,rgba(130,20,217,0.35),transparent_65%)]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-[18%] bottom-[9%] -z-10 h-8 rounded-[50%] bg-black/70 blur-2xl"
              />
              <div data-motion-book className="relative w-full max-w-[14rem] sm:max-w-[17rem] lg:max-w-[20rem]">
                <Image
                  src={book.cover}
                  alt={book.coverAlt}
                  sizes="(min-width: 1024px) 20rem, (min-width: 640px) 17rem, 14rem"
                  className="h-auto w-full rounded-r-[4px] rounded-l-[2px] shadow-[18px_28px_50px_-12px_rgba(0,0,0,0.85)]"
                />
                {/* Spine crease and page edge give the flat cover some depth. */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 w-[7%] bg-[linear-gradient(to_right,rgba(0,0,0,0.45),rgba(255,255,255,0.12)_45%,rgba(0,0,0,0.25)_70%,transparent)]"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-[5px] bottom-[3px] top-[3px] w-[5px] rounded-r-[2px] bg-[repeating-linear-gradient(to_bottom,#efe6d2_0,#efe6d2_1px,#d9ceb6_1px,#d9ceb6_2px)]"
                />
              </div>
              <CoverZoom src={book.cover} alt={book.coverAlt} />
            </figure>

            <div className="lg:col-span-5 lg:col-start-8">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold">
                {book.format}
              </p>
              <h3 className="mt-3 font-display text-[clamp(2.5rem,4.5vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-text">
                {book.title}
              </h3>
              <p className="mt-3 text-base text-muted">By {book.author}</p>

              <p className="mt-6 max-w-[34ch] text-lg leading-7 text-text sm:text-xl sm:leading-8">
                {book.subtitle}
              </p>
              <p className="mt-3 max-w-[40ch] leading-7 text-muted">
                {book.tagline}. {book.foreword}.
              </p>

              <div className="mt-8 border-t border-line pt-8">
                <BuyBox book={book} />
              </div>

              <ul className="mt-8 grid gap-4 border-t border-line pt-6 sm:grid-cols-3 sm:gap-5">
                {perks.map((perk) => (
                  <li key={perk.title} className="flex gap-3 sm:flex-col sm:gap-2">
                    <Icon name={perk.icon} className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <div>
                      <p className="text-sm font-semibold text-text">{perk.title}</p>
                      <p className="mt-0.5 text-xs leading-5 text-muted">{perk.body}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href={siteConfig.messenger}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-muted underline decoration-text/25 underline-offset-4 transition-colors duration-300 hover:text-text hover:decoration-gold"
              >
                <Icon name="chat" className="h-4 w-4" />
                Questions about the book? Message us
                <span className="sr-only"> on Messenger (opens in a new tab)</span>
              </a>
            </div>
          </article>
        </div>
      </section>
    </ContentMotion>
  );
}
