/* eslint-disable */

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import OnboardingStep1 from "./step1";
import OnboardingStep2 from "./step2";
import { motion, AnimatePresence } from "framer-motion";
import authService from "@/api-handlers/services/auth.service";
import { IOnboardingPayload } from "@/api-handlers/modal/IatuhVM";
const OnboardingComponent = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [payload, setPayload] = useState<IOnboardingPayload>({
    first_name: "",
    last_name: "",
    username: "",
    bio: null,
    twitter: null,
    telegram: null,
    profile_pic: null,
  });
  console.log("🚀 ~ OnboardingComponent ~ payload:", payload)

  const handleNextStep = () => {
    setStep(2);
  };

  const handlePreviousStep = () => {
    setStep(1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    const formData = new FormData();
    // Add required fields
    formData.append("first_name", payload.first_name);
    formData.append("last_name", payload.last_name);
    formData.append("username", payload.username);
    
    // Add optional fields if they exist
    if (payload.bio) formData.append("bio", payload.bio);
    if (payload.twitter) formData.append("twitter", payload.twitter);
    if (payload.telegram) formData.append("telegram", payload.telegram);
    if (payload.profile_pic) formData.append("profile_pic", payload.profile_pic);

    try {
      // console.log(formData);
      const response = await authService.onboarding(formData);
      console.log("Onboarding successful:", response);
      // Handle success (e.g., navigate to the dashboard or show a success message)
    } catch (error) {
      console.error("Onboarding failed:", error);
      // Handle error (e.g., show an error message)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Onboarding Container */}
      <div className="max-w-md w-full text-center p-10 sm:p-6 md:p-4 mt-8 sm:mt-12 md:mt-16">
        {/* Title & Description */}
        <h2 className="text-2xl sm:text-2xl md:text-2xl font-semibold font-serif text-gray-900 mb-4">
          Set up your profile
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm mt-2 text-center">
          Yay! You made it. Now it`&apos;s time to set up your profile and fill in
          your details. You can always fill it later in your profile.
        </p>

        {/* Progress Bar with Animation */}
        <div className="flex items-center justify-center mt-4">
          <motion.div
            className="h-1 mx-2 rounded transition-all duration-500"
            animate={{ width: step === 2 ? "12rem" : "10rem", backgroundColor: step === 2 ? "#FE4773" : "#FBCFE8" }}
          ></motion.div>

          <motion.span
            className={`w-8 h-[30px] rounded-full flex items-center justify-center border-2 border-pink-300`}
            animate={{
              backgroundColor: step === 2 ? "#FE4773" : "transparent",
              color: step === 2 ? "white" : "black",
            }}
          >
            {step === 2 ? "✓" : ""}
          </motion.span>

          <motion.div
            className="h-1 mx-2 rounded transition-all duration-500"
            animate={{ width: "10rem", backgroundColor: "#FBCFE8" }}
          ></motion.div>

          <span className="w-8 h-[30px] rounded-full border-2 border-pink-300"></span>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <OnboardingStep1 payload={payload} setPayload={setPayload} />
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <OnboardingStep2 payload={payload} setPayload={setPayload} />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between mt-6">
          {step === 2 && (
            <Button
              variant="outline"
              className="w-1/3 text-gray-700"
              onClick={handlePreviousStep}
              disabled={isSubmitting}
            >
              Back
            </Button>
          )}

          <Button
            className={`w-${step === 2 ? "2/3" : "full"} bg-pink-500 hover:bg-pink-600`}
            onClick={step === 1 ? handleNextStep : handleSubmit}
            disabled={isSubmitting}
          >
            {step === 1 ? "Continue" : isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>

        {step === 1 && (
          <p className="text-gray-500 text-xs sm:text-sm text-center mt-4 cursor-pointer hover:underline">
            Skip for later
          </p>
        )}
      </div>
    </div>
  );
};

export default OnboardingComponent;
