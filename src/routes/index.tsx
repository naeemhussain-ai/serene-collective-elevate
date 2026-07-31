import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Building2,
  LineChart,
  Handshake,
  DoorOpen,
} from "lucide-react";

import { HeroSlider } from "@/components/hero-slider";
import { TrustBar } from "@/components/trust-bar";
import { SectionReveal, StaggerGroup, StaggerItem } from "@/components/section-reveal";
import { StatCounter } from "@/components/stat-counter";
import { RoiCalculator } from "@/components/roi-calculator";
import { PortfolioShowcase } from "@/components/portfolio-showcase";
import { Testimonials } from "@/components/testimonials";
import { SERVICES } from "@/lib/site";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "The Serene Collective | Texas Real Estate Investments" },
      {
        name: "description",
        content:
          "Veteran-operated Texas real estate investment company. Smart real estate investments, with peace of mind — acquisition, management, partnerships, and exits.",
      },
      {
        property: "og:title",
        content: "The Serene Collective | Texas Real Estate Investments",
      },
      {
        property: "og:description",
        content:
          "Smart real estate investments, with peace of mind. Veteran-operated, Texas based.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const ICONS = [Building2, LineChart, Handshake, DoorOpen];

function Index() {
  return (
    <>
      <HeroSlider />
      <TrustBar />

      {/* Statement band */}
      <section className="bg-cream-100 py-24 lg:py-32">
        <SectionReveal className="mx-auto max-w-4xl px-5 text-center lg:px-10">
          <p className="text-steel-500 eyebrow">Our Promise</p>
          <h2 className="text-navy-900 mt-6 text-4xl leading-tight font-semibold sm:text-5xl">
            Invest with Confidence, <span className="italic">Grow with Purpose</span>
          </h2>
          <div className="gold-rule mx-auto mt-8 w-32" />
          <p className="text-ink-900/75 mx-auto mt-8 max-w-2xl text-lg leading-relaxed">
            At The Serene Collective, we make real estate investing simple, secure,
            and impactful — for you and for the communities we serve.
          </p>
        </SectionReveal>
      </section>

      {/* About preview */}
      <section className="bg-cream-50 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <SectionReveal>
            <div className="relative">
              <img
                src={aboutImg}
                alt="Sunlit empty living space with floor-to-ceiling windows"
                width={1200}
                height={1000}
                loading="lazy"
                className="w-full rounded-md object-cover shadow-2xl"
              />
              <div className="bg-navy-900 absolute -right-4 -bottom-8 hidden rounded-md p-7 shadow-2xl sm:block">
                <p className="text-gold-500 font-[family-name:var(--font-display)] text-3xl">
                  <StatCounter value={12} suffix="+" />
                </p>
                <p className="text-steel-300 mt-1 text-xs tracking-widest uppercase">
                  Years in Texas
                </p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <p className="text-steel-500 eyebrow">About Us</p>
            <h2 className="text-navy-900 mt-5 text-3xl leading-tight font-semibold sm:text-4xl">
              Veteran-operated. Texas based. Built on service.
            </h2>
            <p className="text-ink-900/75 mt-6 leading-relaxed">
              The Serene Collective is a veteran-operated real estate investment
              company proudly based in Texas. We believe real estate investing
              doesn't have to be stressful. We simplify the process, mitigate risk,
              and help our clients grow lasting wealth.
            </p>
            <p className="text-ink-900/75 mt-4 leading-relaxed">
              Founded on the principles of service, discipline, and integrity, we're
              dedicated to building lasting value — not just for our investors, but
              for the neighborhoods we invest in.
            </p>
            <Link
              to="/about"
              className="text-navy-900 hover:text-gold-500 group mt-8 inline-flex items-center gap-2 text-sm font-bold tracking-[0.18em] uppercase transition-colors"
            >
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* Services preview */}
      <section className="navy-gradient py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionReveal className="max-w-2xl">
            <p className="text-gold-500 eyebrow">What We Do</p>
            <h2 className="text-cream-50 mt-5 text-3xl leading-tight font-semibold sm:text-4xl">
              We acquire, manage, and grow real estate assets
            </h2>
            <p className="text-steel-300 mt-5 leading-relaxed">
              With transparency, integrity, and results — across every stage of the
              investment lifecycle.
            </p>
          </SectionReveal>

          <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, i) => {
              const Icon = ICONS[i]!;
              return (
                <StaggerItem key={service.slug}>
                  <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                    <Link
                      to="/services"
                      hash={service.slug}
                      className="border-navy-700 bg-navy-900/60 hover:border-gold-500/60 group flex h-full flex-col rounded-md border p-7 transition-colors"
                    >
                      <Icon className="text-gold-500 h-8 w-8" />
                      <h3 className="text-cream-50 mt-6 text-lg tracking-wide uppercase">
                        {service.title}
                      </h3>
                      <p className="text-steel-300 mt-4 flex-1 text-sm leading-relaxed">
                        {service.summary}
                      </p>
                      <span className="text-gold-500 mt-6 inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase">
                        Explore
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-cream-100 py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          {[
            { value: 122, prefix: "+", suffix: "%", label: "Average portfolio growth" },
            { value: 340, suffix: "+", label: "Properties acquired" },
            { value: 98, suffix: "%", label: "Investor retention" },
            { value: 1.4, prefix: "$", suffix: "B", decimals: 1, label: "Assets transacted" },
          ].map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 0.08} className="text-center">
              <p className="text-navy-900 font-[family-name:var(--font-display)] text-5xl font-semibold">
                <StatCounter
                  value={stat.value}
                  prefix={stat.prefix ?? ""}
                  suffix={stat.suffix ?? ""}
                  decimals={stat.decimals ?? 0}
                />
              </p>
              <div className="gold-rule mx-auto mt-5 w-14" />
              <p className="text-ink-900/70 mt-5 text-sm tracking-wider uppercase">
                {stat.label}
              </p>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-cream-50 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <SectionReveal>
            <p className="text-steel-500 eyebrow">Plan Ahead</p>
            <h2 className="text-navy-900 mt-5 text-3xl leading-tight font-semibold sm:text-4xl">
              See what disciplined investing could return
            </h2>
            <p className="text-ink-900/75 mt-6 leading-relaxed">
              Move the sliders to model a position against our historical portfolio
              performance. Then let's talk about what a real, personalised plan looks
              like for your capital and timeline.
            </p>
            <Link
              to="/how-it-works"
              className="text-navy-900 hover:text-gold-500 group mt-8 inline-flex items-center gap-2 text-sm font-bold tracking-[0.18em] uppercase transition-colors"
            >
              See how it works
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <RoiCalculator />
          </SectionReveal>
        </div>
      </section>

      {/* Portfolio */}
      <section className="bg-cream-100 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionReveal className="max-w-2xl">
            <p className="text-steel-500 eyebrow">Featured Acquisitions</p>
            <h2 className="text-navy-900 mt-5 text-3xl leading-tight font-semibold sm:text-4xl">
              A portfolio built one disciplined decision at a time
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1} className="mt-12">
            <PortfolioShowcase />
          </SectionReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="navy-gradient py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionReveal>
            <Testimonials />
          </SectionReveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

export function CtaBand() {
  return (
    <section className="bg-cream-50 py-24 lg:py-28">
      <SectionReveal className="bg-navy-950 mx-auto max-w-5xl rounded-lg px-8 py-16 text-center shadow-2xl sm:px-14">
        <h2 className="text-cream-50 text-3xl leading-tight font-semibold sm:text-4xl">
          Ready to invest with <span className="text-gold-500 italic">peace of mind</span>?
        </h2>
        <p className="text-steel-300 mx-auto mt-5 max-w-xl leading-relaxed">
          Book a free, no-pressure consultation. We'll review your goals and tell you
          honestly whether we're the right fit.
        </p>
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-10 inline-block"
        >
          <Link
            to="/contact"
            className="bg-gold-500 text-navy-950 inline-flex items-center gap-2 rounded-sm px-8 py-4 text-xs font-bold tracking-[0.18em] uppercase"
          >
            Get a Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </SectionReveal>
    </section>
  );
}
