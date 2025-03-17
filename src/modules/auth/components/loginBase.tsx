/*eslint-disable */
"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import authService from "@/api-handlers/services/auth.service";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export default function Login() {
  const { toast } = useToast();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await authService.login({ email, password });
      console.log("🚀 ~ handleLogin ~ response:", response);
      if (!response.info.is_verified) {
        toast({
          variant: "destructive",
          title: "Not Verified",
          description: "Please check your email for verification link",
        });
        return;
      }
      response.info.has_onboarded ? router.push("/dashboard") : router.push("/onboarding");

      document.cookie = `authToken=${response.token}; path=/; Secure`;
      document.cookie = `hasOnboarded=${response.info.has_onboarded}; path=/; Secure`;

    } catch (err) {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "Invalid email or password",
      });
      console.error("Login failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      {/* Header - Logo and Title */}
      <div className="absolute top-6 left-6 flex items-center gap-2 px-3 md:px-10">
        <Image
          src="/WhiplanoLogo.png"
          alt="Whiplano Logo"
          width={40}
          height={40}
        />
        <h1 className="text-xl font-bold">Whiplano</h1>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden">
        {/* Left Side - Login Form */}
        <div className="flex flex-col justify-center p-8">
          <h2 className="text-3xl text-[#313131] font-semibold mb-2">Login</h2>
          <p className="text-gray-500 text-sm mb-6 mt-4">
            Login to access your Whiplano account
          </p>

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
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
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
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

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-gray-600">
                  Remember me
                </label>
              </div>

              <Link href="/forgot_password" className="text-pink-500 hover:underline">Forgot Password?</Link>
            </div>

            <Button
              className="w-full bg-pink-500 hover:bg-pink-600"
              disabled={loading}
              onClick={handleLogin}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>

            <p className="text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link href="/signup" className="text-pink-500 hover:underline">
                Sign up
              </Link>
            </p>
          </form>

          {/* Social Login */}
          <div className="mt-6">
            <p className="text-center text-sm text-gray-500 mb-4">
              Or login with
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                variant="outline"
                className="flex items-center gap-2 px-4"
              >
                <Image
                  src="/google-icon.svg"
                  alt="Google"
                  width={20}
                  height={20}
                />
                Google
              </Button>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:flex items-center justify-center">
          <Image
            src="/login.png"
            alt="Abstract Illustration"
            width={616}
            height={816}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
