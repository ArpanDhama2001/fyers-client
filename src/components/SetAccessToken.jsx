import React, { useEffect } from "react";
import { useState } from "react";
import { fyersModel } from "fyers-web-sdk-v3";
import { sessionData, apiEndpoints } from "../utils/enums";
import axios from "axios";
import { remainingTime } from "../utils/remainingTime";

const SetAccessToken = ({ scrollTo, setAccessToken, refreshTokenExpiry }) => {
  const [authCodeURL, setAuthCodeURL] = useState(null);
  const [authCode, setAuthCode] = useState("");
  const [remTime, setRemTime] = useState();
  const { appId, redirectURL, secretKey } = sessionData;

  useEffect(() => {
    setRemTime(remainingTime(refreshTokenExpiry));
    const interval = setInterval(() => {
      setRemTime(remainingTime(refreshTokenExpiry));
    }, 60 * 1000); // every 1 minute

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [refreshTokenExpiry]);

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
        setAccessToken(response.data.access_token);
      } else {
        throw new Error({
          msg: "SetAccessTokenHandler: Failed to create token",
        });
      }
    } catch (error) {
      alert("Failed to set access token. Please try again.");
      console.error("SetAccessTokenHandler:", error);
      throw error;
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
      <div className="text-2xl">
        Refresh Token Expires in:{" "}
        {/* {new Date(refreshTokenExpiry).toLocaleString()} */}
        <span className="text-red-500">{remTime?.days}</span> days{" "}
        <span className="text-red-500">{remTime?.hours}</span> hours and{" "}
        <span className="text-red-500">{remTime?.mins}</span> minutes
      </div>
    </div>
  );
};

export default SetAccessToken;
