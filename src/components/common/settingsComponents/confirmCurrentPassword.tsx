import React, { useState } from "react";

interface ConfirmCurrentPasswordProps {
  onConfirm: (password: string) => void;
}

const ConfirmCurrentPassword: React.FC<ConfirmCurrentPasswordProps> = ({ onConfirm }) => {
  const [password, setPassword] = useState("");

  const handleClick = () => {
    if (password.trim() !== "") {
      onConfirm(password);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-2">
      <p className="text-sm text-gray-700">
        Please provide the password to your account to reset your email
      </p>
      <label className="block mt-4 text-sm font-medium text-gray-700">Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
      <button
        onClick={handleClick}
        className="mt-4 bg-pink-200 hover:bg-pink-600 text-white w-full py-2 rounded transition"
      >
        Change Password
      </button>
    </div>
  );
};

export default ConfirmCurrentPassword;
