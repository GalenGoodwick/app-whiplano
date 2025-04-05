import React, { useState } from "react";

interface NewEmailFormProps {
  onFinish: () => void;
}

export default function NewEmailForm({ onFinish }: NewEmailFormProps) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [email, setEmail] = useState("");

  const handleContinue = () => {
    if (!email.trim()) return;

    setShowSuccess(true);
    setTimeout(() => {
      onFinish(); // Tell parent to reset
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-2 relative">
      <p className="text-sm text-gray-700">Create a new email</p>
      <label className="block mt-4 text-sm font-medium text-gray-700">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="e.g. johndoe@gmail.com"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
      <button
        onClick={handleContinue}
        className="mt-4 bg-pink-200 hover:bg-pink-600 text-white w-full py-2 rounded transition"
      >
        Continue
      </button>

      {showSuccess && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-4 w-[90%] max-w-md bg-green-100 border border-green-300 text-green-700 px-6 py-3 rounded-md shadow-md text-sm text-center">
          Email changed successfully!
        </div>
      )}
    </div>
  );
}
