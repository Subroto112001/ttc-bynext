"use client";

import React, { useState, useMemo } from "react";
import {
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaViber,
  FaFilePdf,
} from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";

const Page = () => {
  const [notices] = useState([
    {
      id: 1,
      title: "২০২৪-২৫ অর্থবছরের উন্নয়ন প্রকল্পের দরপত্র আহ্বান",
      date: "২০২৫-১২-১৫",
      category: "দরপত্র",
      file: "দরপত্র_২০২৫.pdf",
    },
    {
      id: 2,
      title: "সরকারি চাকরিতে নিয়োগ বিজ্ঞপ্তি",
      date: "২০২৫-১২-১২",
      category: "নিয়োগ",
      file: "নিয়োগ_বিজ্ঞপ্তি.pdf",
    },
    {
      id: 3,
      title: "জাতীয় ছুটির তালিকা ২০২৫",
      date: "২০২৫-১২-১০",
      category: "প্রজ্ঞাপন",
      file: "ছুটির_তালিকা.pdf",
    },
    {
      id: 4,
      title: "বার্ষিক কর্মসম্পাদন চুক্তি সংক্রান্ত নির্দেশনা",
      date: "২০২৫-১২-০৮",
      category: "নির্দেশনা",
      file: "এপিএ_নির্দেশনা.pdf",
    },
    {
      id: 5,
      title: "স্থানীয় সরকার নির্বাচন সংক্রান্ত বিজ্ঞপ্তি",
      date: "২০২৫-১২-০৫",
      category: "বিজ্ঞপ্তি",
      file: "নির্বাচন_বিজ্ঞপ্তি.pdf",
    },
    {
      id: 6,
      title: "ডিজিটাল সেবা সংক্রান্ত প্রশিক্ষণ কর্মসূচি",
      date: "২০২৫-১২-০৩",
      category: "প্রশিক্ষণ",
      file: "প্রশিক্ষণ_তথ্য.pdf",
    },
    {
      id: 7,
      title: "উপদেষ্টা পরিষদের ধন্যবাদ প্রস্তাব",
      date: "২০২৫-১২-১৫",
      category: "প্রজ্ঞাপন",
      file: "doc1.pdf",
    },
  ]);

  // সংখ্যা বাংলায় রূপান্তরের ফাংশন
  const toBn = (num) => {
    const symbols = {
      0: "০",
      1: "১",
      2: "২",
      3: "৩",
      4: "৪",
      5: "৫",
      6: "৬",
      7: "৭",
      8: "৮",
      9: "৯",
    };
    return num.toString().replace(/\d/g, (match) => symbols[match]);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredNotices = useMemo(() => {
    return notices.filter((n) =>
      n.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [notices, searchTerm]);

  const totalPages = Math.ceil(filteredNotices.length / entriesPerPage);
  const indexOfLastItem = currentPage * entriesPerPage;
  const indexOfFirstItem = indexOfLastItem - entriesPerPage;
  const currentItems = filteredNotices.slice(indexOfFirstItem, indexOfLastItem);

  const handleDownload = (fileName) => {
    alert(`ডাউনলোড হচ্ছে: ${fileName}`);
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
    <div className="bg-white min-h-screen">
      <section className="md:mt-[30px] py-2 md:py-4 px-2 max-w-7xl mx-auto">
        {/* শেয়ার সেকশন */}
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0 mb-10">
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

        {/* ফিল্টার এবং সার্চ */}
        <div className="mt-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
            <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
              <span>প্রদর্শন</span>
              <select
                value={entriesPerPage}
                onChange={(e) => {
                  setEntriesPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="border border-gray-300 rounded px-2 py-1 focus:outline-none bg-white"
              >
                <option value={10}>১০</option>
                <option value={20}>২০</option>
                <option value={50}>৫০</option>
              </select>
              <span>টি নোটিশ</span>
            </div>

            <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
              <label>খুঁজুন:</label>
              <input
                type="text"
                className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>

          {/* টেবিল */}
          <div className="overflow-x-auto border border-gray-400">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-400 bg-white">
                  <th className="border-r border-gray-400 px-4 py-3 text-center text-sm font-bold w-16">
                    ক্রমিক
                  </th>
                  <th className="border-r border-gray-400 px-4 py-3 text-center text-sm font-bold">
                    শিরোনাম
                  </th>
                  <th className="border-r border-gray-400 px-4 py-3 text-center text-sm font-bold w-40">
                    প্রকাশের তারিখ
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-bold w-24">
                    ডাউনলোড
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                {currentItems.map((notice, index) => (
                  <tr
                    key={notice.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="border-r border-gray-300 px-4 py-3 text-center text-[15px]">
                      {toBn(indexOfFirstItem + index + 1)}
                    </td>
                    <td className="border-r border-gray-300 px-4 py-3 text-left text-[15px] leading-relaxed">
                      {notice.title}
                    </td>
                    <td className="border-r border-gray-300 px-4 py-3 text-center text-[15px]">
                      {notice.date}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => handleDownload(notice.file)}
                        className="flex justify-center w-full"
                      >
                        <FaFilePdf
                          className="text-[#D32F2F] hover:scale-110 transition-transform"
                          size={24}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* প্যাগিনেশন ফুটার */}
          <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
            <p className="text-sm text-gray-600">
              {toBn(filteredNotices.length)} টি নোটিশের মধ্যে{" "}
              {toBn(filteredNotices.length > 0 ? indexOfFirstItem + 1 : 0)} থেকে{" "}
              {toBn(Math.min(indexOfLastItem, filteredNotices.length))} পর্যন্ত
              দেখানো হচ্ছে
            </p>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 border rounded text-sm ${
                  currentPage === 1
                    ? "text-gray-300 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }`}
              >
                আগেরটি
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 border rounded text-sm ${
                    currentPage === i + 1
                      ? "bg-[#2C5F8D] text-white font-bold"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  {toBn(i + 1)}
                </button>
              ))}

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages || totalPages === 0}
                className={`px-4 py-2 border rounded text-sm ${
                  currentPage === totalPages || totalPages === 0
                    ? "text-gray-300 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }`}
              >
                পরবর্তী
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
