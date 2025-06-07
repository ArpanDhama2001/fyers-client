import React from "react";
import { formatToIndianShort } from "../utils/formatToIndianShort";
import { getChangeOI } from "../utils/getChangeOi";

const OIDataBoard = ({ apiResponse, calloi, putoi, minutes, lTime, dTime }) => {
  const { call: total_call_oi, put: total_put_oi } = getChangeOI(apiResponse);
  return (
    <>
      <div className="flex gap-4 text-center">
        <div className="flex-1 m-auto">
          <h2 className="text-2xl font-semibold text-gray-700">OI Change</h2>
        </div>
        {/* <div className="flex- flex gap-4"> */}
        <div className="flex-2 bg-gray-100 p-4 rounded shadow text-2xl font-semibold border">
          <div className="flex justify-center">
            <p className="">Call OI Change: </p>
            <div className={`${minutes === "-1" ? "hidden" : ""}`}>
              {calloi != null && !isNaN(calloi) ? (
                formatToIndianShort(calloi)
              ) : (
                <span className="">No Data</span>
              )}
            </div>
            <p className={`${minutes !== "-1" ? "hidden" : ""}`}>
              {formatToIndianShort(total_call_oi)}
            </p>
          </div>

          <div className="flex justify-center-safe">
            <p className="">Put OI Change: </p>
            <div className={`${minutes === "-1" ? "hidden" : ""}`}>
              {putoi != null && !isNaN(putoi) ? (
                formatToIndianShort(putoi)
              ) : (
                <span className="">No Data</span>
              )}
            </div>
            <p className={`${minutes !== "-1" ? "hidden" : ""}`}>
              {formatToIndianShort(total_put_oi)}
            </p>
          </div>
        </div>

        <div className="flex-1 bg-gray-100 p-4 rounded shadow text-2xl font-semibold border">
          <div className="">
            Start Time: {lTime ? new Date(lTime).toLocaleTimeString() : "N/A"}
          </div>
          <div className="">
            End Time: {dTime ? new Date(dTime).toLocaleTimeString() : "N/A"}
          </div>
        </div>
      </div>
      {/* </div> */}
      <div></div>
    </>
  );
};

export default OIDataBoard;
