import React, { useState } from 'react';

const ComboBox = () => {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto my-4">
      <label htmlFor="combo" className="block text-sm font-medium text-gray-700">
        Select an option:
      </label>
      <select
        id="combo"
        className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        {/* Add more options as needed */}
      </select>

      <p className="mt-2 text-sm text-gray-500">You selected: {selectedOption}</p>
    </div>
  );
}

export default ComboBox;