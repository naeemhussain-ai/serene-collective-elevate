import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

import { NAV_ITEMS, SERVICES, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-steel-300">
      <div className="gold-rule" />
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 pt-16 pb-20 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <img
            src="/SereneCollective-white-logo2.png"
            alt="The Serene Collective"
            className="h-14 w-auto object-contain"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            A veteran-operated real estate investment company based in Texas. We
            make investing simple, secure, and impactful   for you and for the
            communities we serve.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-cream-50 eyebrow">Explore</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-gold-500 transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-cream-50 eyebrow">Contact</h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Mail className="text-gold-500 mt-0.5 h-4 w-4 shrink-0" />
              <a href={`mailto:${SITE.email}`} className="hover:text-gold-500 break-all transition-colors">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="text-gold-500 mt-0.5 h-4 w-4 shrink-0" />
              <a href={`tel:${SITE.phone.replace(/\D/g, "")}`} className="hover:text-gold-500 transition-colors">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="text-gold-500 mt-0.5 h-4 w-4 shrink-0" />
              <span>{SITE.location}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-navy-700 mx-auto flex max-w-7xl flex-col gap-3 border-t px-5 py-6 text-xs sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p>
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
        <p className="text-steel-500">
          {SERVICES.length} service pillars · Veteran-operated · Texas
        </p>
      </div>
    </footer>
  );
}
