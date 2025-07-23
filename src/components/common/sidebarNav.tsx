import React, { useState } from "react";
import Image from 'next/image';


const SidebarNav: React.FC = () => {
  // Track the active link
  const [activeLink, setActiveLink] = useState<string>("");

  // Function to handle link click and set the active link
  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
  };

  return (
    <nav className="flex-1 p-4 space-y-4 ">
      <a
        href="/dashboard"
        onClick={() => handleLinkClick("Dashboard")}
        className={`flex items-center p-2 rounded-lg ${
          activeLink === "Dashboard"
            ? "bg-[#FE4773] bg-opacity-10 text-pink-600 font-medium border border-[#FFC6D4]"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        <Image src="/dashboard.svg" width={20} height={20} alt="Home" className="w-5 h-5 mr-2" />
        Dashboard
      </a>
      <a
        href="/marketplace"
        onClick={() => handleLinkClick("Marketplace")}
        className={`flex items-center p-2 rounded-lg ${
          activeLink === "Marketplace"
            ? "bg-[#FE4773] bg-opacity-10 text-pink-600 font-medium border border-[#FFC6D4]"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        <Image src="/marketplace.svg" width={20} height={20} alt="marketplace" className="w-5 h-5 mr-2" />
        Marketplace
      </a>
      <a
        href="/myAssets"
        onClick={() => handleLinkClick("My Assets")}
        className={`flex items-center p-2 rounded-lg ${
          activeLink === "My Assets"
            ? "bg-[#FE4773] bg-opacity-10 text-pink-600 font-medium border border-[#FFC6D4]"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        <Image src="/assets.svg" alt="My Assets" width={20} height={20} className="w-5 h-5 mr-2" />
        My Assets
      </a>

      {/* ✅ Separation Line */}
      <hr className="border-t border-gray-300" />

      <a
        href="/marketplace"
        className="flex items-center p-2 rounded-lg text-gray-700 hover:bg-gray-100"
      >
        <Image src="/help.svg" alt="Need help" width={20} height={20} className="w-5 h-5 mr-2" />
        Need help
      </a>
      <a
        href="#"
        className="flex items-center p-2 rounded-lg text-gray-700 hover:bg-gray-100"
      >
        <Image src="/discord.svg" alt="Discord community" width={20} height={20} className="w-5 h-5 mr-2" />
        Discord community
        <Image src="/export.svg" alt="marketplace" width={15} height={15} className="w-3 h-4 ml-2 mr-2" />
      </a>
    </nav>
  );
};

export default SidebarNav;
