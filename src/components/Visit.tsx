import Icon from "@/components/Icon";
import ContentMotion from "@/components/ContentMotion";
import PlanVisitForm from "@/components/PlanVisitForm";
import ServiceCountdown from "@/components/ServiceCountdown";
import { visitFaqs, visitSteps } from "@/data/content";
import { mapsEmbedUrl, mapsUrl, siteConfig, telHref } from "@/data/site";

const { office } = siteConfig;
const [venuePlace, ...venueDetail] = siteConfig.venue.name.split(", ");

const pill =
  "inline-flex items-center justify-center gap-2 rounded-full border border-text/30 px-6 py-3 text-sm font-semibold text-text transition-[border-color,background-color,gap] duration-300 hover:border-text/60 hover:bg-text/10";

const subheading = "font-display text-2xl font-bold tracking-[-0.03em] text-text sm:text-3xl";

export default function Visit() {
  return (
    <ContentMotion scene="visit">
      <section aria-label="Service details and visit form" className="py-14 sm:py-20">
        <div className="mx-auto max-w-[88rem] px-4 sm:px-6">
          <div className="grid items-start gap-x-16 gap-y-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] [&>*]:min-w-0">
            <div>
              {/* When and where */}
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold">
                <ServiceCountdown fallback={`Every ${siteConfig.service.day}`} />
              </p>
              <dl className="mt-4 grid gap-y-10 sm:grid-cols-2 sm:gap-x-10">
                <div>
                  <dt className="text-sm font-medium text-muted">When</dt>
                  <dd className="mt-2 font-display text-3xl font-semibold tracking-[-0.03em] text-text numeric">
                    {siteConfig.service.time}
                  </dd>
                  <dd className="mt-1 text-text">Every {siteConfig.service.day}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted">Where</dt>
                  <dd className="mt-2 font-display text-3xl font-semibold tracking-[-0.03em] text-text">
                    {venuePlace}
                  </dd>
                  <dd className="mt-1 text-text">
                    {[...venueDetail, siteConfig.venue.city].join(", ")}
                  </dd>
                </div>
              </dl>

              <div className="mt-8 overflow-hidden rounded-2xl bg-raised ring-1 ring-line">
                <iframe
                  src={mapsEmbedUrl}
                  title={`Map showing ${siteConfig.venue.name}, ${siteConfig.venue.city}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block aspect-[16/10] w-full border-0 [filter:invert(0.92)_hue-rotate(180deg)_saturate(0.8)] sm:aspect-[16/9]"
                />
              </div>

              <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group ${pill} hover:gap-3`}
                >
                  <Icon name="pin" className="h-4 w-4" />
                  Get directions
                </a>
                <a href={telHref} className={pill}>
                  <Icon name="phone" className="h-4 w-4" />
                  Call <span className="numeric">{siteConfig.phone}</span>
                </a>
                <a
                  href={siteConfig.messenger}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={pill}
                >
                  <Icon name="chat" className="h-4 w-4" />
                  Message us
                </a>
              </div>

              {/* What to expect */}
              <div className="mt-20">
                <h2 className={subheading}>What to expect</h2>
                <p className="mt-3 max-w-[52ch] leading-7 text-muted">
                  Your first Sunday, start to finish. Two hours, no surprises.
                </p>
                <ol className="relative mt-8 border-l border-line">
                  <li aria-hidden="true" className="pointer-events-none absolute -left-px inset-y-0 w-px">
                    <span data-motion-visit-guide className="absolute inset-0 bg-gold" />
                  </li>
                  {visitSteps.map((step, index) => (
                    <li key={step.title} className="relative pb-9 pl-8 last:pb-0">
                      <span
                        aria-hidden="true"
                        className="absolute -left-[0.8125rem] top-0 flex h-[1.625rem] w-[1.625rem] items-center justify-center rounded-full bg-violet font-display text-xs font-bold text-text ring-4 ring-ground numeric"
                      >
                        {index + 1}
                      </span>
                      <p className="text-sm font-semibold text-gold numeric">{step.time}</p>
                      <h3 className="mt-1 font-display text-xl font-semibold tracking-[-0.02em] text-text">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-[56ch] leading-7 text-muted">{step.body}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* FAQs */}
              <div className="mt-20">
                <h2 className={subheading}>Good questions</h2>
                <div className="mt-6 border-t border-line">
                  {visitFaqs.map((faq, index) => (
                    <details
                      key={faq.question}
                      name="visit-faq"
                      open={index === 0}
                      className="group border-b border-line"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-lg font-semibold tracking-[-0.015em] text-text transition-colors duration-300 hover:text-gold [&::-webkit-details-marker]:hidden">
                        {faq.question}
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-text/10 text-text transition-[transform,background-color] duration-300 group-open:rotate-90 group-open:bg-gold group-open:text-on-gold">
                          <Icon name="chevron-right" className="h-4 w-4" />
                        </span>
                      </summary>
                      <p className="max-w-[60ch] pb-6 pr-14 leading-7 text-muted">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>

              <div className="mt-12 grid gap-6 text-sm sm:grid-cols-2">
                <div className="flex gap-3">
                  <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <address className="not-italic leading-6 text-muted">
                    <span className="font-medium text-text">Church office</span>
                    <br />
                    {office.name}
                    <br />
                    {office.street}
                    <br />
                    {office.city}, {office.region}{" "}
                    <span className="numeric">{office.postalCode}</span>
                  </address>
                </div>
                <div className="flex gap-3">
                  <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="break-all text-text underline decoration-text/30 hover:decoration-gold"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            <div id="plan" className="lg:sticky lg:top-24">
              <PlanVisitForm />
            </div>
          </div>
        </div>
      </section>
    </ContentMotion>
  );
}
