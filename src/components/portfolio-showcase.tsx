import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MapPin } from "lucide-react";

import { PORTFOLIO, PORTFOLIO_FILTERS } from "@/lib/site";

export function PortfolioShowcase() {
  const [filter, setFilter] = useState<string>("All");
  const shown = PORTFOLIO.filter((p) => filter === "All" || p.type === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {PORTFOLIO_FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`relative rounded-sm px-4 py-2 text-xs font-semibold tracking-[0.14em] uppercase transition-colors ${
              filter === f
                ? "text-navy-950"
                : "text-navy-700 hover:text-navy-950 border-border border"
            }`}
          >
            {filter === f && (
              <motion.span
                layoutId="portfolio-filter"
                className="bg-gold-500 absolute inset-0 rounded-sm"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative">{f}</span>
          </button>
        ))}
      </div>

      <motion.ul layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.li
              key={p.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group border-border relative overflow-hidden rounded-md border bg-card p-6 shadow-sm transition-shadow hover:shadow-xl"
            >
              <span className="bg-gold-500 absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
              <p className="text-steel-500 text-[0.65rem] font-bold tracking-[0.22em] uppercase">
                {p.status}
              </p>
              <h3 className="text-navy-900 mt-3 text-xl">{p.name}</h3>
              <p className="text-muted-foreground mt-2 flex items-center gap-1.5 text-sm">
                <MapPin className="h-3.5 w-3.5" /> {p.location}
              </p>
              <div className="border-border mt-6 flex items-center justify-between border-t pt-4">
                <span className="text-navy-700 text-sm">{p.type}</span>
                <span className="text-gold-500 font-[family-name:var(--font-display)] text-lg">
                  {p.metric}
                </span>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
