"use client";
import OnboardingHeader from "@/modules/onboarding/components/header";

export default function OnboardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col min-h-screen bg-white">
      <OnboardingHeader />

      <main className="flex-grow flex justify-center relative z-10">
        {children}
      </main>
    </div>
  );
}
