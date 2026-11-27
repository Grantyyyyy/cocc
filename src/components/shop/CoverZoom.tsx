"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";
import Icon from "@/components/Icon";

/** Opens a book cover full size in a modal dialog instead of a raw image tab. */
export default function CoverZoom({ src, alt }: { src: StaticImageData; alt: string }) {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ground/70 text-text ring-1 ring-text/15 backdrop-blur-md transition-colors duration-300 hover:bg-ground"
      >
        <Icon name="expand" className="h-4 w-4" />
        <span className="sr-only">View the cover full size</span>
      </button>
      <dialog
        ref={dialog}
        aria-label="Book cover"
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        className="m-auto max-h-[92svh] w-[min(92vw,34rem)] overflow-visible bg-transparent p-0 backdrop:bg-ground/85 backdrop:backdrop-blur-sm"
      >
        <Image src={src} alt={alt} sizes="(min-width: 600px) 34rem, 92vw" className="h-auto max-h-[88svh] w-full rounded-lg object-contain shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)]" />
        <form method="dialog" className="absolute -top-3 right-0 translate-y-[-100%]">
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-text/10 text-text transition-colors duration-300 hover:bg-text/20"
            autoFocus
          >
            <Icon name="close" />
            <span className="sr-only">Close</span>
          </button>
        </form>
      </dialog>
    </>
  );
}
