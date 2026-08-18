import { membershipPerks } from "@/lib/pricing";

export default function TrustStrip() {
  return (
    <div className="border-b border-shiner-navy/5 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-6">
        {membershipPerks.map((perk) => (
          <div key={perk} className="flex items-center gap-2 text-sm font-semibold text-shiner-navy/70">
            <span className="text-shiner-blue">✓</span>
            {perk}
          </div>
        ))}
      </div>
    </div>
  );
}
