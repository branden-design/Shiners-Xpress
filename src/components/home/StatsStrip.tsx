"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "150'", label: "Wash Tunnel" },
  { value: "4", label: "Membership Tiers" },
  { value: "2×", label: "Visits To Pay Off" },
  { value: "365", label: "Days A Year" },
];

export default function StatsStrip() {
  return (
    <section className="relative border-b border-white/5 bg-shiner-navy py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            className="text-center"
          >
            <p className="font-display bg-gradient-to-b from-white to-shiner-blue-light bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs font-bold tracking-widest text-white/50 uppercase">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
