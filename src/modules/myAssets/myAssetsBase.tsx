"use client";

import RecentTransactions from "@/components/common/dasboardArtisian/recentTransactions";
import BuySellWidget from "@/components/common/marketplaceComponents/buySellWidget";
import AssetsTable from "@/components/common/myAssetsComponents/assetsTable";
import TopProjectsProgress from "@/components/common/myAssetsComponents/topProjectProgress";

function MyAssetsBase() {
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-full p-4 sm:p-6 gap-4">
      {/* Left/Main Section */}
      <div className="w-full lg:w-3/4">
        <AssetsTable />
      </div>

      {/* Right Sidebar */}
      <div className="w-full lg:w-1/4 space-y-4">
        <BuySellWidget />
        <TopProjectsProgress />
        <RecentTransactions />
      </div>
    </div>
  );
}

export default MyAssetsBase;
