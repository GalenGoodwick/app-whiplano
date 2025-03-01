"use client";

import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const OnboardingHeader = () => {
  return (
    <header className="flex items-center justify-between py-4 px-6 border-b bg-white">
      {/* Left Side - Logo & Branding */}
      <div className="flex items-center">
        <Image src="/WhiplanoLogo.png" alt="Whiplano Logo" width={30} height={30} />
        <h1 className="ml-2 text-lg font-semibold text-gray-900">Whiplano</h1>
      </div>

      {/* Right Side - User Profile Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center space-x-2">
            <Image src="/avator.png" alt="User Avatar" width={30} height={30} />
            <span className="text-sm text-gray-700">Welcome, ade.g@gmail.com</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48 bg-white shadow-md rounded-md p-2">
          <p className="text-sm text-gray-600 px-2">ade.g@gmail.com</p>
          <hr className="my-2 border-gray-200" />
          <Button variant="ghost" className="w-full text-left text-sm">Sign Out</Button>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default OnboardingHeader;
