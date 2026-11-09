const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier === undefined) {
    multiplier = 2;
  }
  return value * multiplier;
};
