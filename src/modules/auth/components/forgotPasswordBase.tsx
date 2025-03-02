"use client";

import Image from "next/image";
import { useState } from "react";
import ForgotPasswordResetLink from "./forgotPasswordResetLink";
import ForgotPasswordCheckEmail from "./forgotPasswordCheckEmail";
import ForgotPasswordResetPassword from "./forgotPasswordResetPassword";
import ForgotPasswordSuccess from "./forgotPasswordSuccess";

const ForgotPassword = () => {
  const [step, setStep] = useState(1); 
  const [email, setEmail] = useState(""); 

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

          {/* Render Steps Based on `step` */}
          {step === 1 && <ForgotPasswordResetLink setStep={setStep} setEmail={setEmail} />}
          {step === 2 && <ForgotPasswordCheckEmail setStep={setStep} email={email} />}
          {step === 3 && <ForgotPasswordResetPassword />}
          {step === 4 && <ForgotPasswordSuccess />}
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
