export function formatNumberToString(number: number) {
  const parts = number.toString().split(".");
  let integerPart = parts[0];
  const decimalPart = parts[1] ? `.${parts[1]}` : "";

  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return integerPart + decimalPart;
}

export function slugToTitle(slug: string) {
  const words = slug.split("-");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedWords.join(" ");
}
