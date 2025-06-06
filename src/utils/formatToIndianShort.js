export const formatToIndianShort = (number) => {
  if (isNaN(number)) return null;
  if (number >= 10000000) {
    return (number / 10000000).toFixed(2).replace(/\.00$/, "") + " Cr";
  } else if (number >= 100000) {
    return (number / 100000).toFixed(2).replace(/\.00$/, "") + " L";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(2).replace(/\.00$/, "") + " K";
  } else {
    return number.toString();
  }
};
