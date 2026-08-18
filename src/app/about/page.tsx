import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About | Shiner's Express Car Wash",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-shiner-navy pt-36 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            eyebrow="Our Story"
            title="Built for a better shine, every time"
            light
            align="left"
          />
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Shiner&apos;s Express Car Wash was built on a simple idea: a fast wash
            shouldn&apos;t mean a lesser shine. From our tunnel equipment to our
            ceramic and graphene protection tiers, every part of the experience
            is tuned for speed and finish quality — because your car should look
            as good as new every single day.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:grid-cols-3">
          {[
            {
              title: "Speed",
              body: "In and out in minutes, with free vacuums included on every visit.",
            },
            {
              title: "Protection",
              body: "Ceramic and graphene coatings that guard your paint between washes.",
            },
            {
              title: "Value",
              body: "Unlimited memberships that pay for themselves in just two visits.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-shiner-navy/10 bg-shiner-navy p-8"
            >
              <h3 className="font-display text-xl font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-white/70">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
