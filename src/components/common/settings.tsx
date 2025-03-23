import React, { useState } from "react";
import { CircleX, KeyRound, ChevronRight, AtSign } from "lucide-react";
import { useRightSidebar } from "@/context/RightSidebarContext";

export default function ProfileSettings() {
  const { closeSidebar } = useRightSidebar();
  const [heading, setHeading] = useState("Settings");
  const [showChangeOptions, setShowChangeOptions]= useState(true);
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);

  const handleChangePasswordClick = () => {
    setHeading("Change Password");
    setIsPasswordChanged(true);
    setShowChangeOptions(false);
  };

  const handleChangeEmailClick = () => {
    setHeading("Change Email");
    setShowChangeOptions(false);
    setIsPasswordChanged(false);
  };

  const handleSendLink=()=>{
    
  }

  return (
    <div className="bg-white w-full max-w-[500px] md:max-w-[600px]">
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <h2 className="text-xl font-semibold">
          {heading}
        </h2>
        <CircleX
          size={20}
          color="#595959"
          strokeWidth={2}
          onClick={closeSidebar}
        />
      </div>
      

      {showChangeOptions ? (
        <>
          <div
            className="bg-[#F5F6FA] flex justify-between items-center w-full p-2 rounded-xl cursor-pointer hover:bg-[#e6e9f2] transition duration-300 ease-in-out"
            onClick={handleChangePasswordClick}
          >
            <div className="flex items-center gap-2 p-2">
              <KeyRound size={20} color="#595959" strokeWidth={2} />
              <p>Change Password</p>
            </div>

            <div className="flex items-center">
              <ChevronRight size={20} color="#595959" strokeWidth={2} />
            </div>
          </div>
          <div
            className="bg-[#F5F6FA] flex justify-between items-center w-full p-2 rounded-xl mt-2 cursor-pointer hover:bg-[#e6e9f2] transition duration-300 ease-in-out"
            onClick={handleChangeEmailClick}
          >
            <div className="flex items-center gap-2 p-2">
              <AtSign size={20} color="#595959" strokeWidth={2} />
              <p>Change Email</p>
            </div>

            <div className="flex items-center">
              <ChevronRight size={20} color="#595959" strokeWidth={2} />
            </div>
          </div>
        </>
      ) : (
        <div className="mt-4 text-left">
          {isPasswordChanged ? (
            <div className="max-w-md mx-auto mt-6 p-2">
            <p className="text-gray-600">
              Please provide the email you used in signing up to reset your password
            </p>
            <label className="block mt-4 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="e.g johndoe@gmail.com"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <button className="mt-4 bg-pink-200 hover:bg-pink-600 text-white w-full py-2 rounded">Send link</button>
          </div>
          
          ) : (
            <p>change email</p> 
          )}
        </div>
      )}
    </div>
  );
}