import { Link, useRouterState } from "@tanstack/react-router";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { Menu, ArrowRight } from "lucide-react";

import { NAV_ITEMS } from "@/lib/site";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/";

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  const solid = scrolled || !overHero;

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: solid ? "oklch(0.42 0.062 254 / 0.92)" : "oklch(0.42 0.062 254 / 0)",
        boxShadow: solid
          ? "0 12px 40px -20px oklch(0.42 0.062 254 / 0.5)"
          : "0 0 0 0 transparent",
        backdropFilter: solid ? "blur(14px)" : "blur(0px)",
      }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-32 max-w-7xl items-center justify-between gap-6 px-5 lg:px-10"
      >
        <Link to="/" className="shrink-0" aria-label="The Serene Collective home">
          <img
            src="/SereneCollective-logo-1.png"
            alt="The Serene Collective"
            className="h-32 w-auto object-contain"
          />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active =
              item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <li key={item.to} className="relative">
                <Link
                  to={item.to}
                  className={`relative block px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "text-cream-50"
                      : "text-steel-300 hover:text-cream-50"
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="bg-gold-500 absolute -bottom-0.5 left-3 right-3 h-px"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <ConsultCta />
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            aria-label="Open menu"
            className="text-cream-50 border-steel-500/40 hover:border-gold-500 inline-flex h-11 w-11 items-center justify-center rounded-sm border transition-colors lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="flex w-[86vw] max-w-sm flex-col border-none p-0 bg-[oklch(0.42_0.062_254)]"
          >
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="border-navy-700 border-b px-6 py-6">
              <img
                src="/SereneCollective-logo-1.png"
                alt="The Serene Collective"
                className="h-32 w-auto object-contain"
              />
            </div>
            <ul className="flex-1 px-3 py-4">
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={item.to}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.1, duration: 0.4 }}
                >
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="text-cream-50 hover:bg-navy-900 block rounded-sm px-4 py-4 font-[family-name:var(--font-display)] text-xl"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="border-navy-700 border-t p-5">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="bg-gold-500 text-navy-950 flex w-full items-center justify-center gap-2 rounded-sm px-5 py-4 text-sm font-bold tracking-wide uppercase"
              >
                Get a Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}

function ConsultCta() {
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
      <Link
        to="/contact"
        className="bg-gold-500 text-navy-950 hover:shadow-gold-500/30 group inline-flex items-center gap-2 rounded-sm px-5 py-3 text-[0.7rem] font-bold tracking-[0.18em] uppercase transition-shadow hover:shadow-lg"
      >
        Free Consultation
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}
