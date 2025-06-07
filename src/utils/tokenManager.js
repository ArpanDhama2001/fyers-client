import axios from "axios";
import { apiEndpoints } from "./enums";

export const getAccessTokenFromDB = async () => {
  try {
    // console.log("tokenManager: In getAcessTokenFromDB()");
    const response = await axios.get(`${apiEndpoints.getAccessToken}`);
    console.log("tokenManager: Response from getAccessToken:", response);

    if (response.status === 200) {
      return response;
    } else {
      throw new Error(
        "Failed to get access token. Something went wrong while getting token from DB."
      );
    }
  } catch (error) {
    console.log("tokenManager: Error getting access token:", error);
    throw new Error("Failed to get access token");
  }
};
