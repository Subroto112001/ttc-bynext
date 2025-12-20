"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaInfoCircle } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "পীরগঞ্জ টিটিসি-তে বর্তমানে কী কী কোর্স চালু আছে?",
      answer:
        "এখানে ইলেকট্রিক্যাল, আইটি সাপোর্ট, গ্রাফিক ডিজাইন, ড্রাইভিং এবং মেকানিক্যালসহ বেশ কিছু নিয়মিত ও স্বল্পমেয়াদী কারিগরি কোর্স চালু রয়েছে। বিস্তারিত কোর্সের তালিকা আমাদের 'কোর্স' মেনু থেকে দেখতে পারবেন।",
    },
    {
      question: "ভর্তির জন্য ন্যূনতম শিক্ষাগত যোগ্যতা কী?",
      answer:
        "কোর্সভেদে যোগ্যতার ভিন্নতা রয়েছে। সাধারণ কারিগরি কোর্সের জন্য জেএসসি (JSC) বা এসএসসি (SSC) পাস হতে হয়। কিছু বিশেষ কোর্সে অষ্টম শ্রেণী পাস শিক্ষার্থীরাও আবেদনের সুযোগ পান।",
    },
    {
      question: "ভর্তির আবেদন প্রক্রিয়া কী?",
      answer:
        "ভর্তি ইচ্ছুক শিক্ষার্থীরা সরাসরি টিটিসি অফিসে এসে নির্ধারিত ফরম সংগ্রহ করে আবেদন করতে পারেন। এছাড়া অনলাইন বিজ্ঞপ্তি প্রকাশিত হলে আমাদের ওয়েবসাইটের মাধ্যমেও প্রাথমিক আবেদন করা সম্ভব।",
    },
    {
      question: "কোর্স শেষে কি সার্টিফিকেট প্রদান করা হয়?",
      answer:
        "হ্যাঁ, সফলভাবে কোর্স এবং চূড়ান্ত পরীক্ষা সম্পন্ন করার পর বাংলাদেশ কারিগরি শিক্ষা বোর্ড (BTEB) অথবা জনশক্তি কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো (BMET) কর্তৃক স্বীকৃত সার্টিফিকেট প্রদান করা হয়।",
    },
    {
      question: "বিদেশ যেতে ইচ্ছুক কর্মীদের জন্য এখানে কোনো প্রশিক্ষণ আছে?",
      answer:
        "হ্যাঁ, বিদেশগামী কর্মীদের জন্য প্রাক-বহির্গমন (Pre-Departure) ওরিয়েন্টেশন এবং দক্ষতা বৃদ্ধিমূলক বিশেষ প্রশিক্ষণের ব্যবস্থা রয়েছে।",
    },
    {
      question:
        "টিটিসি-তে প্রশিক্ষণের পাশাপাশি কি কর্মসংস্থানের সহায়তা দেওয়া হয়?",
      answer:
        "আমাদের এখানে একটি সক্রিয় জব-প্লেসমেন্ট সেল রয়েছে, যা যোগ্য প্রশিক্ষণার্থীদের বিভিন্ন শিল্প-কারখানা ও প্রতিষ্ঠানে কর্মসংস্থানের সুযোগ পেতে সরাসরি সহযোগিতা করে।",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" min-h-screen py-12 px-4 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FaInfoCircle className="text-5xl text-[#2c5f8d] opacity-90" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2c5f8d] mb-4">
            সচরাচর জিজ্ঞাসা
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            পীরগঞ্জ কারিগরি প্রশিক্ষণ কেন্দ্র (TTC) এর ভর্তি, কোর্স এবং অন্যান্য
            সেবা সংক্রান্ত সাধারণ প্রশ্নের উত্তরগুলো এখানে দেখুন।
          </p>
        </div>
        {/* FAQ Items */}
        <div className="grid gap-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white  rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
              >
                <span
                  className={`text-lg font-bold ${
                    activeIndex === index ? "text-[#2c5f8d]" : "text-gray-800"
                  }`}
                >
                  {item.question}
                </span>
                <span className="ml-4">
                  {activeIndex === index ? (
                    <FaChevronUp className="text-[#2c5f8d]" />
                  ) : (
                    <FaChevronDown className="text-gray-400" />
                  )}
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="p-5 pt-0 text-gray-700 leading-relaxed border-t border-gray-50">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Contact CTA */}
        <section className="mt-12 text-center p-10 bg-white border border-dashed border-[#2c5f8d] rounded-2xl shadow-sm">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            আরও বিস্তারিত জানতে চান?
          </h3>
          <p className="text-gray-600 mb-6">
            আমাদের অফিস চলাকালীন সময়ে সরাসরি পীরগঞ্জ টিটিসি ক্যাম্পাসে যোগাযোগ
            করতে পারেন।
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info.ttcpirganj@gmail.com"
              className="bg-[#72AB20] hover:bg-[#5d8c1a] text-white px-8 py-3 rounded-md font-semiboldtransition-all"
            >
              ইমেইল পাঠান
            </a>
            <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition-all">
              ফোন করুন
            </button>
          </div>
        </section>
        <section className="mt-12 pt-6 border-t border-gray-200">
          <p className="font-semibold text-[#2c5f8d]">যোগাযোগের ঠিকানা:</p>
          <p>পীরগঞ্জ কারিগরি প্রশিক্ষণ কেন্দ্র, রংপুর</p>
          <p>ফোন: +৮৮০১৮৪২১ ৯৬৫৬৬</p>
          <p>ই-মেইল: ttcpirganj@gmail.com</p>
        </section>
      </div>
    </div>
  );
};

export default FAQ;
