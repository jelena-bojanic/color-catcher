import { IMG_MAX_HEIGHT, IMG_MAX_WIDTH, baseBlurFactor } from ".././constants";
import { CanvasProperties, CompressImageProps } from ".././types";

export function compressImage({
  imageURL,
  blurFactor = 0,
}: CompressImageProps): Promise<CanvasProperties> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = `Anonymous`;

    img.onload = () => {
      const canvas = document.createElement("canvas");

      let newWidth = img.width;
      let newHeight = img.height;

      // Calculating new dimensions while maintaining aspect ratio
      if (img.width > IMG_MAX_WIDTH) {
        newWidth = IMG_MAX_WIDTH;
        newHeight = (img.height * IMG_MAX_WIDTH) / img.width;
      } else if (img.height > IMG_MAX_HEIGHT) {
        newHeight = IMG_MAX_HEIGHT;
        newWidth = (img.width * IMG_MAX_HEIGHT) / img.height;
      }

      canvas.width = newWidth;
      canvas.height = newHeight;

      const canvasContext = canvas.getContext("2d");
      if (canvasContext) {
        canvasContext.filter = `blur(${baseBlurFactor + blurFactor}px)`;
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
