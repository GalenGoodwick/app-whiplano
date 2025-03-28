import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import authService from "@/api-handlers/services/auth.service";

interface ForgotPasswordResetPasswordProps {
  token?: string;
  setStep: (step: number) => void;
}

const ForgotPasswordResetPassword = ({ token, setStep }: ForgotPasswordResetPasswordProps) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [validations, setValidations] = useState({
    length: false,
    uppercase: false,
    special: false,
    number: false,
    lowercase: false,
  });
  const { toast } = useToast();
  const router = useRouter();

  // Validate password as user types
  useEffect(() => {
    setValidations({
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      number: /[0-9]/.test(password),
      lowercase: /[a-z]/.test(password),
    });
  }, [password]);

  // Check if all validations pass
  const isPasswordValid = Object.values(validations).every(Boolean);
  const doPasswordsMatch = password === confirmPassword && confirmPassword !== "";

  const handleResetPassword = async () => {
    if (!token) {
      toast({
        title: "Error",
        description: "Invalid reset token. Please request a new password reset link.",
        variant: "destructive",
      });
      return;
    }

    if (!isPasswordValid) {
      toast({
        title: "Invalid Password",
        description: "Please ensure your password meets all the requirements.",
        variant: "destructive",
      });
      return;
    }

    if (!doPasswordsMatch) {
      toast({
        title: "Passwords Don't Match",
        description: "Please make sure both passwords match.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await authService.resetPassword(token, password);
      
      toast({
        title: "Success",
        description: "Your password has been reset successfully.",
      });
      
      setStep(4);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to reset password. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Form Heading */}
      <h1 className="text-3xl font-semibold font-serif">Reset your password</h1>
      <p className="text-gray-500 text-sm mt-2">Create a new password.</p>

      {/* Password Input */}
      <div className="mt-4">
        <label htmlFor="password" className="text-sm font-medium text-gray-700">
          Password
        </label>
        <Input
          id="password"
          type="password"
          placeholder="******"
          className="mt-1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </div>

      {/* Password Requirements */}
      <div className="text-xs text-wrap mt-2">
        <div className="grid grid-cols-2 gap-x-6 mt-2 text-gray-600">
          <div className="flex items-center">
            <span className={`w-1.5 h-1.5 ${validations.length ? 'bg-green-500' : 'bg-gray-400'} rounded-full inline-block mr-2`}></span>
            Use 8 or more characters
          </div>
          <div className="flex items-center">
            <span className={`w-1.5 h-1.5 ${validations.uppercase ? 'bg-green-500' : 'bg-gray-400'} rounded-full inline-block mr-2`}></span>
            One uppercase character
          </div>
          <div className="flex items-center">
            <span className={`w-1.5 h-1.5 ${validations.special ? 'bg-green-500' : 'bg-gray-400'} rounded-full inline-block mr-2`}></span>
            One special character (e.g., <b>#</b>, <b>!</b>)
          </div>
          <div className="flex items-center">
            <span className={`w-1.5 h-1.5 ${validations.number ? 'bg-green-500' : 'bg-gray-400'} rounded-full inline-block mr-2`}></span>
            One number
          </div>
          <div className="flex items-center">
            <span className={`w-1.5 h-1.5 ${validations.lowercase ? 'bg-green-500' : 'bg-gray-400'} rounded-full inline-block mr-2`}></span>
            One lowercase character
          </div>
        </div>
      </div>

      {/* Confirm Password Input */}
      <div className="mt-4">
        <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="******"
          className={`mt-1 ${confirmPassword && !doPasswordsMatch ? 'border-red-500' : ''}`}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          disabled={isLoading}
        />
        {confirmPassword && !doPasswordsMatch && (
          <p className="text-red-500 text-xs mt-1">Passwords do not match</p>
        )}
      </div>

      {/* Submit Button */}
      <Button 
        className="w-full mt-4 bg-pink-500 hover:bg-pink-600 text-white"
        onClick={handleResetPassword}
        disabled={isLoading || !isPasswordValid || !doPasswordsMatch}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </>
        ) : (
          "Reset Password"
        )}
      </Button>
    </>
  );
};

export default ForgotPasswordResetPassword;