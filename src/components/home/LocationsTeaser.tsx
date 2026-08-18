import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import TiltCard from "@/components/TiltCard";
import { locations } from "@/lib/locations";

export default function LocationsTeaser() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Find Us"
          title="Convenient locations, ready when you are"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {locations.map((loc) => (
            <TiltCard key={loc.id}>
              <div
                className="h-full rounded-2xl border border-shiner-navy/10 bg-shiner-navy p-6"
                style={{ transform: "translateZ(20px)" }}
              >
                <h3 className="font-display text-lg font-bold text-white">
                  {loc.name}
                </h3>
                <p className="mt-2 text-sm text-white/60">{loc.address}</p>
                <p className="text-sm text-white/60">{loc.city}</p>
                <p className="mt-3 text-sm font-semibold text-shiner-blue-light">
                  {loc.hours}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/locations"
            className="text-sm font-bold text-shiner-blue hover:text-shiner-blue-dark"
          >
            View All Locations →
          </Link>
        </div>
      </div>
    </section>
  );
}
