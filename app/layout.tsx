import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WhatsAppWidget } from "@/components/shared/WhatsAppWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Day & Night Dental Clinic | Premium Dental Care Srikakulam",
  description: "Precision Dentistry. Beautiful Smiles. Day & Night Care. Experience advanced dental care with our ultimate smile design.",
  keywords: "Braces treatment in Srikakulam, Dental clinic near me, Aligners specialist, Non-extraction orthodontic treatment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-white text-gray-900 font-sans selection:bg-primary selection:text-white">
        <Header />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
        
        {/* 2. WIDGET PLACED HERE */}
        <WhatsAppWidget /> 
      </body>
    </html>
  );
}