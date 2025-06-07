import React from "react";

const Summary = ({ apiResponse, strikeCount }) => {
  return (
    <div className="bg-red-500 text-white text-2xl flex rounded mb-4">
      <div className="flex-1 px-4 py-3 border-r-2 border-white text-center">
        Spot Price ={" "}
        {apiResponse && apiResponse.optionsChain
          ? apiResponse.optionsChain[0].ltp
          : "N/A"}
      </div>
      <div className="flex-1 px-4 py-3 border-r-2 border-white text-center">
        Strike Count = {strikeCount}
      </div>
      <div className="flex-1 px-4 py-3 border-r-2 border-white text-center">
        IndiaVIX = {apiResponse ? apiResponse.indiavixData.ltp : "N/A"}
        <span
          className={`${
            apiResponse.indiavixData.ltpch < 0
              ? "text-yellow-200"
              : "text-green-200"
          }`}>
          {apiResponse ? ` (${apiResponse.indiavixData.ltpch})` : ""}
        </span>
      </div>
      <div className="flex-1 px-4 py-3 text-center">
        PCR ={" "}
        {apiResponse
          ? (apiResponse.putOi / apiResponse.callOi).toFixed(2)
          : "N/A"}
      </div>
    </div>
  );
};

export default Summary;
