import React, { useState } from 'react';

const StrikeCountSelector = ({ onStrikeCountChange }) => {
  const [strikeCount, setStrikeCount] = useState('10');

  const handleChange = (event) => {
    const value = event.target.value;
    setStrikeCount(value);
    onStrikeCountChange(value);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="strikeCount">
        Select Strike Count
      </label>
      <select
        id="strikeCount"
        value={strikeCount}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </div>
  );
};

export default StrikeCountSelector;