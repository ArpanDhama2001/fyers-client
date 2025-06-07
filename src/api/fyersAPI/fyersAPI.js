import { fyersModel } from "fyers-web-sdk-v3";
import { sessionData } from "../../utils/enums";
// import { getAccessToken } from "../../utils/tokenManager";

export const fetchData = async (symbol, strikeCount, accessToken) => {
  try {
    const { appId, redirectURL } = sessionData;
    if (!accessToken) {
      throw new Error(
        "Access token is not set. Please set the access token first."
      );
    }
    var fyers = new fyersModel();
    fyers.setAppId(appId);
    fyers.setRedirectUrl(redirectURL);
    fyers.setAccessToken(accessToken);

    const response = await fyers.getOptionChain({
      symbol: symbol,
      strikecount: strikeCount,
      timestamp: "",
    });
    // console.log("Option chain data from function:", response.data);
    return response.data;
  } catch (err) {
    console.log("Error fetching option chain data:", err);
    throw err;
  }
};
