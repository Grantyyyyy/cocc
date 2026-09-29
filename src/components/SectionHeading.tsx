export default function SectionHeading({
  title,
  description,
  align = "left",
  tone = "light",
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <h2
        className={`font-serif text-3xl font-semibold leading-[1.15] tracking-[-0.025em] sm:text-4xl ${
          dark ? "text-on-ink" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-[62ch] text-[1.0625rem] leading-8 ${
            dark ? "text-on-ink-muted" : "text-muted"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
