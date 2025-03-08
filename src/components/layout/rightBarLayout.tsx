"use client";

import { useRightSidebar } from "@/context/RightSidebarContext";
import { X } from "lucide-react";
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
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 right-0 w-80 h-full bg-white shadow-xl z-[100] p-5 flex flex-col"
      >
        <button onClick={closeSidebar} className="self-end p-2">
          <X className="w-6 h-6" />
        </button>

        {/* Sidebar Content (Dynamic) */}
        <div className="flex-grow">{sidebarContent}</div>
      </motion.div>
    </>
  );
}
