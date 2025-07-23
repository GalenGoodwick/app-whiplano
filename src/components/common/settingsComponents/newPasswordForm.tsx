import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface NewPasswordFormProps {
  onFinish: () => void;
}

const passwordRequirements = [
  { label: "Use 8 or more characters", test: (pw: string) => pw.length >= 8 },
  {
    label: "One special character (e.g: #!)",
    test: (pw: string) => /[!@#$%^&*(),.?":{}|<>]/.test(pw)
  },
  { label: "One Lowercase character", test: (pw: string) => /[a-z]/.test(pw) },
  { label: "One Uppercase character", test: (pw: string) => /[A-Z]/.test(pw) },
  { label: "One Number", test: (pw: string) => /\d/.test(pw) }
];

const NewPasswordForm: React.FC<NewPasswordFormProps> = ({ onFinish }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const isValid = passwordRequirements.every(req => req.test(newPassword));
  const passwordsMatch =
    newPassword === confirmPassword && confirmPassword !== "";

  const handleContinue = () => {
    setShowSuccess(true);

    setTimeout(() => {
      onFinish();
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto relative">
      <p className="text-sm text-gray-700 mb-2">Create a new password</p>

      {/* New Password Field */}
      <label className="block font-medium text-sm text-gray-700 mb-1">
        New Password
      </label>
      <div className="relative">
        <input
          type={showNewPassword ? "text" : "password"}
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
          placeholder="Enter the password"
          className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
        />
        <div
          className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
          onClick={() => setShowNewPassword(!showNewPassword)}
        >
          {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </div>
      </div>

      <ul className="text-[0.65rem] text-gray-500 mt-3 grid grid-cols-2 gap-x-4 gap-y-1 list-disc pl-4">
        {passwordRequirements.map((req, idx) =>
          <li
            key={idx}
            className={
              req.test(newPassword) ? "text-gray-700" : "text-gray-400"
            }
          >
            {req.label}
          </li>
        )}
      </ul>

      {/* Confirm Password Field */}
      <label className="block font-medium mt-5 text-sm text-gray-700 mb-1">
        Confirm Password
      </label>
      <div className="relative">
        <input
          type={showConfirmPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          placeholder="Enter the password"
          className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
        />
        <div
          className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </div>
      </div>

      {/* Continue Button */}
      <button
        className={`mt-6 w-full py-2 rounded-md font-medium ${isValid &&
        passwordsMatch
          ? "bg-pink-500 text-white hover:bg-pink-600"
          : "bg-pink-100 text-pink-300 cursor-not-allowed"}`}
        disabled={!isValid || !passwordsMatch}
        onClick={handleContinue}
      >
        Continue
      </button>

      {/* Success Popup */}
      {showSuccess &&
        <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-4 w-[90%] max-w-md bg-green-100 border border-green-300 text-green-700 px-6 py-3 rounded-md shadow-md text-sm text-center">
          Password changed successfully!
        </div>}
    </div>
  );
};

export default NewPasswordForm;
