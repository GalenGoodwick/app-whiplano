// app/(auth)/login/page.tsx
"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    // Simulate a login API call
    const dummyToken = "dummy-token-123456";
    document.cookie = `authToken=${dummyToken}; path=/; max-age=3600`; // Set token in cookies
    router.push("/dashboard"); // Redirect to dashboard after login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <p className="mb-4">Enter any credentials to log in.</p>
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Log In
        </button>
      </div>
    </div>
  );
}