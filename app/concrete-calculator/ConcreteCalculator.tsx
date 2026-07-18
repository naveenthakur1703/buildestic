"use client";

import { useState } from "react";
import ConcreteForm from "./components/ConcreteForm";
import { calculateConcrete } from "./calculation";
import { ConcreteInput, ConcreteResult } from "./types";
import ResultSection from "./components/ResultSection";
import SummarySection from "./components/SummarySection";
import SEOContent from "./components/SEOContent";

export default function ConcreteCalculator() {
  const [values, setValues] = useState<ConcreteInput>({
    shape: "slab",

    unit: "ft",
    length: 0,
    width: 0,
    depth: 0,
    grade: "M20",
    includeWaste: true,
    waste: 10,
    costPerM3: 0,
  });

  const [result, setResult] =
    useState<ConcreteResult | null>(null);

  const [error, setError] = useState("");

  function handleCalculate() {
    if (
      values.length <= 0 ||
      values.width <= 0 ||
      values.depth <= 0
    ) {
      setError("Please enter valid dimensions.");
      return;
    }

    setError("");

    const data = calculateConcrete(values);

    setResult(data);
  }

  function handleReset() {
    setValues({
      shape: "slab",
      unit: "ft",
      length: 0,
      width: 0,
      depth: 0,
      grade: "M20",
      includeWaste: true,
      waste: 10,
      costPerM3: 0,
    });

    setResult(null);

    setError("");
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-5xl font-bold mb-3">
        Concrete Calculator
      </h1>

      <p className="text-muted-foreground mb-10">
        Estimate concrete quantity and material requirements.
      </p>

      <div className="grid lg:grid-cols-[420px_1fr] gap-10 items-start">

        {/* Left Side */}
        <div className="rounded-xl border bg-white p-6 shadow-sm">

          <h2 className="text-3xl font-heading mb-6">
            Concrete Details
          </h2>

          <ConcreteForm
            values={values}
            onChange={setValues}
            onCalculate={handleCalculate}
            onReset={handleReset}
            error={error}
          />

        </div>

        {/* Right Side */}
        <div className="max-w-5xl">
          <ResultSection result={result} />

          {result && (
            <SummarySection
              values={values}
              result={result}
            />
          )}

          <SEOContent />
        </div>


      </div>

    </main>
  );
}