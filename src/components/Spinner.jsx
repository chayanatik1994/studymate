import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen space-x-4">
      <span className="loading loading-ring loading-xs"></span>
          <span className="loading loading-ring loading-sm"></span>
      <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      <span className="loading loading-ring loading-xl"></span>
    </div>
  );
};

export default Spinner;
