import { createFileRoute } from "@tanstack/react-router";
import { Building2, LineChart, Handshake, DoorOpen, Check } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { SectionReveal } from "@/components/section-reveal";
import { CtaBand } from "@/routes/index";
import { SERVICES } from "@/lib/site";
import acquisitionImg from "@/assets/service-acquisition.jpg";
import portfolioImg from "@/assets/service-portfolio.jpg";
import partnershipsImg from "@/assets/service-partnerships.jpg";
import exitImg from "@/assets/service-exit.jpg";
import servicesCover from "@/assets/services-cover.jpg";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services | The Serene Collective" },
      {
        name: "description",
        content:
          "Property acquisition, portfolio management, strategic partnerships, and exit strategies   handled end to end by a veteran-operated Texas team.",
      },
      { property: "og:title", content: "Services | The Serene Collective" },
      {
        property: "og:description",
        content:
          "Four service pillars covering the full real estate investment lifecycle.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const MEDIA = [
  { img: acquisitionImg, alt: "Advisors reviewing property documents at a table", icon: Building2 },
  { img: portfolioImg, alt: "Laptop showing portfolio performance charts in an elegant room", icon: LineChart },
  { img: partnershipsImg, alt: "Sunlit home foyer with a table set for a meeting", icon: Handshake },
  { img: exitImg, alt: "Sold sign in front of an upscale Texas home at dusk", icon: DoorOpen },
];

function Services() {
  return (
    <>
      <PageHero
        image={servicesCover}
        eyebrow="Our Services"
        title="We acquire, manage, and grow real estate assets with transparency, integrity, and results."
        intro="Four pillars covering every stage of the investment lifecycle   from the first walk-through to the final closing statement."
      />

      {SERVICES.map((service, i) => {
        const media = MEDIA[i]!;
        const Icon = media.icon;
        const reversed = i % 2 === 1;
        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`scroll-mt-24 py-24 lg:py-32 ${
              reversed ? "bg-cream-100" : "bg-cream-50"
            }`}
          >
            <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
              <SectionReveal className={reversed ? "lg:order-2" : ""}>
                <img
                  src={media.img}
                  alt={media.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="w-full rounded-md object-cover shadow-2xl"
                />
              </SectionReveal>

              <SectionReveal delay={0.1} className={reversed ? "lg:order-1" : ""}>
                <div className="bg-navy-900 text-gold-500 flex h-14 w-14 items-center justify-center rounded-md">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-steel-500 eyebrow mt-7">
                  Pillar {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="text-navy-900 mt-4 text-3xl leading-tight font-semibold sm:text-4xl">
                  {service.title}
                </h2>
                <p className="text-ink-900/75 mt-6 leading-relaxed">{service.summary}</p>
                <p className="text-ink-900/75 mt-4 leading-relaxed">{service.detail}</p>
                <ul className="mt-8 space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <Check className="text-gold-500 mt-1 h-4 w-4 shrink-0" />
                      <span className="text-ink-900/80 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </SectionReveal>
            </div>
          </section>
        );
      })}

      <CtaBand />
    </>
  );
}
