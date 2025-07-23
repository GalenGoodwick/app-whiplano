/* eslint-disable */

import React from "react";
import Image from 'next/image';
import { useSelector } from "react-redux"; 


const WelcomeCard: React.FC = () => {

  const user = useSelector((state: any) => state.user);


  return (
    <div className="flex flex-col lg:flex-row items-center justify-Dashboardbetween mt-8 p-6 bg-[#FFEDF1] rounded-xl shadow-md w-full lg:h-[180px] mx-auto text-center lg:text-left">
      {/* Left Content */}
      <div>
        <h2 className="text-2xl text-black">Yay, you made it {user.firstName}</h2>
        <p className="text-[#787878] mt-2 text-[13px]">
          Welcome to WHIPLANO Adisko, where you can trade, buy, and sell the IP right of products and can also be an artisan to activate rights to a TRS.
        </p>
        <button className="mt-4 px-6 py-2 bg-[#FE4773] text-white rounded-lg hover:bg-pink-500 transition-all">
          Start trading
        </button>
      </div>

      
      <div className="flex-shrink-0">
        <Image src="/chilli.png" alt="Chilli Pepper" width={300} height={300}  className="w-60 h-60" />
      </div>
    </div>
  );
};

export default WelcomeCard;
