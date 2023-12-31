import React, { useState } from 'react';
import ComboBox from 'ui/components/ComboBox';

const SettingsPage = () => {
  return (
    <div className="max-w-md mx-auto my-8 p-4 bg-gray-100 border border-gray-300 rounded-md">
      <h2 className="text-xl font-semibold mb-4">Settings</h2>

      <div className="mb-4">
        <label htmlFor="theme" className="block text-sm font-medium text-gray-700">
          Choose a theme:
        </label>
        <ComboBox/>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Preview</h3>
        <div className={`p-4rounded-md`}>
          This is a preview of the selected theme.
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;