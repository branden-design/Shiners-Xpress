export type PricingTier = {
  id: string;
  name: string;
  subtitle: string;
  monthly: number;
  singleWash: number;
  features: string[];
  badge?: string;
  accent?: "blue" | "gold";
};

// Source: Shiner's Express drive-thru menu board redesign
export const pricingTiers: PricingTier[] = [
  {
    id: "regular",
    name: "Regular",
    subtitle: "Basic Wash",
    monthly: 26,
    singleWash: 13,
    features: ["150' of Wash", "Rinse & Dry", "Free Vacuums"],
  },
  {
    id: "plus",
    name: "Plus",
    subtitle: "Tire Shine",
    monthly: 36,
    singleWash: 18,
    features: ["Foam Polish", "Tire Brush", "Underbody Wash", "Tire Shine"],
  },
  {
    id: "premium-ceramic",
    name: "Premium Ceramic",
    subtitle: "Ceramic Coating",
    monthly: 41,
    singleWash: 23,
    features: [
      "Orange Shine Pro",
      "Tri Foam Clean",
      "Wheels & Rockers",
      "Carnauba Wax",
    ],
    badge: "Most Popular",
    accent: "blue",
  },
  {
    id: "premium-graphene",
    name: "Premium Graphene",
    subtitle: "Shine Enhancer",
    monthly: 44,
    singleWash: 26,
    features: [
      "Graphene Protection",
      "Ceramic Shield Coat",
      "Shine Enhancer",
      "Everything in Premium",
      "Secret Cleaning Stash",
    ],
    badge: "Top Tier",
    accent: "gold",
  },
];

export const membershipPerks = [
  "Free re-wash within 3 days if it rains",
  "Microfiber towels / cleaning sprays",
  "Safe on vehicles with PPF",
];

export const familyPlan = {
  title: "More than one car? Add them to your plan.",
  description:
    "Each additional vehicle joins at a reduced monthly rate — mix any tiers under one account.",
};

export const selfServicePerks = [
  "Add vehicles",
  "Freeze your account",
  "Update payment",
  "Upgrade membership",
];
