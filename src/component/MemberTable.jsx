"use client";
import React, { useState } from "react";
import Link from "next/link";
import ContentShare from "@/component/ContentShare";

const MemberTable = ({ members, title }) => {
  const [filter, setFilter] = useState("সব");

  // ডাটাবেজ থেকে আসা ডাটা অনুযায়ী ফিল্টার লজিক আপডেট করা হয়েছে
  const filteredMembers =
    filter === "সব"
      ? members
      : members.filter((member) => member.designation === filter);

  // ইউনিক পদবী বের করার লজিক (designation ফিল্ড ব্যবহার করে)
  const roles = ["সব", ...new Set(members.map((m) => m.designation))];

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

  return (
    <div className="min-h-screen bg-white">
      <section className="md:mt-[30px] py-4 px-4 max-w-7xl mx-auto">
        <ContentShare />
        <h2 className="text-2xl font-bold mt-4 border-b-2 border-blue-800 inline-block">
          {title}
        </h2>
      </section>

      <section>
        <div className="p-4 md:p-8 text-gray-800">
          <div className="max-w-7xl mx-auto">
            {/* Filter */}
            <div className="mb-6">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                {roles.map((role, index) => (
                  <option key={index} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>

            <div className="overflow-x-auto border-l border-t border-gray-900 shadow-sm">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-gray-100 text-gray-700 font-bold border-b">
                    <th className="p-3 border-r w-12 text-center">ক্রম</th>
                    <th className="p-3 border-r">ছবি</th>
                    <th className="p-3 border-r">নাম</th>
                    <th className="p-3 border-r">পদবী</th>
                    <th className="p-3 border-r">ইমেইল</th>
                    <th className="p-3 border-r">মোবাইল</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMembers.map((member, index) => (
                    <tr
                      key={member._id}
                      className="border-b hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-3 border-r text-center align-middle font-medium">
                        {translateToBn(index + 1)}
                      </td>
                      <td className="p-3 border-r align-middle">
                        <div className="w-16 h-20 overflow-hidden border border-gray-300 shadow-sm">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </td>
                      <td className="p-3 border-r align-middle">
                       {/*  */}
                        <Link
                          href={`/management/${member.slug}`}
                          className="group"
                        >
                          <div className="text-blue-700 font-bold group-hover:underline">
                            {member.name}
                          </div>
                        </Link>
                      </td>
                      <td className="p-3 border-r text-sm align-middle">
                        {member.designation}
                      </td>
                      <td className="p-3 border-r text-sm break-all align-middle">
                        {member.email}
                      </td>
                      <td className="p-3 border-r text-sm font-mono align-middle">
                        {member.phoneNumber}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MemberTable;
