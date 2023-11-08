import { ColorResult, Error, Palette, colorRGB } from "../types";
import { rgbToHex } from "./rgb-to-hex";
import { rgbToHSL } from "./rgb-to-hsl";
import { hslToRgb } from "./hsl-to-rgb";
import { isValidRgb } from "./validators";
import { errorCodes } from "src/constants";

export function getComplementaryPalette(color: colorRGB):
  | {
      palette: Palette;
    }
  | Error {
  try {
    debugger;
    if (!isValidRgb(color)) {
      throw `Provided color ${errorCodes.invalidRGB}`;
    }

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
  } catch (e: any) {
    return { error: e };
  }
}
