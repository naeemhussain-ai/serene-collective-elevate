import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Compass, HeartHandshake } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { SectionReveal, StaggerGroup, StaggerItem } from "@/components/section-reveal";
import { CtaBand } from "@/routes/index";
import { VALUES } from "@/lib/site";
import aboutImg from "@/assets/about.jpg";
import heroImg from "@/assets/hero-1.jpg";
import cover2 from "@/assets/about--cover2.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About | The Serene Collective" },
      {
        name: "description",
        content:
          "A veteran-operated real estate investment company in Texas, founded on service, discipline, and integrity   and rooted in community impact.",
      },
      { property: "og:title", content: "About | The Serene Collective" },
      {
        property: "og:description",
        content:
          "Veteran-operated, Texas based, and built on service, discipline, and integrity.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const VALUE_ICONS = [ShieldCheck, Compass, HeartHandshake];

function About() {
  return (
    <>
      <PageHero
        image={cover2}
        eyebrow="Who We Are"
        title="More than investors   neighbors, problem solvers, and stewards of growth."
        intro="The Serene Collective is a veteran-operated real estate investment company proudly based in Texas, founded on the principles of service, discipline, and integrity."
      />

      <section className="bg-cream-50 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-start gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <SectionReveal>
            <p className="text-gold-500 eyebrow">Our Story</p>
            <h2 className="text-navy-900 mt-5 text-3xl leading-tight font-semibold sm:text-4xl">
              Investing shouldn't be stressful
            </h2>
            <div className="text-ink-900/90 mt-7 space-y-5 leading-relaxed">
              <p>
                We believe real estate investing doesn't have to be stressful. We
                simplify the process, mitigate risk, and help our clients grow lasting
                wealth. Founded on the principles of service, discipline, and
                integrity, we're dedicated to building lasting value   not just for
                our investors, but for the neighborhoods we invest in.
              </p>
              <p>
                Our mission is rooted in community impact. We specialize in acquiring,
                managing, and growing real estate portfolios that create stable
                returns while improving the local housing landscape. Whether you're a
                first-time investor or expanding your portfolio, we're here to make
                the process clear, calm, and results-driven.
              </p>
              <p>
                At our core, we're more than investors   we're neighbors, problem
                solvers, and stewards of growth. With every project, we aim to serve
                with the same commitment and care that defined our military service.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1} className="grid gap-5">
            <img
              src={heroImg}
              alt="Bright living room with high ceilings in a Texas home"
              width={1920}
              height={1080}
              loading="lazy"
              className="w-full rounded-md object-cover shadow-xl"
            />
            <img
              src={aboutImg}
              alt="Empty sunlit room with large modern windows"
              width={1200}
              height={1000}
              loading="lazy"
              className="w-full rounded-md object-cover shadow-xl"
            />
          </SectionReveal>
        </div>
      </section>

      <section className="navy-gradient py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionReveal className="max-w-2xl">
            <p className="text-gold-500 eyebrow">What Guides Us</p>
            <h2 className="text-cream-50 mt-5 text-3xl leading-tight font-semibold sm:text-4xl">
              Three principles, carried over from service
            </h2>
          </SectionReveal>

          <StaggerGroup className="mt-14 grid gap-5 md:grid-cols-3">
            {VALUES.map((value, i) => {
              const Icon = VALUE_ICONS[i]!;
              return (
                <StaggerItem key={value.title}>
                  <article className="border-navy-700 bg-navy-900/60 h-full rounded-md border p-8">
                    <Icon className="text-gold-500 h-8 w-8" />
                    <h3 className="text-cream-50 mt-6 text-2xl">{value.title}</h3>
                    <p className="text-cream-100 mt-4 text-sm leading-relaxed">
                      {value.body}
                    </p>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
