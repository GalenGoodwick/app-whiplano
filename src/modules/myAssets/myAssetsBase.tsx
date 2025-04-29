"use client";

import RecentTransactions from "@/components/common/dasboardArtisian/recentTransactions";
import BuySellWidget from "@/components/common/marketplaceComponents/buySellWidget";
import AssetsTable from "@/components/common/myAssetsComponents/assetsTable";
import TopProjectsProgress from "@/components/common/myAssetsComponents/topProjectProgress";

function MyAssetsBase() {
  return (
    <div className="flex w-full max-w-full p-6">
      <div className="w-3/4 mr-2"> 
        <AssetsTable />
      </div>

      <div className="w-1/4">
      <BuySellWidget/>
        <TopProjectsProgress />
        <RecentTransactions/>
      </div>
    </div>
  );
}

export default MyAssetsBase;
