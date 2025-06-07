import { isPastTHreeThirty } from "./isPast330";

export const adjustedMinutes = (mins) => {
  if (isPastTHreeThirty()) {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const threeThirtyInMinutes = 15 * 60 + 30; // 930
    const targetMinutes = threeThirtyInMinutes - mins;
    const result = currentMinutes - targetMinutes;

    return result;
  }
  return mins;
};
