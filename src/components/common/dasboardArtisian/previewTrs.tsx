/* eslint-disable */


import Image from "next/image";
import React, { useState } from "react";
import { ArrowLeft, XCircle } from "lucide-react";
import { useRightSidebar } from "@/context/RightSidebarContext";
import TransactionSuccessModal from "./TransactionSuccessModal";
import { submitTRS } from "@/api-handlers/services/trs.service";

interface PreviewTrsProps {
  trsData: {
    trsImage: string | null;
    trsDescription: string;
    trsTitle: string;
    modelName: string;
    trsAmount: number;
    trsContent: File | null;
  };
  onBack: () => void;
}

const PreviewTrs: React.FC<PreviewTrsProps> = ({ trsData, onBack }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // For loading state
  const { closeSidebar } = useRightSidebar();

  const { trsImage, trsTitle, trsDescription, modelName, trsAmount, trsContent } = trsData;

  const handleSubmitClick = async () => {
    setIsSubmitting(true);
    try {
      await submitTRS({
        model_name: modelName,
        title: trsTitle,
        description: trsDescription,
        number: trsAmount,
        image: trsImage ? new File([], trsImage) : null, 
        content: trsContent,
      });
      setIsModalOpen(true);
      
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Failed to submit TRS. Please check your input and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg">
      <div className="flex items-center justify-between border-b pb-4 mb-4">
        <div className="flex items-center gap-2">
          <button onClick={onBack}>
            <ArrowLeft size={20} strokeWidth={2} className="text-gray-600" />
          </button>
          <h2 className="text-xl font-semibold">Preview</h2>
        </div>
        <XCircle size={20} color="#595959" strokeWidth={2} onClick={closeSidebar} />
      </div>

      {trsImage && (
        <Image
          src={trsImage}
          alt="TRS Image"
          width={80}
          height={80}
          className="rounded-md object-cover"
        />
      )}

      <div className="mt-4">
        <h3 className="text-lg font-semibold">{trsTitle}</h3>
      </div>

      <div className="mt-6">
        <div className="flex justify-between border-t py-2">
          <span>Model Name</span>
          <span>{modelName}</span>
        </div>
        <div className="flex justify-between border-t py-2">
          <span>Unit Amount</span>
          <span>{trsAmount}</span>
        </div>
        <div className="flex justify-between border-t py-2">
          <span>Content</span>
          <span>{trsContent?.name || "No content uploaded"}</span>
        </div>
        <div className="border-t py-2">
          <span>Description</span>
          <p className="mt-2 text-sm">{trsDescription}</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-xs text-gray-500">
          By submitting this TRS, you agree to the{" "}
          <a href="#" className="text-blue-500">
            TRS Contract by Whiplano
          </a>
        </p>
        <button
          className="w-full mt-4 bg-gradient-to-r from-[#FE4773] to-[#6E114C] text-white py-2 rounded-md"
          onClick={handleSubmitClick}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit TRS"}
        </button>
      </div>

     {isModalOpen && (
  <TransactionSuccessModal
    isOpen={isModalOpen}
    onClose={() => {
      setIsModalOpen(false);
      closeSidebar(); 
    }}
    trsTitle={trsTitle}
  />
)}
    </div>
  );
};

export default PreviewTrs;
