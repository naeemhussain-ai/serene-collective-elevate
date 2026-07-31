import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { CalendarCheck } from "lucide-react";

export function FloatingCta() {
  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setShow(y > 700));

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.95 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed right-4 bottom-4 z-40 sm:right-6 sm:bottom-6"
        >
          <Link
            to="/contact"
            className="bg-navy-900 text-cream-50 ring-gold-500/40 hover:bg-navy-700 flex items-center gap-3 rounded-full py-4 pr-6 pl-5 text-sm font-semibold shadow-2xl ring-1 transition-colors"
          >
            <CalendarCheck className="text-gold-500 h-5 w-5" />
            <span className="hidden sm:inline">Get a Free Consultation</span>
            <span className="sm:hidden">Free Consult</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
