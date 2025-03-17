"use client";

import Image from "next/image";
import VerifyOTP from "./verifyOTP";

export default function Verify() {

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

        <VerifyOTP />
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
}
