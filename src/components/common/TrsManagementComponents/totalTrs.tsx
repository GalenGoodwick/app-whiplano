import React from 'react';
import { FileText } from 'lucide-react';

const TotalTrsCard = () => {
  return (
    <div className="bg-[#F5F6FA] p-6 rounded-2xl shadow-md w-full max-w-2xl border-2 border-gray-200">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">Total TRS</p>
          <h2 className="text-2xl font-bold">5,474</h2>
          <p className="text-sm text-green-500 mt-1 cursor-pointer">↗ 10% increase in value</p>
        </div>
        <div className="bg-pink-600 p-3 rounded-full">
          <FileText className="text-white w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default TotalTrsCard;
