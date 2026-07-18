import { ConcreteInput, ConcreteResult } from "./types";
import { GRADE_DATA } from "./constants";

export function calculateConcrete(
  input: ConcreteInput
): ConcreteResult {

  let volume =
    input.length *
    input.width *
    input.depth;

  // Convert cubic feet to cubic meters
  if (input.unit === "ft") {
    volume *= 0.0283168;
  }

  if (input.includeWaste) {
    volume *= 1 + input.waste / 100;
  }

  const grade = GRADE_DATA[input.grade];

  const cementBags =
    Math.ceil(volume * grade.cementBags);

  const sand =
    volume * grade.sand;

  const aggregate =
    volume * grade.aggregate;

  const totalCost =
    volume * input.costPerM3;

  const unit = "m³";

  const volumeUnit = "m³";

  return {
    volume,
    volumeUnit,

    cementBags,

    sand,
    sandUnit: volumeUnit,

    aggregate,
    aggregateUnit: volumeUnit,

    totalCost,

    wasteVolume: input.includeWaste
      ? volume * (input.waste / (100 + input.waste))
      : 0,
  };
}