"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import Icon from "@/components/Icon";
import QtyStepper from "@/components/shop/QtyStepper";
import { formatPeso } from "@/data/books";
import { siteConfig } from "@/data/site";
import { cart, MAX_QTY, useCart } from "@/lib/cart";

type Fulfilment = "pickup" | "delivery";
type Payment = "gcash" | "bank" | "cash";
type Item = ReturnType<typeof useCart>["items"][number];

type PlacedOrder = {
  number: string;
  summary: string;
  name: string;
  fulfilment: Fulfilment;
  total: number;
};

const field =
  "w-full min-w-0 rounded-xl border border-line bg-ground px-3.5 py-3 text-base font-normal text-text transition-colors duration-200 placeholder:text-muted/70 hover:border-text/35 focus:border-gold sm:text-sm";
const label = "flex min-w-0 flex-col gap-2 text-sm font-medium text-text";

const paymentLabels: Record<Payment, string> = {
  gcash: "GCash",
  bank: "Bank transfer",
  cash: "Cash",
};

// True only after hydration, so the cart (stored in the browser) never flashes empty.
const useHydrated = () =>
  useSyncExternalStore(() => () => {}, () => true, () => false);

function Step({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <fieldset className="rounded-2xl bg-raised p-6 ring-1 ring-line sm:p-8">
      <legend className="sr-only">{title}</legend>
      <div className="flex items-center gap-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-violet font-display text-xs font-bold text-text numeric">
          {n}
        </span>
        <h2 aria-hidden="true" className="font-display text-xl font-semibold tracking-[-0.02em] text-text">
          {title}
        </h2>
      </div>
      <div className="mt-6">{children}</div>
    </fieldset>
  );
}

