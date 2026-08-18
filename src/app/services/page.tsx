import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import TiltCard from "@/components/TiltCard";
import { washSteps } from "@/lib/site";
import { pricingTiers } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Services | Shiner's Express Car Wash",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-shiner-navy pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Our Services"
            title="Every wash, done right"
            description="From a quick rinse to full ceramic and graphene protection — pick the level of shine your car deserves."
            light
            align="left"
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="The Process" title="What happens in the tunnel" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {washSteps.map((step, i) => (
              <TiltCard key={step.title}>
                <div
                  className="h-full rounded-2xl border border-shiner-navy/10 bg-shiner-navy p-6"
                  style={{ transform: "translateZ(20px)" }}
                >
                  <span className="font-display text-4xl font-extrabold text-shiner-blue/40">
                    0{i + 1}
                  </span>
                  <h3 className="font-display mt-4 text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/60">{step.description}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-shiner-navy py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Wash Tiers" title="What's included at each level" light />
          <div className="mt-14 space-y-4">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-shiner-navy-light p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {tier.name}{" "}
                    <span className="font-body text-sm font-normal text-white/50">
                      — {tier.subtitle}
                    </span>
                  </h3>
                  <p className="mt-1 text-sm text-white/60">
                    {tier.features.join(" · ")}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-display text-2xl font-bold text-white">
                    ${tier.monthly}
                    <span className="text-sm font-normal text-white/50">/mo</span>
                  </p>
                  <p className="text-xs text-white/50">${tier.singleWash} single wash</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/membership"
              className="inline-block rounded-full bg-shiner-blue px-8 py-3.5 text-sm font-bold text-white transition-transform hover:scale-105"
            >
              Choose Your Plan
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
