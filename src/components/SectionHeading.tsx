type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-bold tracking-[0.3em] uppercase ${
            light ? "text-shiner-blue-light" : "text-shiner-blue"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl ${
          light ? "text-white" : "text-shiner-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg ${light ? "text-white/70" : "text-shiner-navy/70"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
