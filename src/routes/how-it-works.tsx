import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Lock, MessagesSquare, Search, ClipboardList, TrendingUp } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { SectionReveal, StaggerGroup, StaggerItem } from "@/components/section-reveal";
import { StatCounter } from "@/components/stat-counter";
import { RoiCalculator } from "@/components/roi-calculator";
import { CtaBand } from "@/routes/index";
import { PROCESS_STEPS } from "@/lib/site";
import financingImg from "@/assets/financing.jpg";
import howItWorksCover from "@/assets/how-it-works.jpg";

export const Route = createFileRoute("/how-it-works")({
  component: HowItWorks,
  head: () => ({
    meta: [
      { title: "How It Works | The Serene Collective" },
      {
        name: "description",
        content:
          "Consultation, acquisition, management, growth   plus flexible in-house financing. A clear four-step path to a disciplined Texas real estate portfolio.",
      },
      { property: "og:title", content: "How It Works | The Serene Collective" },
      {
        property: "og:description",
        content: "Our four-step investment process and flexible financing options.",
      },
      { property: "og:url", content: "/how-it-works" },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
});

const STEP_ICONS = [MessagesSquare, Search, ClipboardList, TrendingUp];

const GROWTH_BARS = [
  { label: "Year 1", value: 18 },
  { label: "Year 3", value: 46 },
  { label: "Year 5", value: 78 },
  { label: "Year 7", value: 122 },
];

const SHOW_CALCULATOR = false;

function HowItWorks() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 60%", "end 70%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <PageHero
        image={howItWorksCover}
        eyebrow="How It Works"
        title="A clear, calm, results-driven path from first conversation to compounding growth."
        intro="Four steps, no jargon, no surprises. You always know where your capital is and what happens next."
      />

      {/* Stepper */}
      <section className="bg-cream-50 py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-5 lg:px-10">
          <div ref={trackRef} className="relative pl-14 sm:pl-20">
            <div className="bg-border absolute top-2 bottom-2 left-[1.55rem] w-px sm:left-[2.3rem]" />
            <motion.div
              style={{ scaleY: reduce ? 1 : lineScale }}
              className="bg-gold-500 absolute top-2 bottom-2 left-[1.55rem] w-px origin-top sm:left-[2.3rem]"
            />

            <ol className="space-y-16">
              {PROCESS_STEPS.map((step, i) => {
                const Icon = STEP_ICONS[i]!;
                return (
                  <SectionReveal as="li" key={step.title} delay={i * 0.05}>
                    <span className="bg-navy-900 text-gold-500 ring-cream-50 absolute -ml-14 flex h-14 w-14 items-center justify-center rounded-full ring-8 sm:-ml-20">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="text-steel-500 eyebrow">
                      Step {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2 className="text-navy-900 mt-3 text-2xl sm:text-3xl">
                      {step.title}
                    </h2>
                    <p className="text-gold-500 mt-2 text-sm font-semibold">
                      {step.caption}
                    </p>
                    <p className="text-ink-900/75 mt-4 leading-relaxed">{step.body}</p>
                  </SectionReveal>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* Growth chart */}
      <section className="navy-gradient py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <SectionReveal>
            <p className="text-gold-500 eyebrow">Track Record</p>
            <h2 className="text-cream-50 mt-5 text-5xl leading-none font-semibold sm:text-7xl">
              <StatCounter value={122} prefix="+" suffix="%" />
            </h2>
            <p className="text-steel-300 mt-6 max-w-md leading-relaxed">
              Average cumulative portfolio growth across our managed Texas assets over
              a seven-year hold. Compounding, not speculating.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="border-navy-700 bg-navy-900/60 rounded-md border p-8">
              <ul className="space-y-6">
                {GROWTH_BARS.map((bar, i) => (
                  <li key={bar.label}>
                    <div className="text-steel-300 mb-2 flex justify-between text-xs tracking-widest uppercase">
                      <span>{bar.label}</span>
                      <span className="text-cream-50">+{bar.value}%</span>
                    </div>
                    <div className="bg-navy-950 h-2.5 overflow-hidden rounded-full">
                      <motion.div
                        className="from-steel-500 to-gold-500 h-full rounded-full bg-gradient-to-r"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(bar.value / 122) * 100}%` }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{
                          duration: 1.1,
                          delay: 0.12 * i,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Flexible financing */}
      <section className="bg-cream-100 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <SectionReveal>
            <div className="bg-navy-900 text-gold-500 flex h-14 w-14 items-center justify-center rounded-md">
              <Lock className="h-6 w-6" />
            </div>
            <h2 className="text-navy-900 mt-7 text-3xl leading-tight font-semibold sm:text-4xl">
              Flexible Financing, More Opportunities
            </h2>
            <p className="text-ink-900/75 mt-6 leading-relaxed">
              At The Serene Collective, we don't believe financing should stand in the
              way of opportunity. That's why we offer in-house financing options for
              qualified buyers and investors, giving sellers access to a larger pool of
              potential purchasers and helping investors secure their next deal with
              greater flexibility.
            </p>
            <StaggerGroup className="mt-9 grid gap-4 sm:grid-cols-2">
              {[
                "In-house terms for qualified buyers",
                "Larger buyer pool for sellers",
                "Faster, cleaner closings",
                "Structured to protect both sides",
              ].map((item) => (
                <StaggerItem key={item}>
                  <div className="border-border flex items-start gap-3 rounded-md border bg-card p-4 text-sm">
                    <Lock className="text-gold-500 mt-0.5 h-4 w-4 shrink-0" />
                    <span className="text-ink-900/80">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <img
              src={financingImg}
              alt="Modern suburban home exterior lit at dusk"
              width={1400}
              height={1000}
              loading="lazy"
              className="w-full rounded-md object-cover shadow-2xl"
            />
          </SectionReveal>
        </div>
      </section>

      {/* Calculator (hidden, set SHOW_CALCULATOR to true to re-enable) */}
      {SHOW_CALCULATOR && (
        <section className="bg-cream-50 py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-5 lg:px-10">
            <SectionReveal className="mb-12 text-center">
              <p className="text-steel-500 eyebrow">Model It</p>
              <h2 className="text-navy-900 mt-5 text-3xl leading-tight font-semibold sm:text-4xl">
                Run the numbers yourself
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <RoiCalculator />
            </SectionReveal>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
