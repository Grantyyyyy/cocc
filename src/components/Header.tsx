"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import logo from "../../public/brand/cocc-logo.png";
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
        scrolled || open ? "border-line bg-ground/85 backdrop-blur-md" : "border-transparent bg-ground"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[88rem] items-center justify-between gap-6 px-4 sm:px-6 lg:h-[4.5rem]">
        <Link href="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
          <Image src={logo} alt="" width={40} height={40} className="h-10 w-10 rounded-lg" />
          <span className="font-display text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-text sm:text-[0.8125rem] sm:tracking-[0.14em]">
            {siteConfig.name}
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-muted transition-colors duration-300 hover:text-text"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={primaryCta.href}
            className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-on-gold transition-colors duration-300 hover:bg-gold-hover sm:inline-flex"
          >
            {primaryCta.label}
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-text transition-colors duration-300 hover:bg-raised lg:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-ground lg:hidden">
          <nav aria-label="Mobile" className="mx-auto max-w-[88rem] px-4 pb-8 pt-4 sm:px-6">
            <ul className="flex flex-col">
              {navigation.map((item) => (
                <li key={item.href} className="border-b border-line">
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 font-display text-2xl font-semibold tracking-[-0.02em] text-text"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={primaryCta.href}
              onClick={() => setOpen(false)}
              className="mt-8 flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3.5 text-sm font-semibold text-on-gold"
            >
              {primaryCta.label}
              <Icon name="arrow-right" className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
