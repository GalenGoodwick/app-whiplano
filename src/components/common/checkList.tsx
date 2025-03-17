import React, { useState } from "react";
import ChecklistItem from "./checklistItem";

const Checklist: React.FC = () => {
  const [leftItems, setLeftItems] = useState([
    { label: "Complete profile", completed: false },
    { label: "Complete KYC", completed: false },
    { label: "Connect your PayPal", completed: false }
  ]);

  const [rightItems, setRightItems] = useState([
    { label: "Buy your first TRS", completed: false },
    { label: "Sell your first TRS", completed: false }
  ]);

  const toggleLeftItem = (index: number) => {
    setLeftItems((prev) => prev.map((item, i) => i === index ? { ...item, completed: !item.completed } : item));
  };

  const toggleRightItem = (index: number) => {
    setRightItems((prev) => prev.map((item, i) => i === index ? { ...item, completed: !item.completed } : item));
  };

  return (
    <div className="flex justify-between space-x-8 p-6 border rounded-lg shadow-md bg-white">
      <div className="space-y-4">
        {leftItems.map((item, index) => (
          <ChecklistItem
            key={index}
            label={item.label}
            completed={item.completed}
            onToggle={() => toggleLeftItem(index)}
          />
        ))}
      </div>

      <div className="border-l pl-8 space-y-4">
        {rightItems.map((item, index) => (
          <ChecklistItem
            key={index}
            label={item.label}
            completed={item.completed}
            onToggle={() => toggleRightItem(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Checklist;
