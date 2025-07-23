import ActiveTrsCard from "@/components/common/TrsManagementComponents/activeTrs";
import RequestedTrsCard from "@/components/common/TrsManagementComponents/requestedTrs";
import TotalTrsCard from "@/components/common/TrsManagementComponents/totalTrs";
import TrsData from "@/components/common/TrsManagementComponents/TrsDataTable";
import React from "react";
import RightSidebar from "@/components/layout/rightBarLayout";

export default function TrsManagementBase() {
  return (
    <div className="space-y-8 mt-8">
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <TotalTrsCard />
        <ActiveTrsCard />
        <RequestedTrsCard />
      </div>

      <div className="w-full">
        <TrsData />
      </div>
      <RightSidebar />
    </div>
  );
}
