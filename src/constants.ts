import { ColorCategories, ColorGroup } from "./types";

export const IMG_MAX_HEIGHT = 300;
export const IMG_MAX_WIDTH = 300;
export const IMG_QUALITY_FACTOR = 0.5;
export const baseBlurFactor = 0;

export const colorGroups: ColorGroup[] = [
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
