import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, Check, Handshake, KeyRound, TrendingUp } from "lucide-react";

import { SectionReveal } from "@/components/section-reveal";

const TABS = [
  {
    id: "buyers",
    label: "Buyers",
    icon: KeyRound,
    title: "Buy with flexible, in-house terms",
    points: [
      "Purchase with flexible, in-house terms instead of traditional lender constraints",
      "Move fast when the right home comes along",
      "Close without third-party lender delays",
    ],
  },
  {
    id: "investors",
    label: "Investors",
    icon: TrendingUp,
    title: "Secure your next deal with greater flexibility",
    points: [
      "Move quickly when the right asset comes to market",
      "Flexible structures that complement your portfolio strategy",
      "A partner aligned with your long-term goals",
    ],
  },
  {
    id: "sellers",
    label: "Sellers",
    icon: Handshake,
    title: "Reach a larger pool of qualified purchasers",
    points: [
      "Access a larger pool of qualified, ready-to-act purchasers",
      "Close with confidence, backed by our in-house capital",
      "Less deal friction and fewer financing fall-throughs",
    ],
  },
] as const;

export function FinancingSection() {
  const [active, setActive] = useState<string>(TABS[0].id);
  const tab = TABS.find((t) => t.id === active)!;
  const Icon = tab.icon;

  return (
    <section className="navy-gradient relative overflow-hidden py-24 lg:py-32">
      <motion.div
        aria-hidden
        className="bg-gold-500/15 absolute -top-32 -right-24 h-96 w-96 rounded-full blur-[120px]"
        animate={{ y: [0, 60, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="bg-gold-400/10 absolute -bottom-40 -left-32 h-[26rem] w-[26rem] rounded-full blur-[130px]"
        animate={{ y: [0, -50, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <SectionReveal className="max-w-3xl">
          <p className="text-gold-500 eyebrow">In-House Financing</p>
          <h2 className="text-cream-50 mt-5 text-3xl leading-tight font-semibold sm:text-4xl">
            Flexible Financing, More Opportunities!
          </h2>
          <p className="text-cream-100 mt-6 leading-relaxed">
            At The Serene Collective, we don't believe financing should stand in the
            way of opportunity. That's why we offer in-house financing options for
            qualified buyers and investors, giving sellers access to a larger pool of
            potential purchasers and helping investors secure their next deal with
            greater flexibility.
          </p>
        </SectionReveal>

        <div className="mt-14">
          <div className="flex flex-wrap gap-3" role="tablist" aria-label="Financing audiences">
            {TABS.map((t) => {
              const TIcon = t.icon;
              const isActive = active === t.id;
              return (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="financing-panel"
                  onClick={() => setActive(t.id)}
                  className={`inline-flex items-center gap-2 rounded-sm border px-5 py-3 text-xs font-bold tracking-[0.18em] uppercase transition-colors ${
                    isActive
                      ? "bg-gold-500 border-gold-500 text-navy-950"
                      : "border-navy-700 bg-navy-900/60 text-steel-300 hover:border-gold-500/60 hover:text-cream-50"
                  }`}
                >
                  <TIcon className="h-4 w-4" />
                  {t.label}
                </button>
              );
            })}
          </div>

          <div id="financing-panel" className="relative mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab.id}
                role="tabpanel"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="border-navy-700 bg-navy-900/60 rounded-md border p-8 sm:p-10"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div className="bg-gold-500 text-navy-950 flex h-12 w-12 shrink-0 items-center justify-center rounded-md">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-cream-50 text-xl font-semibold sm:text-2xl">
                      {tab.title}
                    </h3>
                    <ul className="mt-5 space-y-3">
                      {tab.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <Check className="text-gold-500 mt-1 h-4 w-4 shrink-0" />
                          <span className="text-cream-100 leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <Link
            to="/"
            hash="contact"
            className="text-gold-500 hover:text-cream-50 group mt-8 inline-flex items-center gap-2 text-sm font-bold tracking-[0.18em] uppercase transition-colors"
          >
            Talk to our team
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
