import { PIXELS } from ".././constants";
import { CanvasProperties, CompressImageProps } from ".././types";

export function compressImage({
  imageURL,
  blurFactor = 0,
}: CompressImageProps): Promise<CanvasProperties> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.style.background = "transparent";
    img.crossOrigin = `Anonymous`;

    img.onload = () => {
      const canvas = document.createElement("canvas");

      const currentPixels = img.width * img.height;
      const newWidth =
        (currentPixels < PIXELS
          ? img.width
          : Math.round(img.width * Math.sqrt(PIXELS / currentPixels))) / 2;
      const newHeight =
        (currentPixels < PIXELS
          ? img.height
          : Math.round(img.height * Math.sqrt(PIXELS / currentPixels))) / 2;

      canvas.width = newWidth;
      canvas.height = newHeight;

      const canvasContext = canvas.getContext("2d");
      if (canvasContext) {
        canvasContext.filter = `blur(${blurFactor}px)`;
        canvasContext.drawImage(img, 0, 0, newWidth, newHeight);

        resolve({
          canvasContext: canvasContext,
          height: canvas.height,
          width: canvas.width,
        });
      }
    };

    img.src = imageURL;
  });
}
