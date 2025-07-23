"use client";

import React from "react";

interface TransactionSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  trsTitle: string;
  closeSidebar?: () => void; // optional
}

const TransactionSuccessModal: React.FC<TransactionSuccessModalProps> = ({
  isOpen,
  onClose,
  trsTitle,
  closeSidebar,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M5 12l3-3 4 4L19 7" />
            </svg>
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-4 text-center">TRS creation submitted</h2>
        <p className="text-center text-gray-500 mb-4">
          Your TRS of <strong>{trsTitle}</strong> is successfully submitted and currently under review. We’ll keep you updated on the TRS creation on your dashboard soon.
        </p>
        <p className="text-center text-gray-500 mb-6">Don’t go anywhere.</p>

        <div className="flex flex-col space-y-4">
          <button
            onClick={() => {
              onClose();
              closeSidebar?.(); // ✅ safely close sidebar too
            }}
            className="w-full px-4 py-2 bg-pink-100 border border-pink-500 text-pink-500 rounded-md"
          >
            Done
          </button>
          <button className="w-full px-4 py-2 bg-white text-black rounded-md border border-black">
            Track TRS
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionSuccessModal;
