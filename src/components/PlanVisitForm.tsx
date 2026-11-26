"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import { mapsUrl, siteConfig } from "@/data/site";
import { serviceIcs } from "@/lib/service";

const field =
  "w-full min-w-0 rounded-xl border border-line bg-ground px-3.5 py-3 text-base font-normal text-text transition-colors duration-200 placeholder:text-muted/70 hover:border-text/35 focus:border-gold sm:text-sm";

const label = "flex min-w-0 flex-col gap-2 text-sm font-medium text-text";

const help = "text-xs font-normal leading-5 text-muted";

const pill =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-[background-color,border-color,gap] duration-300";

function downloadIcs() {
  const blob = new Blob([serviceIcs()], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "cocc-sunday-service.ics";
  link.click();
  URL.revokeObjectURL(url);
}

export default function PlanVisitForm() {
  const [status, setStatus] = useState<"idle" | "pending" | "done">("idle");
  const [firstName, setFirstName] = useState("");
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
          See you on Sunday{firstName ? `, ${firstName}` : ""}!
        </h3>
        <p className="mt-4 max-w-[48ch] leading-7 text-on-violet-muted">
          A host will reach out before Sunday so you have a familiar face waiting at{" "}
          {siteConfig.venue.name}.
        </p>
        <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
          <button
            type="button"
            onClick={downloadIcs}
            className={`${pill} bg-gold text-on-gold hover:bg-gold-hover`}
          >
            <Icon name="calendar" className="h-4 w-4" />
            Add to calendar
          </button>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${pill} border border-text/40 text-text hover:border-text hover:bg-text/10`}
          >
            <Icon name="pin" className="h-4 w-4" />
            Get directions
          </a>
        </div>
        <button
          type="button"
          onClick={() => {
            setFirstName("");
            setStatus("idle");
          }}
          className="mt-8 text-sm font-semibold text-text underline decoration-text/40 hover:decoration-text"
        >
          Save a seat for someone else
        </button>
      </div>
    );
  }

  const pending = status === "pending";

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setFirstName(String(data.get("name") ?? "").trim().split(/\s+/)[0] ?? "");
        setStatus("pending");
        setTimeout(() => setStatus("done"), 600);
      }}
      className="rounded-2xl bg-raised p-8 ring-1 ring-line sm:p-10"
    >
      <h3 className="font-display text-2xl font-bold tracking-[-0.03em] text-text">
        Let us know you’re coming
      </h3>
      <p className="mt-3 max-w-[46ch] leading-7 text-muted">
        A host will meet you at the entrance and save you a seat. Takes 30 seconds.
      </p>

      <fieldset disabled={pending} className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className={label}>
          First name
          <input required name="name" autoComplete="given-name" className={field} />
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
            aria-describedby="mobile-help"
            className={field}
          />
          <span id="mobile-help" className={help}>
            So a host can text you before Sunday.
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
        This form isn’t connected yet, so nothing you type here is sent. For now,{" "}
        <a
          href={siteConfig.messenger}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text underline decoration-text/30 hover:decoration-gold"
        >
          message us on Messenger
        </a>
        .
      </p>
    </form>
  );
}
