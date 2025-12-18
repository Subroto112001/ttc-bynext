"use client";

import ContentShare from "@/component/ContentShare";
import React, { useState } from "react";

// Data constants moved outside the component for better performance
const principalData = {
  id: "principal",
  name: { bn: "মোঃ জিয়া উদ্দিন", en: "Md. Zia Uddin" },
  role: { bn: "প্রিন্সিপাল", en: "Principal" },
  phone: "01713-412599",
  email: "principal@ttcpirganj.com",
  img: "https://ttcpirganj.com/wp-content/uploads/2025/11/Principal-sir-pic-1617x2048.jpg",
};

const staffData = [
  {
    id: 1,
    name: { bn: "মোঃ মুকুল মিয়া", en: "Md. Mukul Mia" },
    role: { bn: "হেড অ্যাসিস্ট্যান্ট", en: "Head Assistant" },
    phone: "01717-486576",
    email: "mukul@ttcpirganj.com",
    img: "https://ttcpirganj.com/wp-content/uploads/2025/08/Screenshot-2025-08-03-011853-768x675.png",
  },
  {
    id: 2,
    name: { bn: "মোঃ মশিউর রহমান", en: "Md. Mashiur Rahman" },
    role: { bn: "ইলেকট্রিক্যাল ইন্সট্রাক্টর", en: "Electrical Instructor" },
    phone: "01834-458761",
    email: "mashiur@ttcpirganj.com",
    img: "https://ttcpirganj.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-28-at-16.02.56_0e3a7b9f-767x1024.jpg",
  },
  {
    id: 3,
    name: { bn: "মোঃ তানভীর বিশ্বাস", en: "Md. Tanvir Biswas" },
    role: { bn: "ইলেকট্রিক্যাল ইন্সট্রাক্টর", en: "Electrical Instructor" },
    phone: "01717-483126",
    email: "tanvir@ttcpirganj.com",
    img: "https://ttcpirganj.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-28-at-16.15.42_6c5ee599-150x150.jpg",
  },
  {
    id: 4,
    name: { bn: "মোঃ শোহাগ মিয়া", en: "Md. Shohag Mia" },
    role: {
      bn: "গ্রাফিক্স ডিজাইন ইন্সট্রাক্টর",
      en: "Graphics Design Instructor",
    },
    phone: "01713-983344",
    email: "shohag@ttcpirganj.com",
    img: "https://ttcpirganj.com/wp-content/uploads/2025/08/Screenshot-2025-08-03-091022-298x300.png",
  },
  {
    id: 5,
    name: { bn: "এন.এম. নাজমুল হক", en: "N.M. Nazmul Haque" },
    role: {
      bn: "গ্রাফিক্স ডিজাইন ইন্সট্রাক্টর",
      en: "Graphics Design Instructor",
    },
    phone: "01744-479601",
    email: "nazmul@ttcpirganj.com",
    img: "https://ttcpirganj.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-17-at-08.19.20_3d4efe20-233x300.jpg",
  },
  {
    id: 6,
    name: { bn: "এ.বি.এম ফারুক হাসান", en: "A.B.M Faruk Hasan" },
    role: {
      bn: "মোবাইল সার্ভিসিং ইন্সট্রাক্টর",
      en: "Mobile Servicing Instructor",
    },
    phone: "01737-243273",
    email: "faruk@ttcpirganj.com",
    img: "https://ttcpirganj.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-28-at-16.08.12_9bbe1725-250x300.jpg",
  },
  {
    id: 7,
    name: { bn: "মোঃ আসাদুজ্জামান জুয়েল", en: "Md. Asaduzzaman Jewel" },
    role: {
      bn: "মোবাইল সার্ভিসিং ইন্সট্রাক্টর",
      en: "Mobile Servicing Instructor",
    },
    phone: "01750-115780",
    email: "jewel@ttcpirganj.com",
    img: "https://ttcpirganj.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-28-at-16.15.07_3320709b-202x300.jpg",
  },
  {
    id: 8,
    name: { bn: "মোসাম্মৎ শাকিলা আক্তার", en: "Mosammat Shakila Akter" },
    role: {
      bn: "কম্পিউটার অপারেশন ইন্সট্রাক্টর",
      en: "Computer Operation Instructor",
    },
    phone: "01721-215924",
    email: "shakila@ttcpirganj.com",
    img: "https://ttcpirganj.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-18-at-16.22.38_0a0ab5f3-276x300.jpg",
  },
  {
    id: 9,
    name: {
      bn: "মোঃ মেহেদী হাসান (মুন্না)",
      en: "Md. Mehedi Hasan (Munna)",
    },
    role: {
      bn: "মোটর ড্রাইভিং ইন্সট্রাক্টর",
      en: "Motor Driving Instructor",
    },
    phone: "01761-077900",
    email: "munna@ttcpirganj.com",
    img: "https://ttcpirganj.com/wp-content/uploads/2025/11/muna-240x300.jpg",
  },
  {
    id: 10,
    name: { bn: "মোঃ শাহাজাহান মিয়া", en: "Md. Shahjahan Mia" },
    role: { bn: "কেয়ারটেকার", en: "Caretaker" },
    phone: "01751-849925",
    email: "info@ttcpirganj.com",
    img: "https://ttcpirganj.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-20-at-02.43.25_9ba5c1d0-266x300.jpg",
  },
];

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

            {/* Responsive Table Container */}
            <div className="overflow-x-auto border border-gray-900  shadow-sm">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-gray-100 text-gray-700 font-bold border-b">
                    <th className="p-3 border-r w-12 text-center">#</th>
                    <th className="p-3 border-r">Image</th>
                    <th className="p-3 border-r">Name</th>
                    <th className="p-3 border-r">Designation</th>
                    <th className="p-3 border-r">Office Name</th>
                    <th className="p-3 border-r">Email</th>
                    <th className="p-3 border-r">Mobile</th>
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
                        <div className="text-blue-700 font-bold">
                          {member.name.en}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          {member.name.bn}
                        </div>
                      </td>
                      <td className="p-3 border-r text-sm align-middle">
                        {member.role.en}
                      </td>
                      <td className="p-3 border-r text-sm align-middle text-gray-700">
                        Pirganj TTC
                      </td>
                      <td className="p-3 border-r text-sm text-blue-600 break-all align-middle underline cursor-pointer hover:text-blue-800">
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
