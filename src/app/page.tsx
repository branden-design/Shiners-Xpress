import Hero from "@/components/hero/Hero";
import StatsStrip from "@/components/home/StatsStrip";
import TrustStrip from "@/components/home/TrustStrip";
import ProcessSteps from "@/components/home/ProcessSteps";
import MembershipTeaser from "@/components/home/MembershipTeaser";
import LocationsTeaser from "@/components/home/LocationsTeaser";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <TrustStrip />
      <ProcessSteps />
      <MembershipTeaser />
      <LocationsTeaser />
      <CtaBanner />
    </>
  );
}
