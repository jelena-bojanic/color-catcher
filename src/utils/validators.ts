export const isValidRgb = (value: any) =>
  !!(
    (value.r || value.r === 0) &&
    (value.g || value.g === 0) &&
    (value.b || value.b === 0)
  );
