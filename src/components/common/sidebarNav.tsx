import React from "react";

const SidebarNav: React.FC = () => {
  return (
    <nav className="flex-1 p-4 space-y-8 ">
      <a
        href="#"
        className="flex items-center p-2 rounded-lg bg-[#FE4773] bg-opacity-10 text-pink-600 font-medium border border-[#FFC6D4]"
      >
        <img src="/dashboard.svg" alt="Home" className="w-5 h-5 mr-2" />
        Dashboard
      </a>
      <a
        href="#"
        className="flex items-center p-2 rounded-lg text-gray-700 hover:bg-gray-100"
      >
        <img src="/marketplace.svg" alt="marketplace" className="w-5 h-5 mr-2" />
        Marketplace
      </a>
      <a
        href="#"
        className="flex items-center p-2 rounded-lg text-gray-400 cursor-not-allowed"
      >
        <img src="/assets.svg" alt="My Assets" className="w-5 h-5 mr-2" />
        My Assets
      </a>

      {/* ✅ Separation Line */}
      <hr className="border-t border-gray-300" />

      <a
        href="#"
        className="flex items-center p-2 rounded-lg text-gray-700 hover:bg-gray-100"
      >
        <img src="/help.svg" alt="Need help" className="w-5 h-5 mr-2" />
        Need help
      </a>
      <a
        href="#"
        className="flex items-center p-2 rounded-lg text-gray-700 hover:bg-gray-100"
      >
        <img src="/discord.svg" alt="Discord community" className="w-5 h-5 mr-2" />
        Discord community
        <img src="/export.svg" alt="marketplace" className="w-3 h-4 ml-2 mr-2" />
      </a>
    </nav>
  );
};

export default SidebarNav;
