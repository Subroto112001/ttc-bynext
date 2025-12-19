"use client";

import React from "react";
import { notices } from "@/helper/Information";
import { useParams, useRouter } from "next/navigation";
import ContentShare from "@/component/ContentShare";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaChevronRight,
  FaTag,
} from "react-icons/fa";

const NoticeDetails = () => {
  const { slug } = useParams();
  const router = useRouter();

  // স্লাগ অনুযায়ী নোটিশটি খুঁজে বের করা
  const notice = notices.find((n) => n.file === slug);

  if (!notice) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-bold">নোটিশটি খুঁজে পাওয়া যায়নি।</p>
      </div>
    );
  }

  return (
    <div className=" min-h-screen">
      <section className="md:mt-[30px] py-4 px-4 max-w-7xl mx-auto">
        <ContentShare />
      </section>

      <section className="md:mt-[30px] py-8 px-4 max-w-7xl mx-auto">
        <div className="flex  gap-2 items-center text-xl mb-10">
          নোটিশ
          <span className=" ">
            <FaChevronRight />
          </span>
          <span className="truncate">{notice.title}</span>
        </div>

        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-[#2C5F8D] font-bold mb-6 hover:underline"
        >
          <FaArrowLeft /> ফিরে যান
        </button>

        <div className="bg-white border border-gray-200  shadow-sm p-6 md:p-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-4 border-b pb-4">
            {notice.title}
          </h1>

          <div className="flex flex-wrap gap-4 mb-8 text-sm text-gray-600">
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
              <FaCalendarAlt className="text-blue-600" />
              <span>প্রকাশের তারিখ: {notice.date}</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
              <FaTag className="text-green-600" />
              <span>ক্যাটাগরি: {notice.category}</span>
            </div>
          </div>

          <div className="prose max-w-none text-gray-700 leading-relaxed text-[17px]">
            {/* এখানে নোটিশের বিস্তারিত বর্ণনা থাকবে */}
            {notice.description ? (
              <p>{notice.description}</p>
            ) : (
              <p>
                এই নোটিশটির কোনো বিস্তারিত বর্ণনা প্রদান করা হয়নি। অনুগ্রহ করে
                সংশ্লিষ্ট কর্তৃপক্ষের সাথে যোগাযোগ করুন।
              </p>
            )}

            {/* ডামি টেক্সট যদি বর্ণনা বড় হয় */}
            <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 italic">
              সতর্কতা: এই নোটিশটি ডিজিটাল রেকর্ডের জন্য সংরক্ষিত। মূল কপির জন্য
              অফিসিয়াল নথিপত্র যাচাই করুন।
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoticeDetails;
