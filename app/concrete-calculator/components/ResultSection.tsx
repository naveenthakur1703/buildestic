import {
    Box,
    Package,
    Layers3,
    DollarSign,
    Factory,
    BadgeCheck,
} from "lucide-react";

import ResultCard from "@/components/calculator/ResultCard";
import { ConcreteResult } from "../types";

interface ResultSectionProps {
    result: ConcreteResult | null;
}

export default function ResultSection({
    result,
}: ResultSectionProps) {
    if (!result) {
        return (
            <section>
                <h2 className="text-5xl font-heading mb-2">
                    Calculation Results
                </h2>

                <p className="text-muted-foreground mb-8">
                    Based on the values you entered.
                </p>

                <div className="rounded-xl border bg-muted/20 p-10 text-center text-muted-foreground">
                    Enter the dimensions and click <strong>Calculate</strong> to see the results.
                </div>
            </section>

        );
    }

    return (
        <section>
            <h2 className="text-5xl font-heading mb-2">
                Calculation Results
            </h2>

            <p className="text-muted-foreground mb-8">
                Based on the values you entered.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

                <ResultCard
                    title="Concrete Volume"
                    value={`${result.volume.toFixed(2)} ${result.volumeUnit}`}
                    icon={
                        <Box className="h-7 w-7 text-blue-700" />
                    }
                />

                <ResultCard
                    title="Cement Bags"
                    value={result.cementBags.toLocaleString()}
                    icon={
                        <Factory className="h-7 w-7 text-violet-700" />
                    }
                />

                <ResultCard
                    title="Sand Required"
                    value={`${result.sand.toFixed(2)} ${result.sandUnit}`}
                    icon={
                        <Layers3 className="h-7 w-7 text-orange-600" />
                    }
                />

                <ResultCard
                    title="Aggregate Required"
                    value={`${result.aggregate.toFixed(2)} ${result.aggregateUnit}`}
                    icon={
                        <Package className="h-7 w-7 text-green-700" />
                    }
                />

                <ResultCard
                    title="Waste Allowance"
                    value={`${result.wasteVolume.toFixed(2)} ${result.volumeUnit}`}
                    icon={
                        <Box className="h-7 w-7 text-amber-600" />
                    }
                />

                {result.totalCost > 0 && (
                    <ResultCard
                        title="Material Cost"
                        value={`₹${result.totalCost.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        })}`}
                        icon={
                            <DollarSign className="h-7 w-7 text-emerald-700" />
                        }
                    />
                )}
            </div>
            {/* --------Disclaimer--------- */}
            <div className="mt-8 max-w-5xl rounded-xl border border-blue-200 bg-blue-50 p-5">
                <div className="flex items-start gap-4">
                    <div className="rounded-full bg-green-100 p-2">
                        <BadgeCheck className="h-5 w-5 text-green-600" />
                    </div>

                    <div>
                        <h3 className="text-base font-semibold text-slate-900">
                            Calculation Disclaimer
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                            These calculations are estimates. Actual material requirements may vary based on site conditions, workmanship, and construction practices. Consult a qualified engineer for structural projects.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}