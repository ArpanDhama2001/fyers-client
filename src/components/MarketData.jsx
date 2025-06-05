/* eslint-disable no-unused-vars */
import { useState, useEffect, useCallback, forwardRef } from "react";
import SymbolInput from "./SymbolInput";
import { fetchData } from "../api/fyersAPI/fyersAPI";
import StrikeCountSelector from "./StrikeCountSelector";
import OIDataBoard from "./OIDataBoard";
import VolumeDataBoard from "./VolumeDataBorad";
import Summary from "./Summary"; // assuming you have this
import OptionsChain from "./OptionsChain";
import NoData from "./NoData"; // assuming you have this
import MinutesAgoSelector from "./MinutesAgoSelector";
import { getDataByMinutesAgo } from "../api/mogoDB/service";

const MarketData = (props, ref) => {
  const [symbol, setSymbol] = useState("NSE:NIFTY50-INDEX");
  const [strikeCount, setStrikeCount] = useState(10);
  const [minutesAgo, setMinutesAgo] = useState(5); // Assuming you want to keep this for future use
  const [apiResponse, setApiResponse] = useState(null);
  const [data, setData] = useState(null);
  const [latestData, setLatestData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchOptionChainData = useCallback(async () => {
    try {
      setLoading(true);
      const result = await fetchData(symbol, strikeCount);
      setApiResponse(result || {});
    } catch (err) {
      console.error("Fetch failed:", err);
      setError("Failed to fetch option chain data.");
    } finally {
      setLoading(false);
    }
  }, [symbol, strikeCount]);

  useEffect(() => {
    fetchOptionChainData();

    const intervalId = setInterval(() => {
      fetchOptionChainData();
    }, 1 * 60000);

    return () => clearInterval(intervalId);
  }, [fetchOptionChainData]);

  useEffect(() => {
    fetchOptionChainData();
  }, [fetchOptionChainData]);

  const getLatestData = useCallback(async () => {
    try {
      const latestData = await getDataByMinutesAgo(symbol, strikeCount, 1);
      setLatestData(latestData);
    } catch (error) {
      console.log("Error fetching latest OI data:", error);
    }
  }, [symbol, strikeCount]);

  const getDelayedData = useCallback(async () => {
    try {
      const delayedData = await getDataByMinutesAgo(
        symbol,
        strikeCount,
        minutesAgo
      );
      setData(delayedData);
    } catch (error) {
      console.log("Error fetching delayed OI data:", error);
    }
  }, [symbol, strikeCount, minutesAgo]);

  useEffect(() => {
    if (apiResponse) {
      getDelayedData();
      getLatestData();
    }
  }, [apiResponse, getDelayedData, getLatestData]);

  return (
    <div ref={ref} className="container mx-auto">
      {/* Symbol & Strike Selector */}
      <div className="flex justify-center mt-4 p-4 mb-4 gap-4">
        <SymbolInput onSymbolChange={setSymbol} />
        <StrikeCountSelector onStrikeCountChange={setStrikeCount} />
        <MinutesAgoSelector onMinutesChange={setMinutesAgo} />
        <button
          className="bg-blue-500 my-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          onClick={fetchOptionChainData}>
          Refresh Data
        </button>
      </div>
      <h1 className="text-4xl underline font-semibold mb-4 text-center text-red-500">
        {symbol}
      </h1>

      {/* Display Boards */}
      {loading && <p className="text-center text-blue-600">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {apiResponse ? (
        <>
          <Summary
            apiResponse={apiResponse}
            strikeCount={strikeCount}
            lTime={latestData?.timestamp}
            dTime={data?.timestamp}
          />
          <OIDataBoard
            apiResponse={apiResponse}
            calloi={latestData && data ? latestData.callOi - data.callOi : null}
            putoi={latestData && data ? latestData.putOi - data.putOi : null}
          />
          <VolumeDataBoard
            apiResponse={apiResponse}
            delayedCallVolume={
              latestData && data
                ? latestData.callVolume - data.callVolume
                : null
            }
            delayedPutVolume={
              latestData && data ? latestData.putVolume - data.putVolume : null
            }
          />
          <OptionsChain apiResponse={apiResponse} />
        </>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default forwardRef(MarketData);
