import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const ForgotPasswordCheckEmail = ({ setStep, email }: { setStep: (step: number) => void, email: string }) => {
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  return (
    <>
      {/* Form Heading */}
      <h1 className="text-3xl font-semibold font-serif">Check your email</h1>
      <p className="text-gray-500 text-sm mt-2 text-wrap">
      Thanks! If <b className="text-black">{email}</b> matches an email address we have on file, then we’ve sent you an email containing further instructions for resetting your password. You can also check your spam folder.
      </p>

      <div className="flex gap-2">
        <p className="text-gray-500 text-sm mt-2">Didn’t get the link?</p>
        <p className="text-pink-600 text-sm mt-2">{canResend ? "Resend Link" : `Resend in ${timer}s`}</p>
      </div>

      {/* Submit Button */}
      <Button className="w-full mt-4 bg-pink-200 hover:bg-pink-600 text-white">
        Resend link
      </Button>

      {/* Submit Button */}
      <Button variant={"outline"} className="w-full mt-4" onClick={() => setStep(3)}>
        Change email
      </Button>
    </>
  );
};

export default ForgotPasswordCheckEmail;
