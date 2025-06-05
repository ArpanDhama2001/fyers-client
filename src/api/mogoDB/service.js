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
