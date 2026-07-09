import type { Metadata } from "next";
import BrickCalculator from "./BrickCalculator";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Brick Calculator",
  description:
    "Calculate the number of bricks required for your wall using multiple brick standards, custom brick sizes, waste allowance and material cost estimation.",
  alternates: {
    canonical: "https://buildestic.com/brick-calculator",
  },
};

export default function Page() {
  return <BrickCalculator />;
}