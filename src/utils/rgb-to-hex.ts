import { colorRGB } from "../types";

export function rgbToHex({ color }: { color: colorRGB }) {
  const r = Math.min(255, Math.max(0, color.r));
  const g = Math.min(255, Math.max(0, color.g));
  const b = Math.min(255, Math.max(0, color.b));

  const hexR = r.toString(16).padStart(2, "0");
  const hexG = g.toString(16).padStart(2, "0");
  const hexB = b.toString(16).padStart(2, "0");

  const hexColor = `#${hexR}${hexG}${hexB}`;

  return hexColor;
}

// function RGBToHex(r,g,b) {
//   r = r.toString(16);
//   g = g.toString(16);
//   b = b.toString(16);

//   if (r.length == 1)
//     r = "0" + r;
//   if (g.length == 1)
//     g = "0" + g;
//   if (b.length == 1)
//     b = "0" + b;

//   return "#" + r + g + b;
// }
