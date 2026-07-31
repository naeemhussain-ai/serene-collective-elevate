import { motion } from "motion/react";
import { KeyMark } from "@/components/brand-mark";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="navy-gradient relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32">
      <div className="text-gold-500/10 pointer-events-none absolute -top-10 right-0 hidden lg:block">
        <KeyMark className="h-[26rem] w-[26rem]" animate />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gold-500 eyebrow"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-cream-50 mt-5 max-w-3xl text-4xl leading-[1.08] font-semibold sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-steel-300 mt-7 max-w-2xl text-lg leading-relaxed"
        >
          {intro}
        </motion.p>
      </div>
    </section>
  );
}
