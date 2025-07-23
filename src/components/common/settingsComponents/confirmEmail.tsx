/* eslint-disable */

"use client";

import React, { useState } from "react";
import authService from "@/api-handlers/services/auth.service";
import { useToast } from "@/hooks/use-toast";

interface ConfirmEmailProps {
  onEmailSubmit: (email: string) => void;
}

const ConfirmEmail: React.FC<ConfirmEmailProps> = ({ onEmailSubmit }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSendLink = async () => {
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      await authService.forgotPassword(email);
      onEmailSubmit(email);

      toast({
        title: "Reset Link Sent",
        description: "Please check your email for the password reset link",
        variant: "default",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error?.response?.data?.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-4 border border-gray-200 rounded-md shadow">
      <p className="text-gray-600 text-sm mb-4">
        Please provide the email you used in signing up to reset your password.
      </p>

      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
      <input
        type="email"
        placeholder="e.g johndoe@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
      />

      <button
        className={`mt-4 w-full py-2 rounded text-white transition ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-pink-500 hover:bg-pink-600"
        }`}
        onClick={handleSendLink}
        disabled={loading}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin inline mr-2 h-4 w-4 text-white"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            Sending...
          </>
        ) : (
          "Send Reset Link"
        )}
      </button>
    </div>
  );
};

export default ConfirmEmail;
