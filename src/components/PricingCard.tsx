import type { PricingTier } from "@/lib/pricing";
import TiltCard from "./TiltCard";

export default function PricingCard({ tier }: { tier: PricingTier }) {
  const isFeatured = Boolean(tier.badge);
  const isGold = tier.accent === "gold";

  return (
    <TiltCard className="group h-full">
      <div
        className={`relative flex h-full flex-col rounded-2xl border p-6 transition-shadow duration-300 ${
          isFeatured
            ? isGold
              ? "border-amber-400/40 bg-gradient-to-b from-shiner-navy-light to-shiner-navy shadow-[0_0_40px_-10px_rgba(251,191,36,0.35)]"
              : "border-shiner-blue/50 bg-gradient-to-b from-shiner-blue to-shiner-blue-dark shadow-[0_0_40px_-10px_rgba(63,118,187,0.6)]"
            : "border-white/10 bg-shiner-navy-light/60"
        }`}
        style={{ transform: "translateZ(20px)" }}
      >
        {tier.badge && (
          <span
            className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-bold tracking-wide whitespace-nowrap ${
              isGold ? "bg-amber-400 text-shiner-navy" : "bg-white text-shiner-navy"
            }`}
          >
            {isGold ? "◆ " : "★ "}
            {tier.badge}
          </span>
        )}

        <h3 className="font-display text-xl font-bold text-white">{tier.name}</h3>
        <p
          className={`mt-1 text-sm ${isFeatured ? "text-white/80" : "text-shiner-gray"}`}
        >
          {tier.subtitle}
        </p>

        <div className="mt-4 flex items-baseline gap-1">
          <span
            className={`font-display text-lg font-bold ${isGold ? "text-amber-400" : "text-white"}`}
          >
            $
          </span>
          <span
            className={`font-display text-4xl font-extrabold ${isGold ? "text-amber-400" : "text-white"}`}
          >
            {tier.monthly}
          </span>
        </div>
        <p
          className={`text-xs font-semibold tracking-widest uppercase ${
            isFeatured ? "text-white/70" : "text-shiner-gray"
          }`}
        >
          per month
        </p>

        <ul className="mt-6 flex-1 space-y-3">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm">
              <span
                className={`mt-0.5 ${isGold ? "text-amber-400" : isFeatured ? "text-white" : "text-shiner-blue-light"}`}
              >
                ✓
              </span>
              <span
                className={
                  isFeatured ? "text-white" : "text-white/80"
                }
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
          <span
            className={`text-xs font-bold tracking-widest uppercase ${isGold ? "text-amber-400" : "text-white/70"}`}
          >
            Single Wash
          </span>
          <span
            className={`font-display text-xl font-bold ${isGold ? "text-amber-400" : "text-white"}`}
          >
            ${tier.singleWash}
          </span>
        </div>
      </div>
    </TiltCard>
  );
}
