import React from "react";

const CreatorCard = () => {
  return (
    <div className="p-3 border-t relative">
      {/* Banner Image */}
      <img src="/creator.png" alt="Banner" className="w-full rounded-t-lg" />

      {/* Close Button */}
      <button className="absolute top-4 right-6 w-6 h-6 bg-white rounded-full text-[#386B98] hover:text-gray-500 z-10">
        ✕
      </button>

      <div className="bg-gray-100 p-4 rounded-lg relative">
        <h2 className="font-semibold">
          Become a Creator today and start earning
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Join other Artisans to become a creator and sell your rights to
          multiple people.
        </p>

        {/* Button with Crown SVG */}
        <button className="mt-3 w-full bg-gradient-to-r from-[#FE4773] to-[#6E114C] text-white py-2 rounded-lg flex items-center justify-center gap-2">
          <img src="/crown.svg" alt="crown" className="w-5 h-5" />
          Become a Creator
        </button>
      </div>
    </div>
  );
};

export default CreatorCard;
