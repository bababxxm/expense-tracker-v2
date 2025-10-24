export const parsePriceInput = (input: string): number  => {
  const parsed = parseFloat(input);
  return isNaN(parsed) ? 0 : parsed;
};
