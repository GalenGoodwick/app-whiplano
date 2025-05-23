"use client";

import { useRightSidebar } from "@/context/RightSidebarContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

export default function RightSidebar() {
  const { isOpen, closeSidebar, sidebarContent } = useRightSidebar();

  return (
    <>
      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[99]"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: "90%" }}
        animate={{ x: isOpen ? "0%" : "85%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-20 right-0 w-[440px] h-[796px] bg-white shadow-xl z-[100] p-5 flex flex-col rounded-tl-lg"
      >
        {/* Toggle Button */}
        <button
          onClick={closeSidebar}
          className="absolute top-1/4 -left-6 transform -translate-y-1/2 bg-white border shadow-md rounded-full w-8 h-8 flex items-center justify-center"
        >
          {isOpen ? (
            <ChevronRight className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          )}
        </button>

        {/* Sidebar Content (Dynamic) */}
        <div className="flex-grow">{sidebarContent}</div>
      </motion.div>
    </>
  );
}
