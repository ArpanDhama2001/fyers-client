import React from "react";

const Summary = ({ apiResponse, strikeCount, lTime, dTime }) => {
  return (
    <div className="container mx-auto p-4 text-xl">
      <div className="flex justify-around translate-x-[-50px] items-center mb-4 gap-4 p-4 rounded">
        <div className="bg-teal-100 p-4 rounded">
          Spot Price ={" "}
          {apiResponse && apiResponse.optionsChain
            ? apiResponse.optionsChain[0].ltp
            : "N/A"}
        </div>
        <div className="bg-teal-100 p-4 rounded">
          Strike Count = {strikeCount}
        </div>
        <div className="bg-teal-100 p-4 rounded">
          IndiaVIX = {apiResponse ? apiResponse.indiavixData.ltp : "N/A"}
          <span
            className={`px-4 py-2 ${
              apiResponse.indiavixData.ltpch < 0
                ? "text-red-600"
                : "text-green-600"
            }`}>
            {apiResponse ? ` (${apiResponse.indiavixData.ltpch})` : ""}
          </span>
        </div>
        <div className="bg-teal-100 p-4 rounded">
          PCR ={" "}
          {apiResponse
            ? (apiResponse.putOi / apiResponse.callOi).toFixed(2)
            : "N/A"}
        </div>
      </div>
      <div className="flex justify-center gap-4 p-4 rounded mb-4">
        <span className="bg-teal-100 p-4 rounded">
          Start Time: {lTime ? lTime.toLocaleString() : "N/A"}
        </span>
        <br />
        <span className="bg-teal-100 p-4 rounded">
          End Time: {dTime ? dTime.toLocaleString() : "N/A"}
        </span>
        <br />
      </div>
    </div>
  );
};

export default Summary;
