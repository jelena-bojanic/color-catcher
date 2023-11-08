import { CanvasProperties, colorRGB } from "../types";
import { createPixelArray } from "./create-pixel-array";
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

  const { colorClasses: classes, countedColors } = classifyColors(pixelData);

  const mostFrequentColors = Object.values(classes)
    .flatMap((colorClass) => {
      return colorClass.colors.length ? colorClass.colors : [];
    })
    .map(({ color, count }) => {
      return {
        rgb: color,
        hex: rgbToHex({ color }),
        count: count,
        precentage: ((count / countedColors) * 100).toFixed(2),
      };
    });

  return {
    mostFrequentColors: mostFrequentColors.sort(
      (c1, c2) => c2.count - c1.count
    ),
  };
}
