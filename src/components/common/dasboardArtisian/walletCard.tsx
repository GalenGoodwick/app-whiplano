import { FaSyncAlt } from 'react-icons/fa'; // Importing the refresh icon

// TypeScript interface to define the props for the component
interface WalletCardProps {
  portfolioValue: number;
  percentageChange: number;
  changeToday: number;
}

const WalletCard: React.FC<WalletCardProps> = ({ portfolioValue, percentageChange, changeToday }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-medium text-gray-900">Wallet</h2>
        <FaSyncAlt className="text-gray-500 cursor-pointer hover:text-gray-700" />
      </div>

      <div className='bg-[#F5F6FA] p-6 rounded-2xl shadow-md w-full max-w-md border-2 border-gray-200'>
      <div className="mt-4 space-y-2">
        <p className="text-sm text-gray-500">Portfolio value</p>
        <p className="text-3xl font-bold text-gray-900">${portfolioValue.toLocaleString()}</p>
      </div>

      {/* Change Info */}
      <div className="flex items-center mt-2">
        <span className={`text-lg ${percentageChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {percentageChange >= 0 ? '+' : ''}{percentageChange}%
        </span>
        <span className="ml-2 text-gray-500">+${changeToday.toLocaleString()} today</span>
      </div>
      </div>
    </div>
  );
};

export default WalletCard;
