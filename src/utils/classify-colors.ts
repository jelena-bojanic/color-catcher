import { colorGroups } from "src/constants";
import { ColorCategories, ClassColor, colorRGB, ColorResult } from "src/types";
import { rgbToHSL } from "./rgb-to-hsl";
import { findSimilarColor } from "./find-similar-color";

export function classifyColors(colors: colorRGB[]) {
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
  for (var i = 0; i < colors.length; i++) {
    const color = colors[i];
    const colorHSL = rgbToHSL(colors[i]);
    const colorClass = colorGroups.find(
      (group) => colorHSL.h >= group.start.h && colorHSL.h <= group.end.h
    );
    if (colorClass) {
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
  return colorClasses;
}
