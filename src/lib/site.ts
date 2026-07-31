export const SITE = {
  name: "The Serene Collective",
  tagline: "Smart Real Estate Investments, With Peace of Mind",
  email: "invest@theserenecollective.com",
  phone: "(214) 555-0148",
  location: "Dallas–Fort Worth, Texas",
} as const;

export type NavItem = { label: string; to: string };

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Contact", to: "/contact" },
];

export const SERVICES = [
  {
    slug: "property-acquisition",
    title: "Property Acquisition",
    summary:
      "Disciplined sourcing and underwriting of high-quality residential assets across Texas markets.",
    detail:
      "We underwrite every deal like it is our own capital. Off-market sourcing, on-the-ground inspections, and conservative assumptions mean you enter each position with a margin of safety   never a bidding war.",
    points: [
      "Off-market and pre-foreclosure sourcing",
      "Conservative, third-party validated underwriting",
      "Full inspection, title, and rehab scoping",
    ],
  },
  {
    slug: "portfolio-management",
    title: "Portfolio Management",
    summary:
      "Hands-off operations, tenant care, and transparent reporting on every asset you hold with us.",
    detail:
      "Leasing, maintenance, compliance, and accounting are handled end to end. You receive clear monthly reporting on occupancy, cash flow, and asset value   no chasing, no surprises.",
    points: [
      "Full-service leasing and tenant relations",
      "Preventative maintenance programs",
      "Monthly performance and cash-flow reporting",
    ],
  },
  {
    slug: "strategic-partnerships",
    title: "Strategic Partnerships",
    summary:
      "Co-invest alongside operators, lenders, and builders vetted through our veteran network.",
    detail:
      "Access joint ventures and syndications with partners we have served beside. Clear structures, aligned incentives, and documented governance on every partnership we bring to the table.",
    points: [
      "Vetted joint-venture and syndication access",
      "Aligned, transparent deal structures",
      "In-house financing for qualified buyers",
    ],
  },
  {
    slug: "exit-strategies",
    title: "Exit Strategies",
    summary:
      "Planned, tax-aware exits designed before acquisition   never improvised after the fact.",
    detail:
      "Every asset enters our portfolio with a defined hold period and two viable exits. Refinance, 1031 exchange, or disposition   we model the outcome long before the market forces a decision.",
    points: [
      "Exit modeled at acquisition, not at sale",
      "1031 exchange and refinance planning",
      "Timed disposition with market analysis",
    ],
  },
] as const;

export const PROCESS_STEPS = [
  {
    title: "Consultation",
    caption: "Understanding your goals",
    body: "We start with a conversation   capital position, risk tolerance, timeline, and what you actually want this portfolio to do for your family.",
  },
  {
    title: "Acquisition",
    caption: "Sourcing high-quality properties",
    body: "We surface opportunities that fit your mandate, underwrite them conservatively, and walk you through every assumption before a dollar moves.",
  },
  {
    title: "Management",
    caption: "Hands-off operations & reporting",
    body: "Leasing, maintenance, and compliance run in the background. You see the numbers monthly and never field a midnight maintenance call.",
  },
  {
    title: "Growth",
    caption: "Long-term ROI & reinvestment strategies",
    body: "Equity is recycled deliberately   refinance, exchange, or expand   compounding your position while risk stays measured.",
  },
] as const;

export const PORTFOLIO = [
  {
    name: "Hillcrest Terrace",
    location: "Fort Worth, TX",
    type: "Single Family",
    status: "Stabilized",
    metric: "+18.4% IRR",
  },
  {
    name: "Magnolia Row",
    location: "Plano, TX",
    type: "Duplex",
    status: "Repositioning",
    metric: "+22.1% IRR",
  },
  {
    name: "Cedar Bend",
    location: "Austin, TX",
    type: "Single Family",
    status: "Stabilized",
    metric: "+15.9% IRR",
  },
  {
    name: "Alamo Heights Court",
    location: "San Antonio, TX",
    type: "Multi-Family",
    status: "Acquired",
    metric: "+26.7% IRR",
  },
  {
    name: "Preston Grove",
    location: "Dallas, TX",
    type: "Single Family",
    status: "Exited",
    metric: "+31.2% IRR",
  },
  {
    name: "Lakeway Reserve",
    location: "Lakeway, TX",
    type: "Multi-Family",
    status: "Repositioning",
    metric: "+19.6% IRR",
  },
] as const;

export const PORTFOLIO_FILTERS = [
  "All",
  "Single Family",
  "Duplex",
  "Multi-Family",
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "They treated my first investment like it was their own money. Every assumption was explained, and the reporting since has been flawless.",
    name: "Marcus D.",
    role: "First-time investor, Frisco",
  },
  {
    quote:
      "I have worked with three firms in Texas. This is the only one where discipline is not just a word on the website.",
    name: "Rachel V.",
    role: "Portfolio investor, Houston",
  },
  {
    quote:
      "Veteran-operated is not a marketing line here. The follow-through and the standards show up in every single deal.",
    name: "Anthony R.",
    role: "Joint-venture partner",
  },
] as const;

export const VALUES = [
  {
    title: "Service",
    body: "We inherited a duty to serve. Today that means protecting our investors' capital and improving the neighborhoods we buy into.",
  },
  {
    title: "Discipline",
    body: "Conservative underwriting, defined hold periods, and a willingness to walk away. Patience is the strategy.",
  },
  {
    title: "Integrity",
    body: "Plain numbers, plain language. If a deal is not right for you, we say so   even when it costs us the transaction.",
  },
] as const;
