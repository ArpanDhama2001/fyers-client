export const sessionData = {
  appId: "EW1LP8KAGZ-100",
  redirectURL: "https://trade.fyers.in/api-login/redirect-uri/index.html",
  secretKey: "79TLHP67JH",
  accessToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiZDoxIiwiZDoyIiwieDowIiwieDoxIiwieDoyIl0sImF0X2hhc2giOiJnQUFBQUFCb1FOOTJIcWFXcmNiUktpNGFlQjlpcENTT21IZHg2bFFxczM4WkcybTBHMjR4MlJWYXdRaWFBQVF5c3Y5eHJybkIxd0ZpTUNFa2VpRDZvVEZYR09kVE0zQmRqMzhQNkg0aVdya2hKQllIb3FESDRBMD0iLCJkaXNwbGF5X25hbWUiOiIiLCJvbXMiOiJLMSIsImhzbV9rZXkiOiIyNGU0NzE1ODY4ZTk3OWMxNjAyYzE4MWI4OWMwMmZjZDg3YmUwYzQ0NWE2M2U3YTM1NzVhMzgwZCIsImlzRGRwaUVuYWJsZWQiOiJOIiwiaXNNdGZFbmFibGVkIjoiTiIsImZ5X2lkIjoiWUQxNDI2MSIsImFwcFR5cGUiOjEwMCwiZXhwIjoxNzQ5MTY5ODAwLCJpYXQiOjE3NDkwODE5NzQsImlzcyI6ImFwaS5meWVycy5pbiIsIm5iZiI6MTc0OTA4MTk3NCwic3ViIjoiYWNjZXNzX3Rva2VuIn0.FEvV6QKGcAiQPuscry-0ENWoQkvnqhVFlTPzkxpXrPQ",
};

const host = "13.233.55.6";

export const apiEndpoints = {
  getAccessToken: `http://${host}:3000/api/v1/token/getToken`,
  createAccessToken: `http://${host}:3000/api/v1/token/createToken`,
  getDelayedData: `http://${host}:3000/api/v1/options/get-options-data`,
  deleteAllData: `http://${host}:3000/api/v1/options`,
};
