"use client";

import { useState } from "react";
import DashboardHeader from "@/modules/dashboardHome/components/dashboardHeader";
import Sidebar from "@/modules/dashboardHome/components/sidebar";
import { RightSidebarProvider } from "@/context/RightSidebarContext";

export default function OnboardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex bg-white min-h-screen">
      {/* Sidebar (fixed) */}
      <Sidebar />

      {/* Backdrop for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
          role="button"
          aria-label="Close sidebar"
        ></div>
      )}

      {/* Scrollable Main Area */}
      <div className="flex flex-col w-full  h-screen overflow-y-auto">
        <RightSidebarProvider>
          <DashboardHeader showCreateTRSButton={true} />

          <main className="flex-grow p-4 sm:p-6 md:p-8">
            {children}
          </main>
        </RightSidebarProvider>
      </div>
    </div>
  );
}
