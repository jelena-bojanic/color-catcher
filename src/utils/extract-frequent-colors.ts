import {
  CanvasProperties,
  ClassColor,
  ColorCategories,
  ColorClass,
  ColorResult,
  MostFrequentColor,
  colorRGB,
} from "../types";
import { createPixelArray } from "./create-pixel-array";
import { findSimilarColor } from "./find-similar-color";
import { rgbToHex } from "./rgb-to-hex";
import { classifyColors } from "./classify-colors";
import { compareColors } from "./comapre-colors";

export type MostFrequentColorWithInfo = {
  color: { rgb: colorRGB; hex: string };
  count: number;
  precentage: string;
};

export function extractFrequentColors({
  canvasContext,
  width,
  height,
}: CanvasProperties) {
  const pixelData = canvasContext.getImageData(0, 0, width, height).data;
  const pixelColors = createPixelArray({ pixels: pixelData });

  const classes = classifyColors(pixelColors);

  console.log("before sorting", { classes });

  const formatMostFreq = Object.values(classes)
    .flatMap((colorClass) => {
      return colorClass.colors;
    })
    .map(({ color, count }) => {
      return {
        rgb: color,
        hex: rgbToHex({ color }),
        count: count,
        precentage: ((count / pixelColors.length) * 100).toFixed(2),
      };
    });

  console.log({ formatMostFreq });

  // const mostFreqFromEach = [];
  // for (const c of Object.keys(classes)) {
  //   if (!classes[c as ColorCategories].colors.length) {
  //     continue;
  //   }
  //   const sortedColors = classes[c as ColorCategories].colors.sort(
  //     (c1, c2) => c2.count - c1.count
  //   );

  //   const topColor1 = {
  //     rgb: sortedColors[0].color,
  //     hex: rgbToHex({ color: sortedColors[0].color }),
  //     count: sortedColors[0].count,
  //     precentage: ((sortedColors[0].count / pixelColors.length) * 100).toFixed(
  //       2
  //     ),
  //   };

  //   topColor1.count > 0 && mostFreqFromEach.push(topColor1);
  // }

  return {
    mostFrequentColors: formatMostFreq.sort((c1, c2) => c2.count - c1.count),
  };
}
