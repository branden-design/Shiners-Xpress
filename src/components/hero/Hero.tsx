"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-shiner-navy" />,
});

export default function Hero() {
  return (
    <section className="relative flex h-[100vh] min-h-[640px] w-full items-center overflow-hidden bg-shiner-navy">
      <HeroScene />

      {/* readability gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-shiner-navy/70 via-transparent to-shiner-navy" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-shiner-navy/60 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <p className="mb-4 text-xs font-bold tracking-[0.35em] text-shiner-blue-light uppercase">
            Unlimited Membership Car Wash
          </p>
          <h1 className="font-display text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl md:text-7xl">
            The Shine
            <br />
            Starts Here.
          </h1>
          <p className="mt-6 max-w-md text-lg text-white/70">
            Wash every day. Pays for itself in 2 visits. Drag to look around —
            this is the shine you drive away with.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/membership"
              className="rounded-full bg-shiner-blue px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-shiner-blue/40 transition-transform hover:scale-105"
            >
              View Memberships
            </Link>
            <Link
              href="/locations"
              className="rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              Find a Location
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs font-semibold tracking-widest text-white/50 uppercase"
      >
        Scroll to explore
      </motion.div>
    </section>
  );
}
