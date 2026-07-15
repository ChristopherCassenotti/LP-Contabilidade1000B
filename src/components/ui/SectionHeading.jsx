export default function SectionHeading({
  eyebrow,
  title,
  className = "",
  light = false,
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <p
        className={`mb-4 text-sm font-bold uppercase tracking-[0.18em] ${
          light ? "text-blue-500" : "text-blue-500"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-[clamp(2rem,4vw,3.65rem)] font-semibold leading-[1.08] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
