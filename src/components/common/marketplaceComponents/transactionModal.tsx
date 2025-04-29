
interface TransactionModalProps {
  isOpen: boolean;
  closeModal: () => void;
  orderAmount: number;
  productName: string;
}

const TransactionModal = ({
  isOpen,
  closeModal,
  orderAmount,
  productName
}: TransactionModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50 ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-w-lg relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          X
        </button>

        <div className="flex flex-col items-center">
          <div className="bg-green-500 text-white rounded-full p-3 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h2 className="text-xl font-semibold mb-2 text-center">
            Your Transaction is being processed!
          </h2>
          <p className="text-sm text-gray-600 mb-4 text-center">
            Your order for <span className="font-semibold">
              ${orderAmount}
            </span>{" "}
            of <span className="font-semibold">{productName}</span> is on its
            way! Transactions can take up to a couple of minutes, but the wait
            will be worth it. Get ready to celebrate!
          </p>

          <div className="flex flex-col w-full  space-y-2 font-semibold text-sm">
            <button
              onClick={closeModal}
              className="w-full bg-pink-100 text-pink-500 border border-pink-300 py-2 rounded-md "
            >
              Check my portfolio
            </button>
            <button
              onClick={closeModal}
              className="w-full bg-gray-100 text-black-100 border border-gray-300 py-2 rounded-md "
            >
              Make another transaction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;
