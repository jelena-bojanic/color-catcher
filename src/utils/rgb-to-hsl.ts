import { colorHSL, colorRGB } from "../types";

export function rgbToHSL(color: colorRGB): colorHSL {
  const r = color.r / 255;
  const g = color.g / 255;
  const b = color.b / 255;

  // Find greatest and smallest channel values
  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;

  let h = 0;

  if (cmax === cmin) h = 0;
  // Red is max
  else if (r === cmax) h = (g - b) / delta;
  // Green is max
  else if (g === cmax) h = 2 + (b - r) / delta;
  // Blue is max
  else if (b === cmax) h = 4 + (r - g) / delta;

  h = Math.min(h * 60, 360);
  if (h < 0) h = h + 360;

  const l = (cmax + cmin) / 2;

  let s;
  if (cmax === cmin) s = 0;
  else if (l <= 0.5) s = delta / (cmax + cmin);
  else s = delta / (2 - cmax - cmin);

  return { h: Math.round(h), s: Math.round(s * 100), l: Math.round(l * 100) };
}
