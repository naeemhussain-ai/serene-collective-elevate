import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { KeyMark } from "@/components/brand-mark";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const SLIDES = [
  { src: hero1, alt: "Bright high-ceiling living room with tall windows" },
  { src: hero2, alt: "Modern kitchen with marble island and morning light" },
  { src: hero3, alt: "Modern Texas home exterior at golden hour" },
  { src: hero4, alt: "Sunlit staircase and open hallway in a luxury home" },
];

const DURATION = 6000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const touchX = useRef<number | null>(null);

  const go = useCallback((dir: number) => {
    setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(1), DURATION);
    return () => clearTimeout(t);
  }, [index, paused, go]);

  return (
    <section
      className="bg-navy-950 relative h-[100svh] min-h-[620px] w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => {
        touchX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        const start = touchX.current;
        const end = e.changedTouches[0]?.clientX;
        if (start == null || end == null) return;
        if (Math.abs(end - start) > 50) go(end < start ? 1 : -1);
        touchX.current = null;
      }}
      aria-roledescription="carousel"
      aria-label="Featured properties"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        >
          <motion.img
            src={SLIDES[index]!.src}
            alt={SLIDES[index]!.alt}
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
            initial={reduce ? { scale: 1 } : { scale: 1.06 }}
            animate={reduce ? { scale: 1 } : { scale: 1.16 }}
            transition={{ duration: 9, ease: "linear" }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="from-navy-950/95 via-navy-950/70 absolute inset-0 bg-gradient-to-r to-transparent" />
      <div className="from-navy-950 absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t to-transparent" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-5 pt-24 lg:px-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
          className="max-w-3xl"
        >
          <Item>
            <div className="text-gold-500 mb-8">
              <KeyMark className="h-16 w-16" animate />
            </div>
          </Item>
          <Item>
            <p className="text-steel-300 eyebrow">Veteran-Operated · Texas</p>
          </Item>
          <Item>
            <h1 className="text-cream-50 mt-5 text-[2.6rem] leading-[1.05] font-semibold sm:text-6xl lg:text-[4.4rem]">
              Smart Real Estate Investments,{" "}
              <span className="text-gold-500 italic">With Peace of Mind</span>
            </h1>
          </Item>
          <Item>
            <p className="text-steel-300 mt-7 max-w-xl text-lg leading-relaxed">
              We acquire, manage, and grow real estate assets with transparency,
              integrity, and results — for you and for the communities we serve.
            </p>
          </Item>
          <Item>
            <div className="mt-10 flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="bg-gold-500 text-navy-950 inline-flex items-center gap-2 rounded-sm px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase shadow-xl"
                >
                  Get a Free Consultation <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/services"
                  className="border-steel-500/50 text-cream-50 hover:border-gold-500 inline-flex items-center gap-2 rounded-sm border px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase transition-colors"
                >
                  Our Services
                </Link>
              </motion.div>
            </div>
          </Item>
        </motion.div>
      </div>

      <div className="absolute right-5 bottom-8 z-10 flex items-center gap-4 lg:right-10">
        <div className="flex gap-2">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.alt}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "bg-gold-500 w-10" : "bg-cream-50/40 hover:bg-cream-50/70 w-4"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <SliderButton label="Previous slide" onClick={() => go(-1)}>
            <ArrowLeft className="h-4 w-4" />
          </SliderButton>
          <SliderButton label="Next slide" onClick={() => go(1)}>
            <ArrowRight className="h-4 w-4" />
          </SliderButton>
        </div>
      </div>
    </section>
  );
}

function SliderButton({
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
      className="border-cream-50/30 text-cream-50 hover:border-gold-500 hover:text-gold-500 flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-sm transition-colors"
    >
      {children}
    </button>
  );
}

function Item({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : 26 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}
