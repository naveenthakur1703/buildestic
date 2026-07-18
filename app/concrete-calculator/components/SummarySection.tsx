import { ConcreteInput, ConcreteResult } from "../types";

interface SummarySectionProps {
  values: ConcreteInput;
  result: ConcreteResult;
}

export default function SummarySection({
  values,
  result,
}: SummarySectionProps) {
  const unit = values.unit;

  const formatCurrency = (amount: number) =>
    amount.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <section className="mt-12 rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">
          Calculation Summary
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Review the calculation inputs and generated results before printing
          or saving.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Input Details */}
        <div className="rounded-xl border bg-gray-50/40 p-5">
          <h3 className="mb-4 text-lg font-semibold">
            Input Details
          </h3>

          <div className="overflow-hidden rounded-lg border">
            <SummaryRow
              label="Concrete Shape"
              value={formatShape(values.shape)}
              shaded
            />

            <SummaryRow
              label="Units"
              value={unit === "ft" ? "Feet" : "Meters"}
            />

            <SummaryRow
              label="Length"
              value={`${values.length} ${unit}`}
              shaded
            />

            <SummaryRow
              label="Width"
              value={`${values.width} ${unit}`}
            />

            <SummaryRow
              label="Depth"
              value={`${values.depth} ${unit}`}
              shaded
            />

            <SummaryRow
              label="Concrete Grade"
              value={values.grade}
            />

            <SummaryRow
              label="Waste Allowance"
              value={
                values.includeWaste
                  ? `${values.waste}%`
                  : "Disabled"
              }
              shaded
            />
          </div>
        </div>

        {/* Results */}
        <div className="rounded-xl border bg-gray-50/40 p-5">
          <h3 className="mb-4 text-lg font-semibold">
            Calculation Results
          </h3>

          <div className="overflow-hidden rounded-lg border">
            <SummaryRow
              label="Concrete Volume"
              value={`${result.volume.toFixed(2)} ${result.volumeUnit}`}
              shaded
            />

            <SummaryRow
              label="Cement Bags"
              value={result.cementBags.toString()}
            />

            <SummaryRow
              label="Sand Required"
              value={`${result.sand.toFixed(2)} ${result.sandUnit}`}
              shaded
            />

            <SummaryRow
              label="Aggregate Required"
              value={`${result.aggregate.toFixed(2)} ${result.aggregateUnit}`}
            />

            <SummaryRow
              label="Waste Volume"
              value={`${result.wasteVolume.toFixed(2)} ${result.volumeUnit}`}
              shaded
            />

            <SummaryRow
              label="Material Cost"
              value={
                result.totalCost > 0
                  ? formatCurrency(result.totalCost)
                  : "Not Calculated"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface SummaryRowProps {
  label: string;
  value: string;
  shaded?: boolean;
}

function SummaryRow({
  label,
  value,
  shaded = false,
}: SummaryRowProps) {
  return (
    <div
      className={`flex items-center justify-between px-4 py-3 text-sm ${
        shaded ? "bg-gray-50" : "bg-white"
      } border-b last:border-b-0`}
    >
      <span className="text-muted-foreground">
        {label}
      </span>

      <span className="font-semibold text-right">
        {value}
      </span>
    </div>
  );
}

function formatShape(shape: string) {
  return shape
    .replace("-", " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}