import StatsCard from "@/components/common/dasboardArtisian/statsCard";
import EarningStats from "@/components/common/dasboardArtisian/earningStats";
import WalletCard from "@/components/common/dasboardArtisian/walletCard";
import RecentTransactions from "@/components/common/dasboardArtisian/recentTransactions";
import ArtisianWelcomeCard from "@/components/common/dasboardArtisian/artisianWelcomeCard";
import RightSidebar from "@/components/layout/rightBarLayout";
export default function DashboardArtisianBase() {
  
  return (
    <div>
      <ArtisianWelcomeCard />
      <div className="grid grid-cols-3 gap-4 mt-8">
        <StatsCard
          totalTRS={43}
          trsCreated={23}
          trsActivated={12}
          trsHeld={8}
        />

        <EarningStats totalTRS={45987} sales={238755} investments={238755} />
        <WalletCard
          portfolioValue={238755}
          percentageChange={10}
          changeToday={238755}
        />
      </div>

      <div className="flex flex-row justify-end">
        <RecentTransactions />
      </div>

      <RightSidebar/>
      
    </div>
  );
}
