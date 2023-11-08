import { ColorCategories, ColorGroup } from "./types";

export const IMG_MAX_HEIGHT = 250;
export const IMG_MAX_WIDTH = 250;
export const PIXELS = 64000;
export const IMG_QUALITY_FACTOR = 0.3;

export const COLORS: ColorGroup[] = [
  {
    name: ColorCategories.red,
    start: { h: 343 },
    end: { h: 360 },
  },
  {
    name: ColorCategories.red,
    start: { h: 0 },
    end: { h: 14 },
  },
  {
    name: ColorCategories.orange,
    start: { h: 15 },
    end: { h: 50 },
  },
  {
    name: ColorCategories.yellow,
    start: { h: 50 },
    end: { h: 74 },
  },
  {
    name: ColorCategories.green,
    start: { h: 74 },
    end: { h: 165 },
  },

  {
    name: ColorCategories.blue,
    start: { h: 166 },
    end: { h: 259 },
  },
  {
    name: ColorCategories.violet,
    start: { h: 260 },
    end: { h: 342 },
  },
];

export const errorCodes = {
  nonZeroMessage: "should be a number larger than zero",
  zeroOrPositiveMessage: "should be a number equal or larger to zero",
  invalidRGB:
    "should have r, g and b properties and their values should be numbers from 0 to 255.",
};
