import { COLORS } from "src/constants";
import { ColorCategories, ClassColor, colorRGB } from "src/types";
import { rgbToHSL } from "./rgb-to-hsl";
import { findSimilarColor } from "./find-similar-color";

export function classifyColors(colors: Uint8ClampedArray) {
  let countedColors = 0;
  const colorClasses: {
    [key in ColorCategories]: { colors: ClassColor[] };
  } = {
    [ColorCategories.red]: {
      colors: [],
    },
    [ColorCategories.orange]: {
      colors: [],
    },
    [ColorCategories.yellow]: {
      colors: [],
    },
    [ColorCategories.green]: {
      colors: [],
    },
    [ColorCategories.blue]: {
      colors: [],
    },
    [ColorCategories.violet]: {
      colors: [],
    },
    [ColorCategories.pink]: {
      colors: [],
    },
  };
  for (var i = 0; i < colors.length; i = i + 4) {
    const color = {
      r: colors[i],
      g: colors[i + 1],
      b: colors[i + 2],
      a: colors[i + 3],
    };
    if (color.r === 0 && color.g === 0 && color.b === 0 && color.a === 0) {
      continue;
    }
    const colorHSL = rgbToHSL(color);
    const colorClass = COLORS.find(
      (c) => colorHSL.h >= c.start.h && colorHSL.h <= c.end.h
    );
    if (colorClass) {
      countedColors += 1;
      const exist = colorClasses[colorClass.name].colors.findIndex(
        (element: ClassColor) =>
          element.color.r === color.r &&
          element.color.g === color.g &&
          element.color.b === color.b
      );
      if (exist >= 0) colorClasses[colorClass.name].colors[exist].count += 1;
      else {
        const bestMatch = findSimilarColor({
          colors: colorClasses[colorClass.name].colors,
          color,
        });
        if (bestMatch) {
          colorClasses[colorClass.name].colors[bestMatch.index].count += 1;
        } else {
          colorClasses[colorClass.name].colors.push({ color, count: 0 });
        }
      }
    }
  }
  return { colorClasses, countedColors };
}
