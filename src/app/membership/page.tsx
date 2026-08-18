import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PricingCard from "@/components/PricingCard";
import FlexwashPortal from "@/components/FlexwashPortal";
import {
  pricingTiers,
  membershipPerks,
  familyPlan,
  selfServicePerks,
} from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Membership | Shiner's Express Car Wash",
  description:
    "Unlimited wash memberships from Shiner's Express — pick a plan and manage it online.",
};

export default function MembershipPage() {
  return (
    <>
      <section className="bg-shiner-navy pt-36 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Unlimited Membership"
            title="Wash every day. Pays for itself in 2 visits."
            description="Choose the plan that fits your car — upgrade, downgrade, or freeze anytime."
            light
            align="left"
          />
        </div>
      </section>

      <section className="bg-shiner-navy pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.id} tier={tier} />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2">
            {membershipPerks.map((perk) => (
              <div key={perk} className="flex items-center gap-2 text-sm text-white/60">
                <span className="text-shiner-blue-light">✓</span>
                {perk}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-shiner-navy/10 bg-shiner-navy p-8">
            <span className="inline-block rounded-full bg-shiner-blue px-4 py-1 text-xs font-bold text-white">
              Family Plan
            </span>
            <h3 className="font-display mt-4 text-2xl font-bold text-white">
              {familyPlan.title}
            </h3>
            <p className="mt-3 text-white/70">{familyPlan.description}</p>
          </div>

          <div className="rounded-2xl border border-shiner-navy/10 bg-shiner-navy-light p-8">
            <h3 className="font-display text-2xl font-bold text-white">
              Manage your own plan
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-3">
              {selfServicePerks.map((perk) => (
                <li key={perk} className="flex items-center gap-2 text-sm text-white/80">
                  <span className="text-shiner-blue-light">✓</span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-shiner-navy py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            eyebrow="Powered by Flexwash"
            title="Your account, right here"
            description="Sign up, add vehicles, update payment, or freeze your membership anytime."
            light
          />
          <div className="mt-12">
            <FlexwashPortal />
          </div>
        </div>
      </section>
    </>
  );
}
