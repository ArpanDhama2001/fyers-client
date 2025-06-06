import axios from "axios";
import { apiEndpoints } from "./enums";

let tokenCache = null;

export const setAccessToken = async () => {
  try {
    const response = await axios.get(`${apiEndpoints.getAccessToken}`);
    // console.log("tokenManager: Response from getAccessToken:", response);

    if (response.status === 200) {
      const accessToken = response.data.access_token;

      tokenCache = accessToken;

      if (typeof window !== "undefined" && window.localStorage) {
        // console.log("tokenManager: Setting access token in localStorage");
        localStorage.setItem("accessToken", accessToken);
      }

      return accessToken;
    } else {
      throw new Error("Failed to set access token");
    }
  } catch (error) {
    console.log("tokenManager: Error setting access token:", error);
    throw new Error("Failed to set access token");
  }
};

export const getAccessToken = async () => {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      const stored = localStorage.getItem("accessToken");
      // console.log("tokenManager: Stored access token:", stored);
      if (stored) return stored;
    }

    if (tokenCache) return tokenCache;

    const newToken = await setAccessToken();
    return newToken;
  } catch (error) {
    const response = await axios.get(`${apiEndpoints.getAccessToken}`);
    // console.log("tokenManager: Response from getAccessToken:", response);

    if (response.status === 200) {
      const accessToken = response.data.access_token;
      return accessToken;
    } else {
      throw new Error("Failed to set access token", error);
    }
  }
};
