import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import keyImg from "@/assets/key-no-bg.png";

const LOGO1 = "/SereneCollective-logo-1.png";

const SLIDES = [
  { src: hero1, alt: "Bright high-ceiling living room with tall windows", logo: LOGO1, h: "h-24" },
  { src: hero2, alt: "Modern kitchen with marble island and morning light", logo: LOGO1, h: "h-24" },
  { src: hero3, alt: "Modern Texas home exterior at golden hour", logo: LOGO1, h: "h-24" },
  { src: hero4, alt: "Sunlit staircase and open hallway in a luxury home", logo: LOGO1, h: "h-24" },
  { src: "/blue-dining.jpg", alt: "Blue dining room with elegant interior", logo: LOGO1, h: "h-24" },
];

const DURATION = 3000;

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
      <style>{`
        .gold-shimmer {
          background: linear-gradient(100deg, #d4af37 0%, #f5e7a3 30%, #fff3c4 50%, #f5e7a3 70%, #d4af37 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gold-shimmer 5s linear infinite;
        }
        @keyframes gold-shimmer {
          to { background-position: 200% center; }
        }
      `}</style>
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

      <div className="bg-navy-950/50 absolute inset-0" />
      <div className="from-navy-950 absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t to-transparent" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(50%_55%_at_50%_50%,rgba(255,251,235,0.16),transparent_70%)]"
      />

      <motion.div
        aria-hidden
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        <motion.div
          className="bg-gold-500/25 absolute -top-32 -left-32 h-[34rem] w-[34rem] rounded-full blur-[110px]"
          animate={{ x: [0, 120, 0], y: [0, 80, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="bg-gold-400/20 absolute -right-24 -bottom-40 h-[30rem] w-[30rem] rounded-full blur-[120px]"
          animate={{ x: [0, -100, 0], y: [0, -60, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-5 pt-32 text-center lg:px-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
          className="flex max-w-3xl flex-col items-center"
        >
          <Item>
            <motion.div
              key={SLIDES[index]!.logo}
              className="mb-8 flex items-center justify-center gap-1.5"
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={SLIDES[index]!.logo}
                alt="Serene Collective"
                className={`${SLIDES[index]!.h} w-auto object-contain`}
              />
              <motion.img
                src={keyImg}
                alt=""
                className="h-24 w-auto object-contain drop-shadow-[0_8px_18px_rgba(212,175,55,0.45)]"
                animate={reduce ? {} : { y: [0, -6, 0], rotate: [0, 6, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </Item>
          <Item>
            <p className="text-steel-300 eyebrow">Veteran-Operated · Texas</p>
          </Item>
          <Item>
            <h1 className="text-cream-50 mt-5 text-[2.6rem] leading-[1.05] font-semibold sm:text-6xl lg:text-[4.4rem]">
              Smart Real Estate Investments,{" "}
              <span className="gold-shimmer italic">With Peace of Mind</span>
            </h1>
          </Item>
          <Item>
            <p className="text-steel-300 mt-7 mx-auto max-w-xl text-lg leading-relaxed">
              We acquire, manage, and grow real estate assets with transparency,
              integrity, and results   for you and for the communities we serve.
            </p>
          </Item>
          <Item>
            <div className="mt-10 flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="bg-gold-500 text-navy-950 inline-flex items-center gap-2 rounded-sm px-7 py-4 text-xs font-bold tracking-[0.18em] uppercase shadow-xl"
                >
                  Get a Free Consultation
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

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 6, repeat: Infinity, times: [0, 0.15, 0.85, 1] }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-steel-300 text-[0.6rem] font-semibold tracking-[0.3em] uppercase">
            Scroll
          </span>
          <motion.span
            className="border-gold-500 block border-r border-b"
            animate={reduce ? { rotate: 45 } : { y: [0, 6, 0], rotate: 45, opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: 10, height: 10 }}
          />
        </div>
      </motion.div>

      <div className="absolute right-5 bottom-8 z-10 flex items-center justify-center gap-4 lg:right-10">
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
      </div>
    </section>
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
