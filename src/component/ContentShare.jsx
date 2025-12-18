import { iconprovider } from "@/helper/IconProvider";
import React from "react";

const ContentShare = () => {
  const socialIcons = [
    {
      name: "facebook",
      icon: iconprovider.facebook,
      className: "text-[#1877F2]",
    },
    {
      name: "whatsapp",
      icon: iconprovider.whatsapp,
      className: "text-[#25D366]",
    },
    {
      name: "twitter",
      icon: iconprovider.twitter,
      className: "text-[#1DA1F2]",
    },
    {
      name: "linkedin",
      icon: iconprovider.linkedin,
      className: "text-[#0A66C2]",
    },
    {
      name: "viber",
      icon: iconprovider.viber,
      className: "text-[#7360F2]",
    },
    {
      name: "messenger",
      icon: iconprovider.messenger,
      className: "text-[#0084FF]",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
      <div className="flex flex-col gap-3 items-center md:items-start w-full md:w-auto">
        <p className="text-[#2C5F8D] text-[16px] md:text-[18px] font-medium">
          কনটেন্টটি শেয়ার করতে ক্লিক করুন
        </p>
        <div className="flex gap-4 md:gap-5 items-center flex-wrap justify-center">
          {socialIcons.map((socialIcon, index) => (
            <button
              className={`hover:scale-110 transition-transform cursor-pointer text-2xl ${socialIcon.className}`}
              key={index}
              aria-label={socialIcon.name}
            >
              {socialIcon.icon}
            </button>
          ))}
        </div>
      </div>
      <button className="w-full md:w-auto p-4 border rounded text-[15px] md:text-[17px] font-medium text-center hover:bg-gray-50 transition-colors">
        ফেইসবুক পেইজ ভিজিট ও লাইক দিন
      </button>
    </div>
  );
};

export default ContentShare;
