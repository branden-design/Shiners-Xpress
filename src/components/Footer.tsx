import Link from "next/link";
import Logo from "./Logo";
import { navLinks, siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-shiner-navy border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm text-white/60">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-white/40 uppercase">
              Explore
            </h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-white/40 uppercase">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a href={siteConfig.phoneHref} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-white/40 uppercase">
              Membership
            </h4>
            <p className="mt-4 text-sm text-white/70">
              Manage your plan, vehicles, and billing anytime through our member
              portal.
            </p>
            <Link
              href="/membership#portal"
              className="mt-3 inline-block text-sm font-bold text-shiner-blue-light hover:text-white"
            >
              Open Member Portal →
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Free re-wash within 3 days if it rains · Safe on vehicles with PPF</p>
        </div>
      </div>
    </footer>
  );
}
