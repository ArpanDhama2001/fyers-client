import { apiEndpoints } from "../../utils/enums";

export const getDataByMinutesAgo = async (symbol, strikeCount, minutes) => {
  try {
    const response = await fetch(
      `${apiEndpoints.getDelayedData}?symbol=${encodeURIComponent(
        symbol
      )}&strikeCount=${strikeCount}&time=${minutes}`
    );
    return response.json();
  } catch (err) {
    console.error("Error in getDataByMinutesAgo:", err);
    throw err;
  }
};

export const getLatestDataFromDB = async (symbol, strikeCount) => {
  try {
    const now = new Date();
    const currentHours = now.getHours();
    const currentMinutes = now.getMinutes();

    // if past 3:30pm
    if (currentHours > 15 || (currentHours === 15 && currentMinutes >= 30)) {
      // Create a Date object for today at 3:30 PM
      const threeThirty = new Date();
      threeThirty.setHours(15, 30, 0, 0); // 15:30:00.000

      // Calculate the difference in milliseconds
      const diffMs = (now - threeThirty) / (1000 * 60);
      const response = await fetch(
        `${apiEndpoints.getDelayedData}?symbol=${encodeURIComponent(
          symbol
        )}&strikeCount=${strikeCount}&time=${diffMs - 1}`
      );
      return response.json();
    } else {
      const response = await fetch(
        `${apiEndpoints.getDelayedData}?symbol=${encodeURIComponent(
          symbol
        )}&strikeCount=${strikeCount}&time=${currentMinutes - 1}`
      );
      return response.json();
    }
  } catch (error) {
    return error;
  }
};

export const deleteAllData = async () => {
  try {
    const response = await fetch(apiEndpoints.deleteAllData, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to delete data");
    }
    return response.json();
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};
