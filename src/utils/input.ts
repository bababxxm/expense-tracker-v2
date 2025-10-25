export const parsePriceInput = (input: string): string => {
  const parsed = parseFloat(input);
  return isNaN(parsed) ? "" : input;
};
