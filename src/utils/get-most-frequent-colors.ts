import { errorCodes } from "src/constants";
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
}: MostFrequentColorsProps) {
  try {
    if (n <= 0) {
      throw `n ${errorCodes.nonZeroMessage}.`;
    }
    if (blurFactor < 0) {
      throw `blurFactor ${errorCodes.zeroOrPositiveMessage}`;
    }

    const { canvasContext, height, width } = await compressImage({
      imageURL: imageURL,
      blurFactor,
    });
    const { mostFrequentColors } = extractFrequentColors({
      canvasContext,
      width,
      height,
    });

    if (n < mostFrequentColors.length) {
      return mostFrequentColors.slice(0, n);
    }

    return mostFrequentColors;
  } catch (e) {
    console.log("Exception occured extracting colors: ", e);
    return { error: e };
  }
}
