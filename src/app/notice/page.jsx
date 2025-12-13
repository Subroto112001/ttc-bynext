"use client";

import React, { use, useState } from "react";
import {
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaViber,
} from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";

const Page = () => {
  const [notices] = useState([
    {
      id: 1,
      title: "২০২৪-২৫ অর্থবছরের উন্নয়ন প্রকল্পের দরপত্র আহ্বান",
      date: "১৫ ডিসেম্বর ২০২৫",
      category: "দরপত্র",
      file: "দরপত্র_২০২৫.pdf",
    },
    {
      id: 2,
      title: "সরকারি চাকরিতে নিয়োগ বিজ্ঞপ্তি",
      date: "১২ ডিসেম্বর ২০২৫",
      category: "নিয়োগ",
      file: "নিয়োগ_বিজ্ঞপ্তি.pdf",
    },
    {
      id: 3,
      title: "জাতীয় ছুটির তালিকা ২০২৫",
      date: "১০ ডিসেম্বর ২০২৫",
      category: "প্রজ্ঞাপন",
      file: "ছুটির_তালিকা.pdf",
    },
    {
      id: 4,
      title: "বার্ষিক কর্মসম্পাদন চুক্তি সংক্রান্ত নির্দেশনা",
      date: "০৮ ডিসেম্বর ২০২৫",
      category: "নির্দেশনা",
      file: "এপিএ_নির্দেশনা.pdf",
    },
    {
      id: 5,
      title: "স্থানীয় সরকার নির্বাচন সংক্রান্ত বিজ্ঞপ্তি",
      date: "০৫ ডিসেম্বর ২০২৫",
      category: "বিজ্ঞপ্তি",
      file: "নির্বাচন_বিজ্ঞপ্তি.pdf",
    },
    {
      id: 6,
      title: "ডিজিটাল সেবা সংক্রান্ত প্রশিক্ষণ কর্মসূচি",
      date: "০৩ ডিসেম্বর ২০২৫",
      category: "প্রশিক্ষণ",
      file: "প্রশিক্ষণ_তথ্য.pdf",
    },
  ]);

  const handleDownload = (notice) => {
    // Create a sample PDF content
    const content = `
নোটিশ: ${notice.title}
তারিখ: ${notice.date}
ধরন: ${notice.category}

এটি একটি নমুনা নোটিশ ডকুমেন্ট।
সরকারি ওয়েবসাইট থেকে ডাউনলোড করা হয়েছে।
    `;

    const blob = new Blob([content], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = notice.file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const socialIcons = [
    {
      name: "facebook",
      icon: <FaFacebook className="text-[#1877F2]" size={28} />,
    },
    {
      name: "whatsapp",
      icon: <FaWhatsapp className="text-[#25D366]" size={28} />,
    },
    {
      name: "twitter",
      icon: <FaTwitter className="text-[#1DA1F2]" size={28} />,
    },
    {
      name: "linkedin",
      icon: <FaLinkedin className="text-[#0A66C2]" size={28} />,
    },
    { name: "viber", icon: <FaViber className="text-[#7360F2]" size={28} /> },
    {
      name: "messenger",
      icon: <FaFacebookMessenger className="text-[#0084FF]" size={28} />,
    },
  ];

  return (
    <div className="bg-white">
      <section className="md:mt-[30px] py-2 md:py-4 px-2 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <p className="text-[#2C5F8D] text-[16px] md:text-[18px] font-medium text-center md:text-left">
              কনটেন্টটি শেয়ার করতে ক্লিক করুন
            </p>
            <div className="flex gap-3 md:gap-5 items-center flex-wrap justify-center">
              {socialIcons.map((socialIcon, index) => (
                <button
                  className="hover:scale-110 transition-transform cursor-pointer"
                  key={index}
                  aria-label={socialIcon.name}
                >
                  {socialIcon.icon}
                </button>
              ))}
            </div>
          </div>
          <button className="p-4 border rounded max-w-full md:max-w-[220px] text-[15px] md:text-[17px] font-medium text-center mx-auto md:mx-0">
            ফেইসবুক পেইজ ভিজিট ও লাইক দিন
          </button>
        </div>

        <div className="mt-8 md:mt-10">
          <p className="text-2xl font-medium mb-6">নোটিশ</p>

          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 hidden md:table-header-group">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                    ক্রমিক
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                    শিরোনাম
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                    ধরন
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                    তারিখ
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                    ডাউনলোড
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {notices.map((notice, index) => (
                  <tr
                    key={notice.id}
                    className="hover:bg-gray-50 flex flex-col md:table-row border-b md:border-0"
                  >
                    <td className="px-4 py-3 text-sm text-gray-600 hidden md:table-cell">
                      {index + 1}
                    </td>
                    <td className="px-4 py-3 md:py-3 pt-4 md:pt-3">
                      <p className="text-sm md:text-base font-medium text-gray-900">
                        {notice.title}
                      </p>
                      <div className="flex gap-3 mt-2 md:hidden text-xs text-gray-500">
                        <span>{notice.category}</span>
                        <span>•</span>
                        <span>{notice.date}</span>
                      </div>
                    </td>
                    <td className="px-4 py-2 md:py-3 text-sm text-gray-600 hidden md:table-cell">
                      {notice.category}
                    </td>
                    <td className="px-4 py-2 md:py-3 text-sm text-gray-600 hidden md:table-cell">
                      {notice.date}
                    </td>
                    <td className="px-4 py-3 pb-4 md:py-3 text-center">
                      <button
                        onClick={() => handleDownload(notice)}
                        className="text-[#2C5F8D] hover:underline text-sm font-medium"
                      >
                        ডাউনলোড
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
