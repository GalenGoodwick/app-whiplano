import { useState } from "react";
import TransactionModal from "./transactionModal";
import Image from 'next/image';

const BuySellWidget = () => {
  const [activeTab, setActiveTab] = useState("buy");
  const [price, setPrice] = useState(0);
  const [assetPrice] = useState(122);
  const [unitAmount] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleTabClick = (tab: "buy" | "sell") => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-white p-6 rounded-2xl mt-4 shadow-md border-2 border-gray-200  ">
      <div className="flex justify-between mb-4">
        <button
          onClick={() => handleTabClick("buy")}
          className={`${activeTab === "buy"
            ? "bg-pink-200 text-pink-500"
            : "bg-white text-gray-500"} w-1/2 py-2 rounded-sm border border-gray-300 border-300 font-semibold`}
        >
          Buy
        </button>
        <button
          onClick={() => handleTabClick("sell")}
          className={`${activeTab === "sell"
            ? "bg-pink-200 text-pink-500"
            : "bg-white text-gray-500"} w-1/2 py-2 rounded-sm border border-gray-300 font-semibold`}
        >
          Sell
        </button>
      </div>

      <div className="flex mb-4 ">
        <button className="w-1/2  bg-gray-100 border border-gray-100  text-gray-700 font-extralight rounded-lg">
          Market order
        </button>
        <button className="w-1/2  bg-gray-100 border border-gray-100  text-gray-700 font-extralight rounded-lg">
          Limit order
        </button>
      </div>

      <div className="flex items-center mb-4 justify-center space-x-2">
        <span className="text-6xl text-gray-700 font-semibold">$</span>
        <input
          type="text"
          value={price.toFixed(2)}
          onChange={e => setPrice(parseFloat(e.target.value))}
          className="text-6xl  text-gray-700 border-b border-gray-300 focus:outline-none w-[8rem] text-center"
        />
      </div>

      <div className="mb-4">
        <div className="flex justify-between">
          <p className="text-sm text-gray-500">Asset price:</p>
          <p className="text-sm font-semibold">{`$${assetPrice} ~ ${unitAmount} unit`}</p>
        </div>
        <div className="flex justify-between mt-1">
          <p className="text-sm text-gray-500">I will get:</p>
          <p className="text-sm font-semibold">
            {price * unitAmount}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6 border-t bg-slate-100 p-1 rounded-sm">
        <p className="text-sm text-gray-500">Pay With:</p>

        <button className="flex items-center  text-black py-2 px-4 rounded-lg">
          <Image src="/paypal-logo.svg" width={20} height={20} alt="PayPal" className="w-6 h-6 mr-2" />
          <span>Paypal</span>
        </button>
      </div>

      <button
        className="w-full bg-pink-500 text-white py-2 rounded-lg font-light"
        onClick={openModal}
      >
        Connect your paypal
      </button>

      <TransactionModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        orderAmount={price}
        productName="Bitcoin"
      />
    </div>
  );
};

export default BuySellWidget;
