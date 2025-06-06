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
    fyers.setAccessToken(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiZDoxIiwiZDoyIiwieDowIiwieDoxIiwieDoyIl0sImF0X2hhc2giOiJnQUFBQUFCb1Fsd1E5Z2NhaXNXOGRJNzR1QW1id25NdGc2aG1Yd2Nsa2l5eHV2S3c0c1NoOW1FbGlnTW1NaWhaQ3FiLWUzb3BseXFUb09lN2FYMVZuYUFVU0xTbVh6SzFSTzg0dFVrQ1R1eWU0OHdJNjVEN3NhVT0iLCJkaXNwbGF5X25hbWUiOiIiLCJvbXMiOiJLMSIsImhzbV9rZXkiOiIyNGU0NzE1ODY4ZTk3OWMxNjAyYzE4MWI4OWMwMmZjZDg3YmUwYzQ0NWE2M2U3YTM1NzVhMzgwZCIsImlzRGRwaUVuYWJsZWQiOiJOIiwiaXNNdGZFbmFibGVkIjoiTiIsImZ5X2lkIjoiWUQxNDI2MSIsImFwcFR5cGUiOjEwMCwiZXhwIjoxNzQ5MjU2MjAwLCJpYXQiOjE3NDkxNzk0MDgsImlzcyI6ImFwaS5meWVycy5pbiIsIm5iZiI6MTc0OTE3OTQwOCwic3ViIjoiYWNjZXNzX3Rva2VuIn0.pPj4VFDcB11GnsNqTGNS3NIFvEOsE81t7IaVR_GqW9A"
    );

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