function Choice({
  name,
  value,
  checked,
  onChange,
  icon,
  title,
  body,
  aside,
}: {
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
  icon: Parameters<typeof Icon>[0]["name"];
  title: string;
  body: string;
  aside?: string;
}) {
  return (
    <label
      className={`flex cursor-pointer items-start gap-4 rounded-xl border p-4 transition-colors duration-200 ${
        checked ? "border-gold bg-gold/[0.06]" : "border-line hover:border-text/35"
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="mt-1 h-4 w-4 shrink-0 accent-[var(--gold)]"
      />
      <Icon name={icon} className={`mt-0.5 h-5 w-5 shrink-0 ${checked ? "text-gold" : "text-muted"}`} />
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-text">{title}</span>
        <span className="mt-0.5 block text-xs leading-5 text-muted">{body}</span>
      </span>
      {aside && <span className="text-sm font-semibold text-text">{aside}</span>}
    </label>
  );
}

function SummaryLines({ items, fulfilment, subtotal }: { items: Item[]; fulfilment: Fulfilment; subtotal: number }) {
  return (
    <>
      <ul className="divide-y divide-line">
        {items.map((item) => (
          <li key={item.id} className="flex gap-4 py-4 first:pt-0">
            <div className="relative shrink-0">
              <Image
                src={item.book.cover}
                alt=""
                sizes="56px"
                className="h-auto w-14 rounded-[3px] shadow-[4px_8px_16px_-6px_rgba(0,0,0,0.8)]"
              />
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-text/85 px-1 text-[0.6875rem] font-bold text-ground numeric">
                {item.qty}
              </span>
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-text">{item.book.title}</p>
                  <p className="text-xs text-muted">{item.book.format}</p>
                </div>
                <p className="text-sm font-semibold text-text numeric">{formatPeso(item.total)}</p>
              </div>
              <div className="mt-2">
                <QtyStepper
                  size="sm"
                  value={item.qty}
                  min={0}
                  max={MAX_QTY}
                  onChange={(qty) => cart.setQty(item.id, qty)}
                  label={`Quantity of ${item.book.title}`}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <dl className="mt-5 space-y-2 border-t border-line pt-5 text-sm">
        <div className="flex justify-between">
          <dt className="text-muted">Subtotal</dt>
          <dd className="text-text numeric">{formatPeso(subtotal)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-muted">{fulfilment === "pickup" ? "Pickup" : "Delivery"}</dt>
          <dd className="text-text">{fulfilment === "pickup" ? "Free" : "Confirmed on Messenger"}</dd>
        </div>
        <div className="flex items-baseline justify-between border-t border-line pt-4">
          <dt className="font-semibold text-text">Total</dt>
          <dd className="font-display text-2xl font-semibold text-text numeric">
            {formatPeso(subtotal)}
            {fulfilment === "delivery" && <span className="ml-1 text-xs font-normal text-muted">+ delivery</span>}
          </dd>
        </div>
      </dl>
    </>
  );
}

function Confirmation({ order }: { order: PlacedOrder }) {
  const [copied, setCopied] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    heading.current?.focus();
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(order.summary);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-on-gold">
        <Icon name="check" className="h-7 w-7" />
      </span>
      <p className="mt-8 text-xs font-semibold uppercase tracking-[0.12em] text-gold numeric">
        Order {order.number}
      </p>
      <h1
        ref={heading}
        tabIndex={-1}
        className="mt-3 font-display text-4xl font-bold tracking-[-0.03em] text-text sm:text-5xl"
      >
        Salamat, {order.name}!
      </h1>
      <p className="mt-5 max-w-[52ch] text-lg leading-8 text-muted">
        One last step: send your order to us on Messenger. We’ll confirm payment and{" "}
        {order.fulfilment === "pickup" ? "have your books ready on Sunday" : "arrange delivery"}.
      </p>

      <ol className="mt-10 space-y-3">
        <li className="flex flex-col gap-4 rounded-2xl bg-raised p-6 ring-1 ring-line sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-text">1. Copy your order details</p>
            <p className="mt-1 text-xs text-muted">Order number, books, and how you’ll get them.</p>
          </div>
          <button
            type="button"
            onClick={copy}
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-text/30 px-5 text-sm font-semibold text-text transition-colors duration-300 hover:border-text/60 hover:bg-text/10"
          >
            <Icon name={copied ? "check" : "copy"} className="h-4 w-4" />
            <span aria-live="polite">{copied ? "Copied" : "Copy order details"}</span>
          </button>
        </li>
        <li className="flex flex-col gap-4 rounded-2xl bg-raised p-6 ring-1 ring-line sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-text">2. Paste it in a message to COCC</p>
            <p className="mt-1 text-xs text-muted">We’ll reply there to confirm your order.</p>
          </div>
          <a
            href={siteConfig.messenger}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-gold px-5 text-sm font-semibold text-on-gold transition-[background-color,gap] duration-300 hover:gap-3 hover:bg-gold-hover"
          >
            <Icon name="chat" className="h-4 w-4" />
            Open Messenger
          </a>
        </li>
      </ol>

      <details className="mt-8 rounded-2xl ring-1 ring-line">
        <summary className="cursor-pointer px-6 py-4 text-sm font-semibold text-text">
          See order details
        </summary>
        <pre className="whitespace-pre-wrap break-words border-t border-line px-6 py-5 font-sans text-sm leading-6 text-muted">
          {order.summary}
        </pre>
      </details>

      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-text underline decoration-text/30 underline-offset-4 hover:decoration-gold"
      >
        Back to home
      </Link>
    </div>
  );
}

export default function Checkout() {
  const hydrated = useHydrated();
  const { items, subtotal, count } = useCart();
  const [fulfilment, setFulfilment] = useState<Fulfilment>("pickup");
  const [payment, setPayment] = useState<Payment>("gcash");
  const [order, setOrder] = useState<PlacedOrder | null>(null);

  if (order) return <Confirmation order={order} />;

  if (!hydrated) {
    return <div className="mx-auto min-h-[60svh] max-w-6xl px-4 py-16 sm:px-6" aria-busy="true" />;
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto flex min-h-[60svh] max-w-xl flex-col items-center justify-center px-4 py-20 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-raised ring-1 ring-line">
          <Icon name="bag" className="h-6 w-6 text-muted" />
        </span>
        <h1 className="mt-6 font-display text-3xl font-bold tracking-[-0.03em] text-text">Your cart is empty</h1>
        <p className="mt-3 text-muted">Add a book to get started.</p>
        <Link
          href="/#books"
          className="group mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-gold px-7 text-sm font-semibold text-on-gold transition-[background-color,gap] duration-300 hover:gap-3 hover:bg-gold-hover"
        >
          Browse books
          <Icon name="arrow-right" className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  const cashLabel = fulfilment === "pickup" ? "Cash on pickup" : "Cash on delivery";

  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 sm:pt-14">
      <Link
        href="/#books"
        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-text"
      >
        <Icon name="chevron-left" className="h-4 w-4" />
        Continue browsing
      </Link>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-[-0.03em] text-text sm:text-5xl">Checkout</h1>

      {/* Mobile: collapsible summary up top, like most stores. */}
      <details className="group mt-8 rounded-2xl bg-raised ring-1 ring-line lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
          <span className="flex items-center gap-2 text-sm font-semibold text-text">
            <Icon name="bag" className="h-4 w-4 text-gold" />
            Order summary ({count})
            <Icon name="chevron-right" className="h-4 w-4 text-muted transition-transform group-open:rotate-90" />
          </span>
          <span className="font-display text-lg font-semibold text-text numeric">{formatPeso(subtotal)}</span>
        </summary>
        <div className="border-t border-line px-5 py-5">
          <SummaryLines items={items} fulfilment={fulfilment} subtotal={subtotal} />
        </div>
      </details>

      <div className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-12">
        <form
          id="checkout-form"
          onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const get = (key: string) => String(data.get(key) ?? "").trim();
            const number = `COCC-${Date.now().toString(36).slice(-6).toUpperCase()}`;
            const name = get("name");
            const lines = [
              `Book order ${number}`,
              "",
              ...items.map((item) => `• ${item.qty} × ${item.book.title} (${item.book.format}) = ${formatPeso(item.total)}`),
              `Subtotal: ${formatPeso(subtotal)}`,
              "",
              `Name: ${name}`,
              `Mobile: ${get("mobile")}`,
              ...(get("email") ? [`Email: ${get("email")}`] : []),
              fulfilment === "pickup"
                ? `Pickup: Sunday at ${siteConfig.venue.name}, ${siteConfig.venue.city}`
                : `Delivery: ${get("address")}, ${get("barangay")}, ${siteConfig.venue.city}${get("landmark") ? ` (near ${get("landmark")})` : ""}`,
              `Payment: ${payment === "cash" ? cashLabel : paymentLabels[payment]}`,
              ...(get("notes") ? ["", `Notes: ${get("notes")}`] : []),
            ];
            setOrder({ number, summary: lines.join("\n"), name: name.split(/\s+/)[0], fulfilment, total: subtotal });
            cart.clear();
            window.scrollTo({ top: 0 });
          }}
          className="space-y-5"
        >
          <Step n={1} title="Contact">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className={`${label} sm:col-span-2`}>
                Full name
                <input required name="name" autoComplete="name" className={field} />
              </label>
              <label className={label}>
                Mobile number
                <input
                  required
                  type="tel"
                  name="mobile"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="09XX XXX XXXX"
                  pattern="(\+63|0)9[\d\s\-]{9,12}"
                  title="A Philippine mobile number, like 0917 123 4567"
                  className={field}
                />
              </label>
              <label className={label}>
                <span>
                  Email <span className="font-normal text-muted">(optional)</span>
                </span>
                <input type="email" name="email" autoComplete="email" className={field} />
              </label>
            </div>
          </Step>

          <Step n={2} title="How you’ll get it">
            <div className="grid gap-3">
              <Choice
                name="fulfilment"
                value="pickup"
                checked={fulfilment === "pickup"}
                onChange={() => setFulfilment("pickup")}
                icon="pin"
                title="Pick up at church"
                body={`Sunday, ${siteConfig.service.time}, ${siteConfig.venue.name}`}
                aside="Free"
              />
              <Choice
                name="fulfilment"
                value="delivery"
                checked={fulfilment === "delivery"}
                onChange={() => setFulfilment("delivery")}
                icon="truck"
                title={`Deliver within ${siteConfig.venue.city}`}
                body="We’ll confirm the delivery fee on Messenger"
              />
            </div>
            {fulfilment === "delivery" && (
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <label className={`${label} sm:col-span-2`}>
                  House no. and street
                  <input required name="address" autoComplete="address-line1" className={field} />
                </label>
                <label className={label}>
                  Barangay
                  <input required name="barangay" autoComplete="address-line2" className={field} />
                </label>
                <label className={label}>
                  <span>
                    Landmark <span className="font-normal text-muted">(optional)</span>
                  </span>
                  <input name="landmark" className={field} />
                </label>
              </div>
            )}
          </Step>

          <Step n={3} title="Payment">
            <div className="grid gap-3">
              <Choice
                name="payment"
                value="gcash"
                checked={payment === "gcash"}
                onChange={() => setPayment("gcash")}
                icon="wallet"
                title="GCash"
                body="We’ll send our GCash details on Messenger"
              />
              <Choice
                name="payment"
                value="bank"
                checked={payment === "bank"}
                onChange={() => setPayment("bank")}
                icon="wallet"
                title="Bank transfer"
                body="We’ll send our account details on Messenger"
              />
              <Choice
                name="payment"
                value="cash"
                checked={payment === "cash"}
                onChange={() => setPayment("cash")}
                icon="wallet"
                title={cashLabel}
                body={fulfilment === "pickup" ? "Pay when you collect your books" : "Pay the rider when it arrives"}
              />
            </div>
            <label className={`${label} mt-6`}>
              <span>
                Order notes <span className="font-normal text-muted">(optional)</span>
              </span>
              <textarea name="notes" rows={3} className={field} placeholder="A dedication request, a gift, anything we should know" />
            </label>
          </Step>

          <div className="lg:hidden">
            <button
              type="submit"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gold px-7 text-sm font-semibold text-on-gold transition-[background-color,gap] duration-300 hover:gap-3 hover:bg-gold-hover"
            >
              Place order · {formatPeso(subtotal)}
              <Icon name="arrow-right" className="h-4 w-4" />
            </button>
            <OrderNote />
          </div>
        </form>

        {/* Desktop: sticky summary with the primary action. */}
        <aside aria-label="Order summary" className="hidden rounded-2xl bg-raised p-6 ring-1 ring-line lg:sticky lg:top-24 lg:block">
          <h2 className="mb-5 font-display text-lg font-semibold tracking-[-0.02em] text-text">Order summary</h2>
          <SummaryLines items={items} fulfilment={fulfilment} subtotal={subtotal} />
          <button
            type="submit"
            form="checkout-form"
            className="group mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gold px-7 text-sm font-semibold text-on-gold transition-[background-color,gap] duration-300 hover:gap-3 hover:bg-gold-hover"
          >
            Place order
            <Icon name="arrow-right" className="h-4 w-4" />
          </button>
          <OrderNote />
        </aside>
      </div>
    </div>
  );
}

function OrderNote() {
  return (
    <p className="mt-4 text-xs leading-5 text-muted">
      No payment is taken on this page. After you place your order, you’ll send it to us on
      Messenger and we’ll confirm everything there.
    </p>
  );
}
