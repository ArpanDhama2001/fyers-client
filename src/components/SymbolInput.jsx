import React, { useState } from 'react';

const SymbolInput = ({ onSymbolChange }) => {
  const [symbol, setSymbol] = useState('NSE:NIFTY50-INDEX');

  const handleChange = (event) => {
    setSymbol(event.target.value);
    onSymbolChange(event.target.value);
    console.log('Selected Symbol:', event.target.value);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="symbol">
        Stock Symbol
      </label>
      <select
        id="symbol"
        value={symbol}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="NSE:NIFTY50-INDEX">NIFTY50</option>
        <option value="NSE:NIFTYBANK-INDEX">NIFTYBANK</option>
        <option value="NSE:MIDCPNIFTY-INDEX">MIDCPNIFTY</option>
        <option value="NSE:FINNIFTY-INDEX">FINNIFTY</option>
        <option value="BSE:SENSEX-INDEX">SENSEX</option>
        <option value="NSE:RELIANCE-EQ">RELIANCE</option>
      </select>
    </div>
  );
};

export default SymbolInput;