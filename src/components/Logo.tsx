type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

// Recreates the Shiner's Express starburst mark + wordmark from the brand guide.
export default function Logo({ variant = "light", className = "" }: LogoProps) {
  const wordColor = variant === "light" ? "#ffffff" : "#18242c";
  const subColor = variant === "light" ? "rgba(255,255,255,0.55)" : "#a8a8aa";

  const rays = [
    [0, -22],
    [8, -20],
    [16, -14],
    [-8, -20],
    [-16, -14],
  ];

  return (
    <span className={`inline-flex items-end gap-2 ${className}`}>
      <svg width="34" height="26" viewBox="-20 -24 40 30" aria-hidden className="shrink-0">
        {rays.map(([x, y], i) => (
          <line
            key={i}
            x1="0"
            y1="2"
            x2={x}
            y2={y}
            stroke="#3f76bb"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        ))}
        <line x1="-20" y1="2" x2="20" y2="2" stroke="#3f76bb" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className="font-display text-lg font-extrabold tracking-tight"
          style={{ color: wordColor }}
        >
          SHINER&apos;S
        </span>
        <span
          className="text-[9px] font-semibold tracking-[0.25em]"
          style={{ color: subColor }}
        >
          EXPRESS CAR WASH
        </span>
      </span>
    </span>
  );
}
