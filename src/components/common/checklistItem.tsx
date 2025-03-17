import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

interface ChecklistItemProps {
  label: string;
  completed: boolean;
  onToggle: () => void;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ label, completed, onToggle }) => {
  return (
    <div className="flex items-center space-x-4">
      {/* Round Checkbox */}
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
        className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:bg-blue-500 checked:border-blue-500 focus:outline-none cursor-pointer"
      />
      <span className={`${completed ? "text-gray-400 line-through" : ""}`}>
        {label}
      </span>
      <CheckCircle className={`w-5 h-5 ${completed ? "text-green-500" : "text-red-500"}`} />
    </div>
  );
};

export default ChecklistItem;