import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { CSPostHogProvider } from "@/providers/CSPostHogProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Handy Arrows",
  description: "A collection of hand-drawn arrows, doodles, and infographic elements for your next project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <CSPostHogProvider>
        <body className={inter.className}>
          {children}
          <Toaster />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
