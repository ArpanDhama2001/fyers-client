import React from "react";
import { formatToIndianShort } from "../utils/formatToIndianShort";
import getVolume from "../utils/getVolume";

const Summanry2 = ({ apiResponse }) => {
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
    <div className="flex text-2xl text-white bg-purple-500 rounded mb-4">
      <div className="flex-1 bg-teal-500 border-r-2 border-white text-center font-semibold">
        <div className="border-b-2 p-4">
          Call OI:{" "}
          {apiResponse ? formatToIndianShort(apiResponse.callOi) : "NO DATA"}
        </div>
        <div className="border-b-2 p-4">
          Put OI:{" "}
          {apiResponse ? formatToIndianShort(apiResponse.putOi) : "NO DATA"}
        </div>
      </div>

      <div className="flex-1 border-r-2 border-white text-center font-semibold">
        <div className="border-b-2 p-4">
          Call Volume:{" "}
          {callVolume ? formatToIndianShort(callVolume) : "NO DATA"}
        </div>
        <div className="border-b-2 p-4">
          Put Volume: {putVolume ? formatToIndianShort(putVolume) : "NO DATA"}
        </div>
      </div>
    </div>
  );
};

export default Summanry2;
