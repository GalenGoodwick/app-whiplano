import React, { useState } from "react";

interface ConfirmEmailProps {
  handleSendLink: (email: string) => void; 
}

const ConfirmEmail: React.FC<ConfirmEmailProps> = ({ handleSendLink }) => {
  const [email, setEmail] = useState("");

  return (
    <div className="max-w-md mx-auto mt-6 p-2">
      <p className="text-gray-600">
        Please provide the email you used in signing up to reset your password.
      </p>
      <label className="block mt-4 text-sm font-medium text-gray-700">
        Email
      </label>
      <input
        type="email"
        placeholder="e.g johndoe@gmail.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
      <button
        className="mt-4 bg-pink-200 hover:bg-pink-600 text-white w-full py-2 rounded"
        onClick={() => handleSendLink(email)} // ✅ Pass email
        disabled={!email}
      >
        Send link
      </button>
    </div>
  );
};

export default ConfirmEmail;
