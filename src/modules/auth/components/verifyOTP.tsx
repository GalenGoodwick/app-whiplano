import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  const correctOTP = "666666"; // Example correct OTP

  const handleChange = (value:string) => {
    setOtp(value);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="text-2xl font-semibold">Verify Email</h1>
      <p className="text-gray-500 text-sm mt-2">
        Please provide the 6-digit OTP sent to <span className="font-semibold">johndoe@gmail.com</span>
      </p>

      {/* OTP Inputs */}
      <div className="flex  gap-4 mt-4"> {/* Increased gap for better spacing */}
        <InputOTP maxLength={6} value={otp} onChange={handleChange}>
          <InputOTPGroup>
            {[...Array(6)].map((_, i) => (
              <InputOTPSlot key={i} index={i} className={`w-12 h-12 text-xl px-2 text-center border rounded-lg ${otp === correctOTP ? "border-green-500" : "border-gray-300"}`} />
            ))}
          </InputOTPGroup>
        </InputOTP>
      </div>

      {/* Resend OTP */}
      <div className="flex  gap-1 mt-3">
        <p className="text-gray-500 text-sm">Didn’t get the code?</p>
        <button className="text-pink-600 text-sm font-medium">Resend code</button>
      </div>

      {/* Verify Button */}
      <Button className="w-full mt-4 bg-pink-600 hover:bg-pink-700 text-white" disabled={otp.length !== 6 || otp !== correctOTP}>
        Verify
      </Button>
    </div>
  );
};

export default OTPVerification;
