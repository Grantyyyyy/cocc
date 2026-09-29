import Image, { type StaticImageData } from "next/image";

export default function PageHeader({
  title,
  description,
  image,
  imageAlt,
  focus = "object-center",
  children,
}: {
  title: string;
  description?: string;
  image: StaticImageData | string;
  imageAlt: string;
  focus?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="px-3 pt-2 sm:px-4 lg:px-6">
      <div className="unveil relative isolate mx-auto flex h-[46svh] min-h-[24rem] max-h-[34rem] max-w-[88rem] overflow-hidden rounded-2xl bg-violet-deep ring-1 ring-line">
        <Image
          src={image}
          alt={imageAlt}
          fill
          preload
          placeholder={typeof image === "string" ? "empty" : "blur"}
          sizes="(min-width: 1408px) 88rem, 100vw"
          className={`-z-10 object-cover ${focus}`}
        />
        <div
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(11,5,20,0.88)_0%,rgba(11,5,20,0.6)_45%,rgba(11,5,20,0.15)_85%),linear-gradient(to_right,rgba(11,5,20,0.6),transparent_65%)]"
          aria-hidden="true"
        />
        <div className="mt-auto w-full p-6 sm:p-10 lg:p-14">
          <h1 className="rise font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-none tracking-[-0.035em] text-text">
            {title}
          </h1>
          {description && (
            <p
              className="rise mt-5 max-w-[52ch] text-lg leading-8 text-text/85"
              style={{ animationDelay: "120ms" }}
            >
              {description}
            </p>
          )}
          {children && (
            <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
