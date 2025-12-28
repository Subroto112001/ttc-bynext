"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ContentShare from "@/component/ContentShare";
import { getSingleNotice } from "@/helper/dataProvider";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaChevronRight,
  FaTag,
  FaSpinner,
  FaFilePdf,
  FaDownload,
  FaEye,
} from "react-icons/fa";

const NoticeDetails = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const noticeId = searchParams.get("id");

  const [notice, setNotice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPdf, setShowPdf] = useState(false);

  useEffect(() => {
    const fetchNoticeData = async () => {
      if (!noticeId) {
        setError("নোটিশ আইডি পাওয়া যায়নি।");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        console.log("Fetching notice with ID:", noticeId);

        const result = await getSingleNotice(noticeId);

        if (result && result.success) {
          setNotice(result.data);
          console.log("Notice data:", result.data);
        } else {
          setError("নোটিশ লোড করতে সমস্যা হয়েছে।");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setError("নোটিশ লোড করতে ব্যর্থ হয়েছে।");
      } finally {
        setLoading(false);
      }
    };

    fetchNoticeData();
  }, [noticeId]);

  // Category name extract করা
  const getCategoryName = (category) => {
    if (!category) return "সাধারণ";
    if (typeof category === "object") {
      return category.name || "সাধারণ";
    }
    return category;
  };

  // Loading handle
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <FaSpinner className="animate-spin text-blue-600 text-4xl mx-auto mb-4" />
          <p className="text-gray-600 font-medium">লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  // Error handle
  if (error || !notice) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4 bg-gray-50">
        <p className="text-xl font-bold text-red-500">
          {error || "নোটিশটি খুঁজে পাওয়া যায়নি।"}
        </p>
        <button
          onClick={() => router.push("/notice")}
          className="px-6 py-2.5 bg-[#2C5F8D] text-white rounded-lg hover:bg-[#234a6d] transition-colors"
        >
          নোটিশ তালিকায় ফিরে যান
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen ">
      <section className="md:mt-[30px] py-4 px-4 max-w-7xl mx-auto">
        <ContentShare />
      </section>

      <section className="md:mt-[30px] py-8 px-4 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex gap-2 items-center text-sm mb-6 text-gray-600">
          <span
            className="cursor-pointer hover:text-[#2C5F8D]"
            onClick={() => router.push("/notice")}
          >
            নোটিশ
          </span>
          <FaChevronRight className="text-xs" />
          <span className="truncate text-gray-900 font-medium">
            {notice.title}
          </span>
        </div>

        {/* back Button */}
        <button
          onClick={() => router.push("/notice")}
          className="flex items-center gap-2 text-[#2C5F8D] font-bold mb-6 hover:underline transition-all"
        >
          <FaArrowLeft /> ফিরে যান
        </button>

        {/* Notice details Card */}
        <div className=" p-6 md:p-10 ">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6  pb-4 leading-tight">
            {notice.title}
          </h1>

          {/**
           * Notice Information
           * Posted by and Date
           * pdf link and view
           *  */}
          <div className="flex flex-wrap gap-3 mb-8 text-sm">
            <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 border border-blue-200">
              <FaCalendarAlt />
              <span className="font-medium">
                {notice.createdAt
                  ? new Date(notice.createdAt).toLocaleDateString("bn-BD", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "N/A"}
              </span>
            </div>

            <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 border border-green-200">
              <FaTag />
              <span className="font-medium">
                {getCategoryName(notice.category)}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="prose max-w-none text-gray-700 leading-relaxed text-[17px] mb-8">
            {notice.description ? (
              <div className="whitespace-pre-line bg-gray-50 p-6  border border-gray-200">
                {notice.description}
              </div>
            ) : (
              <p className="italic text-gray-500 text-center py-8">
                এই নোটিশটির কোনো বিস্তারিত বর্ণনা প্রদান করা হয়নি।
              </p>
            )}
          </div>

          {/* PDF actions */}
          {notice.pdfUrl && (
            <div className="border-t-2 border-gray-200 pt-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                সংযুক্ত ফাইল:
              </h3>

              <div className="flex flex-wrap gap-4 mb-6">
                {/* Download PDF */}
                <a
                  href={notice.pdfUrl}
                  download
                  className="inline-flex items-center gap-2 px-5 py-3 bg-red-600 text-white  hover:bg-red-700 transition-colors font-medium shadow-md hover:shadow-lg"
                >
                  <FaDownload size={18} />
                  পিডিএফ ডাউনলোড করুন
                </a>

                {/* Toggle PDF View */}
                <button
                  onClick={() => setShowPdf(!showPdf)}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#2C5F8D] text-white hover:bg-[#234a6d] transition-colors font-medium shadow-md hover:shadow-lg"
                >
                  <FaEye size={18} />
                  {showPdf ? "পিডিএফ লুকান" : "পিডিএফ দেখুন"}
                </button>
              </div>

              {/* File Name */}
              {notice.pdfFileName && (
                <p className="text-sm text-gray-600 mb-4 flex items-center gap-2">
                  <FaFilePdf className="text-red-600" />
                  <span className="font-medium">ফাইলের নাম:</span>{" "}
                  {notice.pdfFileName}
                </p>
              )}

              {/* PDF Viewer */}
              {showPdf && (
                <div className="mt-6 border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src={notice.pdfUrl}
                    className="w-full h-[600px] md:h-[800px]"
                    title="PDF Viewer"
                  />
                </div>
              )}
            </div>
          )}

          {/* Disclaimer from office */}
          <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
            <p className="text-sm text-blue-800 italic">
              <strong>সতর্কতা:</strong> এই নোটিশটি ডিজিটাল রেকর্ডের জন্য
              সংরক্ষিত। মূল কপির জন্য অফিসিয়াল নথিপত্র যাচাই করুন।
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoticeDetails;
