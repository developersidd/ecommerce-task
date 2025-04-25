import Navbar from "@/components/core/Navbar";
import ReduxProviders from "@/redux/app/ReduxProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import CartSidebar from "@/components/custom/cart-sidebar/CartSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ABMarkt",
  description: "ABMarkt - Your Marketplace for Everything",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster richColors />
        <ReduxProviders>
          <Navbar />
          <CartSidebar />
          {children}
        </ReduxProviders>
      </body>
    </html>
  );
}
