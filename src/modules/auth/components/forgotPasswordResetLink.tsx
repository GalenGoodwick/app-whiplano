import authService from "@/api-handlers/services/auth.service";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";


const ForgotPasswordResetLink = ({ setStep, setEmail }: { 
  setStep: (step: number) => void, 
  setEmail: (email: string) => void 
}) => {
  const [localEmail, setLocalEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendLink = async () => {
    // Validate email
    if (!localEmail) {
      toast({
        title: "Email Required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(localEmail)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Call the forgot password API
      await authService.forgotPassword(localEmail);
      
      // Set email in parent component for next step
      setEmail(localEmail);
      
      // Show success toast
      toast({
        title: "Reset Link Sent",
        description: "Please check your email for the password reset link",
        variant: "default",
      });
      
      // Move to next step
      setStep(2);
    } catch (error: any) {
      // Show error toast
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to send reset link. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Back Button */}
      <Button 
        variant="outline" 
        className="w-fit mb-4"
        onClick={() => setStep(0)} // Go back to login
        disabled={isLoading}
      >
        Back
      </Button>

      {/* Form Heading */}
      <h1 className="text-3xl font-semibold font-serif">Reset password</h1>
      <p className="text-gray-500 text-sm mt-2">
        Please provide the email you used in signing up to reset your password.
      </p>

      {/* Email Input */}
      <div className="mt-4">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email
        </label>
        <Input
          id="email"
          type="email"
          value={localEmail}
          onChange={(e) => setLocalEmail(e.target.value)}
          placeholder="e.g. johndoe@gmail.com"
          className="mt-1"
          disabled={isLoading}
        />
      </div>

      {/* Submit Button */}
      <Button 
        className="w-full mt-4 bg-pink-500 hover:bg-pink-600 text-white" 
        onClick={handleSendLink}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          "Send link"
        )}
      </Button>
    </>
  );
};

export default ForgotPasswordResetLink;