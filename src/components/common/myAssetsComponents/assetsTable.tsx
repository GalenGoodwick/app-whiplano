"use client";

import { useState } from 'react';
import Image from 'next/image';
import Processing from '@/components/ui/processing';

export default function AssetsTable() {
  const [search, setSearch] = useState('');
  const [selectedTab, setSelectedTab] = useState('All');

  const [assets] = useState([
    { name: 'Light on Bone', amount: 236.88, unit: 1, status: 'active' },
    { name: 'Light on Bone', amount: 236.88, unit: 1, status: 'under review' },
    { name: 'Light on Bone', amount: 236.88, unit: 1, status: 'active' },
    { name: 'Light on Bone', amount: 236.88, unit: 1, status: 'active' },
    { name: 'Light on Bone', amount: 236.88, unit: 1, status: 'inactive' },
    { name: 'Light on Bone', amount: 236.88, unit: 1, status: 'inactive' },
    { name: 'Light on Bone', amount: 236.88, unit: 1, status: 'inactive' },
    { name: 'Light on Bone', amount: 236.88, unit: 1, status: 'inactive' },
    { name: 'Light on Bone', amount: 236.88, unit: 1, status: 'inactive' },
    { name: 'Light on Bone', amount: 236.88, unit: 1, status: 'inactive' },
  ]);

  const filteredAssets = assets.filter(asset =>
    asset.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl mt-4 shadow-md border-2 border-gray-200 w-full">
      {/* Header: title + filters + search */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-4">
        <h2 className="text-xl font-light">Assets</h2>

        <div className="flex flex-wrap gap-2 justify-start lg:justify-end">
          {['All', 'Holding', 'Created', ].map(tab => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 text-sm rounded-lg border ${
                selectedTab === tab
                  ? 'bg-red-100 text-red-500 border-red-200'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search for assets"
          className="p-2 border border-gray-300 rounded-xl w-full lg:w-60"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto text-sm">
          <thead className="text-gray-600">
            <tr className="border-b">
              <th className="py-2 text-left">Name</th>
              <th className="py-2 text-left">Amount</th>
              <th className="py-2 text-left">Unit</th>
              <th className="py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAssets.map((asset, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 flex items-center min-w-[180px]">
                  <Image
                    src="/transactionBook.svg"
                    alt={asset.name}
                    width={40}
                    height={40}
                    className="rounded-full mr-2"
                  />
                  {asset.name}
                </td>
                <td className="py-2 min-w-[100px]">${asset.amount}</td>
                <td className="py-2 min-w-[80px]">{asset.unit}</td>
                <td className="py-2 flex flex-wrap gap-2 min-w-[200px]">
                  {asset.status === 'active' && (
                    <>
                      <button className="px-4 py-1 rounded-xl bg-[#FE4773] bg-opacity-10 text-pink-600 font-medium border border-[#FFC6D4]">
                        Buy
                      </button>
                      <button className="px-4 py-1 bg-blue-100 text-darkBlue border border-blue-300 rounded-xl">
                        Sell
                      </button>
                    </>
                  )}
                  {asset.status === 'under review' && (
                    <span className="flex items-center text-gray-500">
                      <Processing /> <span className="ml-1">Under review</span>
                    </span>
                  )}
                  {asset.status === 'inactive' && (
                    <>
                      <button className="px-4 py-1 rounded-xl bg-[#FE4773] bg-opacity-10 text-pink-600 font-medium border border-[#FFC6D4]">
                        Edit
                      </button>
                      <button className="px-4 py-1 bg-blue-100 text-darkBlue border border-blue-300 rounded-xl">
                        Sell
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
