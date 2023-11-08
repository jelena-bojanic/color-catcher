import { Error, Palette, colorRGB } from "../types";
import { rgbToHSL } from "./rgb-to-hsl";
import { rgbToHex } from "./rgb-to-hex";
import { hslToRgb } from "./hsl-to-rgb";
import { isValidRgb } from "./validators";
import { errorCodes } from "src/constants";

export function getTetradicPalette(color: colorRGB):
  | {
      palette: Palette;
    }
  | Error {
  try {
    if (!isValidRgb(color)) {
      throw `Provided color ${errorCodes.invalidRGB}`;
    }
    const colorHSL = rgbToHSL(color);
    const tetradicPalette = [{ rgb: color, hex: rgbToHex({ color: color }) }];

    for (let i = 1; i < 4; i++) {
      const tetrad = {
        ...colorHSL,
      };
      const hueStep = i * 90;
      tetrad.h = tetrad.h + hueStep;
      if (tetrad.h > 360) {
        tetrad.h = tetrad.h - 360;
      }
      const rgbValue = hslToRgb(tetrad);
      tetradicPalette.push({
        rgb: rgbValue,
        hex: rgbToHex({ color: rgbValue }),
      });
    }
    return { palette: tetradicPalette };
  } catch (e: any) {
    return { error: e };
  }
}
