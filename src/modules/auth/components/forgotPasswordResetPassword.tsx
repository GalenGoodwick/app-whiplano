import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ForgotPasswordResetPassword = () => {
  return (
    <>
      {/* Form Heading */}
      <h1 className="text-3xl font-semibold font-serif">Reset your password</h1>
      <p className="text-gray-500 text-sm mt-2">create a new password.</p>

      {/* Email Input */}
      <div className="mt-4">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Password
        </label>
        <Input
          id="password"
          type="password"
          placeholder="******"
          className="mt-1"
        />
      </div>

      <div className="text-xs text-wrap mt-2">
        <div className="grid grid-cols-2 gap-x-6 mt-2 text-gray-600">
          <div className="flex items-center">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full inline-block mr-2"></span>
            Use 8 or more characters
          </div>
          <div className="flex items-center">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full inline-block mr-2"></span>
            One uppercase character
          </div>
          <div className="flex items-center">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full inline-block mr-2"></span>
            One special character (e.g., <b>#</b>, <b>!</b>)
          </div>
          <div className="flex items-center">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full inline-block mr-2"></span>
            One number
          </div>
          <div className="flex items-center">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full inline-block mr-2"></span>
            One lowercase character
          </div>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="******"
          className="mt-1"
        />
      </div>

      {/* Submit Button */}
      <Button className="w-full mt-4 bg-pink-200 hover:bg-pink-600 text-white">
        contin
      </Button>
    </>
  );
};

export default ForgotPasswordResetPassword;
