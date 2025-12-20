import React from "react";
import footer from "../assets/footer_image.png";
import Image from "next/image";
import Link from "next/link";
import ranocoder from "../assets/creadi-logo/ranocoder-logo.png";

const Footer = () => {
  const footeritem = [
    { name: "গোপনীয়তার নীতিমালা", link: "/privacyPolicy" },
    { name: "ব্যবহারের শর্তাবলী", link: "/termsOfUse" },
    { name: "সাইট ম্যাপ", link: "#" },
    { name: "সচরাচর জিজ্ঞাসা", link: "/faq" },
  ];

  return (
    <footer className="w-full pt-10">
      <div className="relative w-full">
        
        <Image
          src={footer}
          alt="footer banner"
          loading="lazy"
          className="w-full h-auto block"
        />

     
        <div className="bg-[#EBEBEB] flex flex-col md:flex-row justify-between items-center py-6 px-4 md:px-10 gap-6">
         
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 w-full md:w-auto">
            <ul className="flex flex-wrap justify-center md:justify-start gap-y-2 gap-x-3 md:gap-x-5 items-center text-[12px] md:text-[14px]">
              {footeritem.map((item, index) => (
                <li
                  key={index}
                  className="border-r border-gray-400 pr-3 last:border-0 last:pr-0"
                >
                  <Link
                    href={item.link}
                    className="hover:underline text-gray-800 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-[11px] md:text-[12px] text-gray-600">
              সাইটটি শেষ হাল-নাগাদ করা হয়েছে: ২০২৫
            </p>
          </div>

        
          <div className="flex flex-col items-center md:items-end gap-4 w-full md:w-auto border-t md:border-t-0 border-gray-300 pt-4 md:pt-0">
      
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-2 text-[13px] md:text-[14px]">
              <span>পরিকল্পনা ও বাস্তবায়নে:</span>
              <span className="font-semibold">টিটিসি পীরগঞ্জ</span>
              <span className="">|</span>
              <a
                href="https://ranocoder.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-semibold">র‌্যানোকোডার লি.</span>
              </a>
            </div>

           
            <div className="flex items-center justify-center md:justify-end gap-2 text-[11px] md:text-[12px]">
              <span>কারিগরি সহায়তায়:</span>
              <a
                href="https://ranocoder.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={ranocoder.src}
                  alt="ranocoder"
                  className="w-6 h-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
