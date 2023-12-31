import React from 'react';
import Picker from 'ui/components/Picker';

const SettingsPage = () => {
  return (
    <div className="max-w-md mx-auto my-8 p-4 bg-gray-100 border border-gray-300 rounded-md">
      <h2 className="text-xl font-semibold mb-4">Settings</h2>

      <div className="mb-4">
        <label htmlFor="theme" className="block text-sm font-medium text-gray-700">
          Choose a theme:
        </label>
        <Picker/>
      </div>
    </div>
  );
};

export default SettingsPage;