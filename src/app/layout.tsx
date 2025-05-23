import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'], // Specify the weights you need
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><title>Whiplano</title></head>
      <body className={`${poppins.className}`}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}