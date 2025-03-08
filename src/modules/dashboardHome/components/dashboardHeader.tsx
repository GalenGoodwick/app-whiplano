"use client";

import { Bell, ChevronDown } from "lucide-react";
import { Avatar } from "@/components/common/avatar";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";

export default function DashboardHeader() {
  return (
    <header className="flex justify-between items-center bg-white border-b border-gray-100 px-4 sm:px-6 py-4">
      {/* Dashboard Title - Adjust Size for Mobile */}
      <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4 sm:mt-0 ml-16  sm:ml-0">
  Dashboard
</h4>


      <div className="flex items-center gap-3 sm:gap-4">
        {/* Notification Icon - Hide on Small Screens */}
        <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 cursor-pointer hidden sm:block" />

        {/* User Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex items-center gap-2 cursor-pointer border border-gray-200 bg-white rounded-md px-2 py-1">
              {/* Avatar - Adjust size for smaller screens */}
              <Avatar src="/avatar.svg" alt="User Avatar"  />

              {/* Hide text on small screens */}
              <span className="text-gray-800 font-medium hidden sm:block">
                Hey, Adisko!
              </span>

              <ChevronDown className="w-4 h-4 text-gray-600 hidden sm:block" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
