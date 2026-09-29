import Link from "next/link";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import { serviceTimes } from "@/data/content";
import { navigation, siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="on-dark bg-ink text-on-ink-muted">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <Logo className="h-10 w-10 text-accent" />
              <span className="font-serif text-lg font-semibold tracking-[-0.02em] text-on-ink">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-6 max-w-[40ch] leading-7">{siteConfig.tagline}.</p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {siteConfig.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${siteConfig.shortName} on ${social.label}`}
                    className="inline-flex rounded-full border border-on-ink/20 px-4 py-2 text-xs font-semibold text-on-ink transition-colors duration-300 hover:border-accent hover:bg-accent/10"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-labelledby="footer-explore">
            <h2
              id="footer-explore"
              className="font-serif text-base font-semibold text-on-ink"
            >
              Explore
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors duration-300 hover:text-on-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-serif text-base font-semibold text-on-ink">
              Visit &amp; contact
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <address className="not-italic leading-6">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.region}{" "}
                  <span className="numeric">{siteConfig.address.postalCode}</span>
                </address>
              </li>
              <li className="flex gap-3">
                <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a
                  href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                  className="numeric transition-colors duration-300 hover:text-on-ink"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors duration-300 hover:text-on-ink"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="numeric leading-6">
                  {serviceTimes.map((service) => (
                    <span key={`${service.day}-${service.time}`} className="block">
                      {service.day} · {service.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-on-ink/10 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p className="numeric">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Placeholder content for demo purposes.</p>
        </div>
      </div>
    </footer>
  );
}
