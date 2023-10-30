import { colorRGB } from "../types";
import { compareColors } from "./comapre-colors";

export function findSimilarColor({
  colors,
  color,
}: {
  colors: { count: number; color: colorRGB }[];
  color: colorRGB;
}): { index: number } | null {
  var bestMatch = { delta: Number.MAX_VALUE, index: 0 };

  for (var i = 0; i < colors.length; i = i + 1) {
    // if (
    //   color.r === colors[i].color.r &&
    //   color.g === colors[i].color.g &&
    //   color.b === colors[i].color.b
    // ) {
    //   bestMatch = { delta: 0, index: i };
    //   break;
    // }
    const delta = compareColors({ color1: colors[i].color, color2: color });
    if (delta < bestMatch.delta) {
      bestMatch = { delta: delta, index: i };
    }
  }

  if (bestMatch.delta > 10) {
    //blur faktor veza
    return null;
  }

  return { index: bestMatch.index };
}
