"use client";

import React, { useState } from "react";
import { IoIosShareAlt, IoMdClose } from "react-icons/io";
import { TiHome } from "react-icons/ti";
import { HiMenuAlt3 } from "react-icons/hi";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Header */}
      <div className="bg-[#2c5f8d] p-3 md:p-4 w-full flex justify-between items-center">
        <p className="text-white font-medium text-sm md:text-lg">
          কারিগরি প্রশিক্ষণ কেন্দ্র, পীরগঞ্জ
        </p>

        <button className="flex justify-center items-center px-3 py-1.5 bg-white rounded gap-2 text-sm hover:bg-gray-100 transition-colors">
          শেয়ার{" "}
          <span>
            <IoIosShareAlt />
          </span>
        </button>
      </div>

      {/* Portal Link Section */}
      <div className="bg-white px-4 py-2 text-xs md:text-sm border-b border-gray-300">
        <span className="text-gray-600">সরকারি অন্যান্য পোর্টাল দেখুন</span>
      </div>

      {/* Navigation */}
      <div className="bg-white relative">
        <div className="flex items-center justify-between md:justify-start">
          {/* Home Icon */}
          <a
            href="#"
            className="text-2xl md:text-2xl font-medium hover:text-white hover:bg-black px-3 md:px-4 py-2 transition-colors duration-200 flex items-center"
          >
            <TiHome />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex md:items-center">
            {navitem.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="text-sm font-medium px-3 py-3 inline-block transition-colors duration-200"
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
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-3xl p-3 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <IoMdClose /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-transparent backdrop-blur-sm z-40 md:hidden"
            onClick={toggleMenu}
          ></div>
        )}

        {/* Mobile Menu Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">মেনু</h2>
            <button
              onClick={toggleMenu}
              className="text-2xl p-1 hover:bg-gray-100 rounded transition-colors"
              aria-label="Close menu"
            >
              <IoMdClose />
            </button>
          </div>

          <ul className="flex flex-col py-2">
            {navitem.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="block px-6 py-3.5 text-base font-medium border-l-4 hover:bg-gray-50 transition-all duration-200"
                  style={{
                    color: item.color,
                    borderLeftColor: "transparent",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderLeftColor = item.color;
                    e.currentTarget.style.backgroundColor = `${item.color}10`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderLeftColor = "transparent";
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Hover Color Bar (Desktop Only) */}
      <div
        className="h-3 w-full hidden md:block transition-colors duration-200"
        style={{ backgroundColor: hoveredcolor || "white" }}
      ></div>
    </div>
  );
};

export default Header;
