import React from 'react';
import { FileText } from 'lucide-react';

const ActiveTrsCard = () => {
  return (
    <div className="bg-[#F5F6FA] p-6 rounded-2xl shadow-md w-full max-w-2xl border-2 border-gray-200">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">TRS Actived </p>
          <h2 className="text-2xl font-bold">$4.7M</h2>
          <p className="text-sm text-green-500 mt-1 cursor-pointer">↗ 10% increase</p>
        </div>
        <div className="bg-green-600 p-3 rounded-full">
          <FileText className="text-white w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ActiveTrsCard;
