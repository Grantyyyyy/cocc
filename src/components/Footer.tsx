import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import logo from "../../public/brand/cocc-logo.webp";
import { mapsUrl, navigation, siteConfig } from "@/data/site";

export default function Footer() {
  const { office } = siteConfig;

  return (
    <footer className="border-t border-line bg-ground text-muted">
      <div className="mx-auto max-w-[88rem] px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1.3fr)]">
          <div>
            <Link href="/" className="inline-flex items-center gap-4">
              <Image src={logo} alt="" width={56} height={56} className="h-14 w-14 rounded-xl" />
              <span className="font-display text-lg font-semibold tracking-[-0.02em] text-text">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-6 font-display text-2xl font-semibold tracking-[-0.02em] text-text">
              {siteConfig.tagline}
            </p>
            <p lang="ceb" className="mt-2 font-script text-3xl text-gold">
              {siteConfig.welcome.ceb}
            </p>
          </div>

          <nav aria-labelledby="footer-explore">
            <h2 id="footer-explore" className="text-sm font-semibold text-text">
              Explore
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors duration-300 hover:text-text">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-text"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-text">Visit and contact</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="leading-6">
                  {siteConfig.service.day}s, <span className="numeric">{siteConfig.service.time}</span>
                  <br />
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text underline decoration-text/30 hover:decoration-gold"
                  >
                    {siteConfig.venue.name}, {siteConfig.venue.city}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <address className="not-italic leading-6">
                  {office.name}
                  <br />
                  {office.street}, {office.city}
                </address>
              </li>
              <li className="flex gap-3">
                <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                  className="transition-colors duration-300 hover:text-text numeric"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-all transition-colors duration-300 hover:text-text"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p className="numeric">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Ministry, sermon and event details are placeholders until confirmed.</p>
        </div>
      </div>
    </footer>
  );
}
