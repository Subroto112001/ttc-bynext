"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Loader2 } from "lucide-react";
import { getAllManagement } from "@/helper/dataProvider";
import ContentShare from "@/component/ContentShare";

export default function ManagementPage() {
  const pathname = usePathname();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("সব");

  const isStaffPage = pathname.includes("/staffs");
  const category = isStaffPage ? "staff" : "officer"; 
  const title = isStaffPage
    ? "কর্মচারীবৃন্দ (Staffs)"
    : "কর্মকর্তাবৃন্দ (Officers)";

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      // api call
      const response = await getAllManagement(category);
      setMembers(response.data || []);
      setLoading(false);
      setFilter("সব");
    }
    fetchData();
  }, [category]);

  /**
   * Client-side filtering based on designation
   * it will not make another API call
   * */
  const displayMembers =
    filter === "সব" ? members : members.filter((m) => m.designation === filter);

  const roles = ["সব", ...new Set(members.map((m) => m.designation))];
  const toBnNum = (n) => n.toString().replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[d]);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <Loader2 className="animate-spin text-blue-800" size={40} />
        <p className="mt-2 font-medium">লোড হচ্ছে...</p>
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 min-h-screen">
      <ContentShare />
      <h2 className="text-2xl font-bold my-6 border-b-2 border-blue-800 inline-block">
        {title}
      </h2>

      {/* designation dropdown */}
      {roles.length > 1 && (
        <div className="mb-6">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border p-2  text-sm bg-white outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          >
            {roles.map((role, i) => (
              <option key={i} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="overflow-x-auto border border-gray-300 shadow-sm ">
        <table className="w-full text-left border-collapse bg-white">
          <thead>
            <tr className="bg-gray-100 border-b font-bold text-gray-700">
              <th className="p-3 border-r text-center w-12">ক্রম</th>
              <th className="p-3 border-r">ছবি</th>
              <th className="p-3 border-r">নাম</th>
              <th className="p-3 border-r">পদবী</th>
              <th className="p-3 border-r">ইমেইল</th>
              <th className="p-3">মোবাইল</th>
            </tr>
          </thead>
          <tbody>
            {displayMembers.length > 0 ? (
              displayMembers.map((member, index) => (
                <tr
                  key={member._id}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="p-3 border-r text-center align-middle">
                    {toBnNum(index + 1)}
                  </td>
                  <td className="p-3 border-r align-middle">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-14 h-16 md:w-16 md:h-20 object-cover border rounded shadow-sm"
                    />
                  </td>
                  <td className="p-3 border-r align-middle">
                    <Link
                      href={`/management/${member.slug}`}
                      className="text-blue-700 font-bold hover:underline block"
                    >
                      {member.name}
                    </Link>
                  </td>
                  <td className="p-3 border-r text-sm align-middle">
                    {member.designation}
                  </td>
                  <td className="p-3 border-r text-sm align-middle break-all">
                    {member.email}
                  </td>
                  <td className="p-3 text-sm font-mono align-middle">
                    {member.phoneNumber}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-10 text-center text-gray-500">
                  কোন তথ্য পাওয়া যায়নি।
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
