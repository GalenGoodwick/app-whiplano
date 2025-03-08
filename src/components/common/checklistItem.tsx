import React from "react";
import { CheckCircle } from "lucide-react";

interface ChecklistItemProps {
  label: string;
  completed: boolean;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ label, completed }) => {
  return (
    <div className="flex items-center space-x-4">
      {/* Round Checkbox */}
      <input
        type="checkbox"
        checked={completed}
        className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:bg-blue-500 checked:border-blue-500 focus:outline-none"
      />
      <span className={`${completed ? "text-gray-400 line-through" : ""}`}>
        {label}
      </span>
      <CheckCircle className="w-5 h-5 text-red-500" />
    </div>
  );
};

export default ChecklistItem;
