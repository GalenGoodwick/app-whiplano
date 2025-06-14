"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ForgotPasswordResetLink from "./forgotPasswordResetLink";
import ForgotPasswordCheckEmail from "./forgotPasswordCheckEmail";
import ForgotPasswordResetPassword from "./forgotPasswordResetPassword";
import ForgotPasswordSuccess from "./forgotPasswordSuccess";
import { useSearchParams } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

const ForgotPassword = () => {
  const [step, setStep] = useState<number | null>(null); // Start with null to prevent flash
  const [email, setEmail] = useState("");
  const [resetToken, setResetToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();

  // Check for reset token in URL
  useEffect(() => {
    const token = searchParams.get("resetid");
    
    setTimeout(() => {
      if (token) {
        setResetToken(token);
        setStep(3);
      } else {
        setStep(1); 
      }
      setIsLoading(false);
    }, 100);
  }, [searchParams]);

  return (
    <div className="flex h-screen">
      {/* Left Section: Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          {/* Logo */}
          <div className="flex items-center space-x-2 mb-6">
            <Image src="/WhiplanoLogo.png" alt="Logo" width={32} height={32} />
            <h2 className="text-lg font-semibold">Whiplano</h2>
          </div>

          {/* Loading State */}
          {isLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-10 w-full mt-6" />
              <Skeleton className="h-10 w-full mt-2" />
              <Skeleton className="h-10 w-full mt-4" />
            </div>
          ) : (
            <>
              {/* Render Steps Based on `step` */}
              {step === 1 && <ForgotPasswordResetLink setStep={setStep} setEmail={setEmail} />}
              {step === 2 && <ForgotPasswordCheckEmail setStep={setStep} email={email} />}
              {step === 3 && <ForgotPasswordResetPassword token={resetToken || undefined} setStep={setStep} />}
              {step === 4 && <ForgotPasswordSuccess />}
            </>
          )}
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="hidden md:flex w-1/2 relative m-4">
        <div className="w-full h-full rounded-lg overflow-hidden">
          <Image
            src="/login-left.png"
            alt="Books"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;