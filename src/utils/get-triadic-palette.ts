import { Palette, colorRGB } from "../types";
import { rgbToHSL } from "./rgb-to-hsl";
import { hslToRgb } from "./hsl-to-rgb";
import { rgbToHex } from "./rgb-to-hex";

export function getTriadicPalette({ color }: { color: colorRGB }): {
  palette: Palette;
} {
  const shift = 120;
  const triad1 = rgbToHSL(color);
  const triadicPalette = [{ rgb: color }];

  for (var i = 0; i < 2; i++) {
    const triad = {
      ...triad1,
    };
    triad.h = triad.h + shift * (i + 1);
    if (triad.h > 360) {
      triad.h = triad.h - 360;
    }
    triadicPalette.push({ rgb: hslToRgb(triad) });
  }
  const triadic = triadicPalette.map((i) => {
    return {
      rgb: i.rgb,
      hex: rgbToHex({ color: i.rgb }),
    };
  });
  return {
    palette: triadic,
  };
}
