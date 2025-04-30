"use client";

import Image from 'next/image';
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react"; // Import ArrowLeft icon
import { XCircle } from "lucide-react"; // Import CircleX icon
import { useRightSidebar } from "@/context/RightSidebarContext";
import TransactionSuccessModal from "./TransactionSuccessModal";

interface PreviewTrsProps {
  trsData: {
    trsImage: string | null;
    trsTitle: string;
    trsDescription: string;
    trsPrice: string;
    trsAmount: number;
    trsCategory: string;
    trsContent: File | null;
  };
  onBack: () => void; // Function to go back to the CreateTrs form
}

const PreviewTrs: React.FC<PreviewTrsProps> = ({ trsData, onBack }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

    const { closeSidebar } = useRightSidebar();
  

  const {
    trsImage,
    trsTitle,
    trsDescription,
    trsPrice,
    trsAmount,
    trsCategory,
    trsContent
  } = trsData;

  const contentFileName = trsContent ? trsContent.name : "No content uploaded";

  // Handle modal open
  const handleSubmitClick = () => {
    setIsModalOpen(true); // Open the modal when the button is clicked
  }; // Close the sidebar when the button is clicked};

  // Handle modal close
  // const handleCloseModal = () => {
  //   setIsModalOpen(false); 
  // };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg">
      {/* Header with Back Button */}
      <div className="flex items-center justify-between border-b pb-4 mb-4">
        <div className="flex items-center gap-2">
          <button onClick={onBack}>
            <ArrowLeft size={20} strokeWidth={2} className="text-gray-600" />
          </button>
          <h2 className="text-xl font-semibold">Preview</h2>
        </div>
        <XCircle size={20} color="#595959" strokeWidth={2} onClick={closeSidebar} />
      </div>

      {/* TRS Image and Title */}
      <div className="mb-4 flex items-center space-x-4">
        {trsImage && (
          <Image
            src={trsImage}
            alt="TRS Image"
            className="w-20 h-20 object-cover rounded-md"
          />
        )}
        <div>
          <h3 className="text-lg font-semibold">{trsTitle}</h3>
        </div>
      </div>

      {/* Price, Amount, Category, Content */}
      <div className="flex flex-row items-center justify-between space-x-10 border-t border-gray-200 py-4">
        <p className="text-sm">Price / Unit</p>
        <p className="font-semibold">{trsPrice}</p>
      </div>

      <div className="flex flex-row items-center justify-between space-x-10 border-t border-gray-200 py-4">
        <p className="text-sm">Unit Amount</p>
        <p className="font-semibold">{trsAmount}</p>
      </div>

      <div className="flex flex-row items-center justify-between space-x-10 border-t border-gray-200 py-4">
        <p className="text-sm">Category</p>
        <p className="font-semibold">{trsCategory}</p>
      </div>

      <div className="flex flex-row items-center justify-between space-x-10 border-t border-gray-200 py-4">
        <p className="text-sm">Content</p>
        <p className="text-sm">{contentFileName}</p>
      </div>

      {/* Description */}
      <div className="mb-4 border-t border-gray-200 py-4">
        <p className="text-sm">Description</p>
        <p className="text-xs font-extralight mt-2">{trsDescription}</p>
      </div>

      {/* Footer */}
      <div className="mt-6">
        <p className="text-xs text-gray-500 mb-4">
          By submitting this TRS, you agree to the{" "}
          <a href="#" className="text-blue-500">
            TRS Contract by Whiplano
          </a>
        </p>

        <button
          className="w-full px-4 py-2 bg-gradient-to-r from-[#FE4773] to-[#6E114C] text-white rounded-md"
          onClick={handleSubmitClick}
        >
          Submit TRS
        </button>
      </div>

      {/* Transaction Modal */}
      {isModalOpen && (
        <TransactionSuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} 
        trsTitle={trsTitle} 
      />
      )}
    </div>
  );
};

export default PreviewTrs;
