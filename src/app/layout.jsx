import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";

import Footer from "@/component/Footer";
import Header from "@/component/Header";


const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-serif-bengali",
});

export const metadata = {
  title: "কারিগরি প্রশিক্ষণ কেন্দ্র, পীরগঞ্জ",
  description:
    "কারিগরি প্রশিক্ষণ কেন্দ্র, পীরগঞ্জ - বৈদেশিক কর্মসংস্থানের জন্য প্রশিক্ষণ কেন্দ্র",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body className={`${notoSerifBengali.variable} antialiased`} cz-shortcut-listen="true">
        <div className="bg-wrapper ">
          <div className="container boxshadow px-2 md:px-0">
        <Header/>
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
