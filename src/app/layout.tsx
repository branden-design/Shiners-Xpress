import type { Metadata } from "next";
import { Unbounded, Darker_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const displayFont = Unbounded({
  variable: "--font-display-family",
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
});

const bodyFont = Darker_Grotesque({
  variable: "--font-body-family",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Shiner's Express Car Wash",
  description:
    "Unlimited membership car wash. Wash every day — pays for itself in 2 visits.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
