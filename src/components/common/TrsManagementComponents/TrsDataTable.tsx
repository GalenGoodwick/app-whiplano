/* eslint-disable */

'use client';
import { useRightSidebar } from "@/context/RightSidebarContext";
import React, { useState, useEffect } from 'react';
import {fetchTrsData } from '@/api-handlers/services/trs.service';
import ReviewTrsSidebar from './reviewTrs'; // Import the modal component

interface TrsDataItem {
  id: number;
  title: string;
  description: string;
  creator_email: string;
  status: string;
  created_at: string;
}

const TrsData = () => {
  const [data, setData] = useState<TrsDataItem[]>([]);
  const [visibleData, setVisibleData] = useState<TrsDataItem[]>([]);
  const { openSidebar } = useRightSidebar();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [offset, setOffset] = useState(0);
  const pageSize = 8;

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchTrsData();
        console.log('API Response:', result);  // Log the result to check the structure

        if (Array.isArray(result)) {
          setData(result);
          setVisibleData(result.slice(0, pageSize));
        } else {
          setError('The API response is not an array');
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

const handleView = (trsData: TrsDataItem) => {
  openSidebar(
    <ReviewTrsSidebar
      trsData={trsData}
      onAccept={handleAccept}
    />
  );
};



  const handleAccept = (id: number) => {
    const updatedData = data.filter((item) => item.id !== id);
    const updatedVisible = visibleData.filter((item) => item.id !== id);

    setData(updatedData);
    setVisibleData(updatedVisible);
  };

  const handleLoadMore = () => {
    const newOffset = offset + pageSize;
    setOffset(newOffset);
    setVisibleData(data.slice(0, newOffset + pageSize));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-left text-sm">
            <th className="py-4 px-6">Name</th>
            <th className="py-4 px-6">Price/Unit</th>
            <th className="py-4 px-6">Listed Date</th>
            <th className="py-4 px-6">Status</th>
            <th className="py-4 px-6">Listed By</th>
            <th className="py-4 px-6">View</th>
          </tr>
        </thead>
        <tbody>
          {visibleData.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-50 text-sm">
              <td className="py-4 px-6">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox" />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-gray-500 text-xs">{item.description}</p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6">$30,021.23</td>
              <td className="py-4 px-6">{new Date(item.created_at).toLocaleDateString()}</td>
              <td className="py-4 px-6">
                <span
                  className={`py-1 px-3 rounded-full text-xs ${item.status === 'active' ? 'bg-green-100 text-green-600' : item.status === 'rejected' ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'}`}
                >
                  {item.status}
                </span>
              </td>
              <td className="py-4 px-6">
                <p className="text-gray-500">{item.creator_email}</p>
              </td>
              <td className="py-4 px-6" onClick={() => handleView(item)}>
                <a href="#" className="text-pink-500 hover:underline">
                  View
                </a>
              </td>
           
            </tr>
          ))}
        </tbody>
      </table>

      {visibleData.length < data.length && (
        <div className="flex justify-center py-4">
          <button
            className="bg-gray-100 hover:bg-gray-200 text-gray-600 py-2 px-4 rounded-lg"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}

      
    </div>
  );
};

export default TrsData;
