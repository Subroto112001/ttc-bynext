"use client";

import ContentShare from "@/component/ContentShare";
import { notices } from "@/helper/Information";
import Link from "next/link";
import React, { useState, useMemo } from "react";
import { FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";

const Page = () => {
  const translateToBn = (num) => {
    const paddedNum = String(num).padStart(2, "0");
    const englishToBengali = {
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
    return paddedNum
      .split("")
      .map((digit) => englishToBengali[digit] || digit)
      .join("");
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredNotices = useMemo(() => {
    return notices.filter((n) =>
      n.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredNotices.length / entriesPerPage);
  const indexOfLastItem = currentPage * entriesPerPage;
  const indexOfFirstItem = indexOfLastItem - entriesPerPage;
  const currentItems = filteredNotices.slice(indexOfFirstItem, indexOfLastItem);

  const handleDownload = (file) => {
    if (file.toLowerCase().endsWith(".pdf")) {
      const fileUrl = file.startsWith("http") ? file : `/notices/${file}`;
      const link = document.createElement("a");
      link.href = fileUrl;
      link.setAttribute("download", file);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // যদি পিডিএফ না হয় তবে ডিটেইলস পেজে নিয়ে যাবে
      window.location.href = `/notice/${file}`;
    }
  };

  const getNoticeUrl = (file) => {
    if (file.toLowerCase().endsWith(".pdf")) {
      return file.startsWith("http") ? file : `/notices/${file}`;
    }
    // টেক্সট নোটিশের জন্য আলাদা রাউট (যেমন: /notice/slug)
    return `/notice/${file}`;
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="md:mt-[30px] py-4 px-4 max-w-7xl mx-auto">
        <ContentShare />

        <div className="mt-8">
          <div className="grid grid-cols-1 md:flex md:flex-row md:items-center justify-between mb-6 gap-4">
            <div className="flex items-center gap-2 text-sm font-bold text-gray-700 order-2 md:order-1">
              <span>প্রদর্শন</span>
              <select
                value={entriesPerPage}
                onChange={(e) => {
                  setEntriesPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="border border-gray-300 rounded px-2 py-1 focus:outline-none bg-white cursor-pointer"
              >
                <option value={10}>১০</option>
                <option value={20}>২০</option>
                <option value={50}>৫০</option>
              </select>
              <span>টি নোটিশ</span>
            </div>

            <div className="flex items-center gap-2 text-sm font-bold text-gray-700 order-1 md:order-2">
              <label className="shrink-0">খুঁজুন:</label>
              <input
                type="text"
                className="w-full md:w-64 border border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:border-blue-500 shadow-sm"
                placeholder="শিরোনাম দিয়ে সার্চ করুন..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>

          <div className="overflow-x-auto border border-gray-400 ">
            <table className="w-full border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-gray-400 bg-gray-50">
                  <th className="border-r border-gray-400 px-4 py-3 text-center text-sm font-bold w-16">
                    ক্রমিক
                  </th>
                  <th className="border-r border-gray-400 px-4 py-3 text-left text-sm font-bold">
                    শিরোনাম
                  </th>
                  <th className="border-r border-gray-400 px-4 py-3 text-center text-sm font-bold w-40">
                    প্রকাশের তারিখ
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-bold w-24">
                    অ্যাকশন
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                {currentItems.map((notice, index) => {
                  const isPdf = notice.file.toLowerCase().endsWith(".pdf");
                  return (
                    <tr
                      key={notice.id}
                      className="hover:bg-blue-50/30 transition-colors"
                    >
                      <td className="border-r border-gray-300 px-4 py-4 text-center text-[15px]">
                        {translateToBn(indexOfFirstItem + index + 1)}
                      </td>
                      <td className="border-r border-gray-300 px-4 py-4 text-[15px] max-w-[300px] md:max-w-[500px]">
                        <Link
                          href={getNoticeUrl(notice.file)}
                          target={isPdf ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className="truncate font-medium text-gray-800 hover:text-blue-600 cursor-pointer"
                          title={notice.title}
                        >
                          {notice.title}
                        </Link>
                      </td>
                      <td className="border-r border-gray-300 px-4 py-4 text-center text-[15px] text-gray-600">
                        {notice.date}
                      </td>
                      <td className="px-4 py-4 text-center">
                        <button
                          onClick={() => handleDownload(notice.file)}
                          className={`inline-flex items-center justify-center p-2 rounded-full transition-colors group ${
                            isPdf ? "hover:bg-red-50" : "hover:bg-blue-50"
                          }`}
                        >
                          {isPdf ? (
                            <FaFilePdf
                              className="text-[#D32F2F] group-hover:scale-110 transition-transform"
                              size={24}
                            />
                          ) : (
                            <FaExternalLinkAlt
                              className="text-[#2C5F8D] group-hover:scale-110 transition-transform"
                              size={20}
                            />
                          )}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination part stays the same */}
          <div className="mt-6 flex flex-col lg:flex-row items-center justify-between gap-6 mb-10">
            <p className="text-[15px] text-gray-600 font-medium text-center md:text-left">
              {translateToBn(filteredNotices.length)} টি নোটিশের মধ্যে{" "}
              <span className="text-gray-900">
                {translateToBn(
                  filteredNotices.length > 0 ? indexOfFirstItem + 1 : 0
                )}
              </span>{" "}
              থেকে{" "}
              <span className="text-gray-900">
                {translateToBn(
                  Math.min(indexOfLastItem, filteredNotices.length)
                )}
              </span>{" "}
              পর্যন্ত দেখানো হচ্ছে
            </p>

            <div className="flex items-center gap-1 flex-wrap justify-center">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-3 py-2 border rounded text-sm transition-all ${
                  currentPage === 1
                    ? "text-gray-300 bg-gray-50 cursor-not-allowed"
                    : "hover:bg-gray-100 text-[#2C5F8D] border-[#2C5F8D]"
                }`}
              >
                আগেরটি
              </button>

              <div className="flex gap-1 overflow-x-auto max-w-[200px] sm:max-w-none no-scrollbar">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`min-w-[40px] px-3 py-2 border rounded text-sm transition-all font-bold ${
                      currentPage === i + 1
                        ? "bg-[#2C5F8D] text-white border-[#2C5F8D]"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {translateToBn(i + 1)}
                  </button>
                ))}
              </div>

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages || totalPages === 0}
                className={`px-3 py-2 border rounded text-sm transition-all ${
                  currentPage === totalPages || totalPages === 0
                    ? "text-gray-300 bg-gray-50 cursor-not-allowed"
                    : "hover:bg-gray-100 text-[#2C5F8D] border-[#2C5F8D]"
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
