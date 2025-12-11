"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoIosShareAlt } from "react-icons/io";
import { TiHome } from "react-icons/ti";

const Header = () => {
  const navitem = [
    { name: "আমাদের সম্পর্কে", link: "#", color: "#ff6600" },
    { name: "কোর্স সমূহ", link: "#", color: "#c40a2a" },
    { name: "নিবন্ধন", link: "#", color: "#84154d" },
    { name: "ব্যবস্থাপনা", link: "#", color: "#098346" },
    { name: "গ্যালারি", link: "#", color: "#1399be" },
    { name: "যোগাযোগ", link: "#", color: "#8768de" },
    { name: "নোটিশ", link: "#", color: "#555555" },
  ];

  const [hoveredcolor, setHoveredcolor] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-col container">
      <div className="bg-[var(--header-color)] p-2 w-full flex justify-between items-center mx-auto">
        <p className="text-white font-medium text-lg">
          কারিগরি প্রশিক্ষণ কেন্দ্র, পীরগঞ্জ
        </p>

        <button className="flex justify-center items-center p-1 bg-white rounded gap-2">
          শেয়ার{" "}
          <span>
            <IoIosShareAlt />
          </span>
        </button>
      </div>

      <div className="bg-white p-2 text-sm flex gap-4 border-b border-gray-300">
        সরকারি অন্যান্য পোর্টাল দেখুন
      </div>

      <ul className="bg-white flex flex-col md:flex-row md:items-center">
        <span className="text-2xl font-medium hover:text-white hover:bg-black px-2 py-1">
          <TiHome />
        </span>
        {navitem.map((item, index) => (
          <li key={index}>
            <Link
              href={item.link}
              className="text-sm font-medium px-3 py-2 transition-colors duration-200"
              style={{
                color: hoveredIndex === index ? "white" : item.color,
                backgroundColor:
                  hoveredIndex === index ? item.color : "transparent",
              }}
              onMouseOver={() => {
                setHoveredcolor(item.color);
                setHoveredIndex(index);
              }}
              onMouseLeave={() => {
                setHoveredcolor(null);
                setHoveredIndex(null);
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div
        className="h-3 w-full hidden md:block transition-colors duration-200"
        style={{ backgroundColor: hoveredcolor || "white" }}
      ></div>
    </div>
  );
};

export default Header;
