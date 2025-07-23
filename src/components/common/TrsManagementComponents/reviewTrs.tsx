/* eslint-disable */

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, XCircle } from 'lucide-react';
import { useRightSidebar } from '@/context/RightSidebarContext';
import { approveTrsRequest } from '@/api-handlers/services/trs.service';
import TrsApprovedModal from './trsApprovedModal';
interface ReviewTrsSidebarProps {
  trsData: {
    id: number;
    title: string;
    description: string;
    creator_email: string;
    status: string;
    created_at: string;
    unit_amount?: number;
    price?: string;
    category?: string;
    model_name?: string;
    image_url?: string;
    content_file_name?: string;
  };
  onAccept: (id: number) => void;
}

const ReviewTrsSidebar: React.FC<ReviewTrsSidebarProps> = ({ trsData, onAccept }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { closeSidebar } = useRightSidebar();

  const handleApprove = async () => {
    setIsSubmitting(true);
    try {
      await approveTrsRequest(trsData.id);
      onAccept(trsData.id);
      setIsModalOpen(true); 
    } catch (error) {
      console.error('Approval failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModalAndSidebar = () => {
    setIsModalOpen(false);
    closeSidebar();
  };

  return (
    <>
      <div className="max-w-lg mx-auto bg-white rounded-lg p-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-4 mb-4">
          <div className="flex items-center gap-2">
            <button onClick={closeSidebar}>
              <ArrowLeft size={20} strokeWidth={2} className="text-gray-600" />
            </button>
            <h2 className="text-xl font-semibold">TRS Review</h2>
          </div>
          <XCircle size={20} color="#595959" strokeWidth={2} onClick={closeSidebar} />
        </div>

        {/* Image */}
        {trsData.image_url && (
          <div className="flex justify-center mb-4">
            <Image
              src={trsData.image_url}
              alt="TRS Image"
              width={80}
              height={80}
              className="rounded-md object-cover"
            />
          </div>
        )}

        {/* Title */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-center">{trsData.title}</h3>
        </div>

        {/* Meta Info */}
        <div className="mt-6 text-sm space-y-8 border-t pt-2">
          {trsData.price && (
            <div className="flex justify-between">
              <span className="text-gray-500">Price / Unit</span>
              <span className='font-semibold'>{trsData.price}</span>
            </div>
          )}
          <div className="flex justify-between border-b mt-4  pb-2">
            <span className="text-gray-500">Listed Date</span>
            <span className='font-semibold'>{new Date(trsData.created_at).toLocaleDateString()}</span>
          </div>
          {trsData.unit_amount && (
            <div className="flex justify-between border-b mt-4  pb-2">
              <span className="text-gray-500">Unit Amount</span>
              <span className='font-semibold'>{trsData.unit_amount}</span>
            </div>
          )}
          {trsData.model_name && (
            <div className="flex justify-between border-b mt-4  pb-2">
              <span className="text-gray-500">Category</span>
              <span className='font-semibold'>{trsData.model_name}</span>
            </div>
          )}
          {trsData.creator_email && (
            <div className="flex justify-between border-b mt-4  pb-2">
              <span className="text-gray-500">Listed By</span>
              <span className='font-semibold'>{trsData.creator_email}</span>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="mt-8">
          <h4 className="text-sm text-gray-500 mb-1">Description</h4>
          <p className="text-sm text-gray-700">{trsData.description}</p>
        </div>

        {/* CTA */}
        <div className="mt-4 space-y-8">
          <div className="flex-grow" />
          <button
            className="w-full mt-4 bg-green-100 hover:bg-green-200 font-semibold border border-green-500 text-green-500 py-2 rounded-md"
            onClick={handleApprove}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Approving...' : 'Approve TRS'}
          </button>
        </div>
      </div>

      {/* ✅ Modal */}
      <TrsApprovedModal
        isOpen={isModalOpen}
        onClose={handleCloseModalAndSidebar}
        title={trsData.title}
      />
    </>
  );
};

export default ReviewTrsSidebar;
