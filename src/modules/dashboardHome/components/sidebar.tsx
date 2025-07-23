"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import CreatorCard from "@/components/common/creatorCard";
import SidebarNav from "@/components/common/sidebarNav";
import Image from 'next/image';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when the sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Clean up when unmounted
    };
  }, [isOpen]);

  return (
    <div className="relative fixed">
      {!isOpen && (
        <button
          className="p-2 m-2 rounded-lg bg-gray-200 md:hidden fixed top-4 left-4 z-50"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      )}

      <div
        className={`fixed top-0 left-0 min-h-screen w-[272px] bg-white shadow-lg transition-transform duration-300 ease-in-out z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:relative md:flex md:flex-col md:h-screen overflow-hidden`}
      >
        <div className=" p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/whiplanologo.png"
              width={32}
              height={32}
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
          ©2025. Whiplano.
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
