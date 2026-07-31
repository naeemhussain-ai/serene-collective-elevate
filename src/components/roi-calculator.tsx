import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { TrendingUp } from "lucide-react";

import { Slider } from "@/components/ui/slider";

const RATE = 0.122; // +122% modelled over 10 years, compounded

export function RoiCalculator() {
  const [amount, setAmount] = useState(150000);
  const [years, setYears] = useState(7);

  const projected = useMemo(
    () => Math.round(amount * Math.pow(1 + RATE, years)),
    [amount, years],
  );
  const gain = projected - amount;

  const fmt = (n: number) =>
    n.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });

  return (
    <div className="bg-navy-900 ring-navy-700 rounded-lg p-8 shadow-2xl ring-1 sm:p-10">
      <div className="flex items-center gap-3">
        <TrendingUp className="text-gold-500 h-5 w-5" />
        <h3 className="text-cream-50 text-xl">Projected Return Estimator</h3>
      </div>
      <p className="text-steel-300 mt-3 text-sm">
        Modelled at our historical 12.2% annualised portfolio growth. Illustrative
        only — not a guarantee of future performance.
      </p>

      <div className="mt-9 space-y-9">
        <Field label="Investment amount" value={fmt(amount)}>
          <Slider
            value={[amount]}
            min={25000}
            max={1000000}
            step={5000}
            onValueChange={(v) => setAmount(v[0] ?? amount)}
            aria-label="Investment amount"
          />
        </Field>
        <Field label="Time horizon" value={`${years} years`}>
          <Slider
            value={[years]}
            min={1}
            max={20}
            step={1}
            onValueChange={(v) => setYears(v[0] ?? years)}
            aria-label="Time horizon in years"
          />
        </Field>
      </div>

      <div className="border-navy-700 mt-10 grid gap-6 border-t pt-8 sm:grid-cols-2">
        <div>
          <p className="text-steel-300 eyebrow">Projected value</p>
          <motion.p
            key={projected}
            initial={{ opacity: 0.4, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-gold-500 mt-2 font-[family-name:var(--font-display)] text-4xl"
          >
            {fmt(projected)}
          </motion.p>
        </div>
        <div>
          <p className="text-steel-300 eyebrow">Total gain</p>
          <motion.p
            key={gain}
            initial={{ opacity: 0.4, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-cream-50 mt-2 font-[family-name:var(--font-display)] text-4xl"
          >
            {fmt(gain)}
          </motion.p>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  children,
}: {
  label: string;
  value: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-4 flex items-baseline justify-between">
        <span className="text-steel-300 text-sm font-medium">{label}</span>
        <span className="text-cream-50 font-[family-name:var(--font-display)] text-lg">
          {value}
        </span>
      </div>
      {children}
    </div>
  );
}
