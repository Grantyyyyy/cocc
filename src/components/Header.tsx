"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import { navigation, primaryCta, siteConfig } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-500 ${
        scrolled || open
          ? "border-line bg-background/85 backdrop-blur-md"
          : "border-transparent bg-background"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${siteConfig.name} home`}
        >
          <Logo className="h-10 w-10 text-accent" />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-semibold tracking-[-0.02em] text-ink">
              {siteConfig.shortName}
            </span>
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted">
              Citi Church · {siteConfig.address.city}
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-muted transition-colors duration-300 hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors duration-300 hover:text-ink numeric"
          >
            <Icon name="phone" className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <a
            href={primaryCta.href}
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-[background-color,gap] duration-300 hover:gap-3 hover:bg-ink-hover"
          >
            {primaryCta.label}
            <Icon name="arrow-right" className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors duration-300 hover:bg-surface-muted lg:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-background lg:hidden">
          <nav aria-label="Mobile" className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
            <ul className="flex flex-col divide-y divide-line">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 font-serif text-lg tracking-[-0.02em] text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={primaryCta.href}
              onClick={() => setOpen(false)}
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3.5 text-sm font-semibold text-white"
            >
              {primaryCta.label}
              <Icon name="arrow-right" className="h-4 w-4" />
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
              className="mt-4 flex items-center justify-center gap-2 py-2 text-sm font-medium text-muted numeric"
            >
              <Icon name="phone" className="h-4 w-4" />
              {siteConfig.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
