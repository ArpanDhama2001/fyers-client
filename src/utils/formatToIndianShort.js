export const formatToIndianShort = (number) => {
  if (isNaN(number)) return null;

  const isNegative = number < 0;
  const absNumber = Math.abs(number);
  let formatted;

  if (absNumber >= 10000000) {
    formatted = (absNumber / 10000000).toFixed(2).replace(/\.00$/, "") + " Cr";
  } else if (absNumber >= 100000) {
    formatted = (absNumber / 100000).toFixed(2).replace(/\.00$/, "") + " L";
  } else if (absNumber >= 1000) {
    formatted = (absNumber / 1000).toFixed(2).replace(/\.00$/, "") + " K";
  } else {
    formatted = absNumber.toString();
  }

  return isNegative ? "-" + formatted : formatted;
};
