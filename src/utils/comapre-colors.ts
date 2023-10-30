import { diff, rgba_to_lab } from "color-diff";
import { colorRGB } from "../types";

export function compareColors({
  color1,
  color2,
}: {
  color1: colorRGB;
  color2: colorRGB;
}) {
  const labColor1 = rgba_to_lab({
    R: color1.r,
    G: color1.g,
    B: color1.b,
  });
  const labColor2 = rgba_to_lab({
    R: color2.r,
    G: color2.g,
    B: color2.b,
  });

  //Calculate difference using CIEDE2000
  const deltaE = diff(labColor1, labColor2);

  return deltaE;
}
