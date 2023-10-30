import { ColorResult, Palette, colorRGB } from "../types";
import { rgbToHex } from "./rgb-to-hex";
import { rgbToHSL } from "./rgb-to-hsl";
import { hslToRgb } from "./hsl-to-rgb";

export function getComplementaryPalette(color: colorRGB): {
  palette: Palette;
} {

  const colorHSL = rgbToHSL(color);
  const complementaryHSL = { ...colorHSL };

  complementaryHSL.h = complementaryHSL.h + 180;
  if (complementaryHSL.h > 360) {
    complementaryHSL.h = complementaryHSL.h - 360;
  }

  const complementaryRGB = hslToRgb(complementaryHSL);
  const complementaryHex = rgbToHex({ color: complementaryRGB });
  const palette = [{ rgb: complementaryRGB, hex: complementaryHex }];

  return { palette };
}
