import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const ForgotPasswordSuccess = () => {
  const router = useRouter();

  const handleBackToLogin = () => {
    router.push("/login");
  };
  return (
    <>
      {/* Form Heading */}
      <h1 className="text-3xl font-semibold font-serif">Password Changed</h1>
      <p className="text-gray-500 text-sm mt-2">
        Your password has been successfully changed. proceed to Sign in to your account.
      </p>

      {/* Submit Button */}
      <Button className="w-full mt-4 bg-deathPink hover:bg-pink-600 text-white" onClick={handleBackToLogin}>
        continue to sign in
      </Button>
    </>
  );
};

export default ForgotPasswordSuccess;
