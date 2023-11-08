import { Error, Palette, colorRGB } from "../types";
import { rgbToHex } from "./rgb-to-hex";
import { rgbToHSL } from "./rgb-to-hsl";
import { hslToRgb } from "./hsl-to-rgb";
import { errorCodes } from "src/constants";
import { isValidRgb } from "./validators";

export function getMonochormaticPalette(
  color: colorRGB
): { palette: Palette } | Error {
  try {
    if (!isValidRgb(color)) {
      throw `Provided color ${errorCodes.invalidRGB}`;
    }
    const shift = 33;

    const monochormaticPalette = [{ rgb: color, hex: rgbToHex({ color }) }];
    const colorHSL = rgbToHSL(color);

    for (var i = 1; i < 3; i++) {
      const monochormaticColor = {
        ...colorHSL,
      };
      const lightnessStep = shift * i;
      monochormaticColor.l = monochormaticColor.l + lightnessStep;
      if (monochormaticColor.l > 100) {
        monochormaticColor.l = monochormaticColor.l - 100;
      }
      const monochormaticRGB = hslToRgb(monochormaticColor);
      monochormaticPalette.push({
        rgb: monochormaticRGB,
        hex: rgbToHex({ color: monochormaticRGB }),
      });
    }

    return { palette: monochormaticPalette };
  } catch (e: any) {
    return { error: e };
  }
}
