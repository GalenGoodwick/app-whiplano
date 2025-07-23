/* eslint-disable */

'use client';

import React, { useEffect, useState } from 'react';
import { FileText } from 'lucide-react';
import { fetchTrsData } from '@/api-handlers/services/trs.service';

const RequestedTrsCard = () => {
  const [requestedCount, setRequestedCount] = useState(0); // State for requested TRS count
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
 const loadRequestedTrs = async () => {
  try {
    const data = await fetchTrsData(); // Fetch data from the API
    console.log(data); // Log the fetched data
    const count = data.filter((item) => item.status === 'pending').length;
    setRequestedCount(count);
  } catch (error) {
    console.error('Error fetching TRS data:', error);
  } finally {
    setLoading(false); // Set loading to false
  }
};

loadRequestedTrs();
  }, []);
  return (
    <div className="bg-[#F5F6FA] p-6 rounded-2xl shadow-md w-full max-w-2xl border-2 border-gray-200">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">TRS Request</p>
          <h2 className="text-2xl font-bold">
            {loading ? 'Loading...' : requestedCount}
          </h2>
          <p className="text-sm text-pink-500 mt-1 underline cursor-pointer">See requests</p>
        </div>
        <div className="bg-[#50063E] p-3 rounded-full">
          <FileText className="text-white w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default RequestedTrsCard;
