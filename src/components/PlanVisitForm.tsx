"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import { serviceTimes } from "@/data/content";

const field =
  "w-full min-w-0 rounded-xl border border-line bg-background px-3.5 py-2.5 text-sm font-normal text-ink transition-colors duration-200 hover:border-accent/60 focus:border-accent focus-visible:outline-accent-strong";

const label = "flex min-w-0 flex-col gap-1.5 text-sm font-medium text-ink";

export default function PlanVisitForm() {
  const [status, setStatus] = useState<"idle" | "pending" | "done">("idle");
  const confirmation = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (status === "done") confirmation.current?.focus();
  }, [status]);

  if (status === "done") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-line bg-surface p-8 sm:p-10"
      >
        <h3
          ref={confirmation}
          tabIndex={-1}
          className="font-serif text-2xl font-semibold tracking-[-0.02em] text-ink"
        >
          We&apos;ll be watching for you
        </h3>
        <p className="mt-4 max-w-[52ch] leading-7 text-muted">
          A host will email you before Sunday with parking directions and where to drop
          off your kids. Nothing formal, just so you are not walking in cold.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent-strong underline decoration-accent/40 hover:decoration-accent-strong"
        >
          Send another response
        </button>
      </div>
    );
  }

  const pending = status === "pending";

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setStatus("pending");
        setTimeout(() => setStatus("done"), 600);
      }}
      className="rounded-2xl border border-line bg-surface p-8 sm:p-10"
    >
      <h3 className="font-serif text-2xl font-semibold tracking-[-0.02em] text-ink">
        Plan your visit
      </h3>
      <p className="mt-3 max-w-[48ch] leading-7 text-muted">
        Tell us you are coming and a host will meet you at the door.
      </p>

      <fieldset disabled={pending} className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className={label}>
          Full name
          <input required name="name" autoComplete="name" className={field} />
        </label>
        <label className={label}>
          Email
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            aria-describedby="email-help"
            className={field}
          />
          <span id="email-help" className="text-xs font-normal leading-5 text-muted">
            So a host can send you directions before Sunday.
          </span>
        </label>
        <label className={label}>
          Which service?
          <select
            name="service"
            defaultValue={`${serviceTimes[0].day} ${serviceTimes[0].time}`}
            className={field}
          >
            {serviceTimes.map((service) => (
              <option
                key={`${service.day}-${service.time}`}
                value={`${service.day} ${service.time}`}
              >
                {service.day} {service.time}, {service.title}
              </option>
            ))}
          </select>
        </label>
        <label className={label}>
          Kids joining you?
          <select name="kids" defaultValue="No" className={field}>
            <option>No</option>
            <option>Yes, nursery age</option>
            <option>Yes, elementary</option>
            <option>Yes, students</option>
          </select>
        </label>
        <label className={`${label} sm:col-span-2`}>
          Anything we should know? <span className="text-muted">(optional)</span>
          <textarea name="message" rows={3} className={field} />
        </label>
      </fieldset>

      <button
        type="submit"
        disabled={pending}
        className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-[background-color,gap,opacity] duration-300 hover:gap-3 hover:bg-ink-hover disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Sending your details…" : "Let us know you're coming"}
        {!pending && <Icon name="arrow-right" className="h-4 w-4" />}
      </button>
      <p className="mt-4 text-xs leading-5 text-muted">
        Demo form. Responses are not stored or sent anywhere yet.
      </p>
    </form>
  );
}
