"use client";

import HotTRS from "@/components/common/hotTRS";
import TabSearchComponent from "@/components/common/marketplaceComponents/tabSearch";
import TopMovers from "@/components/common/marketplaceComponents/topMovers";
import RightSidebar from "@/components/layout/rightBarLayout";

export default function MarketplaceBase() {
  return (
    <div className="w-full">
      <TopMovers showAuthor={false} HeadingText="Top Movers" />
      <TabSearchComponent />
      <TopMovers showAuthor={true} HeadingText="Trending In Arts" />
      <HotTRS />
      <RightSidebar />

    </div>
  );
}
