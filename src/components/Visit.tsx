import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import PlanVisitForm from "@/components/PlanVisitForm";
import { visitFaqs } from "@/data/content";
import { siteConfig } from "@/data/site";

const mapsQuery = encodeURIComponent(
  `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`,
);

export default function Visit() {
  return (
    <section id="visit" className="scroll-mt-28 bg-surface-muted py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Your first Sunday, with no surprises"
          description="Here is exactly what to expect. And if you would rather just show up unannounced, that is completely fine too."
        />

        <div className="mt-16 grid gap-x-16 gap-y-12 lg:grid-cols-2 [&>*]:min-w-0">
          <div>
            <dl className="divide-y divide-line border-y border-line">
              {visitFaqs.map((faq) => (
                <div key={faq.question} className="py-7">
                  <dt className="font-serif text-xl font-semibold tracking-[-0.02em] text-ink">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 max-w-[60ch] leading-7 text-muted">{faq.answer}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 rounded-2xl border border-line bg-surface p-8">
              <h3 className="font-serif text-xl font-semibold tracking-[-0.02em] text-ink">
                Find us
              </h3>
              <address className="mt-3 flex gap-3 not-italic leading-7 text-muted">
                <Icon name="pin" className="mt-1 h-5 w-5 shrink-0 text-accent-strong" />
                <span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.region}{" "}
                  <span className="numeric">{siteConfig.address.postalCode}</span>
                </span>
              </address>
              <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-white transition-[background-color,gap] duration-300 hover:gap-3 hover:bg-ink-hover"
                >
                  Get directions
                  <Icon name="arrow-right" className="h-4 w-4" />
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full border border-ink px-5 py-2.5 text-ink transition-colors duration-300 hover:bg-ink hover:text-white"
                >
                  <Icon name="phone" className="h-4 w-4" />
                  Call the office
                </a>
              </div>
            </div>
          </div>

          <PlanVisitForm />
        </div>
      </div>
    </section>
  );
}
