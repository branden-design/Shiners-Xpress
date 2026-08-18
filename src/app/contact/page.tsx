import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Shiner's Express Car Wash",
};

export default function ContactPage() {
  return (
    <section className="bg-shiner-navy pt-36 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Get In Touch"
          title="We'd love to hear from you"
          light
          align="left"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <ContactForm />

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-shiner-navy-light p-6">
              <h3 className="font-display text-lg font-bold text-white">Call Us</h3>
              <a href={siteConfig.phoneHref} className="mt-2 block text-shiner-blue-light">
                {siteConfig.phone}
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-shiner-navy-light p-6">
              <h3 className="font-display text-lg font-bold text-white">Email Us</h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 block text-shiner-blue-light"
              >
                {siteConfig.email}
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-shiner-navy-light p-6">
              <h3 className="font-display text-lg font-bold text-white">Hours</h3>
              <p className="mt-2 text-white/60">Mon–Sun: 7:00 AM – 8:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
