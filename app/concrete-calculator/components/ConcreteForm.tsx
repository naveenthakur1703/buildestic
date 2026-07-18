"use client";

import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { CONCRETE_GRADES } from "../constants";
import {
  ConcreteGrade,
  ConcreteInput,
  ConcreteShape,
  Unit,
} from "../types";

interface ConcreteFormProps {
  values: ConcreteInput;
  onChange: (values: ConcreteInput) => void;
  onCalculate: () => void;
  onReset: () => void;
  error?: string;
}

export default function ConcreteForm({
  values,
  onChange,
  onCalculate,
  onReset,
  error,
}: ConcreteFormProps) {
  const update = <K extends keyof ConcreteInput>(
    key: K,
    value: ConcreteInput[K]
  ) => {
    onChange({
      ...values,
      [key]: value,
    });
  };

  return (
    <div className="space-y-6">
      {/* Shape */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Concrete Shape
        </label>

        <select
          className="w-full rounded-lg border bg-white p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          value={values.shape}
          onChange={(e) =>
            update("shape", e.target.value as ConcreteShape)
          }
        >
          <option value="slab">Slab</option>
          <option value="footing">Footing</option>
          <option value="beam">Beam</option>
          <option value="column">Column</option>
          <option value="circular-column">
            Circular Column
          </option>
          <option value="stairs">Stairs</option>
        </select>
        <p className="mt-2 text-sm text-muted-foreground">
          Currently only <strong>Slab</strong> calculations are supported.
          Additional concrete shapes will be added in future updates.
        </p>
      </div>

      {/* Coming Soon */}
      {values.shape !== "slab" && (
        <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4">
          <h3 className="font-semibold text-yellow-900">
            This Shape Is Coming Soon
          </h3>

          <p className="mt-2 text-sm text-yellow-800">
            <strong>
              {values.shape
                .replace("-", " ")
                .replace(/\b\w/g, (c) => c.toUpperCase())}
            </strong>{" "}
            calculations are under development.
            Please select <strong>Slab</strong> to calculate concrete volume.
          </p>
        </div>
      )}

      {/* Units */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Units
        </label>

        <select
          className="w-full rounded-lg border bg-white p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          value={values.unit}
          onChange={(e) =>
            update("unit", e.target.value as Unit)
          }
        >
          <option value="ft">Feet</option>
          <option value="m">Meters</option>
        </select>
      </div>

      {/* Slab Inputs */}
      {values.shape === "slab" && (
        <>
          <div>
            <label className="block text-sm font-medium mb-2">
              Length ({values.unit})
            </label>

            <Input
              type="number"
              min="0"
              step="any"
              placeholder="Enter length"
              value={values.length || ""}
              onChange={(e) =>
                update(
                  "length",
                  e.target.value === ""
                    ? 0
                    : Number(e.target.value)
                )
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Width ({values.unit})
            </label>

            <Input
              type="number"
              min="0"
              step="any"
              placeholder="Enter width"
              value={values.width || ""}
              onChange={(e) =>
                update(
                  "width",
                  e.target.value === ""
                    ? 0
                    : Number(e.target.value)
                )
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Depth ({values.unit})
            </label>

            <Input
              type="number"
              min="0"
              step="any"
              placeholder="Enter depth"
              value={values.depth || ""}
              onChange={(e) =>
                update(
                  "depth",
                  e.target.value === ""
                    ? 0
                    : Number(e.target.value)
                )
              }
            />

            <p className="mt-2 text-sm text-muted-foreground">
              Example: 0.5 ft or 0.15 m
            </p>
          </div>
        </>
      )}

      {/* Grade */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Concrete Grade
        </label>

        <select
          className="w-full rounded-lg border bg-white p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          value={values.grade}
          onChange={(e) =>
            update(
              "grade",
              e.target.value as ConcreteGrade
            )
          }
        >
          {CONCRETE_GRADES.map((grade) => (
            <option key={grade} value={grade}>
              {grade}
            </option>
          ))}
        </select>
        <p className="mt-2 text-sm text-muted-foreground">
          M20 is the most commonly used concrete grade for residential construction.
        </p>
      </div>

      {/* Waste */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <input
            className="h-4 w-4 rounded border-gray-300"
            type="checkbox"
            checked={values.includeWaste}
            onChange={(e) =>
              update("includeWaste", e.target.checked)
            }
          />

          <label className="font-medium">
            Waste Allowance (%)
          </label>

          <span
            title="Extra concrete added to cover construction waste."
            className="cursor-help text-gray-500"
          >
            ⓘ
          </span>
        </div>

        {values.includeWaste && (
          <select
            className="w-full rounded-lg border bg-white p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            value={values.waste}
            onChange={(e) =>
              update(
                "waste",
                e.target.value === ""
                  ? 0
                  : Number(e.target.value)
              )
            }
          >
            <option value={5}>5%</option>
            <option value={10}>10% (Recommended)</option>
            <option value={15}>15%</option>
          </select>
        )}
      </div>

      {/* Cost */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Cost per m³ (Optional)
        </label>

        <Input
          type="number"
          min="0"
          step="any"
          placeholder="e.g. 6500"
          value={values.costPerM3 || ""}
          onChange={(e) =>
            update(
              "costPerM3",
              e.target.value === ""
                ? 0
                : Number(e.target.value)
            )
          }
        />

        <p className="mt-2 text-sm text-muted-foreground">
          Enter the cost of one cubic meter of concrete.
        </p>
      </div>

      {error && (
        <div
          role="alert"
          className="rounded-lg border border-red-300 bg-red-50 p-4 text-sm font-medium text-red-700"
        >
          {error}
        </div>
      )}

      <div className="flex gap-3 pt-2">
        <Button
          disabled={values.shape !== "slab"}
          onClick={onCalculate}
          className="flex-1 h-12 text-base font-semibold"
        >
          Calculate
        </Button>

        <Button
          variant="outline"
          onClick={onReset}
          className="h-12 w-32 border-gray-300 hover:bg-gray-100"
        >
          Reset
        </Button>
      </div>
    </div>
  );
}