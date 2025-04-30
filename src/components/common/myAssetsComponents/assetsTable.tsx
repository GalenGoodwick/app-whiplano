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
        <div className="bg-white p-6 rounded-2xl mt-4 shadow-md border-2 border-gray-200 w-full ">
            <div className="flex justify-between items-center mb-4 space-x-60">
                <h2 className="text-2xl font-light">Assets</h2>

                <div className="flex border border-gray-300 rounded-xl flex-grow justify-end">
                    {['All', 'Holding', 'Created', 'Activated'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setSelectedTab(tab)}
                            className={`px-4 py-2 border-r rounded-lg text-sm ${selectedTab === tab
                                ? 'bg-red-100 text-red-500'
                                : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <input
                    type="text"
                    placeholder="Search for assets"
                    className="p-2 border border-gray-300 rounded-xl w-full"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <table className="w-full table-auto ">
                <thead className="text-gray-600 ">
                    <tr className="border-b">
                        <th className="py-2 text-left">Name</th>
                        <th className="py-2 text-left">Amount</th>
                        <th className="py-2 text-left">Unit</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredAssets.map((asset, index) => (
                        <tr key={index} className="border-b ">
                            <td className="py-2 flex items-center">
                                {/* Image before asset name */}
                                <Image
                                    src="/transactionBook.svg"
                                    alt={asset.name} // Using asset name for alt text
                                    width={45}
                                    height={45}
                                    className="rounded-full mr-2" // Add margin to separate image from text
                                />
                                {asset.name}
                            </td>
                            <td className="py-2">${asset.amount}</td>
                            <td className="py-2">{asset.unit}</td>
                            <td className="py-2 justify-end ">
                                {asset.status === 'active' && (
                                    <>
                                        <button className="px-4 py-1 rounded-xl bg-[#FE4773] bg-opacity-10 text-pink-600 font-medium border border-[#FFC6D4] mr-2">Buy</button>
                                        <button className="px-4 py-1 bg-blue-100 text-darkBlue border border-blue-300 rounded-xl mr-2">Sell</button>
                                    </>
                                )}
                                {asset.status === 'under review' && (
                                    
                                    <span className="flex text-gray-500 "><Processing/>Under review</span>
                                )}
                                {asset.status === 'inactive' && (
                                    <>
                                        <button className="px-4 py-1 rounded-xl bg-[#FE4773] bg-opacity-10 text-pink-600 font-medium border border-[#FFC6D4] mr-2">Edit</button>
                                        <button className="px-4 py-1 bg-blue-100 text-darkBlue border border-blue-300 rounded-xl mr-2">Sell</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}
