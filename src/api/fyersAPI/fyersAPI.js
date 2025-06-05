import { fyersModel } from "fyers-web-sdk-v3";
import { sessionData } from "../../utils/enums";
import { getAccessToken } from "../../utils/tokenManager";

export const fetchData = async (symbol, strikeCount) => {
  const { appId, redirectURL } = sessionData;
  const accessToken = await getAccessToken();
  if (!accessToken) {
    throw new Error(
      "Access token is not set. Please set the access token first."
    );
  }
  //   console.warn("Access Token:", accessToken);
  try {
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
    return {};
  }
};
