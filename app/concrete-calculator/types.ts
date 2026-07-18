export type Unit = "ft" | "m";

export type ConcreteGrade =
  | "M10"
  | "M15"
  | "M20"
  | "M25"
  | "M30";

export type ConcreteShape =
  | "slab"
  | "footing"
  | "beam"
  | "column"
  | "circular-column"
  | "stairs";


export interface ConcreteInput {
  shape: ConcreteShape;

  unit: Unit;

  length: number;

  width: number;

  depth: number;

  grade: ConcreteGrade;

  includeWaste: boolean;

  waste: number;

  costPerM3: number;
}

export interface ConcreteResult {
  volume: number;
  volumeUnit: string;

  cementBags: number;

  sand: number;
  sandUnit: string;

  aggregate: number;
  aggregateUnit: string;

  totalCost: number;

  wasteVolume: number;
}