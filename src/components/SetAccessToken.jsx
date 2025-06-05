import React from "react";
import { useState } from "react";
import { fyersModel } from "fyers-web-sdk-v3";
import { sessionData, apiEndpoints } from "../utils/enums";
import axios from "axios";

const SetAccessToken = ({ scrollTo }) => {
  const [authCodeURL, setAuthCodeURL] = useState(null);
  const [authCode, setAuthCode] = useState("");
  const { appId, redirectURL, secretKey } = sessionData;

  const onClickHandler = async () => {
    var fyers = new fyersModel();
    fyers.setAppId(appId);
    fyers.setRedirectUrl(redirectURL);
    var generateAuthcodeURL = fyers.generateAuthCode();
    setAuthCodeURL(generateAuthcodeURL);
  };

  const SetAccessTokenHandler = async () => {
    try {
      const response = await axios.post(apiEndpoints.createAccessToken, {
        appID: appId,
        secretKey: secretKey,
        authCode: authCode,
      });
      scrollTo();
      if (response.status === 200) {
        setAuthCode("");
        alert("Access Token Set Successfully");
      } else {
        throw new Error("Failed to set access token");
      }
    } catch (error) {
      console.error("Error setting access token:", error);
      alert("Failed to set access token. Please try again.");
    }
  };
  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-2">
        <button
          onClick={onClickHandler}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
          Generate Auth Code URL
        </button>
      </div>
      <div className="mt-4">
        {authCodeURL && (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
            <a href={authCodeURL} target="_blank" rel="noopener noreferrer">
              Open Auth Code URL
            </a>
          </button>
        )}
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter Auth Code"
          value={authCode}
          className="border border-gray-300 p-2 rounded-md w-full mt-4"
          onChange={(e) => {
            setAuthCode(e.target.value);
          }}
        />
        <button
          onClick={SetAccessTokenHandler}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md mt-2">
          Submit Auth Code
        </button>
      </div>
    </div>
  );
};

export default SetAccessToken;
