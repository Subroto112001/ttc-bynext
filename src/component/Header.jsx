"use client";

import React, { useState } from 'react'
import { IoIosShareAlt } from "react-icons/io";
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
    const handleMouseOver = (color) => {
      setHoveredcolor(color);
    }
  return (
    <div className="flex flex-col container">
      <div className="bg-[var(--header-color)] p-2 w-full  flex justify-between items-center mx-auto">
        <p className="text-white font-medium text-lg">
          কারিগরি প্রশিক্ষণ কেন্দ্র, পীরগঞ্জ
        </p>
        <button className="flex justify-center  items-center p-1 bg-white rounded gap-2">
          শেয়ার{" "}
          <span>
            <IoIosShareAlt />
          </span>
        </button>
      </div>
      <div className="bg-white p-2 text-sm flex  gap-4 border-b border-gray-300">
        সরকারি অন্যান্য পোর্টাল দেখুন
      </div>
      <div className="bg-white ">
        {navitem.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className={`text-sm font-medium text-[${item.color}] hover:text-white hover:bg-[${item.color}] px-3 py-2 `}
                onMouseOver={() => handleMouseOver(item.color)}
                onMouseLeave={()=> setHoveredcolor(null)}
          >
            {item.name}
          </a>
        ))}
        <div className="h-3 w-full bg-white" style={{ backgroundColor: hoveredcolor }}></div>
      </div>
    </div>
  );
};

export default Header;