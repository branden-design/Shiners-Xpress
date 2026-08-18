import SectionHeading from "@/components/SectionHeading";
import TiltCard from "@/components/TiltCard";
import { washSteps } from "@/lib/site";

export default function ProcessSteps() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 10%, rgba(63,118,187,0.08), transparent 40%), radial-gradient(circle at 85% 90%, rgba(245,185,66,0.08), transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="How it works"
          title="Four steps to a spotless finish"
          description="Fast lanes, real results — built for people who don't have time to wait around."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {washSteps.map((step, i) => (
            <TiltCard key={step.title}>
              <div
                className="group h-full rounded-2xl border border-shiner-navy/10 bg-shiner-navy p-6 shadow-sm transition-shadow hover:shadow-xl"
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
  );
}
