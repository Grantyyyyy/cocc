"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import { siteConfig } from "@/data/site";

const field =
  "w-full min-w-0 rounded-xl border border-line bg-ground px-3.5 py-3 text-sm font-normal text-text transition-colors duration-200 placeholder:text-muted/70 hover:border-text/35 focus:border-gold";

const label = "flex min-w-0 flex-col gap-2 text-sm font-medium text-text";

export default function PlanVisitForm() {
  const [status, setStatus] = useState<"idle" | "pending" | "done">("idle");
  const confirmation = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (status === "done") confirmation.current?.focus();
  }, [status]);

  if (status === "done") {
    return (
      <div role="status" className="rounded-2xl bg-violet p-8 sm:p-10">
        <h3
          ref={confirmation}
          tabIndex={-1}
          className="font-display text-3xl font-bold tracking-[-0.03em] text-text"
        >
          See you on Sunday
        </h3>
        <p className="mt-4 max-w-[48ch] leading-7 text-on-violet-muted">
          A host will reach out before Sunday so you have a familiar face waiting at{" "}
          {siteConfig.venue.name}.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-semibold text-text underline decoration-text/40 hover:decoration-text"
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
      className="rounded-2xl bg-raised p-8 ring-1 ring-line sm:p-10"
    >
      <h3 className="font-display text-2xl font-bold tracking-[-0.03em] text-text">
        Tell us you are coming
      </h3>
      <p className="mt-3 max-w-[46ch] leading-7 text-muted">
        A host will meet you at the entrance and save you a seat.
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
            So a host can reach you before Sunday.
          </span>
        </label>
        <label className={label}>
          When are you coming?
          <select name="when" defaultValue="This Sunday" className={field}>
            <option>This Sunday</option>
            <option>Next Sunday</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label className={label}>
          Bringing kids?
          <select name="kids" defaultValue="No" className={field}>
            <option>No</option>
            <option>Yes</option>
          </select>
        </label>
        <label className={`${label} sm:col-span-2`}>
          <span>
            Anything we should know? <span className="font-normal text-muted">(optional)</span>
          </span>
          <textarea name="message" rows={3} className={field} />
        </label>
      </fieldset>

      <button
        type="submit"
        disabled={pending}
        className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-on-gold transition-[background-color,gap,opacity] duration-300 hover:gap-3 hover:bg-gold-hover disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Sending your details…" : "Save me a seat"}
        {!pending && <Icon name="arrow-right" className="h-4 w-4" />}
      </button>
      <p className="mt-4 text-xs leading-5 text-muted">
        Demo form. Responses are not stored or sent anywhere yet.
      </p>
    </form>
  );
}
