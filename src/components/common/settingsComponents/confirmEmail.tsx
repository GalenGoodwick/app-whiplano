import React, { useState } from "react";
import authService from "@/api-handlers/services/auth.service";

interface ConfirmEmailProps {
  onEmailSubmit: (email: string) => void;
}

const ConfirmEmail: React.FC<ConfirmEmailProps> = ({ onEmailSubmit }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSendLink = async () => {
    if (!email) return;

    setLoading(true);
    setMessage("");
    try {
      await authService.forgotPassword(email);
      setMessage("Reset link sent. Please check your email.");
      onEmailSubmit(email); // Send email to parent
    } catch (error: any) {
      setMessage(error?.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-2">
      <p className="text-gray-600">
        Please provide the email you used in signing up to reset your password.
      </p>

      <label className="block mt-4 text-sm font-medium text-gray-700">Email</label>
      <input
        type="email"
        placeholder="e.g johndoe@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />

      <button
        className={`mt-4 w-full py-2 rounded text-white ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-pink-200 hover:bg-pink-600"
        }`}
        onClick={handleSendLink}
        disabled={!email || loading}
      >
        {loading ? "Sending..." : "Send link"}
      </button>

      {message && <p className="mt-2 text-sm text-center text-blue-600">{message}</p>}
    </div>
  );
};

export default ConfirmEmail;
