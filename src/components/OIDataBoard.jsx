import React from "react";
import { formatToIndianShort } from "../utils/formatToIndianShort";

const OIDataBoard = ({ apiResponse, calloi, putoi }) => {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-4 text-center">
        <div className="p-auto m-auto">
          <h2 className="text-2xl font-semibold text-gray-700">OI</h2>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold text-gray-700">Call OI</h2>
          <p className="text-2xl font-bold text-purple-600">
            {formatToIndianShort(apiResponse.callOi)}
          </p>
          <p className="text-2xl font-bold text-gray-600">
            {calloi != null && !isNaN(calloi) ? (
              formatToIndianShort(calloi)
            ) : (
              <span className="text-gray-500">No Data</span>
            )}
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold text-gray-700">Put OI</h2>
          <p className="text-2xl font-bold text-green-600">
            {formatToIndianShort(apiResponse.putOi)}
          </p>
          <p className="text-2xl font-bold text-gray-600">
            {putoi != null && !isNaN(putoi) ? (
              formatToIndianShort(putoi)
            ) : (
              <span className="text-gray-500">No Data</span>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default OIDataBoard;
