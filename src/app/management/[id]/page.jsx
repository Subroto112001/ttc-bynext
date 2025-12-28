"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Loader2, ArrowLeft, Mail, Phone, Building2 } from "lucide-react";
import { getSingleManagement } from "@/helper/dataProvider";

const PersonDetailPage = () => {
  const { id } = useParams();
  const router = useRouter();

  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPerson() {
      if (!id) return;
      setLoading(true);
      const response = await getSingleManagement(id);
      if (response && response.success) {
        setPerson(response.data);
      }
      setLoading(false);
    }
    fetchPerson();
  }, [id]);

  // Loading handle
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <Loader2 className="animate-spin text-blue-800" size={40} />
        <p className="mt-2 font-medium text-gray-600">লোড হচ্ছে...</p>
      </div>
    );
  }

  // Error handle
  if (!person) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800">তথ্য পাওয়া যায়নি</h2>
        <button
          onClick={() => router.back()}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          তালিকায় ফিরে যান
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 px-4 bg-gray-50/50">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => router.back()}
          className="mb-6 flex items-center text-blue-700 font-semibold hover:underline cursor-pointer gap-2"
        >
          <ArrowLeft size={18} /> তালিকায় ফিরে যান
        </button>

        <div className="bg-white overflow-hidden border border-gray-200 shadow-sm">
          <div className="p-8">
            <div className="relative flex flex-col md:flex-row items-center md:items-end gap-6">
              {/* Profile Image Section */}
              <div className="w-44 h-52 bg-white p-1 shadow-lg border border-gray-200 rounded-sm">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Identity Section */}
              <div className="text-center md:text-left pb-2">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-1">
                  {person.name}
                </h1>
                <p className="text-xl text-blue-800 font-semibold mb-3">
                  {person.designation}
                </p>
                <span className="inline-block px-4 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest border border-blue-100 rounded-full">
                  {person.category === "officer" ? "অফিসার" : "স্টাফ"}
                </span>
              </div>
            </div>

            <hr className="my-10 border-gray-100" />

            {/* Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Left sides office part */}
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-gray-100 rounded-lg text-gray-500">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                      কার্যালয়
                    </h3>
                    <p className="text-lg text-gray-800 font-medium">
                      {person.officeName ||
                        "পীরগঞ্জ কারিগরি প্রশিক্ষণ কেন্দ্র, রংপুর"}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-gray-100 rounded-lg text-gray-500">
                    <Building2 size={20} className="opacity-0" /> {/* Spacer */}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                      পদবী
                    </h3>
                    <p className="text-lg text-gray-800 font-medium capitalize">
                      {person.designation}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side contact part*/}
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-gray-100 rounded-lg text-gray-500">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                      মোবাইল নম্বর
                    </h3>
                    <p className="text-lg text-gray-800 font-bold tracking-tight">
                      {person.phoneNumber}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-gray-100 rounded-lg text-gray-500">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                      অফিসিয়াল ইমেইল
                    </h3>
                    <p className="text-lg text-gray-800 break-all font-medium">
                      {person.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* official desclimar */}
            <div className="mt-14 p-5 bg-blue-50/50 border-l-4 border-blue-800 rounded-r-lg text-sm text-gray-600 leading-relaxed shadow-sm">
              <span className="font-bold text-blue-900 block mb-1">
                অফিসিয়াল রেকর্ড:
              </span>
              এটি পীরগঞ্জ টেকনিক্যাল প্রশিক্ষণ কেন্দ্রর ডাটাবেস থেকে প্রাপ্ত
              একটি অনুমোদিত প্রোফাইল। যেকোনো তথ্যের অসংগতির জন্য সরাসরি
              প্রশাসনিক শাখায় যোগাযোগ করুন।
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonDetailPage;
