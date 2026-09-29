export default function SectionHeading({
  id,
  title,
  description,
  align = "left",
}: {
  id?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2
        id={id}
        className="font-display text-[clamp(2rem,4.2vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-text"
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-[56ch] text-[1.0625rem] leading-8 text-muted ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
