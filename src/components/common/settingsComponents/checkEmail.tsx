import React, { useState, useEffect } from "react";

interface CheckEmailProps {
  submittedEmail: string;
  onChangeEmail: () => void;
  onContinue: () => void;
}

const CheckEmail: React.FC<CheckEmailProps> = ({
  submittedEmail,
  onContinue 

}) => {
  const [resendTimer, setResendTimer] = useState(7); 

  useEffect(
    () => {
      if (resendTimer > 0) {
        const timer = setInterval(() => {
          setResendTimer(prev => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
      }
    },
    [resendTimer]
  );

  return (
    <div className="max-w-md mx-auto mt-6 p-2">
      <h2 className="text-lg font-semibold">Check your email</h2>
      <p className="text-gray-600 mt-2">
        Thanks! If <span className="font-semibold">{submittedEmail}</span>{" "}
        matches an email address we have on file, we’ve sent you an email with
        further instructions for resetting your password. Check your spam folder
        if you don’t see it.
      </p>
      <p className="mt-2">
        Didn’t get the link?{" "}
        {resendTimer > 0
          ? <span className="text-blue-600">
              Resend link in {Math.floor(resendTimer / 60)}:{String(resendTimer % 60).padStart(2, "0")}
            </span>
          : <button className="text-blue-600 underline">Resend link</button>}
      </p>
      <input
        
        placeholder="Enter Code"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
     
      <button
        className="mt-4 w-full py-2 border rounded text-gray-800 hover:bg-gray-200 transition"
        onClick={onContinue}
      >
        Continue
      </button>
    </div>
  );
};

export default CheckEmail;
