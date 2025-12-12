import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header";
import Footer from "@/component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "কারিগরি প্রশিক্ষণ কেন্দ্র, পীরগঞ্জ",
  description:
    "কারিগরি প্রশিক্ষণ কেন্দ্র, পীরগঞ্জ - বৈদেশিক কর্মসংস্থানের জন্য প্রশিক্ষণ কেন্দ্র",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-image`}
      >
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
