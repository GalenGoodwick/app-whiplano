import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const ForgotPasswordResetLink = ({ setStep, setEmail }: { setStep: (step: number) => void, setEmail: (email: string) => void }) => {

  const [email, setLocalEmail] = useState("");

  const handleSendLink = () => {
    if (!email) return;
    setEmail(email); // Store email in parent state
    setStep(2); // Move to next step
  };

  return (
    <>
      {/* Back Button */}
      <Button variant="outline" className="w-fit mb-4">
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
          value={email}
          onChange={(e) => setLocalEmail(e.target.value)}
          placeholder="e.g. johndoe@gmail.com"
          className="mt-1"
        />
      </div>

      {/* Submit Button */}
      <Button className="w-full mt-4 bg-pink-200 hover:bg-pink-600 text-white" onClick={handleSendLink}>
        Send link
      </Button>
    </>
  );
};

export default ForgotPasswordResetLink;
