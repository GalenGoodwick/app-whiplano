import React from "react";
import Image from 'next/image';
import { useSelector } from "react-redux";


const ArtisianWelcomeCard: React.FC = () => {

  const user = useSelector((state: any) => state.user);
  return (
    <div className="flex items-center justify-between mt-8 p-6 bg-[#FFEDF1] rounded-xl shadow-md w-full lg:h-[180px] mx-auto">
     
      <div>
        <h2 className="text-2xl text-black">Good Morning {user.firstName}</h2>
        <p className="text-[#787878] mt-2 text-[13px]">
        Here’s the overall activity on your account as regards your projects and earnings.
        </p>
     
      </div>

      
      <div className="flex-shrink-0">
        <Image src="/chilli.png" width={300} height={300} alt="Chili Pepper" className="w-60 h-60" />
      </div>
    </div>
  );
};

export default ArtisianWelcomeCard;
