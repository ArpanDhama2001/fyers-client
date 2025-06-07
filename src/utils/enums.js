export const sessionData = {
  appId: "EW1LP8KAGZ-100",
  redirectURL: "https://trade.fyers.in/api-login/redirect-uri/index.html",
  secretKey: "79TLHP67JH",
  accessToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiZDoxIiwiZDoyIiwieDowIiwieDoxIiwieDoyIl0sImF0X2hhc2giOiJnQUFBQUFCb1Fsd1E5Z2NhaXNXOGRJNzR1QW1id25NdGc2aG1Yd2Nsa2l5eHV2S3c0c1NoOW1FbGlnTW1NaWhaQ3FiLWUzb3BseXFUb09lN2FYMVZuYUFVU0xTbVh6SzFSTzg0dFVrQ1R1eWU0OHdJNjVEN3NhVT0iLCJkaXNwbGF5X25hbWUiOiIiLCJvbXMiOiJLMSIsImhzbV9rZXkiOiIyNGU0NzE1ODY4ZTk3OWMxNjAyYzE4MWI4OWMwMmZjZDg3YmUwYzQ0NWE2M2U3YTM1NzVhMzgwZCIsImlzRGRwaUVuYWJsZWQiOiJOIiwiaXNNdGZFbmFibGVkIjoiTiIsImZ5X2lkIjoiWUQxNDI2MSIsImFwcFR5cGUiOjEwMCwiZXhwIjoxNzQ5MjU2MjAwLCJpYXQiOjE3NDkxNzk0MDgsImlzcyI6ImFwaS5meWVycy5pbiIsIm5iZiI6MTc0OTE3OTQwOCwic3ViIjoiYWNjZXNzX3Rva2VuIn0.pPj4VFDcB11GnsNqTGNS3NIFvEOsE81t7IaVR_GqW9A",
};

// const host = "13.233.55.6";
const host = "localhost";

export const apiEndpoints = {
  getAccessToken: `http://${host}:3000/api/v1/token/getToken`,
  createAccessToken: `http://${host}:3000/api/v1/token/createToken`,
  getDelayedData: `http://${host}:3000/api/v1/options/get-options-data`,
  deleteAllData: `http://${host}:3000/api/v1/options`,
};
