"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { principalData, staffData } from "@/helper/Information";

const PersonDetailPage = () => {
  const { id } = useParams();
  const router = useRouter();

  // Find the person in the data
  const allMembers = [principalData, ...staffData];
  const person = allMembers.find((m) => String(m.id) === id);

  // Error handling if person is not found
  if (!person) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800">Person Not Found</h2>
        <button
          onClick={() => router.back()}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen  py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <button
          onClick={() => router.back()}
          className="mb-6 flex items-center text-blue-700 font-semibold hover:underline cursor-pointer"
        >
          ← Back to Staff List
        </button>

        <div className=" shadow-xl overflow-hidden border border-gray-200">
          {/* Header Banner */}

          <div className="p-8">
            <div className="relative flex flex-col md:flex-row items-center md:items-end gap-6">
              {/* Profile Image */}
              <div className="w-40 h-48 bg-white p-1  shadow-md">
                <img
                  src={person.img}
                  alt={person.name.en}
                  className="w-full h-full object-cover "
                />
              </div>

              {/* Basic Identity */}
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-extrabold text-gray-900">
                  {person.name.en}
                </h1>
                <p className="text-xl text-blue-800 font-medium mb-1">
                  {person.name.bn}
                </p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-bold">
                  {person.role.bn}
                </span>
              </div>
            </div>

            <hr className="my-6 border-gray-100" />

            {/* Detailed Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
                    Designation
                  </h3>
                  <p className="text-lg text-gray-800 font-semibold">
                    {person.role.bn}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
                    Office
                  </h3>
                  <p className="text-lg text-gray-800 font-semibold">
                    পীরগঞ্জ কারিগরি প্রশিক্ষণ কেন্দ্র, রংপুর
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
                    Contact Number
                  </h3>
                  <p className="text-lg text-gray-800  font-bold">
                    {person.phone}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
                    Official Email
                  </h3>
                  <p className="text-lg text-gray-800 break-all">
                    {person.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Verification Footer */}
            <div className="mt-12 p-4 bg-gray-50 border-l-4 border-blue-800 rounded text-sm text-gray-600 italic">
              এই প্রোফাইলটি পীরগঞ্জ টেকনিক্যাল ট্রেনিং সেন্টারের একটি অফিসিয়াল
              রেকর্ড। যেকোনো অনুসন্ধানের জন্য, অনুগ্রহ করে প্রশাসনিক কার্যালয়ে
              যোগাযোগ করুন।
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonDetailPage;
