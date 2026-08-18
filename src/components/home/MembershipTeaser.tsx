import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import PricingCard from "@/components/PricingCard";
import { pricingTiers } from "@/lib/pricing";

export default function MembershipTeaser() {
  return (
    <section className="relative overflow-hidden bg-shiner-navy py-24">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(63,118,187,0.25), transparent 45%), radial-gradient(circle at 80% 60%, rgba(63,118,187,0.15), transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Unlimited Membership"
          title="Wash every day. Pays for itself in 2 visits."
          description="Pick a plan, add your whole family's vehicles, and manage everything online."
          light
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/membership"
            className="inline-block rounded-full bg-white px-8 py-3.5 text-sm font-bold text-shiner-navy shadow-xl transition-transform hover:scale-105"
          >
            See Full Membership Details
          </Link>
        </div>
      </div>
    </section>
  );
}
