import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import TiltCard from "@/components/TiltCard";
import { locations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Locations | Shiner's Express Car Wash",
};

export default function LocationsPage() {
  return (
    <section className="bg-shiner-navy pt-36 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Find Us"
          title="Shiner's Express Locations"
          description="Pick the location closest to you — every membership works at any Shiner's Express."
          light
          align="left"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc) => (
            <TiltCard key={loc.id}>
              <div
                className="h-full rounded-2xl border border-white/10 bg-shiner-navy-light p-6"
                style={{ transform: "translateZ(20px)" }}
              >
                <h3 className="font-display text-lg font-bold text-white">
                  {loc.name}
                </h3>
                <p className="mt-2 text-sm text-white/60">{loc.address}</p>
                <p className="text-sm text-white/60">{loc.city}</p>
                <p className="mt-4 text-sm font-semibold text-shiner-blue-light">
                  {loc.hours}
                </p>
                <a
                  href={`tel:${loc.phone.replace(/[^0-9+]/g, "")}`}
                  className="mt-1 block text-sm text-white/60 hover:text-white"
                >
                  {loc.phone}
                </a>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
