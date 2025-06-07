export const isPastTHreeThirty = () => {
  const now = new Date();
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();
  if (currentHours > 15 || (currentHours === 15 && currentMinutes >= 30))
    return true;
  return false;
};
