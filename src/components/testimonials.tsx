import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

import { TESTIMONIALS } from "@/lib/site";

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setI((v) => (v + 1) % TESTIMONIALS.length), 7000);
    return () => clearTimeout(t);
  }, [i]);

  const item = TESTIMONIALS[i]!;

  return (
    <div className="relative mx-auto max-w-3xl text-center">
      <Quote className="text-gold-500 mx-auto h-8 w-8" />
      <div className="mt-8 min-h-[220px] sm:min-h-[190px]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-cream-50 font-[family-name:var(--font-display)] text-2xl leading-snug sm:text-3xl">
              “{item.quote}”
            </p>
            <footer className="mt-7">
              <p className="text-gold-500 text-sm font-semibold">{item.name}</p>
              <p className="text-steel-300 mt-1 text-xs tracking-widest uppercase">
                {item.role}
              </p>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        <NavBtn
          label="Previous testimonial"
          onClick={() => setI((v) => (v - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
        >
          <ArrowLeft className="h-4 w-4" />
        </NavBtn>
        {TESTIMONIALS.map((t, idx) => (
          <button
            key={t.name}
            onClick={() => setI(idx)}
            aria-label={`Testimonial ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              idx === i ? "bg-gold-500 w-8" : "bg-cream-50/30 w-3"
            }`}
          />
        ))}
        <NavBtn
          label="Next testimonial"
          onClick={() => setI((v) => (v + 1) % TESTIMONIALS.length)}
        >
          <ArrowRight className="h-4 w-4" />
        </NavBtn>
      </div>
    </div>
  );
}

function NavBtn({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="border-cream-50/25 text-cream-50 hover:border-gold-500 hover:text-gold-500 flex h-9 w-9 items-center justify-center rounded-full border transition-colors"
    >
      {children}
    </button>
  );
}
