import React from 'react';

// Define types for the props
interface StatsCardProps {
  totalTRS: number;
  trsCreated: number;
  trsActivated: number;
  trsHeld: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ totalTRS, trsCreated, trsActivated, trsHeld }) => {
  const percentageChange = 10; // example percentage increase
  const changeToday = 2; // example change today

  return (
    <div className="bg-[#F5F6FA] p-6 rounded-2xl shadow-md w-full max-w-md border-2 border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-gray-900">Total TRS</h2>
        <div className="text-lg text-red-500 flex items-center">
          <span>→</span>
        </div>
      </div>

      {/* Total TRS */}
      <div className="mt-4">
        <p className="text-4xl font-light text-gray-900">{totalTRS}</p>
      </div>

      {/* Percentage Change Section */}
      <div className="text-lg text-green-500 flex items-center mt-2">
        <span>+{percentageChange}%</span>
        <span className="ml-1 text-gray-500">+{changeToday} today</span>
      </div>

      {/* TRS Breakdown */}
      <div className="grid grid-cols-3 gap-4 mt-6 text-sm text-gray-600 border-t border-gray-200">
        <div className="text-center mt-2">
          <p className="font-medium text-gray-800">TRS created</p>
          <p className="text-lg">{trsCreated}</p>
        </div>
        <div className="text-center border-l border-gray-200 mt-2">
          <p className="font-medium text-gray-800">TRS activated</p>
          <p className="text-lg">{trsActivated}</p>
        </div>
        <div className="text-center border-l border-gray-200 mt-2">
          <p className="font-medium text-gray-800">TRS held</p>
          <p className="text-lg">{trsHeld}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
