"use client"; // Ensures this component runs on the client side

import { useState } from "react";
import DashboardHeader from "@/modules/dashboardHome/components/dashboardHeader";
import Sidebar from "@/modules/dashboardHome/components/sidebar";
import { Menu } from "lucide-react";

export default function OnboardingLayout({
  children,
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
        ></div>
      )}

      {/* ✅ Main Content */}
      <div className="flex flex-col flex-grow ">
        <DashboardHeader />

        <main className="flex-grow flex justify-left relative z-10 p-4 sm:p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
