"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name || "website visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-semibold text-white/80">Name</label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-shiner-blue focus:outline-none"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-semibold text-white/80">Email</label>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-shiner-blue focus:outline-none"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-semibold text-white/80">Message</label>
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-shiner-blue focus:outline-none"
          placeholder="How can we help?"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-shiner-blue px-7 py-3 text-sm font-bold text-white transition-transform hover:scale-105"
      >
        Send Message
      </button>
    </form>
  );
}
