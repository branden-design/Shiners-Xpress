import { siteConfig } from "@/lib/site";

export default function FlexwashPortal() {
  return (
    <div
      id="portal"
      className="overflow-hidden rounded-2xl border border-white/10 bg-shiner-navy-light"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
        <div>
          <p className="text-xs font-bold tracking-widest text-shiner-blue-light uppercase">
            Member Portal
          </p>
          <h3 className="font-display text-lg font-bold text-white">
            Manage Your Membership
          </h3>
        </div>
        <a
          href={siteConfig.flexwashUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/20 px-4 py-2 text-xs font-bold text-white hover:bg-white/10"
        >
          Open in New Tab ↗
        </a>
      </div>

      <div className="w-full">
        <iframe
          src={siteConfig.flexwashUrl}
          title="Flexwash Member Portal"
          style={{ width: "100%", minHeight: 640, border: "none" }}
        />
      </div>

      <p className="border-t border-white/10 px-6 py-3 text-center text-xs text-white/40">
        Trouble seeing the portal above? Use &quot;Open in New Tab&quot;.
      </p>
    </div>
  );
}
