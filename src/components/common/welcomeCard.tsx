import React from "react";

const WelcomeCard: React.FC = () => {
  return (
    <div className="flex items-center justify-between mt-8 p-6 bg-gradient-to-r from-[#FFEDF1] to-[#F5F6FA] rounded-xl shadow-md w-full lg:h-[180px] lg:w-[805px] mx-auto">
      {/* Left Content */}
      <div>
        <h2 className="text-2xl  text-black">Yay, you made it Adisko!</h2>
        <p className="text-[#787878] mt-2  text-[13px]">
          Welcome to WHIPLANO Adisko, where you can trade, buy, and sell the IP right of products and can also be an artisan to activate rights to a TRS
        </p>
        <button className="mt-4 px-6 py-2 bg-[#FE4773] text-white  rounded-lg hover:bg-pink-500 transition-all">
          Start trading
        </button>
      </div>

      {/* Right Image */}
      <div className="flex-shrink-0">
        <img src="/chilli.png" alt="Chili Pepper" className="w-60 h-60" />
      </div>
    </div>
  );
};

export default WelcomeCard;
