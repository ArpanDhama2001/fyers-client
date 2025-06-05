import React from "react";

const OptionsChain = ({ apiResponse }) => {
  if (
    !apiResponse ||
    !apiResponse.optionsChain ||
    apiResponse.optionsChain.length === 0
  ) {
    return <div className="text-center text-gray-500">No Data Available</div>;
  }
  return (
    <div className="overflow-x-auto">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{`Options Chain - ${apiResponse.optionsChain[0]?.description}`}</h3>
      <table className="min-w-full border text-sm text-left text-gray-700">
        <thead className="bg-gray-200 text-xs uppercase">
          <tr>
            <th className="px-4 py-2">S.No.</th>
            <th className="px-4 py-2">Symbol</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Strike</th>
            <th className="px-4 py-2">LTP</th>
            <th className="px-4 py-2">LTP Change</th>
            <th className="px-4 py-2">OI</th>
            <th className="px-4 py-2">Volume</th>
            <th className="px-4 py-2">OI Change</th>
            <th className="px-4 py-2">Bid</th>
            <th className="px-4 py-2">Ask</th>
          </tr>
        </thead>
        <tbody>
          {apiResponse.optionsChain.map((option, idx) => (
            <tr key={idx} className="border-b">
              <td className="px-4 py-2">{idx + 1}</td>
              <td className="px-4 py-2">{option.symbol}</td>
              <td className="px-4 py-2">{option.option_type}</td>
              <td className="px-4 py-2">{option.strike_price}</td>
              <td className="px-4 py-2">{option.ltp}</td>
              <td
                className={`px-4 py-2 ${
                  option.ltpch < 0 ? "text-red-600" : "text-green-600"
                }`}>
                {option.ltpch} ({option.ltpchp}%)
              </td>
              <td className="px-4 py-2">{option.oi}</td>
              <td className="px-4 py-2">{option.volume}</td>
              <td className="px-4 py-2">
                {option.oich ? (
                  <span
                    className={
                      option.oich < 0 ? "text-red-600" : "text-green-600"
                    }>
                    {option.oich} ({option.oichp}%)
                  </span>
                ) : (
                  <span className="text-gray-500">N/A</span>
                )}
              </td>
              <td className="px-4 py-2">{option.bid}</td>
              <td className="px-4 py-2">{option.ask}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OptionsChain;
