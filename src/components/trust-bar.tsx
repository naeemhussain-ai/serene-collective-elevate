import { ShieldCheck, Award, Landmark, BadgeCheck, Star } from "lucide-react";
import { StaggerGroup, StaggerItem } from "@/components/section-reveal";

const BADGES = [
  { icon: ShieldCheck, label: "Veteran-Owned Certified" },
  { icon: Landmark, label: "TX Licensed Operator" },
  { icon: BadgeCheck, label: "BBB Accredited" },
  { icon: Award, label: "Fiduciary Standard" },
  { icon: Star, label: "4.9 Investor Rating" },
];

export function TrustBar() {
  return (
    <div className="bg-navy-900 border-navy-700 border-y">
      <StaggerGroup
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-5 px-5 py-6 lg:px-10"
        stagger={0.08}
      >
        {BADGES.map(({ icon: Icon, label }) => (
          <StaggerItem key={label}>
            <div className="text-steel-300 hover:text-cream-50 flex items-center gap-2.5 transition-colors">
              <Icon className="text-gold-500 h-4 w-4" />
              <span className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase">
                {label}
              </span>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
}
