import { useState } from "react";

const TabSearchComponent = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="w-full py-4 px-6 sm:px-8 lg:px-12 rounded-lg">
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
        {/* Tab Buttons */}
        <div className="flex space-x-4 p-2 rounded-md bg-white border border-gray-200 shadow-md w-full sm:w-auto mb-4 sm:mb-0">
          {["All", "Arts", "Misc", "Tech"].map(tab =>
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm ${selectedTab === tab
                ? "bg-red-100 text-red-500"
                : "bg-white text-gray-600 hover:bg-gray-100"}`}
            >
              {tab}
            </button>
          )}
        </div>

        <div className="relative w-full sm:w-64 lg:w-80">
          <input
            type="text"
            placeholder="Type to search..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 18l6-6m0 0l-6-6m6 6H4"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TabSearchComponent;
