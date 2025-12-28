"use client";

import ContentShare from "@/component/ContentShare";
import { getAllnotice } from "@/helper/dataProvider";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";

const Page = () => {
  const [allnotices, setAllNotices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationInfo, setPaginationInfo] = useState({
    total: 0,
    totalPages: 0,
  });

  const translateToBn = (num) => {
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
    return String(num)
      .split("")
      .map((digit) => englishToBengali[digit] || digit)
      .join("");
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await getAllnotice(
        currentPage,
        entriesPerPage,
        searchTerm
      );
      if (result && result.success) {
        setAllNotices(result.data);
        setPaginationInfo({
          total: result.pagination.total,
          totalPages: result.pagination.totalPages,
        });
      }
    } catch (error) {
      console.error("Error in fetchNotices:", error);
      setAllNotices([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, entriesPerPage, searchTerm]);

  const handleDownload = (pdfUrl) => {
    if (!pdfUrl) return;
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="md:mt-[30px] py-4 px-4 max-w-7xl mx-auto">
        <ContentShare />

        <div className="mt-8">
         {/* search and filter section */}
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

          {/* table section */}
          <div className="overflow-x-auto border border-gray-400">
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
                {loading ? (
                  <tr>
                    <td colSpan="4" className="text-center py-10">
                      লোড হচ্ছে...
                    </td>
                  </tr>
                ) : allnotices.length > 0 ? (
                  allnotices.map((notice, index) => (
                    <tr
                      key={index}
                      className="hover:bg-blue-50/30 transition-colors"
                    >
                      <td className="border-r border-gray-300 px-4 py-4 text-center text-[15px]">
                        {translateToBn(
                          (currentPage - 1) * entriesPerPage + index + 1
                        )}
                      </td>
                      <td className="border-r border-gray-300 px-4 py-4 text-[15px]">
                        <Link
                          href={`/notice-details?id=${notice._id || notice.id}`}
                          className="font-medium text-gray-800 hover:text-blue-600 block"
                        >
                          {notice.title}
                        </Link>
                      </td>
                      <td className="border-r border-gray-300 px-4 py-4 text-center text-[15px] text-gray-600">
                        {notice.createdAt
                          ? new Date(notice.createdAt).toLocaleDateString(
                              "bn-BD"
                            )
                          : "---"}
                      </td>
                      <td className="px-4 py-4 text-center">
                        <button
                          onClick={() => handleDownload(notice.pdfUrl)}
                          className={`p-2 rounded-full transition-colors ${
                            notice.pdfUrl
                              ? "hover:bg-red-50"
                              : "hover:bg-blue-50"
                          }`}
                        >
                          {notice.pdfUrl ? (
                            <FaFilePdf className="text-[#D32F2F]" size={22} />
                          ) : (
                            <FaExternalLinkAlt
                              className="text-[#2C5F8D]"
                              size={18}
                            />
                          )}
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center py-10 text-red-500">
                      কোন নোটিশ পাওয়া যায়নি।
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex flex-col lg:flex-row items-center justify-between gap-6 mb-10">
            <p className="text-[15px] text-gray-600 font-medium">
              মোট {translateToBn(paginationInfo.total)} টি নোটিশের মধ্যে{" "}
              {translateToBn(
                allnotices.length > 0
                  ? (currentPage - 1) * entriesPerPage + 1
                  : 0
              )}{" "}
              থেকে{" "}
              {translateToBn(
                Math.min(currentPage * entriesPerPage, paginationInfo.total)
              )}{" "}
              পর্যন্ত দেখানো হচ্ছে
            </p>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-3 py-2 border rounded text-sm ${
                  currentPage === 1
                    ? "text-gray-300 bg-gray-50 cursor-not-allowed"
                    : "hover:bg-gray-100 text-[#2C5F8D] border-[#2C5F8D]"
                }`}
              >
                আগেরটি
              </button>

              <div className="flex gap-1">
                {[...Array(paginationInfo.totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`min-w-[40px] px-3 py-2 border rounded text-sm font-bold ${
                      currentPage === i + 1
                        ? "bg-[#2C5F8D] text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {translateToBn(i + 1)}
                  </button>
                ))}
              </div>

              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(prev + 1, paginationInfo.totalPages)
                  )
                }
                disabled={
                  currentPage === paginationInfo.totalPages ||
                  paginationInfo.totalPages === 0
                }
                className={`px-3 py-2 border rounded text-sm ${
                  currentPage === paginationInfo.totalPages
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
