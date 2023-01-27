import React from 'react';

const ProgressBar = ({ progress, progressText }) => {
  return (
    <div>
      <div className="bg-gray-300 h-4">
        <div
          className="bg-green-500 h-4"
          style={{ width: `${progress}%` }}
        >
          <span className="text-xs font-semibold text-white">{progressText} %</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
