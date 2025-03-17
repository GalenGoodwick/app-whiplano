"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import CreatorCard from "@/components/common/creatorCard";
import SidebarNav from "@/components/common/sidebarNav";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {!isOpen &&
        <button
          className="p-2 m-2 rounded-lg bg-gray-200 md:hidden fixed top-4 left-4 z-50"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>}

      <div
        className={`fixed top-0 left-0 h-full w-[272px] bg-white shadow-lg transition-transform duration-300 ease-in-out z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:relative md:flex md:flex-col md:h-screen`}
      >
        <div className=" p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="/whiplanologo.png"
              alt="Whiplano Logo"
              className="w-8 h-8"
            />
            <h1 className="text-lg font-bold">Whiplano</h1>
          </div>

          <button
            className="p-2 text-gray-600 hover:text-gray-900 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <SidebarNav />

        <CreatorCard />

        <div className="text-center text-gray-400 text-sm p-4">
          ©2025. Whiplano
        </div>
      </div>

      {isOpen &&
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />}
    </div>
  );
}
