export function createPixelArray({
  pixels,
  quality = 1,
}: {
  pixels: Uint8ClampedArray;
  quality?: number;
}) {
  const pixelArray = [];

  for (let i = 0; i < pixels.length; i = i + 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    const a = pixels[i + 3];

    if (r === 0 && g === 0 && b === 0 && a === 0) {
      continue;
    }

    pixelArray.push({ r, g, b });
  }
  return pixelArray;
}
