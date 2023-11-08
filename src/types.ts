type PositiveNumber = number;

export type ImageCanvas = HTMLCanvasElement;

export type MostFrequentColorsProps = {
  imageURL: string;
  n: PositiveNumber;
  blurFactor: PositiveNumber;
};

export type CompressImageProps = {
  imageURL: string;
  blurFactor?: number;
};

export type CanvasProperties = {
  canvasContext: CanvasRenderingContext2D;
  width: number;
  height: number;
};

export type MostFrequentColor = {
  color: colorRGB;
  count: number;
};

export type ColorResult = {
  rgb: colorRGB;
  hex: string;
  count?: number;
  precentage?: string;
};

export enum ColorCategories {
  red = "red",
  orange = "orange",
  yellow = "yellow",
  green = "green",
  blue = "blue",
  violet = "violet",
  pink = "pink",
}

export type ColorGroup = {
  name: ColorCategories;
  start: { h: number };
  end: { h: number };
};

export type ClassColor = { color: colorRGB; count: number };
export type ColorClass = {
  colors: ClassColor[];
};

export type Palette = ColorResult[];

export type colorRGB = { r: number; b: number; g: number };
export type colorLAB = { l: number; a: number; b: number };
export type colorHSL = { h: number; s: number; l: number };

export type Error = { error: string };
