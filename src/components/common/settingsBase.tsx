/* eslint-disable */

import React, { useState } from "react";
import { CircleX, KeyRound, ChevronRight, AtSign, ArrowLeft } from "lucide-react";
import { useRightSidebar } from "@/context/RightSidebarContext";
import ConfirmEmail from "./settingsComponents/confirmEmail";
import CheckEmail from "./settingsComponents/checkEmail";
import NewPasswordForm from "./settingsComponents/newPasswordForm";
import ConfirmCurrentPassword from "./settingsComponents/confirmCurrentPassword";
import ChangeEmailForm from "./settingsComponents/newEmailForm";

export default function ProfileSettings() {
  const { closeSidebar } = useRightSidebar();
  const [heading, setHeading] = useState("Settings");
  const [showChangeOptions, setShowChangeOptions] = useState(true);
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  const [isEmailChanged, setIsEmailChanged] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isCurrentPasswordVerified, setIsCurrentPasswordVerified] = useState(false);

  const handleChangePasswordClick = () => {
    setHeading("Change Password");
    setShowChangeOptions(false);
    setIsPasswordChanged(true);
  };

  const handleChangeEmailClick = () => {
    setHeading("Change Email");
    setShowChangeOptions(false);
    setIsEmailChanged(true);
  };

  const handleEmailSubmit = (email: string) => {
    console.log("Email submitted from ConfirmEmail:", email);
    setSubmittedEmail(email);
  };

  const handleContinue = () => {
    setIsEmailVerified(true);
  };

  const handleBack = () => {
    if (isEmailVerified) {
      setIsEmailVerified(false);
    } else if (submittedEmail) {
      setSubmittedEmail("");
    } else if (isCurrentPasswordVerified) {
      setIsCurrentPasswordVerified(false);
    } else {
      setShowChangeOptions(true);
      setIsPasswordChanged(false);
      setIsEmailChanged(false);
      setSubmittedEmail("");
      setIsEmailVerified(false);
      setIsCurrentPasswordVerified(false);
      setHeading("Settings");
    }
  };

  const resetAllStates = () => {
    setIsPasswordChanged(false);
    setIsEmailChanged(false);
    setSubmittedEmail("");
    setIsEmailVerified(false);
    setIsCurrentPasswordVerified(false);
    setShowChangeOptions(true);
    setHeading("Settings");
  };

  return (
    <div className="bg-white w-full max-w-[500px] md:max-w-[600px]">
      <div className="flex items-center justify-between border-b pb-4 mb-4">
        <div className="flex items-center gap-2">
          {!showChangeOptions && (
            <button onClick={handleBack}>
              <ArrowLeft size={20} strokeWidth={2} className="text-gray-600" />
            </button>
          )}
          <h2 className="text-xl font-semibold">{heading}</h2>
        </div>
        <CircleX size={20} color="#595959" strokeWidth={2} onClick={closeSidebar} />
      </div>

      {showChangeOptions ? (
        <>
          <div
            className="bg-[#F5F6FA] flex justify-between items-center w-full p-2 rounded-xl cursor-pointer hover:bg-[#e6e9f2] transition duration-300 ease-in-out"
            onClick={handleChangePasswordClick}
          >
            <div className="flex items-center gap-2 p-2">
              <KeyRound size={20} color="#595959" strokeWidth={2} />
              <p>Change Password</p>
            </div>
            <ChevronRight size={20} color="#595959" strokeWidth={2} />
          </div>

          <div
            className="bg-[#F5F6FA] flex justify-between items-center w-full p-2 rounded-xl mt-2 cursor-pointer hover:bg-[#e6e9f2] transition duration-300 ease-in-out"
            onClick={handleChangeEmailClick}
          >
            <div className="flex items-center gap-2 p-2">
              <AtSign size={20} color="#595959" strokeWidth={2} />
              <p>Change Email</p>
            </div>
            <ChevronRight size={20} color="#595959" strokeWidth={2} />
          </div>
        </>
      ) : (
        <div className="mt-4 text-left">
          {isPasswordChanged ? (
            submittedEmail ? (
              isEmailVerified ? (
              <NewPasswordForm onFinish={resetAllStates} />
              ) : (
                <CheckEmail
                  submittedEmail={submittedEmail}
                  onChangeEmail={handleChangeEmailClick}
                  onContinue={handleContinue}
                />
              )
            ) : (
              <ConfirmEmail onEmailSubmit={handleEmailSubmit} />
            )
          ) : isEmailChanged ? (
            isCurrentPasswordVerified ? (
              isEmailVerified ? (
                <ChangeEmailForm onFinish={resetAllStates}/>
              ) : (
                <CheckEmail
                  submittedEmail={submittedEmail}
                  onChangeEmail={handleChangeEmailClick}
                  onContinue={handleContinue}
                />
              )
            ) : (
              <ConfirmCurrentPassword
                onConfirm={(password) => {
                  console.log("Password entered for email change:", password);
                  setIsCurrentPasswordVerified(true);
                }}
              />
            )
          ) : null}
        </div>
      )}
    </div>
  );
}
