"use client";

import ContentShare from "@/component/ContentShare";
import { courseData } from "@/helper/Information";
import React, { useState } from "react";

const Page = () => {
  const [filter, setFilter] = useState("All");

  const filteredCourses =
    filter === "All"
      ? courseData
      : courseData.filter((course) => course.level === filter);

  const levels = ["All", ...new Set(courseData.map((c) => c.level))];

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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by NTVQF Level:
              </label>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                {levels.map((level, index) => (
                  <option key={index} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            {/* Responsive Table Container */}
            <div className="overflow-x-auto border-l border-t border-gray-900 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="  font-bold border-b">
                    <th className="p-3 border-r w-12 text-center">ক্র: নং</th>
                    <th className="p-3 border-r">কোর্সের নাম (Course Name)</th>
                    <th className="p-3 border-r text-center">
                      মেয়াদ (Duration)
                    </th>
                    <th className="p-3 border-r text-center">সময় (Session)</th>
                    <th className="p-3 border-r text-center">
                      শিক্ষার যোগ্যতা (Qualification)
                    </th>
                    <th className="p-3 border-r text-center">বয়স (Age)</th>
                    <th className="p-3 border-r text-center">
                      আসন সংখ্যা (Seats)
                    </th>
                    <th className="p-3 border-r text-center">
                      NTVQF/BNQF Level
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCourses.map((course, index) => (
                    <tr
                      key={course.id}
                      className="border-b hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-3 border-r text-center align-middle font-medium">
                        {course.id.toString().padStart(2, "0")}
                      </td>
                      <td className="p-3 border-r align-middle">
                        <div className="text-blue-700 font-bold">
                          {course.courseName.bn}
                        </div>
                        <div className="text-xs text-gray-500">
                          {course.courseName.en}
                        </div>
                      </td>
                      <td className="p-3 border-r text-sm align-middle text-center">
                        {course.duration.bn}
                      </td>
                      {/* Session column with RowSpan logic if needed, but keeping it simple per row for this component */}
                      <td className="p-3 border-r text-sm align-middle text-center">
                        {course.session.bn}
                      </td>
                      <td className="p-3 border-r text-sm align-middle text-center">
                        {course.qualification.bn}
                      </td>
                      <td className="p-3 border-r text-sm align-middle text-center">
                        {course.ageLimit.bn}
                      </td>
                      <td className="p-3 border-r text-sm align-middle text-center">
                        {course.seats.bn}
                      </td>
                      <td className="p-3 border-r text-sm font-semibold align-middle text-center">
                        {course.level}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-10 text-gray-500">
                No courses found for "{filter}"
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
