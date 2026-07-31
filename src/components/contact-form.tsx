import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, Loader2 } from "lucide-react";

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
import { cn } from "@/lib/utils";

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

export function ContactForm({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [sent, setSent] = useState(false);
  const dark = variant === "dark";

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { firstName: "", lastName: "", email: "", phone: "", goals: "" },
  });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 900));
    setSent(true);
    form.reset();
  };

  const inputClass = dark
    ? "border-steel-500/50 bg-navy-900/40 text-cream-50 placeholder:text-steel-500 focus-visible:ring-gold-500"
    : "";
  const labelClass = dark ? "text-cream-50" : "";
  const buttonClass = dark
    ? "bg-gold-500 text-navy-950 hover:bg-gold-400"
    : "bg-navy-900 text-cream-50 hover:bg-navy-700";

  return (
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
          <h2
            className={cn(
              "mt-7 text-2xl",
              dark ? "text-cream-50" : "text-navy-900",
            )}
          >
            Message received
          </h2>
          <p
            className={cn(
              "mx-auto mt-4 max-w-sm",
              dark ? "text-steel-300" : "text-ink-900/70",
            )}
          >
            Thank you. A member of our team will be in touch within one business day.
          </p>
          <button
            onClick={() => setSent(false)}
            className={cn(
              "mt-8 text-xs font-bold tracking-[0.18em] uppercase transition-colors",
              dark ? "text-gold-500 hover:text-gold-400" : "text-navy-900 hover:text-gold-500",
            )}
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6" noValidate>
              <div className="grid gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={labelClass}>First name</FormLabel>
                      <FormControl>
                        <Input
                          autoComplete="given-name"
                          className={inputClass}
                          {...field}
                        />
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
                      <FormLabel className={labelClass}>Last name</FormLabel>
                      <FormControl>
                        <Input
                          autoComplete="family-name"
                          className={inputClass}
                          {...field}
                        />
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
                      <FormLabel className={labelClass}>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          autoComplete="email"
                          className={inputClass}
                          {...field}
                        />
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
                      <FormLabel className={labelClass}>Phone</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          autoComplete="tel"
                          className={inputClass}
                          {...field}
                        />
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
                    <FormLabel className={labelClass}>
                      Let's talk about your investment goals
                    </FormLabel>
                    <FormControl>
                      <Textarea rows={5} maxLength={1000} className={inputClass} {...field} />
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
                className={cn(
                  "inline-flex w-full items-center justify-center gap-2 rounded-sm px-8 py-4 text-xs font-bold tracking-[0.18em] uppercase transition-colors disabled:opacity-70 sm:w-auto",
                  buttonClass,
                )}
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
  );
}
