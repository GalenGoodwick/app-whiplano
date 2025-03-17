"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface SidebarContextProps {
  isOpen: boolean;
  openSidebar: (content: ReactNode) => void;
  closeSidebar: () => void;
  toggleSidebar: (content?: ReactNode) => void;
  sidebarContent: ReactNode;
}

const RightSidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const RightSidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarContent, setSidebarContent] = useState<ReactNode>(null);

  const openSidebar = (content: ReactNode) => {
    setSidebarContent(content);
    setIsOpen(true);
  };

  const closeSidebar = () => setIsOpen(false);

  const toggleSidebar = (content?: ReactNode) => {
    if (isOpen) {
      closeSidebar();
    } else {
      if (content) setSidebarContent(content);
      setIsOpen(true);
    }
  };

  return (
    <RightSidebarContext.Provider value={{ isOpen, openSidebar, closeSidebar, toggleSidebar, sidebarContent }}>
      {children}
    </RightSidebarContext.Provider>
  );
};

export const useRightSidebar = () => {
  const context = useContext(RightSidebarContext);
  if (!context) throw new Error("useRightSidebar must be used within a RightSidebarProvider");
  return context;
};
