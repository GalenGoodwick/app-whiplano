"use client";

import { useState } from "react";
import DashboardHeader from "@/modules/dashboardHome/components/dashboardHeader";
import Sidebar from "@/modules/dashboardHome/components/sidebar";
import { RightSidebarProvider } from "@/context/RightSidebarContext";

export default function OnboardingLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen bg-white">
      <Sidebar />

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
          role="button"
          aria-label="Close sidebar"
        />
      )}

      {/* Main Content */}
      <div className="flex flex-col flex-grow w-full "> {/* Add margin-left for sidebar width */}
        <RightSidebarProvider>
          {/* Pass the showCreateTRSButton prop */}
          <DashboardHeader showCreateTRSButton={true} />

          <main className="flex-grow flex justify-start relative z-10 w-full  ">
            {children}
          </main>
        </RightSidebarProvider>
      </div>
    </div>
  );
}
