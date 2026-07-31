import { motion, useReducedMotion } from "motion/react";

/** Ornate gold key   the brand's signature motif. */
export function KeyMark({
  className = "h-10 w-10",
  animate = false,
}: {
  className?: string;
  animate?: boolean;
}) {
  const reduce = useReducedMotion();
  const floating = animate && !reduce;
  const floatProps = floating
    ? {
        animate: { y: [0, -6, 0], rotate: [0, -3, 0] },
        transition: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut" as const,
        },
      }
    : {};

  return (
    <motion.svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Serene Collective key emblem"
      {...floatProps}
    >

      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="32" cy="17" r="9.5" />
        <circle cx="32" cy="17" r="3.6" />
        <path d="M27 26.5c1 2.4 1.4 4.4 1.4 6.6V52" />
        <path d="M37 26.5c-1 2.4-1.4 4.4-1.4 6.6V52" />
        <path d="M28.4 38h7.2M28.4 44h5.6" />
        <path d="M28.4 52h7.2l-3.6 5z" />
      </g>
    </motion.svg>
  );
}

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <KeyMark className={`h-8 w-8 ${light ? "text-gold-500" : "text-gold-500"}`} />
      <span className="leading-none">
        <span
          className={`block font-[family-name:var(--font-display)] text-base font-semibold tracking-tight ${
            light ? "text-cream-50" : "text-navy-900"
          }`}
        >
          The Serene Collective
        </span>
        <span
          className={`mt-1 block text-[0.6rem] font-semibold tracking-[0.3em] uppercase ${
            light ? "text-steel-300" : "text-steel-500"
          }`}
        >
          Real Estate Investments
        </span>
      </span>
    </span>
  );
}
