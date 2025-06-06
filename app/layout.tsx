import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // ✅ Make sure path is correct
import CursorGlow from "./components/CursorGlow"; // ✅ Add this component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Subham Acharya | QA Engineer",
  description: "Portfolio of Subham Acharya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {/* ✅ Global glow effect that follows cursor */}
        <CursorGlow />

        {/* ✅ Sticky navbar on all routes */}
        <Navbar />

        {/* ✅ Push content below fixed navbar */}
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
