"use client";

import { Bell, ChevronDown, LogOut, Settings, User, FileText, Info, ChevronRight, CheckCircle } from "lucide-react";
import { Avatar } from "@/components/common/avatar";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useRightSidebar } from "@/context/RightSidebarContext";
import NotificationBar from "@/components/common/notificationBar";
import PersonalInformation from "@/components/common/personalInfo";
import ProfileSettings from "@/components/common/settings";

export default function DashboardHeader() {
  const { openSidebar } = useRightSidebar();

  return (
    <header className="flex justify-between items-center bg-white border-b border-gray-100 px-4 sm:px-6 py-4">
      {/* Dashboard Title - Adjust Size for Mobile */}
      <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4 sm:mt-0 ml-16 sm:ml-0">
        Dashboard
      </h4>

      <div className="flex items-center gap-3 sm:gap-4">
        {/* Notification Icon - Hide on Small Screens */}
        <Bell
          className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 cursor-pointer"
          onClick={() => openSidebar(<NotificationBar />)}
        />

        {/* User Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex items-center gap-2 cursor-pointer border border-gray-200 bg-white rounded-md px-2 py-1">
              {/* Avatar - Adjust size for smaller screens */}
              <Avatar src="/avatar.svg" alt="User Avatar" />

              {/* Hide text on small screens */}
              <span className="text-gray-800 font-medium hidden sm:block">Hey, Adisko!</span>

              <ChevronDown className="w-4 h-4 text-gray-600 hidden sm:block" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-96 p-4 shadow-lg rounded-lg">
            {/* Profile Header */}
            <div className="flex items-center gap-3 mb-4">
              <Avatar src="/avatar.svg" alt="User Avatar"/>
              <div>
                <p className="text-gray-900 font-semibold">Adisko</p>
                <p className="text-gray-500 text-sm">Investor</p>
              </div>
              <button className="ml-auto bg-gradient-to-r from-[#FE4773] to-[#6E114C] text-white text-sm px-4 py-1.5 rounded-md flex items-center gap-2">
          <img src="/crown.svg" alt="crown" className="w-5 h-5" />
          Become a Creator
        </button>
            </div>

            <DropdownMenuSeparator />

            <DropdownMenuItem className="flex items-center gap-3 py-3 mb-2 text-gray-700 bg-[#F5F6FA]"           onClick={() => openSidebar(<PersonalInformation />)}
            >
              <User size={16} /> Personal Information
              <span className="ml-auto"><ChevronRight size={14} /></span>
              

            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-3 py-3 mb-2 text-gray-700 bg-[#F5F6FA]" onClick={() => openSidebar(<ProfileSettings />)}>
              <Settings size={16} /> Settings
              <span className="ml-auto"><ChevronRight size={14} /></span>

            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-3 py-3 mb-2 text-gray-700 bg-[#F5F6FA]">
              <FileText size={16} /> Reports
              <span className="ml-auto"><ChevronRight size={14} /></span>

            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-3 py-3 text-gray-700 bg-[#F5F6FA]">
              <Info size={16} /> About WHIPLANO
              <CheckCircle className={`w-5 h-5 ml-auto text-red-500`} />
              </DropdownMenuItem>
            
            <DropdownMenuSeparator />
            
            {/* Logout */}
            <DropdownMenuItem className="flex items-center gap-3 py-3 text-red-500">
              <LogOut size={16} /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}