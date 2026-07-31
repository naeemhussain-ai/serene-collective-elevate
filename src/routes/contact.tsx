import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "motion/react";
import { Mail, Phone, MapPin, CheckCircle2, Loader2 } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { SectionReveal } from "@/components/section-reveal";
import { SITE } from "@/lib/site";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

const schema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(60),
  lastName: z.string().trim().min(1, "Last name is required").max(60),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(25)
    .regex(/^[0-9+()\-.\s]+$/, "Phone can only contain digits and + ( ) - ."),
  goals: z
    .string()
    .trim()
    .min(10, "Tell us a little more (10+ characters)")
    .max(1000, "Please keep it under 1000 characters"),
});

type FormValues = z.infer<typeof schema>;

function Contact() {
  const [sent, setSent] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { firstName: "", lastName: "", email: "", phone: "", goals: "" },
  });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 900));
    setSent(true);
    form.reset();
  };

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
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="py-14 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    >
                      <CheckCircle2 className="text-gold-500 mx-auto h-14 w-14" />
                    </motion.div>
                    <h2 className="text-navy-900 mt-7 text-2xl">Message received</h2>
                    <p className="text-ink-900/70 mx-auto mt-4 max-w-sm">
                      Thank you. A member of our team will be in touch within one
                      business day.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="text-navy-900 hover:text-gold-500 mt-8 text-xs font-bold tracking-[0.18em] uppercase transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h2 className="text-navy-900 text-3xl">Let's Talk</h2>
                    <div className="gold-rule mt-5 w-24" />

                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="mt-8 space-y-6"
                        noValidate
                      >
                        <div className="grid gap-6 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>First name</FormLabel>
                                <FormControl>
                                  <Input autoComplete="given-name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Last name</FormLabel>
                                <FormControl>
                                  <Input autoComplete="family-name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input type="email" autoComplete="email" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                  <Input type="tel" autoComplete="tel" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="goals"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                Let's talk about your investment goals
                              </FormLabel>
                              <FormControl>
                                <Textarea rows={5} maxLength={1000} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          disabled={form.formState.isSubmitting}
                          className="bg-navy-900 text-cream-50 hover:bg-navy-700 inline-flex w-full items-center justify-center gap-2 rounded-sm px-8 py-4 text-xs font-bold tracking-[0.18em] uppercase transition-colors disabled:opacity-70 sm:w-auto"
                        >
                          {form.formState.isSubmitting && (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          )}
                          Submit
                        </motion.button>
                      </form>
                    </Form>
                  </motion.div>
                )}
              </AnimatePresence>
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
