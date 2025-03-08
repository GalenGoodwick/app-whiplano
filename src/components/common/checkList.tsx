import React from "react";
import ChecklistItem from "./checklistItem";

const Checklist: React.FC = () => {
  const leftItems = [
    { label: "Complete profile", completed: false },
    { label: "Complete KYC", completed: false },
    { label: "Connect your paypal", completed: false }
  ];

  const rightItems = [
    { label: "Buy your first TRS", completed: false },
    { label: "Sell your first TRS", completed: false }
  ];

  return (
    <div className="flex justify-between space-x-8 p-6 border rounded-lg shadow-md bg-white">
      <div className="space-y-4">
        {leftItems.map((item, index) =>
          <ChecklistItem
            key={index}
            label={item.label}
            completed={item.completed}
          />
        )}
      </div>

      <div className="border-l pl-8 space-y-4">
        {rightItems.map((item, index) =>
          <ChecklistItem
            key={index}
            label={item.label}
            completed={item.completed}
          />
        )}
      </div>
    </div>
  );
};

export default Checklist;
