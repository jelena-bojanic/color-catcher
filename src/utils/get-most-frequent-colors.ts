import { MostFrequentColorsProps } from "../types";
import { compressImage } from "./compress-image";
import { extractFrequentColors } from "./extract-frequent-colors";

/**
 * @type {MostFrequentColorsProps} MostFrequentColorsProps
 */
export async function getMostFrequentColors({
  imageURL,
  n = 1,
  blurFactor = 1,
}: //ignore white todo
MostFrequentColorsProps) {
  try {
    const { canvasContext, height, width } = await compressImage({
      imageURL: imageURL,
      blurFactor,
    });
    const { mostFrequentColors } = extractFrequentColors({
      canvasContext,
      width,
      height,
    });

    console.log("most frequent before slice", { mostFrequentColors });

    if (n < mostFrequentColors.length) {
      return {
        mostFrequentColors: mostFrequentColors.slice(0, n),
      };
    }

    return {
      mostFrequentColors,
    };
  } catch (e) {
    console.log("exception occured: ", e);
    return "error";
  }
}
