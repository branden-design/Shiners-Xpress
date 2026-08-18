import Hero from "@/components/hero/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import ProcessSteps from "@/components/home/ProcessSteps";
import MembershipTeaser from "@/components/home/MembershipTeaser";
import LocationsTeaser from "@/components/home/LocationsTeaser";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ProcessSteps />
      <MembershipTeaser />
      <LocationsTeaser />
      <CtaBanner />
    </>
  );
}
