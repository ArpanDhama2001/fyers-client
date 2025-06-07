export function remainingTime(expiryTime) {
  const expiryTimestamp = new Date(expiryTime); // Replace with your actual expiry timestamp (in ms)
  const now = Date.now();

  const msRemaining = expiryTimestamp - now;

  if (msRemaining <= 0) {
    console.log("Expired");
  } else {
    const totalSeconds = Math.floor(msRemaining / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const days = Math.floor(totalHours / 24);
    const hours = totalHours % 24;
    const mins = totalMinutes % 60;

    return { days, hours, mins };
  }
}
