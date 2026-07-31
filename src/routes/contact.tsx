import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { SectionReveal } from "@/components/section-reveal";
import { ContactForm } from "@/components/contact-form";
import { SITE } from "@/lib/site";
import heroImg from "@/assets/hero-3.jpg";
import contactCover from "@/assets/contact-cover.jpg";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact | The Serene Collective" },
      {
        name: "description",
        content:
          "Book a free consultation with The Serene Collective. Tell us your investment goals and we'll tell you honestly whether we're the right fit.",
      },
      { property: "og:title", content: "Contact | The Serene Collective" },
      {
        property: "og:description",
        content: "Let's talk about your investment goals. Free consultation, no pressure.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  return (
    <>
      <PageHero
        image={contactCover}
        eyebrow="Let's Talk"
        title="Tell us where you want to go. We'll tell you how to get there."
        intro="Share your investment goals and a member of our team will reach out within one business day   no pressure, no obligation."
      />

      <section className="bg-cream-50 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:px-10">
          <SectionReveal>
            <div className="border-border rounded-lg border bg-card p-8 shadow-xl sm:p-10">
              <h2 className="text-navy-900 text-3xl">Let's Talk</h2>
              <div className="gold-rule mt-5 w-24" />
              <ContactForm />
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="bg-navy-950 rounded-lg p-8 shadow-xl">
              <h2 className="text-cream-50 text-2xl">Reach us directly</h2>
              <ul className="mt-8 space-y-6 text-sm">
                <li className="flex items-start gap-4">
                  <Mail className="text-gold-500 mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <p className="text-steel-500 text-xs tracking-widest uppercase">
                      Email
                    </p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-cream-50 hover:text-gold-500 mt-1 block break-all transition-colors"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="text-gold-500 mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <p className="text-steel-500 text-xs tracking-widest uppercase">
                      Phone
                    </p>
                    <a
                      href={`tel:${SITE.phone.replace(/\D/g, "")}`}
                      className="text-cream-50 hover:text-gold-500 mt-1 block transition-colors"
                    >
                      {SITE.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="text-gold-500 mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <p className="text-steel-500 text-xs tracking-widest uppercase">
                      Serving
                    </p>
                    <p className="text-cream-50 mt-1">{SITE.location}</p>
                  </div>
                </li>
              </ul>
            </div>

            <img
              src={heroImg}
              alt="Texas home exterior at golden hour"
              width={1920}
              height={1080}
              loading="lazy"
              className="mt-6 w-full rounded-lg object-cover shadow-xl"
            />
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
