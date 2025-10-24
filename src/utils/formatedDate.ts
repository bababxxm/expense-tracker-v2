export default function formatedDate(dateStr: string) {
  const dateSplit = dateStr.split("/");
  return `${dateSplit[2]}-${dateSplit[0].padStart(
    2,
    "0"
  )}-${dateSplit[1].padStart(2, "0")}`;
}
