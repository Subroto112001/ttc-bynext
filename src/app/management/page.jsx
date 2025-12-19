"use client";

import ContentShare from "@/component/ContentShare";
import { principalData, staffData } from "@/helper/Information";
import Link from "next/link";
import React, { useState } from "react";


const allMembers = [principalData, ...staffData];

const Page = () => {
  const [filter, setFilter] = useState("All");

  const filteredMembers =
    filter === "All"
      ? allMembers
      : allMembers.filter((member) => member.role.en === filter);

  // Get unique roles for the dropdown
  const roles = ["All", ...new Set(allMembers.map((m) => m.role.en))];

  return (
    <div className="min-h-screen bg-white">
      <section className="md:mt-[30px] py-4 px-4 max-w-7xl mx-auto">
        <ContentShare />
      </section>

      <section>
        <div className="p-4 md:p-8 text-gray-800">
          <div className="max-w-7xl mx-auto">
            {/* Dropdown Filter */}
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

            <div className="overflow-x-auto border-l border-t border-gray-900  shadow-sm">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-gray-100 text-gray-700 font-bold border-b">
                    <th className="p-3 border-r w-12 text-center">#</th>
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
                      key={member.id}
                      className="border-b hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-3 border-r text-center align-middle font-medium">
                        {index + 1}
                      </td>
                      <td className="p-3 border-r align-middle">
                        <div className="w-16 h-20 overflow-hidden border border-gray-300 shadow-sm">
                          <img
                            src={member.img}
                            alt={member.name.en}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </td>
                      <td className="p-3 border-r align-middle">
                        <Link href={`/staff/${member.id}`} className="group">
                          <div className="text-blue-700 font-bold group-hover:underline cursor-pointer">
                            {member.name.en}
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            {member.name.bn}
                          </div>
                        </Link>
                      </td>
                      <td className="p-3 border-r text-sm align-middle">
                        {member.role.bn}
                      </td>
                      <td className="p-3 border-r text-sm text-gray-900  break-all align-middle  cursor-pointer hover:text-gray-500">
                        {member.email}
                      </td>
                      <td className="p-3 border-r text-sm font-mono align-middle">
                        {member.phone}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredMembers.length === 0 && (
              <div className="text-center py-10 text-gray-500">
                No results found for "{filter}"
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
