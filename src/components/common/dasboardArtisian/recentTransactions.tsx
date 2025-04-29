import React from "react";
import Image from "next/image";
import UpArrow from "@/components/ui/upArrow";
import Processing from "@/components/ui/processing";
import DownArrow from "@/components/ui/downArrow";
// Define the Transaction interface
interface Transaction {
  title: string;
  amount: number;
  status: "Processing" | "Sell" | "Buy"; // status can only be one of these values
  date: string;
}

const RecentTransactions: React.FC = () => {
  // Define the transactions array inside the component
  const transactions: Transaction[] = [
    {
      title: "Light on Bone",
      amount: -200,
      status: "Processing",
      date: "02 Aug, 2021"
    },
    {
      title: "James Crigg...",
      amount: -200,
      status: "Sell",
      date: "02 Aug, 2021"
    },
    { title: "On the bench", amount: 200, status: "Buy", date: "02 Aug, 2021" },
    {
      title: "Something light",
      amount: 200,
      status: "Buy",
      date: "02 Aug, 2021"
    },
    { title: "All z gut", amount: -200, status: "Sell", date: "02 Aug, 2021" }
  ];

  // Function to render the icon based on the transaction status
  const renderTransactionStatusIcon = (
    status: "Processing" | "Sell" | "Buy"
  ) => {
    switch (status) {
      case "Processing":
        return (
          <span className=" flex flex-row text-sm text-gray-500">
            {" "}<Processing /> Processing
          </span>
        ); 
      case "Sell":
        return (
          <span className="flex flex-row text-sm text-red-500">
            {" "}<DownArrow /> Sell{" "}
          </span>
        ); 
      case "Buy":
        return (
          <span className="flex flex-row text-sm text-green-500">
            <UpArrow /> Buy{" "}
          </span>
        ); 
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl mt-4 shadow-md border-2 border-gray-200 w-full ">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">
          Recent transactions
        </h2>
        <a href="#" className="text-gray-500 text-xs hover:underline">
          View all
        </a>
      </div>

      <div className="mt-4 space-y-4">
        {transactions.map((transaction, index) =>
          <div
            key={index}
            className="flex justify-between items-center border-b py-3"
          >
            <div className="flex items-center space-x-3">
              <Image
                src="/transactionBook.svg"
                alt={transaction.title}
                width={45}
                height={45}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-gray-900">
                  {transaction.title}
                </p>

                <div>
                  {renderTransactionStatusIcon(transaction.status)}
                  <p className="text-xs text-gray-500">
                    {transaction.date}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <p
                className={`font-semibold ${transaction.status === "Sell"
                  ? "text-red-500"
                  : "text-green-500"}`}
              >
                {transaction.amount < 0
                  ? `-${Math.abs(transaction.amount)}`
                  : `+${Math.abs(transaction.amount)}`}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentTransactions;
