import type { Metadata } from "next";
import ConcreteCalculator from "./ConcreteCalculator";
import JsonLd from "@/components/seo/JsonLd";

import {
  softwareApplicationSchema,
  webPageSchema,
  breadcrumbSchema,
  faqSchema,
} from "./schemas";

export const metadata: Metadata = {
  title: "Concrete Calculator | Free Concrete Volume & Material Estimator",

  description:
    "Free online Concrete Calculator to estimate concrete volume, cement bags, sand, aggregate, waste allowance, and material cost. Supports feet and meters for accurate construction estimates.",

  keywords: [
    "Concrete Calculator",
    "Concrete Volume Calculator",
    "Concrete Estimator",
    "Concrete Quantity Calculator",
    "Concrete Slab Calculator",
    "Concrete Cost Calculator",
    "Concrete Material Calculator",
    "Cement Calculator",
    "Concrete Mix Calculator",
    "Construction Calculator",
  ],

  alternates: {
    canonical: "https://buildestic.com/concrete-calculator",
  },

  openGraph: {
    title: "Concrete Calculator | Buildestic",
    description:
      "Estimate concrete volume, cement bags, sand, aggregate, waste allowance, and material cost instantly with our free Concrete Calculator.",

    url: "https://buildestic.com/concrete-calculator",

    siteName: "Buildestic",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Concrete Calculator | Buildestic",

    description:
      "Free online Concrete Calculator for slabs, foundations, and construction projects.",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={softwareApplicationSchema} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <ConcreteCalculator />
    </>
  );
}