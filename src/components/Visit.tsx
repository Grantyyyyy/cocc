import Icon from "@/components/Icon";
import PlanVisitForm from "@/components/PlanVisitForm";
import SectionHeading from "@/components/SectionHeading";
import { visitFaqs } from "@/data/content";
import { mapsUrl, siteConfig } from "@/data/site";

const { office } = siteConfig;

export default function Visit() {
  return (
    <section id="visit" aria-labelledby="visit-title" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6">
        <SectionHeading
          id="visit-title"
          title="Plan your visit"
          description="Here is everything you need for your first Sunday. If you would rather just show up, that is completely fine too."
        />

        <div className="mt-16 grid items-start gap-x-16 gap-y-14 lg:grid-cols-2 [&>*]:min-w-0">
          <div>
            <dl className="grid gap-y-10 sm:grid-cols-2 sm:gap-x-10">
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
                  {siteConfig.venue.name}
                </dd>
                <dd className="mt-1 text-text">{siteConfig.venue.city}</dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap gap-3 text-sm font-semibold">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-text/30 px-6 py-3 text-text transition-[border-color,background-color,gap] duration-300 hover:gap-3 hover:border-text/60 hover:bg-text/10"
              >
                Get directions
                <Icon name="arrow-right" className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-text/30 px-6 py-3 text-text transition-colors duration-300 hover:border-text/60 hover:bg-text/10"
              >
                Message us on Facebook
              </a>
            </div>

            <dl className="mt-14 border-t border-line">
              {visitFaqs.map((faq) => (
                <div key={faq.question} className="border-b border-line py-6">
                  <dt className="font-display text-lg font-semibold tracking-[-0.015em] text-text">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 max-w-[60ch] leading-7 text-muted">{faq.answer}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 grid gap-6 text-sm sm:grid-cols-2">
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
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <a
                    href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                    className="text-text underline decoration-text/30 hover:decoration-gold numeric"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="break-all text-text underline decoration-text/30 hover:decoration-gold"
                  >
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <PlanVisitForm />
        </div>
      </div>
    </section>
  );
}
