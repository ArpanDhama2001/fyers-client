import React from "react";
import getVolume from "../utils/getVolume";
import { formatToIndianShort } from "../utils/formatToIndianShort";

const VolumeDataBoard = ({
  apiResponse,
  delayedCallVolume,
  delayedPutVolume,
}) => {
  const [callVolume, setCallVolume] = React.useState(0);
  const [putVolume, setPutVolume] = React.useState(0);

  React.useEffect(() => {
    if (apiResponse) {
      const volume = getVolume(apiResponse);
      setCallVolume(volume.call);
      setPutVolume(volume.put);
    }
  }, [apiResponse]);

  return (
    <>
      <div className="grid md:grid-cols-3 gap-4 text-center">
        <div className="p-auto m-auto">
          <h2 className="text-2xl font-semibold text-gray-700">Volume</h2>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold text-gray-700">Call Volume</h2>
          <p className="text-2xl font-bold text-teal-600">
            {formatToIndianShort(callVolume)}
          </p>
          <p className="text-2xl font-bold text-gray-600">
            {delayedCallVolume != null && !isNaN(delayedCallVolume) ? (
              formatToIndianShort(delayedCallVolume)
            ) : (
              <span className="text-gray-500">No Data</span>
            )}
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold text-gray-700">Put Volume</h2>
          <p className="text-2xl font-bold text-pink-600">
            {formatToIndianShort(putVolume)}
          </p>
          <p className="text-2xl font-bold text-gray-600">
            {delayedPutVolume != null && !isNaN(delayedPutVolume) ? (
              formatToIndianShort(delayedPutVolume)
            ) : (
              <span className="text-gray-500">No Data</span>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default VolumeDataBoard;
