export default function numberToTHB(price: number): string {
  return price.toLocaleString("th-TH", {
    style: "currency",
    currency: "THB",
  });
}
