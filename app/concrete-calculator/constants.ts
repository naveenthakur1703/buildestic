import { ConcreteGrade } from "./types";

export const CONCRETE_GRADES: ConcreteGrade[] = [
  "M10",
  "M15",
  "M20",
  "M25",
  "M30",
];

export const GRADE_DATA = {
  M10: {
    cementBags: 6,
    sand: 0.48,
    aggregate: 0.96,
  },

  M15: {
    cementBags: 7,
    sand: 0.46,
    aggregate: 0.92,
  },

  M20: {
    cementBags: 8,
    sand: 0.44,
    aggregate: 0.88,
  },

  M25: {
    cementBags: 9,
    sand: 0.42,
    aggregate: 0.84,
  },

  M30: {
    cementBags: 10,
    sand: 0.40,
    aggregate: 0.80,
  },
};