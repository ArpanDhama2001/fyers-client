import React from "react";

const MinutesAgoSelector = ({ onMinutesChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="minutes">Minutes Ago:</label>
      <select
        id="minutes"
        onChange={(e) => onMinutesChange(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <option value="4">3 mins</option>
        <option value="6">5 mins</option>
        <option value="11">10 mins</option>
        <option value="16">15 mins</option>
        <option value="21">20 mins</option>
        <option value="31">30 mins</option>
        <option value="46">45 mins</option>
        <option value="61">1 hrs</option>
        <option value="121">2 hrs</option>
        <option value="181">3 hrs</option>
        <option value="241">4 hrs</option>
        <option value="301">5 hrs</option>
        <option value="361">6 hrs</option>
        <option value="-1">Full Day</option>
      </select>
    </div>
  );
};

export default MinutesAgoSelector;
