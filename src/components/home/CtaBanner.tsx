import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="bg-shiner-blue py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center sm:flex-row sm:text-left">
        <div>
          <h3 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
            Ready to skip the line?
          </h3>
          <p className="mt-2 text-white/80">
            Join online in under a minute — manage everything from your phone.
          </p>
        </div>
        <Link
          href="/membership#portal"
          className="shrink-0 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-shiner-blue shadow-xl transition-transform hover:scale-105"
        >
          Ask Your Attendant / Join Today
        </Link>
      </div>
    </section>
  );
}
