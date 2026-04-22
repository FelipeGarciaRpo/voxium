import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { TRPCReactProvider } from "@/trpc/client";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Voxium Mind",
    template: "%s | Voxium Mind"
  },
  description: "AI-powered text-to-speech and voice cloning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <TRPCReactProvider>
        <html lang="en" suppressHydrationWarning>
          <body
            className={`${inter.variable} ${geistMono.variable} antialiased`}
          >
            <Providers>
              {children}
              <Toaster />
            </Providers>
          </body>
        </html>
      </TRPCReactProvider>
    </ClerkProvider>
  );
}