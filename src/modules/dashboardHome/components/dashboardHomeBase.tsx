"use client";

import Checklist from "@/components/common/checkList";
import HotTRS from "@/components/common/hotTRS";
import WelcomeCard from "@/components/common/welcomeCard";
import RightSidebar from "@/components/layout/rightBarLayout";

export default function DashboardHomeBase() {

  return (
    <div className="">
      <h1 className="text-2xl mb-6">Task Checklist</h1>
      <Checklist />
      <WelcomeCard />
      <HotTRS />

     

      <RightSidebar />
    </div>
  );
}
