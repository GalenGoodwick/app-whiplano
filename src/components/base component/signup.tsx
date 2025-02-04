"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import authService from "@/api-handlers/services/auth.service";
import { ISignupPayload } from "@/api-handlers/modal/IatuhVM";
import { useToast } from "@/hooks/use-toast";

export default function SignupComponent() {
  const { toast } = useToast();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form fields
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      toast({
        variant: "destructive",
        title: "Signup Failed",
        description: "Please fill in all required fields.",
      })
      return;
    }

    if (password !== confirmPassword) {
      toast({
        variant: "destructive",
        title: "Signup Failed",
        description: "Passwords do not match.",
      })
      return;
    }

    if (!agree) {
      toast({
        variant: "destructive",
        title: "Signup Failed",
        description: "Please agree to the terms and conditions.",
      })
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const payload: ISignupPayload = {
        username: firstName + lastName,
        email,
        password
      } 
      const response = await authService.signup(payload);
      console.log("Signup successful:", response);
      // Handle successful signup (e.g., redirect, show success message, etc.)
      toast({
        variant: "default",
        title: "Signup Successful",
        description: "Your account has been created successfully.",
      })

    } catch (err) {
      toast({
        variant: "destructive",
        title: "Signup Failed",
        description: "An error occurred during signup.",
      })
      console.error("Signup error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      {/* Header - Logo */}
      <div className="absolute top-6 left-6 flex items-center gap-2 px-3 md:px-10">
        <Image src="/WhiplanoLogo.png" alt="Whiplano Logo" width={40} height={40} />
        <h1 className="text-xl font-bold">Whiplano</h1>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden">
        {/* Left Side - Signup Form */}
        <div className="flex flex-col justify-center p-8">
          <h2 className="text-3xl text-[#313131] font-semibold mb-2">Sign up</h2>
          <p className="text-gray-500 text-sm mb-6 mt-4">
            Let's get you all set up so you can access your personal account.
          </p>

          <form className="space-y-4" onSubmit={handleSignup}>
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <Input
                  type="text"
                  placeholder="John"
                  className="mt-1"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <Input
                  type="text"
                  placeholder="Doe"
                  className="mt-1"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Email & Phone Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <Input
                  type="email"
                  placeholder="john.doe@gmail.com"
                  className="mt-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <Input
                  type="tel"
                  placeholder="+123 456 7890"
                  className="mt-1"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            {/* Password Fields */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="mt-1 pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="mt-1 pr-10"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Agree to Terms */}
            <div className="flex items-center text-sm">
              <input
                type="checkbox"
                id="agree"
                className="mr-2"
                checked={agree}
                onChange={() => setAgree(!agree)}
                required
              />
              <label htmlFor="agree" className="text-gray-600">
                I agree to all the <Link href="#" className="text-blue-500 hover:underline">Terms</Link> and 
                <Link href="#" className="text-pink-500 hover:underline"> Privacy Policies</Link>
              </label>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600" disabled={loading}>
              {loading ? "Creating account..." : "Create account"}
            </Button>

            <p className="text-center text-sm text-gray-600">
              Already have an account? <Link href="#" className="text-pink-500 hover:underline">Login</Link>
            </p>
          </form>

          {/* Social Signup */}
          <div className="mt-6">
            <p className="text-center text-sm text-gray-500 mb-4">Or Sign up with</p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" className="flex items-center gap-2 px-4">
                <Image src="/google-icon.svg" alt="Google" width={20} height={20} />
                Google
              </Button>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:flex items-center justify-center">
          <Image src="/signup-left.png" alt="Abstract Illustration" width={616} height={816} className="object-cover" />
        </div>
      </div>
    </div>
  );
}