import React from 'react';

interface EarningStatsProps {
  totalTRS: number;
  sales: number;
  investments: number;
}

const EarningStats: React.FC<EarningStatsProps> = ({ totalTRS, sales, investments }) => {
  const percentageChange = 10;
  const changeToday = 150;

  return (
    <div className="bg-[#F5F6FA] p-4 sm:p-6 rounded-2xl shadow-md w-full max-w-md border-2 border-gray-200 mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-gray-900 text-base sm:text-lg">Earnings</h2>
        <div className="text-lg text-red-500 flex items-center">
          <span>→</span>
        </div>
      </div>

      {/* Total Earnings */}
      <div className="mt-3 sm:mt-4">
        <p className="text-3xl sm:text-4xl font-light text-gray-900">{totalTRS}</p>
      </div>

      {/* Change */}
      <div className="text-base sm:text-lg text-green-500 flex items-center mt-2">
        <span>+{percentageChange}%</span>
        <span className="ml-1 text-gray-500">+{changeToday} today</span>
      </div>

      {/* Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-sm text-gray-600 border-t border-gray-200 pt-4">
        <div className="text-center">
          <p className="font-medium text-gray-800">Sales</p>
          <p className="text-lg">{sales}</p>
        </div>
        <div className="text-center sm:border-l border-gray-200">
          <p className="font-medium text-gray-800">Investments</p>
          <p className="text-lg">{investments}</p>
        </div>
      </div>
    </div>
  );
};

export default EarningStats;
